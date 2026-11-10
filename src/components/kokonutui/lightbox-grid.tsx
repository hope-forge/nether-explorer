"use client";

/**
 * @author: @dorianbaffier
 * @description: Lightbox Grid
 * @version: 1.0.0
 * @date: 2026-10-15
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 *
 * Adaptado para o Nether Explorer (o comportamento é o original):
 * - visual do site: cantos retos, moldura preta, botões em relevo de pixel, fonte pixelada
 * - aceita a grelha da própria página (renderGrid) em vez de desenhar a sua
 * - <img> no lugar de next/image (o site não usa Next.js)
 * - obedece ao nível de animação "Desligado" do site (reduced), além do "reduzir movimento"
 * - textos em português; o visualizador abre dentro de #ne2-root para herdar as cores do tema
 */

import {
  animate,
  type MotionValue,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import {
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
  type Ref,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export interface LightboxImage {
  src: string;
  alt: string;
  /** Tamanho natural. Se faltar, é lido da miniatura já carregada. */
  width?: number;
  height?: number;
  caption?: string;
}

export interface LightboxLabels {
  open: (image: LightboxImage) => string;
  close: string;
  previous: string;
  next: string;
}

export interface LightboxGridApi {
  /** Liga o elemento clicável da miniatura `index` (usado para a animação de ida e volta) */
  thumbRef: (index: number) => (node: HTMLElement | null) => void;
  open: (index: number) => void;
  active: number | null;
  labels: LightboxLabels;
}

export interface LightboxGridProps {
  images?: LightboxImage[];
  className?: string;
  /** Desenha a grelha da página em vez da grelha padrão do componente */
  renderGrid?: (api: LightboxGridApi) => ReactNode;
  /** true quando as animações do site estão desligadas */
  reduced?: boolean;
  labels?: Partial<LightboxLabels>;
}

const DEFAULT_LABELS: LightboxLabels = {
  open: (image) => `Ampliar ${image.alt}`,
  close: "Fechar",
  previous: "Paisagem anterior",
  next: "Próxima paisagem",
};

const PIXEL = "'Pixelify Sans',monospace";
const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];
const OPEN = { type: "spring", duration: 0.5, bounce: 0.12 } as const;
const CLOSE = { type: "spring", duration: 0.42, bounce: 0.08 } as const;
const SETTLE = { type: "spring", duration: 0.35, bounce: 0.2 } as const;
// The open image keeps this much room around it, and below for the caption.
const MARGIN = 48;
const MARGIN_SMALL = 12;
const CAPTION_ROOM = 56;
// Cantos retos, como tudo no site
const OPEN_RADIUS = 0;
// Drag thresholds: distance in px, speed in px/ms.
const DISMISS_DISTANCE = 110;
const DISMISS_SPEED = 0.55;
const SWIPE_SPEED = 0.45;
const AXIS_LOCK = 6;

interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface Frame {
  x: number;
  y: number;
  scale: number;
  clip: string;
}

interface Size {
  width: number;
  height: number;
}

/** Where an image of this size sits when open, fitted to the window. */
function fitRect(image: Size): Rect {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const margin = vw < 640 ? MARGIN_SMALL : MARGIN;
  const maxW = vw - margin * 2;
  const maxH = vh - margin * 2 - CAPTION_ROOM;
  const scale = Math.min(maxW / image.width, maxH / image.height);
  const width = image.width * scale;
  const height = image.height * scale;
  return {
    left: (vw - width) / 2,
    top: (vh - CAPTION_ROOM - height) / 2,
    width,
    height,
  };
}

const openClip = () => `inset(0px 0px 0px 0px round ${OPEN_RADIUS}px)`;

/**
 * The transform and crop that make the open image look exactly like its
 * thumbnail: scaled down to the thumbnail's cover size, moved onto it, and
 * cropped to its box. Animating from here to identity is the whole trick.
 */
function thumbFrame(
  open: Rect,
  thumb: DOMRect,
  image: Size,
  radius: number
): Frame {
  const imageRatio = image.width / image.height;
  const thumbRatio = thumb.width / thumb.height;
  const coverWidth =
    imageRatio > thumbRatio ? thumb.height * imageRatio : thumb.width;
  const scale = coverWidth / open.width;
  const insetX = (open.width - thumb.width / scale) / 2;
  const insetY = (open.height - thumb.height / scale) / 2;
  return {
    x: thumb.left + thumb.width / 2 - (open.left + open.width / 2),
    y: thumb.top + thumb.height / 2 - (open.top + open.height / 2),
    scale,
    clip: `inset(${insetY}px ${insetX}px ${insetY}px ${insetX}px round ${radius / scale}px)`,
  };
}

function isVisible(rect: DOMRect) {
  return (
    rect.bottom > 0 &&
    rect.top < window.innerHeight &&
    rect.right > 0 &&
    rect.left < window.innerWidth
  );
}

// Botão em relevo, igual ao botão de fechar o aviso de conquista
const pixelButton: CSSProperties = {
  width: 44,
  height: 44,
  padding: 0,
  border: 0,
  cursor: "pointer",
  background: "#c6c6c6",
  color: "#1d1d1d",
  fontFamily: PIXEL,
  fontWeight: 700,
  fontSize: 22,
  lineHeight: 1,
  boxShadow: "inset 3px 3px 0 #fff,inset -3px -3px 0 #555,0 0 0 3px #000",
};

function IconButton({
  label,
  onClick,
  className,
  children,
  buttonRef,
  unavailable,
}: {
  label: string;
  onClick: () => void;
  className?: string;
  children: ReactNode;
  buttonRef?: Ref<HTMLButtonElement>;
  /** Dimmed but still focusable, so focus never drops out of the viewer. */
  unavailable?: boolean;
}) {
  return (
    <button
      aria-disabled={unavailable || undefined}
      aria-label={label}
      className={cn(
        "flex items-center justify-center transition-[translate,opacity] duration-100 active:translate-y-[2px] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#f5c518] aria-disabled:cursor-default aria-disabled:opacity-40 aria-disabled:active:translate-y-0",
        className
      )}
      onClick={onClick}
      ref={buttonRef}
      style={pixelButton}
      type="button"
    >
      {children}
    </button>
  );
}

// Seta em pixel art (quadrados de 2px), aponta para a direita
function Chevron({ flip }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height="20"
      shapeRendering="crispEdges"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      viewBox="0 0 5 10"
      width="10"
    >
      <rect height="2" width="2" x="0" y="0" />
      <rect height="2" width="2" x="1" y="2" />
      <rect height="2" width="2" x="3" y="4" />
      <rect height="2" width="2" x="1" y="6" />
      <rect height="2" width="2" x="0" y="8" />
    </svg>
  );
}

interface ViewerProps {
  images: LightboxImage[];
  index: number;
  rect: Rect;
  x: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
  clip: MotionValue<string>;
  alpha: MotionValue<number>;
  fade: MotionValue<number>;
  settled: boolean;
  labels: LightboxLabels;
  onClose: (velocity?: { x: number; y: number }) => void;
  onStep: (direction: 1 | -1) => void;
}

function Viewer({
  images,
  index,
  rect,
  x,
  y,
  scale,
  clip,
  alpha,
  fade,
  settled,
  labels,
  onClose,
  onStep,
}: ViewerProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    id: number;
    startX: number;
    startY: number;
    axis: "x" | "y" | null;
    samples: { x: number; y: number; t: number }[];
  } | null>(null);
  const backdrop = useTransform(fade, (v) => v * 0.92);
  const image = images[index];
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true });
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!settled || event.button !== 0) {
      return;
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      axis: null,
      samples: [{ x: event.clientX, y: event.clientY, t: event.timeStamp }],
    };
  };

  // Pulling away shrinks the photo and lets the page show through.
  const followVertical = (dx: number, dy: number) => {
    const pull = Math.min(Math.abs(dy) / window.innerHeight, 1);
    x.set(dx);
    y.set(dy);
    scale.set(1 - pull * 0.45);
    fade.set(1 - Math.min(Math.abs(dy) / 360, 1) * 0.85);
  };

  // Past the first or last photo the drag only gives a little.
  const followHorizontal = (dx: number) => {
    const blocked = (dx > 0 && !hasPrev) || (dx < 0 && !hasNext);
    x.set(blocked ? dx * 0.25 : dx);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== event.pointerId) {
      return;
    }
    const dx = event.clientX - d.startX;
    const dy = event.clientY - d.startY;
    if (!d.axis) {
      if (Math.hypot(dx, dy) < AXIS_LOCK) {
        return;
      }
      d.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
    }
    d.samples.push({ x: event.clientX, y: event.clientY, t: event.timeStamp });
    if (d.samples.length > 5) {
      d.samples.shift();
    }
    if (d.axis === "y") {
      followVertical(dx, dy);
    } else {
      followHorizontal(dx);
    }
  };

  const releaseVertical = (dy: number, velocity: { x: number; y: number }) => {
    if (
      Math.abs(dy) > DISMISS_DISTANCE ||
      Math.abs(velocity.y) > DISMISS_SPEED
    ) {
      onClose(velocity);
      return;
    }
    animate(x, 0, SETTLE);
    animate(y, 0, SETTLE);
    animate(scale, 1, SETTLE);
    animate(fade, 1, { duration: 0.2, ease: EASE });
  };

  const releaseHorizontal = (dx: number, vx: number) => {
    const far = Math.abs(dx) > rect.width * 0.22 || Math.abs(vx) > SWIPE_SPEED;
    if (far && dx < 0 && hasNext) {
      onStep(1);
    } else if (far && dx > 0 && hasPrev) {
      onStep(-1);
    } else {
      animate(x, 0, SETTLE);
    }
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== event.pointerId) {
      return;
    }
    drag.current = null;
    const first = d.samples[0];
    const last = d.samples.at(-1) ?? first;
    const dt = Math.max(1, last.t - first.t);
    const velocity = { x: (last.x - first.x) / dt, y: (last.y - first.y) / dt };
    if (d.axis === "y") {
      releaseVertical(event.clientY - d.startY, velocity);
    } else if (d.axis === "x") {
      releaseHorizontal(event.clientX - d.startX, velocity.x);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    } else if (event.key === "ArrowRight" && hasNext) {
      onStep(1);
    } else if (event.key === "ArrowLeft" && hasPrev) {
      onStep(-1);
    } else if (event.key === "Tab") {
      // Keep focus inside the viewer.
      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLButtonElement>(
          "button:not(:disabled)"
        ) ?? []
      ).filter((b) => b.offsetParent !== null);
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
  };

  return (
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: keys for the whole viewer: Escape, arrows and the focus trap
    <div
      aria-label={image.caption ?? image.alt}
      aria-modal="true"
      className="fixed inset-0 z-[100]"
      data-lightbox="1"
      onKeyDown={handleKeyDown}
      ref={dialogRef}
      role="dialog"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        onClick={() => onClose()}
        style={{ opacity: backdrop, background: "var(--lo, #0d0404)" }}
      />

      <motion.div
        className="absolute cursor-grab touch-none select-none overflow-hidden active:cursor-grabbing"
        onLostPointerCapture={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
          x,
          y,
          scale,
          clipPath: clip,
          opacity: alpha,
          willChange: "transform, clip-path",
        }}
      >
        <img
          alt={image.alt}
          className="pointer-events-none block h-full w-full object-cover"
          draggable={false}
          src={image.src}
        />
        {/* Moldura preta em pixel, como a imagem do topo */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ boxShadow: "inset 0 0 0 6px #000" }}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: fade }}
      >
        <div className="pointer-events-auto absolute top-4 right-4 flex items-center gap-4">
          <span
            className="tabular-nums"
            style={{
              fontFamily: PIXEL,
              fontWeight: 700,
              fontSize: 16,
              color: "#fff7ea",
              padding: "4px 10px",
              background: "#000",
            }}
          >
            {index + 1} / {images.length}
          </span>
          <IconButton
            buttonRef={closeRef}
            label={labels.close}
            onClick={() => onClose()}
          >
            ×
          </IconButton>
        </div>
        <IconButton
          className="pointer-events-auto absolute top-1/2 left-4 hidden -translate-y-1/2 sm:flex"
          label={labels.previous}
          onClick={() => hasPrev && onStep(-1)}
          unavailable={!hasPrev}
        >
          <Chevron flip />
        </IconButton>
        <IconButton
          className="pointer-events-auto absolute top-1/2 right-4 hidden -translate-y-1/2 sm:flex"
          label={labels.next}
          onClick={() => hasNext && onStep(1)}
          unavailable={!hasNext}
        >
          <Chevron />
        </IconButton>
        {image.caption ? (
          <p
            className="absolute inset-x-4 m-0 text-center"
            style={{ top: rect.top + rect.height + 18 }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "4px 10px",
                background: "#000",
                color: "#fff7ea",
                fontFamily: PIXEL,
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              {image.caption}
            </span>
          </p>
        ) : null}
      </motion.div>
    </div>
  );
}

/**
 * A photo grid whose thumbnails grow into a full view. The open photo is the
 * same element at every moment: a transform and a crop take it from its
 * slot to the middle of the screen and back, wherever it was dragged to.
 */
export default function LightboxGrid({
  images = [],
  className,
  renderGrid,
  reduced = false,
  labels: labelOverrides,
}: LightboxGridProps) {
  const [active, setActive] = useState<number | null>(null);
  const [rect, setRect] = useState<Rect | null>(null);
  const [settled, setSettled] = useState(false);
  const [closing, setClosing] = useState(false);
  const thumbs = useRef<(HTMLElement | null)[]>([]);
  const sizes = useRef<(Size | null)[]>([]);
  const closeTimer = useRef(0);
  const systemReduced = useReducedMotion();
  const reduceMotion = !!systemReduced || reduced;
  const labels = { ...DEFAULT_LABELS, ...labelOverrides };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const clip = useMotionValue(openClip());
  const alpha = useMotionValue(1);
  const fade = useMotionValue(0);

  /** Tamanho natural da imagem: o dado, ou o da miniatura já carregada */
  const sizeOf = useCallback(
    (index: number): Size => {
      const image = images[index];
      if (image.width && image.height) {
        return { width: image.width, height: image.height };
      }
      const cached = sizes.current[index];
      if (cached) {
        return cached;
      }
      const img = thumbs.current[index]?.querySelector("img");
      if (img?.naturalWidth && img.naturalHeight) {
        sizes.current[index] = { width: img.naturalWidth, height: img.naturalHeight };
        return sizes.current[index] as Size;
      }
      const box = thumbs.current[index]?.getBoundingClientRect();
      return { width: box?.width || 4, height: box?.height || 3 };
    },
    [images]
  );

  const frameFor = useCallback(
    (index: number, open: Rect): Frame | null => {
      const thumb = thumbs.current[index];
      if (!thumb) {
        return null;
      }
      const box = thumb.getBoundingClientRect();
      if (!isVisible(box)) {
        return null;
      }
      const radius =
        Number.parseFloat(getComputedStyle(thumb).borderTopLeftRadius) || 0;
      return thumbFrame(open, box, sizeOf(index), radius);
    },
    [sizeOf]
  );

  const open = useCallback(
    (index: number) => {
      const target = fitRect(sizeOf(index));
      const from = frameFor(index, target);
      setActive(index);
      setRect(target);
      setClosing(false);
      setSettled(false);
      alpha.set(1);
      if (!from || reduceMotion) {
        x.set(0);
        y.set(0);
        scale.set(1);
        clip.set(openClip());
        fade.set(0);
        alpha.set(0);
        animate(alpha, 1, { duration: 0.18 });
        animate(fade, 1, { duration: 0.18 }).then(() => setSettled(true));
        return;
      }
      x.set(from.x);
      y.set(from.y);
      scale.set(from.scale);
      clip.set(from.clip);
      fade.set(0);
      animate(x, 0, OPEN);
      animate(y, 0, OPEN);
      animate(scale, 1, OPEN);
      animate(clip, openClip(), OPEN);
      animate(fade, 1, { duration: 0.3, ease: EASE }).then(() =>
        setSettled(true)
      );
    },
    [alpha, clip, fade, frameFor, reduceMotion, scale, sizeOf, x, y]
  );

  const close = useCallback(
    (velocity?: { x: number; y: number }) => {
      if (active === null || !rect || closing) {
        return;
      }
      setClosing(true);
      const index = active;
      // Instant, so the slot is measured where it will be (pages often scroll smoothly).
      thumbs.current[index]?.scrollIntoView({
        behavior: "instant",
        block: "nearest",
        inline: "nearest",
      });
      const to = frameFor(index, rect);
      const finish = () => {
        setActive(null);
        setRect(null);
        setClosing(false);
        thumbs.current[index]?.focus({ preventScroll: true });
      };
      if (!to || reduceMotion) {
        animate(alpha, 0, { duration: 0.16 });
        animate(fade, 0, { duration: 0.16 }).then(finish);
        return;
      }
      // A flick carries its speed into the flight home.
      const vx = (velocity?.x ?? 0) * 1000;
      const vy = (velocity?.y ?? 0) * 1000;
      animate(x, to.x, { ...CLOSE, velocity: vx });
      animate(y, to.y, { ...CLOSE, velocity: vy });
      animate(scale, to.scale, CLOSE);
      animate(clip, to.clip, CLOSE);
      animate(fade, 0, { duration: 0.28, ease: EASE });
      // The clip spring settles last; reveal the thumbnail when it lands.
      closeTimer.current = window.setTimeout(finish, 420);
    },
    [
      active,
      alpha,
      clip,
      closing,
      fade,
      frameFor,
      rect,
      reduceMotion,
      scale,
      x,
      y,
    ]
  );

  const step = useCallback(
    (direction: 1 | -1) => {
      // Mid-close, the photo is already flying home to this slot.
      if (active === null || closing) {
        return;
      }
      const next = active + direction;
      if (next < 0 || next >= images.length) {
        return;
      }
      setActive(next);
      setRect(fitRect(sizeOf(next)));
      y.set(0);
      scale.set(1);
      clip.set(openClip());
      fade.set(1);
      if (reduceMotion) {
        x.set(0);
        alpha.set(1);
        return;
      }
      // The next photo slides in from the side it was swiped from.
      x.set(direction * 72);
      alpha.set(0);
      animate(x, 0, { duration: 0.32, ease: EASE });
      animate(alpha, 1, { duration: 0.22, ease: EASE });
    },
    [active, alpha, clip, closing, fade, images, reduceMotion, scale, sizeOf, x, y]
  );

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  // Lock the page behind the viewer and keep the open photo fitted.
  useEffect(() => {
    if (active === null) {
      return;
    }
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    const onResize = () => setRect(fitRect(sizeOf(active)));
    window.addEventListener("resize", onResize);
    return () => {
      root.style.overflow = previous;
      window.removeEventListener("resize", onResize);
    };
  }, [active, sizeOf]);

  // The open photo has left its slot; the slot stays empty until it returns.
  // (Feito direto no elemento para não mexer nos estilos que as animações da página usam;
  // opacidade e não visibility, para a miniatura continuar a poder receber o foco ao fechar.)
  useEffect(() => {
    thumbs.current.forEach((node, i) => {
      if (node) {
        node.style.opacity = active === i ? "0" : "";
      }
    });
  }, [active]);

  const thumbRef = useCallback(
    (index: number) => (node: HTMLElement | null) => {
      thumbs.current[index] = node;
    },
    []
  );

  const viewer =
    active !== null && rect
      ? createPortal(
          <Viewer
            alpha={alpha}
            clip={clip}
            fade={fade}
            images={images}
            index={active}
            labels={labels}
            onClose={close}
            onStep={step}
            rect={rect}
            scale={scale}
            settled={settled && !closing}
            x={x}
            y={y}
          />,
          document.getElementById("ne2-root") ?? document.body
        )
      : null;

  if (renderGrid) {
    return (
      <>
        {renderGrid({ thumbRef, open, active, labels })}
        {viewer}
      </>
    );
  }

  return (
    <div className={cn("w-full max-w-xl", className)}>
      <ul className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <li
            className={cn(index === 0 && "col-span-2 row-span-2")}
            key={image.src}
          >
            <button
              aria-label={labels.open(image)}
              className="relative block aspect-square w-full overflow-hidden"
              onClick={() => open(index)}
              ref={thumbRef(index)}
              type="button"
            >
              <img
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
                src={image.src}
              />
            </button>
          </li>
        ))}
      </ul>
      {viewer}
    </div>
  );
}
