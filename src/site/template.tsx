// Modelo da página, convertido automaticamente do formato x-dc antigo (index.html).
// Cada {{ valor }} virou uma expressão JSX que lê os mesmos valores de renderVals().
// Os textos e os atributos data-* usados pelas animações estão exatamente como antes.
import { Fragment, type ReactNode } from 'react'
import { arr, css, s, st, ti } from '../dc/runtime'
import LightboxGrid from '@/components/kokonutui/lightbox-grid'
import DotField from '@/components/kokonutui/dot-field'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderTemplate(v: any): ReactNode {
  return (
    <>
    <div id="ne2-root" style={st({ "--sky1": "#2a0606", "--sky2": "#7a1a12", "--page": "#1b0d0d", "--ink": "#f6e6d6", "--muted": "#cdb7a5", "--s1": "#4a1a1a", "--s2": "#2b2433", "--sink": "#fff7ea", "--panel": "#3a2020", "--pink": "#f6e6d6", "--hi": "#6e3a3a", "--lo": "#0d0404", "--accent": "#ff7a1a", "--accentInk": "#1b0d0d", "--eyebrow": "#ff9a4a", "--gold": "#f5c518", "--grass": "#5fb233", "--portal": "#8b3dff", minHeight: "100vh", background: "var(--page)", color: "var(--ink)", fontFamily: "'Rubik',system-ui,sans-serif", overflowX: "clip", transition: "background .6s,color .6s" })}>
      <a data-skip="1" href="#conteudo">Pular para o conteúdo</a>
      <nav style={st({ position: "sticky", top: "0", zIndex: "30", display: "flex", alignItems: "center", gap: "clamp(8px,2.5vw,18px)", flexWrap: "wrap", padding: "12px clamp(16px,4vw,40px)", background: "var(--lo)", color: "#fff7ea", boxShadow: "0 4px 0 #000" })}>
        {" "}
        <a href="#topo" style={st({ display: "flex", alignItems: "center", gap: "clamp(6px,2vw,10px)", marginRight: "auto", textDecoration: "none", color: "#fff7ea" })}>
          {" "}
          <span style={st({ width: "28px", height: "28px", background: "linear-gradient(var(--grass) 0 35%,#7a5232 35%)", boxShadow: "inset 3px 3px 0 rgba(255,255,255,.35),inset -3px -3px 0 rgba(0,0,0,.4)" })} />
          {" "}
          <span style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(14px,4.6vw,22px)", letterSpacing: ".02em", whiteSpace: "nowrap" })}>NETHER EXPLORER</span>
          {" "}
        </a>
        {" "}
        {v.isDesktop ? (
          <>
            {" "}
            <div style={st({ display: "flex", gap: "6px", alignItems: "center", fontFamily: "'Pixelify Sans',monospace", fontSize: "17px" })}>
              {" "}
              {arr(v.navGroups).map((g, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div data-nav-group={g?.kind} style={st({ position: "relative" })}>
                    {" "}
                    <a className="scp0" href={g?.href} aria-haspopup={g?.popup} aria-current={g?.current} style={css(`display:flex;align-items:center;gap:8px;padding:8px 10px;color:#fff7ea;text-decoration:none;box-shadow:${s(g?.mark)}`)}>
                      {ti(g?.label)}
                      <span data-caret="1" aria-hidden="true" />
                    </a>
                    {" "}
                    <div data-nav-panel="1">
                      {" "}
                      {arr(g?.links).map((l, $index) => (
                        <Fragment key={$index}>
                          {" "}
                          <a className="scp1" href={l?.href} aria-current={l?.current} style={css(`display:block;padding:10px 12px;text-decoration:none;white-space:nowrap;background:${s(l?.bg)};color:${s(l?.color)}`)}>
                            {ti(l?.label)}
                          </a>
                          {" "}
                        </Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </>
        ) : null}
        {" "}
        <button className="scp2 scp3" data-theme-toggle="1" onClick={v.toggleNight} aria-label={v.themeAria} style={st({ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", minHeight: "44px", cursor: "pointer", border: "0", background: "#c6c6c6", color: "#1d1d1d", fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", boxShadow: "inset 3px 3px 0 #fff,inset -3px -3px 0 #555,0 0 0 3px #000", transition: "transform .15s" })}>
          {" "}
          <span style={css(`width:14px;height:14px;background:${s(v.toggleSwatch)};box-shadow:0 0 0 2px #000`)} />
          {" "}
          <span data-theme-label="1">
            {ti(v.themeLabel)}
          </span>
          {" "}
        </button>
        {" "}
        {v.isMobile ? (
          <>
            {" "}
            <button onClick={v.toggleMenu} aria-label="Abrir menu" style={st({ width: "44px", height: "44px", display: "grid", placeItems: "center", cursor: "pointer", border: "0", background: "#c6c6c6", color: "#1d1d1d", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "22px", boxShadow: "inset 3px 3px 0 #fff,inset -3px -3px 0 #555,0 0 0 3px #000" })}>
              {ti(v.menuIcon)}
            </button>
            {" "}
          </>
        ) : null}
        {" "}
        {v.menuOpen ? (
          <>
            {" "}
            <div data-menu-panel="1" style={st({ flexBasis: "100%", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px", padding: "8px 0 4px", maxHeight: "calc(100vh - 80px)", overflowY: "auto" })}>
              {" "}
              {arr(v.menuGroups).map((g, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <span style={st({ gridColumn: "1/-1", marginTop: "8px", fontFamily: "'Pixelify Sans',monospace", fontSize: "15px", fontWeight: "700", letterSpacing: ".12em", color: "var(--gold)" })}>
                    {ti(g?.label)}
                  </span>
                  {" "}
                  {arr(g?.links).map((l, $index) => (
                    <Fragment key={$index}>
                      {" "}
                      <a href={l?.href} aria-current={l?.current} onClick={v.closeMenu} style={css(`display:block;padding:12px 14px;text-decoration:none;background:${s(l?.mBg)};color:${s(l?.mColor)};font-family:'Pixelify Sans',monospace;font-weight:700;font-size:18px;box-shadow:inset 3px 3px 0 ${s(l?.mHi)},inset -3px -3px 0 #000,0 0 0 3px #000`)}>
                        {ti(l?.label)}
                      </a>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </>
        ) : null}
      </nav>
      <main id="conteudo">
        <header id="topo" style={st({ position: "relative", overflow: "hidden", background: "linear-gradient(180deg,var(--sky1),var(--sky2))", color: "#fff7ea", transition: "background .6s" })}>
          {" "}
          {arr(v.embers).map((e, $index) => (
            <Fragment key={$index}>
              {" "}
              <span data-ember="1" style={css(`position:absolute;bottom:-20px;left:${s(e?.left)};width:${s(e?.size)};height:${s(e?.size)};background:${s(e?.color)};box-shadow:0 0 12px ${s(e?.color)};z-index:1;pointer-events:none`)} />
              {" "}
            </Fragment>
          ))}
          {" "}
          <div data-float="1" data-crack="0" onClick={v.hitBlock} style={st({ position: "absolute", top: "14%", left: "4%", width: "56px", height: "56px", background: "linear-gradient(var(--grass) 0 30%,#7a5232 30%)", boxShadow: "inset 5px 5px 0 rgba(255,255,255,.3),inset -5px -5px 0 rgba(0,0,0,.35),0 0 0 4px #000", zIndex: "1" })} />
          {" "}
          <div data-float="2" style={st({ position: "absolute", bottom: "18%", left: "46%", width: "40px", height: "40px", background: "#3fd8d4", boxShadow: "inset 4px 4px 0 rgba(255,255,255,.45),inset -4px -4px 0 rgba(0,0,0,.3),0 0 0 4px #000", zIndex: "1" })} />
          {" "}
          <div data-float="3" style={st({ position: "absolute", top: "8%", right: "6%", width: "44px", height: "44px", background: "var(--gold)", boxShadow: "inset 4px 4px 0 rgba(255,255,255,.45),inset -4px -4px 0 rgba(0,0,0,.3),0 0 0 4px #000", zIndex: "3" })} />
          {" "}
          <div style={st({ position: "relative", zIndex: "2", maxWidth: "1240px", margin: "0 auto", padding: "clamp(48px,8vw,110px) clamp(16px,4vw,40px) clamp(64px,8vw,110px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "48px", alignItems: "center" })}>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "22px", alignItems: "flex-start", containerType: "inline-size" })}>
              {" "}
              <span data-drop="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "15px", fontWeight: "700", letterSpacing: ".12em", padding: "6px 12px", background: "#000", color: "var(--gold)" })}>GUIA DE FÃ · NÃO OFICIAL</span>
              {" "}
              <h1 style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "min(clamp(48px,7.6vw,108px),14.2cqi)", lineHeight: ".95", letterSpacing: "-.01em", textShadow: "6px 6px 0 #000" })}>
                {" "}
                <span data-drop="120" style={st({ display: "block" })}>DESÇA ÀS</span>
                {" "}
                <span data-drop="260" style={st({ display: "block", color: "var(--heroAccent,var(--accent))" })}>PROFUNDEZAS.</span>
                {" "}
                <span data-drop="400" style={st({ display: "block" })}>VOLTE UMA LENDA.</span>
                {" "}
              </h1>
              {" "}
              <p data-drop="560" style={st({ margin: "0", fontSize: "clamp(17px,1.6vw,20px)", lineHeight: "1.55", maxWidth: "520px", textWrap: "pretty", fontWeight: "500", textShadow: "2px 2px 0 #000" })}>Da primeira noite ao outro lado do portal: mobs, receitas, modos de jogo e um quiz para provar que você está pronto para o Nether.</p>
              {" "}
              <div data-drop="700" style={st({ display: "flex", gap: "16px", flexWrap: "wrap", padding: "4px" })}>
                {" "}
                <a className="scp4 scp5" href="#dicas" style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "20px", padding: "14px 26px", textDecoration: "none", background: "var(--grass)", color: "#0f2208", boxShadow: "inset 4px 4px 0 rgba(255,255,255,.4),inset -4px -4px 0 rgba(0,0,0,.35),0 0 0 4px #000", transition: "transform .15s" })}>▶ Começar a jornada</a>
                {" "}
                <a className="scp6 scp5" href="#quiz" style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "20px", padding: "14px 26px", textDecoration: "none", background: "#c6c6c6", color: "#1d1d1d", boxShadow: "inset 4px 4px 0 #fff,inset -4px -4px 0 #555,0 0 0 4px #000", transition: "transform .15s" })}>Fazer o quiz</a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div data-reveal="300" style={st({ position: "relative" })}>
              {" "}
              <div data-parallax="-0.08" data-world="1" style={st({ aspectRatio: "4/3", overflow: "hidden", boxShadow: "0 0 0 6px #000,14px 14px 0 6px rgba(0,0,0,.45)" })}>
                {" "}
                <img data-kb="1" src={v.heroImg} alt={v.heroAlt} referrerPolicy="no-referrer" style={st({ width: "100%", height: "100%", objectFit: "cover" })} />
                {" "}
                <canvas data-world-fx="1" aria-hidden="true" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={st({ height: "16px", background: "repeating-linear-gradient(90deg,var(--edgeA,#5fb233) 0 16px,var(--edgeB,#3f8a22) 16px 32px)" })} />
        </header>
        {v.showMarquee ? (
          <>
            {" "}
            <div style={st({ overflow: "hidden", background: "var(--accent)", color: "var(--accentInk)", padding: "14px 0", borderBottom: "4px solid #000" })}>
              {" "}
              <div data-marquee="1" style={st({ display: "flex", width: "max-content", gap: "36px", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(22px,2.6vw,32px)", whiteSpace: "nowrap" })}>
                {" "}
                <span>OVERWORLD</span>
                <span>■</span>
                <span>NETHER</span>
                <span>■</span>
                <span>THE END</span>
                <span>■</span>
                <span>EXPLORE</span>
                <span>■</span>
                <span>CONSTRUA</span>
                <span>■</span>
                <span>SOBREVIVA</span>
                <span>■</span>
                {" "}
                <span>OVERWORLD</span>
                <span>■</span>
                <span>NETHER</span>
                <span>■</span>
                <span>THE END</span>
                <span>■</span>
                <span>EXPLORE</span>
                <span>■</span>
                <span>CONSTRUA</span>
                <span>■</span>
                <span>SOBREVIVA</span>
                <span>■</span>
                {" "}
              </div>
              {" "}
            </div>
          </>
        ) : null}
        <section id="sobre" style={st({ maxWidth: "1240px", margin: "0 auto", padding: "110px clamp(16px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "56px", alignItems: "start" })}>
          {" "}
          <div style={st({ display: "flex", flexDirection: "column", gap: "18px" })}>
            {" "}
            <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "var(--eyebrow)" })}>■ SOBRE O JOGO</span>
            {" "}
            <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", textWrap: "balance" })}>Um mundo infinito, feito de blocos — e de escolhas.</h2>
            {" "}
            <p data-reveal="160" style={st({ margin: "0", fontSize: "18px", lineHeight: "1.6", maxWidth: "520px", color: "var(--muted)", textWrap: "pretty" })}>Minecraft te joga num mundo gerado do zero, sem mapa e sem roteiro. Tudo pode ser quebrado, coletado e reconstruído. O resto é com você: um abrigo modesto, uma fortaleza no topo da montanha ou uma expedição sem volta ao Nether e ao End.</p>
            {" "}
          </div>
          {" "}
          <ol style={st({ listStyle: "none", margin: "0", padding: "6px", display: "grid", gap: "18px" })}>
            {" "}
            {arr(v.loop).map((step, $index) => (
              <Fragment key={$index}>
                {" "}
                <li className="scp7" data-reveal={step?.delay} style={st({ display: "flex", gap: "18px", alignItems: "center", padding: "16px 20px", background: "var(--panel)", color: "var(--pink)", boxShadow: "inset 4px 4px 0 var(--hi),inset -4px -4px 0 var(--lo),0 0 0 4px #000", transition: "transform .2s" })}>
                  {" "}
                  <span style={css(`flex:none;width:52px;height:52px;display:grid;place-items:center;background:${s(step?.color)};color:#000;font-family:'Pixelify Sans',monospace;font-weight:700;font-size:26px;box-shadow:inset 3px 3px 0 rgba(255,255,255,.4),inset -3px -3px 0 rgba(0,0,0,.35)`)}>
                    {ti(step?.n)}
                  </span>
                  {" "}
                  <div style={st({ display: "flex", flexDirection: "column", gap: "2px" })}>
                    {" "}
                    <strong style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "24px" })}>
                      {ti(step?.title)}
                    </strong>
                    {" "}
                    <span style={st({ fontSize: "15px", opacity: ".85" })}>
                      {ti(step?.text)}
                    </span>
                    {" "}
                  </div>
                  {" "}
                </li>
                {" "}
              </Fragment>
            ))}
            {" "}
          </ol>
        </section>
        <section id="modos" style={st({ background: "var(--s1)", color: "var(--sink)", borderTop: "4px solid #000", borderBottom: "4px solid #000", transition: "background .6s" })}>
          {" "}
          <div style={st({ maxWidth: "1240px", margin: "0 auto", padding: "96px clamp(16px,4vw,40px)" })}>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "36px" })}>
              {" "}
              <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "var(--gold)" })}>■ MODOS DE JOGO</span>
              {" "}
              <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", textWrap: "balance" })}>Escolha como você quer viver.</h2>
              {" "}
            </div>
            {" "}
            <div data-reveal="160" style={st({ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "36px", padding: "4px" })}>
              {" "}
              {arr(v.modeTabs).map((t, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <button className="scp8" onClick={t?.onClick} style={css(`font-family:'Pixelify Sans',monospace;font-weight:700;font-size:19px;padding:12px 20px;cursor:pointer;border:0;background:${s(t?.bg)};color:${s(t?.fg)};box-shadow:inset 3px 3px 0 rgba(255,255,255,.4),inset -3px -3px 0 rgba(0,0,0,.35),0 0 0 3px #000;transform:translateY(${s(t?.lift)});transition:transform .2s,background .2s`)}>
                    {ti(t?.name)}
                  </button>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
            <div style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "44px", alignItems: "center" })}>
              {" "}
              <div data-modeswap="1" style={st({ display: "flex", flexDirection: "column", gap: "16px" })}>
                {" "}
                <span style={st({ alignSelf: "flex-start", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "15px", padding: "4px 10px", background: "var(--gold)", color: "#000" })}>
                  {ti(v.mode?.tag)}
                </span>
                {" "}
                <h3 style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(34px,4vw,52px)" })}>
                  {ti(v.mode?.name)}
                </h3>
                {" "}
                <p style={st({ margin: "0", fontSize: "18px", lineHeight: "1.6", maxWidth: "520px", textWrap: "pretty" })}>
                  {ti(v.mode?.text)}
                </p>
                {" "}
                <p style={st({ margin: "0", fontSize: "16px", fontWeight: "700", color: "var(--gold)" })}>
                  {"► "}{ti(v.mode?.tip)}
                </p>
                {" "}
              </div>
              {" "}
              <div data-modeswap="2" style={st({ aspectRatio: "16/10", overflow: "hidden", boxShadow: "0 0 0 6px #000,12px 12px 0 6px rgba(0,0,0,.4)" })}>
                {" "}
                <img loading="lazy" decoding="async" src={v.mode?.img} alt={v.mode?.name} referrerPolicy="no-referrer" style={st({ width: "100%", height: "100%", objectFit: "cover" })} />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
        </section>
        <section id="dicas" style={st({ maxWidth: "1240px", margin: "0 auto", padding: "110px clamp(16px,4vw,40px)" })}>
          {" "}
          <div style={st({ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px" })}>
            {" "}
            <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "var(--eyebrow)" })}>■ DICAS PARA INICIANTES</span>
            {" "}
            <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", maxWidth: "780px", textWrap: "balance" })}>
              {ti(v.tipsWord)}{" regras para sobreviver à primeira semana."}
            </h2>
            {" "}
            <div data-reveal="160" style={st({ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" })}>
              {" "}
              <div aria-hidden="true" style={st({ width: "180px", height: "14px", background: "#000", padding: "3px" })}>
                <div style={css(`height:100%;width:${s(v.tipsBar)};background:repeating-linear-gradient(90deg,#7ee03a 0 10px,#5fb233 10px 12px);transition:width .4s steps(6)`)} />
              </div>
              {" "}
              <p aria-live="polite" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "16px", color: "var(--muted)" })}>
                {ti(v.tipsProgress)}
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,340px),1fr))", gap: "40px 48px" })}>
            {" "}
            {arr(v.tips).map((tip, $index) => (
              <Fragment key={$index}>
                {" "}
                <div data-reveal={tip?.delay} style={st({ display: "flex", gap: "18px", alignItems: "flex-start" })}>
                  {" "}
                  <button className="scp2" data-tip-slot="1" aria-pressed={tip?.pressed} aria-label={tip?.aria} onClick={tip?.toggle} style={css(`flex:none;width:72px;height:72px;display:grid;place-items:center;padding:0;border:0;cursor:pointer;background:${s(tip?.slotBg)};box-shadow:inset 4px 4px 0 #373737,inset -4px -4px 0 #fff,0 0 0 3px #000;font-family:'Pixelify Sans',monospace;font-weight:700;font-size:30px;color:#fff;text-shadow:3px 3px 0 #000;transition:background-color .15s,transform .15s`)}>
                    {" "}
                    {tip?.checked ? (
                      <>
                        <span data-check="1" aria-hidden="true" />
                      </>
                    ) : null}
                    {" "}
                    {tip?.open ? (
                      <>
                        <span>
                          {ti(tip?.n)}
                        </span>
                      </>
                    ) : null}
                    {" "}
                  </button>
                  {" "}
                  <div style={css(`display:flex;flex-direction:column;gap:6px;padding-top:4px;opacity:${s(tip?.fade)};transition:opacity .2s`)}>
                    {" "}
                    <h3 style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "24px" })}>
                      {ti(tip?.title)}
                    </h3>
                    {" "}
                    <p style={st({ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "var(--muted)", textWrap: "pretty" })}>
                      {ti(tip?.text)}
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
        </section>
        <section id="crafting" style={st({ background: "var(--s2)", color: "var(--sink)", borderTop: "4px solid #000", borderBottom: "4px solid #000", transition: "background .6s" })}>
          {" "}
          <div style={st({ maxWidth: "1240px", margin: "0 auto", padding: "96px clamp(16px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "56px", alignItems: "center" })}>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "18px" })}>
              {" "}
              <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "#3fd8d4" })}>■ BLOCOS E CRAFTING</span>
              {" "}
              <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", textWrap: "balance" })}>Toda lenda começa numa bancada.</h2>
              {" "}
              <p data-reveal="160" style={st({ margin: "0", fontSize: "18px", maxWidth: "480px", opacity: ".9" })}>Escolha uma receita essencial e veja onde cada ingrediente vai na grade 3×3.</p>
              {" "}
              <div data-recipe-tabs="1" data-reveal="240" style={st({ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px", padding: "4px" })}>
                {" "}
                {arr(v.recipeTabs).map((r, $index) => (
                  <Fragment key={$index}>
                    {" "}
                    <button className="scp9" onClick={r?.onClick} style={css(`display:flex;justify-content:space-between;align-items:center;gap:12px;text-align:left;padding:12px 18px;cursor:pointer;border:0;background:${s(r?.bg)};color:${s(r?.fg)};font-family:'Pixelify Sans',monospace;font-weight:700;font-size:19px;box-shadow:inset 3px 3px 0 rgba(255,255,255,.4),inset -3px -3px 0 rgba(0,0,0,.35),0 0 0 3px #000;transform:translateX(${s(r?.shift)});transition:transform .2s,background .2s`)}>
                      {" "}
                      <span>
                        {ti(r?.name)}
                      </span>
                      <span style={st({ fontSize: "16px" })}>
                        {ti(r?.yield)}
                      </span>
                      {" "}
                    </button>
                    {" "}
                  </Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div data-reveal="200" style={st({ display: "flex", flexDirection: "column", gap: "22px", alignItems: "center" })}>
              {" "}
              <div style={st({ display: "flex", alignItems: "center", gap: "22px", flexWrap: "wrap", justifyContent: "center" })}>
                {" "}
                <div id="ne2-grid" style={st({ display: "grid", gridTemplateColumns: "repeat(3,clamp(76px,8.5vw,100px))", gap: "6px", padding: "12px", background: "#c6c6c6", boxShadow: "inset 4px 4px 0 #fff,inset -4px -4px 0 #555,0 0 0 4px #000" })}>
                  {" "}
                  {arr(v.cells).map((c, $index) => (
                    <Fragment key={$index}>
                      {" "}
                      <div title={c?.label} style={st({ aspectRatio: "1/1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", textAlign: "center", padding: "6px", background: "#8b8b8b", boxShadow: "inset 3px 3px 0 #373737,inset -3px -3px 0 #fff" })}>
                        {" "}
                        {c?.has ? (
                          <>
                            <img loading="lazy" decoding="async" src={c?.icon} alt={c?.label} referrerPolicy="no-referrer" style={st({ width: "58%", height: "58%", objectFit: "contain", imageRendering: "pixelated", filter: "drop-shadow(3px 3px 0 rgba(0,0,0,.35))" })} />
                          </>
                        ) : null}
                        {" "}
                        <span style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "11px", fontWeight: "700", lineHeight: "1", color: "#1d1d1d" })}>
                          {ti(c?.label)}
                        </span>
                        {" "}
                      </div>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
                <span data-arrow="1" style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "48px", color: "var(--gold)", textShadow: "4px 4px 0 #000" })}>➜</span>
                {" "}
                <div id="ne2-result" style={st({ width: "clamp(120px,12vw,150px)", aspectRatio: "1/1", display: "grid", placeItems: "center", textAlign: "center", padding: "12px", background: "var(--gold)", color: "#000", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "15px", lineHeight: "1.1", boxShadow: "inset 5px 5px 0 rgba(255,255,255,.5),inset -5px -5px 0 rgba(0,0,0,.3),0 0 0 4px #000", position: "relative" })}>
                  {" "}
                  <img loading="lazy" decoding="async" src={v.recipe?.icon} alt={v.recipe?.name} referrerPolicy="no-referrer" style={st({ width: "56%", height: "56%", objectFit: "contain", imageRendering: "pixelated", filter: "drop-shadow(4px 4px 0 rgba(0,0,0,.35))" })} />
                  {" "}
                  <span>
                    {ti(v.recipe?.name)}
                  </span>
                  {" "}
                  <span style={st({ position: "absolute", right: "6px", top: "6px", padding: "1px 5px", fontSize: "16px", lineHeight: "1.2", background: "#000", color: "#fff" })}>
                    {ti(v.recipe?.yield)}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p style={st({ margin: "0", fontSize: "16px", maxWidth: "420px", textAlign: "center", opacity: ".9" })}>
                {ti(v.recipe?.note)}
              </p>
              {" "}
            </div>
            {" "}
          </div>
        </section>
        <section id="progressao" style={st({ maxWidth: "1240px", margin: "0 auto", padding: "110px clamp(16px,4vw,40px)" })}>
          {" "}
          <div style={st({ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px" })}>
            {" "}
            <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "var(--eyebrow)" })}>■ ROTA DE PROGRESSÃO</span>
            {" "}
            <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", textWrap: "balance", maxWidth: "820px" })}>Do primeiro tronco ao ovo do dragão.</h2>
            {" "}
          </div>
          {" "}
          <ol style={st({ listStyle: "none", margin: "0", padding: "6px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,130px),1fr))", gap: "18px", position: "relative" })}>
            {" "}
            {arr(v.prog).map((p, $index) => (
              <Fragment key={$index}>
                {" "}
                <li data-reveal={p?.delay} style={st({ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", textAlign: "center" })}>
                  {" "}
                  <div className="scpa" style={st({ position: "relative", width: "84px", height: "84px", display: "grid", placeItems: "center", background: "#8b8b8b", boxShadow: "inset 4px 4px 0 #373737,inset -4px -4px 0 #fff,0 0 0 4px #000", transition: "transform .25s cubic-bezier(.3,1.6,.5,1)" })}>
                    {" "}
                    <img loading="lazy" decoding="async" data-bob="1" src={p?.icon} alt={p?.name} style={st({ width: "52px", height: "52px", objectFit: "contain", imageRendering: "pixelated", filter: "drop-shadow(3px 3px 0 rgba(0,0,0,.35))" })} />
                    {" "}
                    <span style={st({ position: "absolute", top: "-12px", left: "-12px", width: "28px", height: "28px", display: "grid", placeItems: "center", background: "var(--accent)", color: "var(--accentInk)", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "15px", boxShadow: "0 0 0 3px #000" })}>
                      {ti(p?.n)}
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <strong style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "20px" })}>
                    {ti(p?.name)}
                  </strong>
                  {" "}
                  <span style={st({ fontSize: "13px", lineHeight: "1.4", color: "var(--muted)" })}>
                    {ti(p?.text)}
                  </span>
                  {" "}
                </li>
                {" "}
              </Fragment>
            ))}
            {" "}
          </ol>
        </section>
        <section id="minerios" style={st({ maxWidth: "1240px", margin: "0 auto", padding: "110px clamp(16px,4vw,40px)" })}>
          {" "}
          <div style={st({ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "44px" })}>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "18px" })}>
              {" "}
              <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "var(--eyebrow)" })}>■ GUIA DE MINÉRIOS</span>
              {" "}
              <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", textWrap: "balance", maxWidth: "700px" })}>Onde cavar — e com o quê.</h2>
              {" "}
            </div>
            {" "}
            <p data-reveal="160" style={st({ margin: "0", fontSize: "15px", maxWidth: "340px", color: "var(--muted)" })}>Níveis Y ideais para mundos gerados a partir da versão 1.18. Aperte F3 (Java) para ver sua altura.</p>
            {" "}
          </div>
          {" "}
          <div data-ore-layout="1" style={st({ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "40px", alignItems: "start" })}>
            {" "}
            <div data-ore-core="1" data-reveal="120" aria-hidden="true" style={st({ position: "relative", height: "640px", margin: "0 0 0 52px", boxShadow: "0 0 0 4px #000,10px 10px 0 4px rgba(0,0,0,.35)" })}>
              {" "}
              <div style={st({ position: "absolute", left: "0", right: "0", top: "0", height: "59.2%", background: "linear-gradient(180deg,#e9eef2 0 4%,#8d939a 4% 100%)" })} />
              {" "}
              <div style={st({ position: "absolute", left: "0", right: "0", top: "59.2%", height: "8px", background: "#5fb233" })} />
              {" "}
              <div style={st({ position: "absolute", left: "0", right: "0", top: "calc(59.2% + 8px)", height: "calc(18.4% - 8px)", background: "#7d7d7d" })} />
              {" "}
              <div style={st({ position: "absolute", left: "0", right: "0", top: "77.6%", bottom: "0", background: "#4d4d55" })} />
              {" "}
              <div style={st({ position: "absolute", left: "0", right: "0", bottom: "0", height: "4%", background: "repeating-linear-gradient(90deg,#1d1d1d 0 8px,#3a3a3a 8px 16px)" })} />
              {" "}
              <div style={st({ position: "absolute", inset: "0", backgroundImage: "linear-gradient(90deg,rgba(0,0,0,.08) 50%,transparent 50%),linear-gradient(rgba(255,255,255,.05) 50%,transparent 50%)", backgroundSize: "16px 16px", pointerEvents: "none" })} />
              {" "}
              {arr(v.oreTicks).map((k, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <span style={css(`position:absolute;left:-52px;top:${s(k?.top)};translate:0 -50%;font-family:'Pixelify Sans',monospace;font-weight:700;font-size:13px;color:var(--muted);white-space:nowrap`)}>
                    {ti(k?.y)}
                  </span>
                  {" "}
                </Fragment>
              ))}
              {" "}
              {arr(v.oreLayers).map((l, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <span style={css(`position:absolute;right:6px;top:${s(l?.top)};font-family:'Pixelify Sans',monospace;font-weight:700;font-size:12px;letter-spacing:.06em;padding:2px 6px;background:rgba(0,0,0,.72);color:#fff7ea`)}>
                    {ti(l?.name)}
                  </span>
                  {" "}
                </Fragment>
              ))}
              {" "}
              {arr(v.oreMarks).map((m, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <span data-ore-mark="1" data-name={m?.label} style={css(`position:absolute;top:${s(m?.top)};left:${s(m?.left)};translate:-50% -50%;width:38px;height:38px;display:grid;place-items:center;background:#8b8b8b;box-shadow:inset 2px 2px 0 #373737,inset -2px -2px 0 #fff,0 0 0 3px #000`)}>
                    {" "}
                    <img loading="lazy" decoding="async" src={m?.icon} alt="" style={st({ width: "28px", height: "28px", imageRendering: "pixelated" })} />
                    {" "}
                  </span>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
            <div data-ore-list="1" style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,270px),1fr))", gap: "18px", padding: "4px" })}>
              {" "}
              {arr(v.ores).map((o, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div className="scp8" data-reveal={o?.delay} style={st({ display: "flex", gap: "16px", alignItems: "center", padding: "16px 18px", background: "var(--panel)", color: "var(--pink)", boxShadow: "inset 4px 4px 0 var(--hi),inset -4px -4px 0 var(--lo),0 0 0 4px #000", transition: "transform .2s" })}>
                    {" "}
                    <div style={st({ flex: "none", width: "64px", height: "64px", display: "grid", placeItems: "center", background: "#8b8b8b", boxShadow: "inset 3px 3px 0 #373737,inset -3px -3px 0 #fff" })}>
                      {" "}
                      <img loading="lazy" decoding="async" src={o?.icon} alt={o?.name} style={st({ width: "44px", height: "44px", imageRendering: "pixelated" })} />
                      {" "}
                    </div>
                    {" "}
                    <div style={st({ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0", flex: "1" })}>
                      {" "}
                      <div style={st({ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 8px", alignItems: "baseline" })}>
                        {" "}
                        <strong style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "20px" })}>
                          {ti(o?.name)}
                        </strong>
                        {" "}
                        <span style={st({ flex: "none", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "14px", padding: "2px 8px", background: "#000", color: "var(--gold)" })}>
                          {"Y "}{ti(o?.y)}
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <span style={st({ fontSize: "13px", lineHeight: "1.4", opacity: ".9" })}>
                        {ti(o?.use)}
                      </span>
                      {" "}
                      <span style={st({ fontSize: "12px", fontWeight: "700", opacity: ".75" })}>
                        {"Picareta mínima: "}{ti(o?.tool)}
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
        </section>
        <section id="mundos" style={st({ background: "var(--s2)", color: "var(--sink)", borderTop: "4px solid #000", borderBottom: "4px solid #000", transition: "background .6s" })}>
          {" "}
          <div style={st({ maxWidth: "1240px", margin: "0 auto", padding: "96px clamp(16px,4vw,40px)" })}>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "44px" })}>
              {" "}
              <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "#3fd8d4" })}>■ AS TRÊS DIMENSÕES</span>
              {" "}
              <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", textWrap: "balance" })}>Três mundos. Uma jornada.</h2>
              {" "}
            </div>
            {" "}
            <div style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "24px", padding: "4px" })}>
              {" "}
              {arr(v.dims).map((d, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <article className="scpb" data-reveal={d?.delay} style={st({ display: "flex", flexDirection: "column", background: "var(--panel)", color: "var(--pink)", boxShadow: "inset 4px 4px 0 var(--hi),inset -4px -4px 0 var(--lo),0 0 0 4px #000", transition: "transform .3s cubic-bezier(.3,1.6,.5,1)" })}>
                    {" "}
                    <div style={st({ position: "relative", aspectRatio: "16/10", overflow: "hidden", boxShadow: "inset 0 -4px 0 #000" })}>
                      {" "}
                      <img className="scpc" loading="lazy" decoding="async" src={d?.img} alt={d?.name} style={st({ width: "100%", height: "100%", objectFit: "cover", transition: "transform .8s cubic-bezier(.2,.7,.2,1)" })} />
                      {" "}
                      <span style={css(`position:absolute;left:12px;top:12px;padding:4px 10px;background:${s(d?.color)};color:#000;font-family:'Pixelify Sans',monospace;font-weight:700;font-size:14px;box-shadow:0 0 0 3px #000`)}>
                        {ti(d?.tag)}
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={st({ display: "flex", flexDirection: "column", gap: "12px", padding: "20px 22px 24px" })}>
                      {" "}
                      <h3 style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "32px" })}>
                        {ti(d?.name)}
                      </h3>
                      {" "}
                      <p style={st({ margin: "0", fontSize: "15px", lineHeight: "1.55", opacity: ".9" })}>
                        {ti(d?.text)}
                      </p>
                      {" "}
                      <div style={st({ display: "grid", gap: "8px", fontSize: "14px", lineHeight: "1.45" })}>
                        {" "}
                        <div style={st({ display: "flex", gap: "10px" })}>
                          <strong style={css(`flex:none;width:92px;font-family:'Pixelify Sans',monospace;font-size:15px;color:${s(d?.labelColor)};text-shadow:var(--labelShadow,1px 1px 0 #000)`)}>COMO IR</strong>
                          <span>
                            {ti(d?.how)}
                          </span>
                        </div>
                        {" "}
                        <div style={st({ display: "flex", gap: "10px" })}>
                          <strong style={css(`flex:none;width:92px;font-family:'Pixelify Sans',monospace;font-size:15px;color:${s(d?.labelColor)};text-shadow:var(--labelShadow,1px 1px 0 #000)`)}>PERIGOS</strong>
                          <span>
                            {ti(d?.risk)}
                          </span>
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </article>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
        </section>
        <section id="mobs" style={st({ maxWidth: "1240px", margin: "0 auto", padding: "110px clamp(16px,4vw,40px)" })}>
          {" "}
          <div style={st({ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "44px" })}>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "18px" })}>
              {" "}
              <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "var(--eyebrow)" })}>■ MOBS E CRIATURAS</span>
              {" "}
              <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", maxWidth: "640px", textWrap: "balance" })}>Conheça quem divide o mundo com você.</h2>
              {" "}
            </div>
            {" "}
            <div data-reveal="160" style={st({ display: "flex", gap: "12px", flexWrap: "wrap", padding: "4px" })}>
              {" "}
              {arr(v.mobFilters).map((f, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <button className="scp2" onClick={f?.onClick} style={css(`font-family:'Pixelify Sans',monospace;font-weight:700;font-size:17px;padding:9px 16px;cursor:pointer;border:0;background:${s(f?.bg)};color:${s(f?.fg)};box-shadow:inset 3px 3px 0 rgba(255,255,255,.35),inset -3px -3px 0 rgba(0,0,0,.35),0 0 0 3px #000;transition:transform .15s`)}>
                    {ti(f?.name)}
                  </button>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div data-mob-grid="1" style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,250px),1fr))", gap: "24px", padding: "4px" })}>
            {" "}
            {arr(v.mobs).map((m, $index) => (
              <Fragment key={$index}>
                {" "}
                <article className="scpd" style={st({ display: "flex", flexDirection: "column", background: "var(--panel)", color: "var(--pink)", boxShadow: "inset 4px 4px 0 var(--hi),inset -4px -4px 0 var(--lo),0 0 0 4px #000", transition: "transform .25s cubic-bezier(.3,1.6,.5,1)" })}>
                  {" "}
                  <div data-mob-img="1" style={css(`height:190px;display:grid;place-items:center;padding:18px;background:${s(m?.bg)};box-shadow:inset 0 -4px 0 #000;overflow:hidden`)}>
                    {" "}
                    <img loading="lazy" decoding="async" data-bob="1" src={m?.img} alt={m?.name} referrerPolicy="no-referrer" style={st({ maxWidth: "100%", maxHeight: "150px", objectFit: "contain", filter: "drop-shadow(6px 6px 0 rgba(0,0,0,.35))" })} />
                    {" "}
                  </div>
                  {" "}
                  <div data-mob-body="1" style={st({ display: "flex", flexDirection: "column", gap: "10px", padding: "18px 20px 22px" })}>
                    {" "}
                    <div data-mob-tags="1" style={st({ display: "flex", gap: "8px", flexWrap: "wrap", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "14px" })}>
                      {" "}
                      <span style={css(`padding:3px 8px;background:${s(m?.tagBg)};color:#000`)}>
                        {ti(m?.type)}
                      </span>
                      {" "}
                      <span style={st({ padding: "3px 8px", background: "#000", color: "#fff7ea" })}>
                        {ti(m?.dim)}
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <h3 data-mob-name="1" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "28px" })}>
                      {ti(m?.name)}
                    </h3>
                    {" "}
                    <p data-mob-text="1" style={st({ margin: "0", fontSize: "15px", lineHeight: "1.5", opacity: ".9", textWrap: "pretty" })}>
                      {ti(m?.text)}
                    </p>
                    {" "}
                  </div>
                  {" "}
                </article>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
        </section>
        <section id="magia" style={st({ background: "var(--s2)", color: "var(--sink)", borderTop: "4px solid #000", borderBottom: "4px solid #000", transition: "background .6s" })}>
          {" "}
          <div style={st({ maxWidth: "1240px", margin: "0 auto", padding: "96px clamp(16px,4vw,40px)" })}>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "44px" })}>
              {" "}
              <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "#d8bfff" })}>■ ENCANTAMENTOS E POÇÕES</span>
              {" "}
              <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", textWrap: "balance" })}>Poder extra para a jornada.</h2>
              {" "}
            </div>
            {" "}
            <div style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "40px", alignItems: "start" })}>
              {" "}
              <div style={st({ display: "flex", flexDirection: "column", gap: "14px" })}>
                {" "}
                <h3 data-reveal="0" style={st({ margin: "0 0 6px", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "28px" })}>Encantamentos essenciais</h3>
                {" "}
                <div style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,190px),1fr))", gap: "14px", padding: "4px" })}>
                  {" "}
                  {arr(v.enchants).map((e, $index) => (
                    <Fragment key={$index}>
                      {" "}
                      <div data-reveal={e?.delay} data-shimmer="1" style={st({ display: "flex", flexDirection: "column", gap: "6px", padding: "14px 16px", background: "linear-gradient(110deg,#2a1640 0%,#3d1f63 45%,#6a3fb0 50%,#3d1f63 55%,#2a1640 100%)", backgroundSize: "300% 100%", color: "#f3eaff", boxShadow: "inset 3px 3px 0 rgba(255,255,255,.18),inset -3px -3px 0 rgba(0,0,0,.4),0 0 0 3px #000" })}>
                        {" "}
                        <div style={st({ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "baseline" })}>
                          {" "}
                          <strong style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "18px" })}>
                            {ti(e?.name)}
                          </strong>
                          {" "}
                          <span style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "15px", color: "#d9b8ff" })}>
                            {ti(e?.lvl)}
                          </span>
                          {" "}
                        </div>
                        {" "}
                        <span style={st({ fontSize: "13px", lineHeight: "1.4", opacity: ".9" })}>
                          {ti(e?.text)}
                        </span>
                        {" "}
                        <span style={st({ fontSize: "11px", fontWeight: "700", letterSpacing: ".06em", opacity: ".7" })}>
                          {ti(e?.on)}
                        </span>
                        {" "}
                      </div>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={st({ display: "flex", flexDirection: "column", gap: "14px" })}>
                {" "}
                <h3 data-reveal="0" style={st({ margin: "0 0 6px", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "28px" })}>Poções que salvam vidas</h3>
                {" "}
                <div style={st({ display: "flex", flexDirection: "column", gap: "14px", padding: "4px" })}>
                  {" "}
                  {arr(v.potions).map((p, $index) => (
                    <Fragment key={$index}>
                      {" "}
                      <div data-reveal={p?.delay} style={st({ display: "flex", flexWrap: "wrap", gap: "10px 14px", alignItems: "center", padding: "12px 16px", background: "var(--panel)", color: "var(--pink)", boxShadow: "inset 4px 4px 0 var(--hi),inset -4px -4px 0 var(--lo),0 0 0 4px #000" })}>
                        {" "}
                        <span data-bubble="1" style={css(`flex:none;width:38px;height:38px;background:${s(p?.color)};box-shadow:inset 4px 4px 0 rgba(255,255,255,.4),inset -4px -4px 0 rgba(0,0,0,.35),0 0 0 3px #000,0 0 18px ${s(p?.color)}`)} />
                        {" "}
                        <div style={st({ display: "flex", flexDirection: "column", gap: "3px", flex: "1 1 180px", minWidth: "0" })}>
                          {" "}
                          <strong style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "18px" })}>
                            {ti(p?.name)}
                          </strong>
                          {" "}
                          <span style={st({ fontSize: "13px", lineHeight: "1.4", opacity: ".9" })}>
                            {ti(p?.text)}
                          </span>
                          {" "}
                        </div>
                        {" "}
                        <span style={st({ flex: "none", fontSize: "12px", fontWeight: "700", textAlign: "right", maxWidth: "120px", opacity: ".85" })}>
                          {ti(p?.ing)}
                        </span>
                        {" "}
                      </div>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                  <p style={st({ margin: "6px 0 0", fontSize: "13px", opacity: ".8" })}>Todas partem de uma Poção Estranha: garrafa de água + fungo do Nether no suporte de poções.</p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
        </section>
        <section id="chefes" style={st({ background: "var(--s1)", color: "var(--sink)", borderTop: "4px solid #000", borderBottom: "4px solid #000", transition: "background .6s" })}>
          {" "}
          <div style={st({ maxWidth: "1240px", margin: "0 auto", padding: "96px clamp(16px,4vw,40px)" })}>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "44px" })}>
              {" "}
              <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "var(--gold)" })}>■ CHEFES E AMEAÇAS</span>
              {" "}
              <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", textWrap: "balance" })}>Os maiores desafios do jogo.</h2>
              {" "}
            </div>
            {" "}
            <div style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "24px", padding: "4px" })}>
              {" "}
              {arr(v.bosses).map((b, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <article className="scpb" data-reveal={b?.delay} style={st({ display: "flex", flexDirection: "column", background: "var(--panel)", color: "var(--pink)", boxShadow: "inset 4px 4px 0 var(--hi),inset -4px -4px 0 var(--lo),0 0 0 4px #000", transition: "transform .3s cubic-bezier(.3,1.6,.5,1)" })}>
                    {" "}
                    <div style={css(`height:200px;display:grid;place-items:center;padding:16px;background:radial-gradient(circle at 50% 60%,${s(b?.glow)},#0d0404 75%);box-shadow:inset 0 -4px 0 #000;overflow:hidden`)}>
                      {" "}
                      <img loading="lazy" decoding="async" data-bob="1" src={b?.img} alt={b?.name} style={st({ maxWidth: "100%", maxHeight: "170px", objectFit: "contain", filter: "drop-shadow(0 10px 14px rgba(0,0,0,.6))" })} />
                      {" "}
                    </div>
                    {" "}
                    <div style={st({ display: "flex", flexDirection: "column", gap: "10px", padding: "18px 20px 22px" })}>
                      {" "}
                      <h3 style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "28px" })}>
                        {ti(b?.name)}
                      </h3>
                      {" "}
                      <div style={st({ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "14px" })}>
                        {" "}
                        <span style={st({ color: "var(--hp,#ff6a4a)" })}>
                          {"♥ "}{ti(b?.hp)}
                        </span>
                        {" "}
                        <span style={st({ flex: "1", height: "10px", background: "#000", padding: "2px" })}>
                          <span style={css(`display:block;height:100%;width:${s(b?.hpPct)};background:linear-gradient(90deg,#c0182b,#ff6a4a)`)} />
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <p style={st({ margin: "0", fontSize: "14px", lineHeight: "1.5", opacity: ".9" })}>
                        {ti(b?.text)}
                      </p>
                      {" "}
                      <div style={st({ display: "grid", gap: "6px", fontSize: "13px", lineHeight: "1.4", paddingTop: "8px", borderTop: "2px dashed var(--hi)" })}>
                        {" "}
                        <span>
                          <strong style={st({ fontFamily: "'Pixelify Sans',monospace" })}>ONDE:</strong>
                          {" "}{ti(b?.where)}
                        </span>
                        {" "}
                        <span>
                          <strong style={st({ fontFamily: "'Pixelify Sans',monospace" })}>RECOMPENSA:</strong>
                          {" "}{ti(b?.drop)}
                        </span>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </article>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
        </section>
        <section id="quiz" style={st({ maxWidth: "1240px", margin: "0 auto", padding: "110px clamp(16px,4vw,40px)", position: "relative", isolation: "isolate" })}>
          {/* Kokonut UI Dot Field: fundo de píxeis que ondula com o rato e os cliques (só nesta secção) */}
          <DotField background color="var(--muted)" intensity={0.5} reduced={v.animation === "Desligado"} />
          {" "}
          <div style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "48px", alignItems: "start" })}>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "18px" })}>
              {" "}
              <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "var(--eyebrow)" })}>■ QUIZ</span>
              {" "}
              <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", textWrap: "balance" })}>Você está pronto para o Nether?</h2>
              {" "}
              <p data-reveal="160" style={st({ margin: "0", fontSize: "18px", maxWidth: "440px", color: "var(--muted)" })}>
                {ti(v.quizWord)}{" perguntas. Sem consultar a wiki."}
              </p>
              {" "}
              <img loading="lazy" decoding="async" data-quiz-dragon="1" data-reveal="240" data-bob="1" src="./assets/images/Ender_Dragon.png" alt="Dragão do Ender" referrerPolicy="no-referrer" style={st({ width: "min(100%,380px)", marginTop: "12px", filter: "drop-shadow(8px 8px 0 rgba(0,0,0,.4))" })} />
              {" "}
            </div>
            {" "}
            <div data-reveal="200" style={st({ position: "relative", padding: "clamp(22px,4vw,40px)", background: "var(--panel)", color: "var(--pink)", boxShadow: "inset 5px 5px 0 var(--hi),inset -5px -5px 0 var(--lo),0 0 0 5px #000", display: "flex", flexDirection: "column", gap: "22px" })}>
              {" "}
              <div id="ne2-fx" style={st({ position: "absolute", inset: "0", pointerEvents: "none", overflow: "visible", zIndex: "5" })} />
              {" "}
              {v.quizActive ? (
                <>
                  {" "}
                  <div style={st({ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "18px" })}>
                    {" "}
                    <span>
                      {"PERGUNTA "}{ti(v.qNum)}{"/"}{ti(v.qTotal)}
                    </span>
                    {" "}
                    <span data-xp="1" style={st({ color: "var(--xp,var(--grass))" })}>
                      {"XP "}{ti(v.score)}
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div style={st({ height: "18px", background: "#000", padding: "3px" })}>
                    {" "}
                    <div style={css(`height:100%;width:${s(v.progress)};background:repeating-linear-gradient(90deg,#7ee03a 0 10px,#5fb233 10px 12px);box-shadow:0 0 10px #7ee03a;transition:width .5s steps(8)`)} />
                    {" "}
                  </div>
                  {" "}
                  <h3 data-quizswap="1" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(26px,3vw,34px)", lineHeight: "1.15", textWrap: "balance" })}>
                    {ti(v.question?.q)}
                  </h3>
                  {" "}
                  <div data-quizswap="1" data-quizopts="1" style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "14px", padding: "4px" })}>
                    {" "}
                    {arr(v.options).map((o, $index) => (
                      <Fragment key={$index}>
                        {" "}
                        <button className="scp2" onClick={o?.onClick} style={css(`text-align:left;padding:14px 18px;cursor:pointer;border:0;font-family:'Rubik',sans-serif;font-size:16px;font-weight:700;background:${s(o?.bg)};color:${s(o?.fg)};opacity:${s(o?.opacity)};box-shadow:inset 3px 3px 0 rgba(255,255,255,.45),inset -3px -3px 0 rgba(0,0,0,.35),0 0 0 3px #000;transform:scale(${s(o?.scale)});transition:all .3s cubic-bezier(.3,1.6,.5,1)`)}>
                          {ti(o?.label)}
                        </button>
                        {" "}
                      </Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                  {v.answered ? (
                    <>
                      {" "}
                      <div style={st({ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center", justifyContent: "space-between" })}>
                        {" "}
                        <p style={st({ margin: "0", fontSize: "16px", maxWidth: "420px" })}>
                          {ti(v.question?.why)}
                        </p>
                        {" "}
                        <button className="scp2" onClick={v.next} style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "19px", padding: "12px 22px", cursor: "pointer", border: "0", background: "var(--grass)", color: "#0f2208", boxShadow: "inset 3px 3px 0 rgba(255,255,255,.4),inset -3px -3px 0 rgba(0,0,0,.35),0 0 0 3px #000", transition: "transform .15s" })}>
                          {ti(v.nextLabel)}
                        </button>
                        {" "}
                      </div>
                      {" "}
                    </>
                  ) : null}
                  {" "}
                </>
              ) : null}
              {" "}
              {v.quizDone ? (
                <>
                  {" "}
                  <div style={st({ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" })}>
                    {" "}
                    <span style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(70px,9vw,120px)", lineHeight: ".9", color: "var(--gold)", textShadow: "6px 6px 0 #000" })}>
                      {ti(v.score)}{"/"}{ti(v.qTotal)}
                    </span>
                    {" "}
                    <h3 style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "34px" })}>
                      {ti(v.verdict?.title)}
                    </h3>
                    {" "}
                    <p style={st({ margin: "0", fontSize: "17px", maxWidth: "460px" })}>
                      {ti(v.verdict?.text)}
                    </p>
                    {" "}
                    <button onClick={v.restart} style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "19px", padding: "12px 22px", cursor: "pointer", border: "0", background: "var(--grass)", color: "#0f2208", boxShadow: "inset 3px 3px 0 rgba(255,255,255,.4),inset -3px -3px 0 rgba(0,0,0,.35),0 0 0 3px #000" })}>↻ Jogar de novo</button>
                    {" "}
                  </div>
                  {" "}
                </>
              ) : null}
              {" "}
            </div>
            {" "}
          </div>
        </section>
        <section id="comandos" style={st({ background: "var(--s2)", color: "var(--sink)", borderTop: "4px solid #000", borderBottom: "4px solid #000", transition: "background .6s" })}>
          {" "}
          <div style={st({ maxWidth: "1240px", margin: "0 auto", padding: "96px clamp(16px,4vw,40px)" })}>
            {" "}
            <div style={st({ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "44px" })}>
              {" "}
              <div style={st({ display: "flex", flexDirection: "column", gap: "18px" })}>
                {" "}
                <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "#3fd8d4" })}>■ COMANDOS ÚTEIS</span>
                {" "}
                <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", textWrap: "balance", maxWidth: "720px" })}>Atalhos para quem manda no mundo.</h2>
                {" "}
              </div>
              {" "}
              <p data-reveal="160" style={st({ margin: "0", fontSize: "15px", maxWidth: "340px", opacity: ".85" })}>Funcionam com trapaças (cheats) ativadas. Sintaxe da edição Java — clique para copiar.</p>
              {" "}
            </div>
            {" "}
            <div style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "16px", padding: "4px" })}>
              {" "}
              {arr(v.cmds).map((c, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <button className="scp8" data-reveal={c?.delay} onClick={c?.onClick} style={st({ display: "flex", flexDirection: "column", gap: "8px", textAlign: "left", padding: "16px 18px", cursor: "pointer", border: "0", background: "#0d0d0d", color: "#e8e8e8", boxShadow: "inset 3px 3px 0 #2a2a2a,inset -3px -3px 0 #000,0 0 0 3px #000", transition: "transform .2s" })}>
                    {" "}
                    <div style={st({ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", width: "100%" })}>
                      {" "}
                      <code style={st({ fontFamily: "'Pixelify Code',ui-monospace,Consolas,monospace", fontSize: "18px", color: "#7ee03a", wordBreak: "break-all" })}>
                        {ti(c?.cmd)}
                      </code>
                      {" "}
                      <span data-badge="1" style={css(`flex:none;font-family:'Pixelify Sans',monospace;font-weight:700;font-size:13px;padding:3px 8px;background:${s(c?.badgeBg)};color:#000`)}>
                        {ti(c?.badge)}
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <span style={st({ fontSize: "14px", lineHeight: "1.45", color: "#bdbdbd" })}>
                      {ti(c?.text)}
                    </span>
                    {" "}
                  </button>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
        </section>
        <section id="galeria" style={st({ maxWidth: "1240px", margin: "0 auto", padding: "110px clamp(16px,4vw,40px)" })}>
          {" "}
          <div style={st({ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "40px" })}>
            {" "}
            <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "var(--eyebrow)" })}>■ GALERIA</span>
            {" "}
            <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1" })}>Paisagens que valem a viagem.</h2>
            {" "}
          </div>
          {" "}
          {/* Kokonut UI Lightbox Grid: a grelha é a mesma de antes; cada foto abre em grande ao clicar */}
          <LightboxGrid
            images={arr(v.gallery).map((g) => ({ src: g?.img, alt: g?.name, caption: g?.name }))}
            reduced={v.animation === "Desligado"}
            renderGrid={({ thumbRef, open, labels }) => (
          <div style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gridAutoRows: "240px", gap: "20px", padding: "6px" })}>
            {" "}
            {arr(v.gallery).map((g, $index) => (
              <Fragment key={$index}>
                {" "}
                <figure data-reveal={g?.delay} style={css(`position:relative;margin:0;overflow:hidden;grid-row:${s(g?.span)};box-shadow:0 0 0 5px #000`)}>
                  {" "}
                  <button type="button" data-gallery-open="1" ref={thumbRef($index)} onClick={() => open($index)} aria-label={labels.open({ src: g?.img, alt: g?.name })} style={st({ display: "block", width: "100%", height: "100%", padding: "0", margin: "0", border: "0", background: "none", cursor: "zoom-in" })}>
                    <img className="scpe" loading="lazy" decoding="async" src={g?.img} alt={g?.name} referrerPolicy="no-referrer" style={st({ width: "100%", height: "100%", objectFit: "cover", transition: "transform .6s cubic-bezier(.2,.7,.2,1)" })} />
                  </button>
                  {" "}
                  <figcaption style={st({ position: "absolute", left: "12px", bottom: "12px", padding: "4px 10px", background: "#000", color: "#fff7ea", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "16px", pointerEvents: "none" })}>
                    {ti(g?.name)}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
            )}
          />
        </section>
        <section id="novidades" style={st({ background: "var(--s1)", color: "var(--sink)", borderTop: "4px solid #000", borderBottom: "4px solid #000", transition: "background .6s" })}>
          {" "}
          <div style={st({ maxWidth: "1240px", margin: "0 auto", padding: "96px clamp(16px,4vw,40px)" })}>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "40px" })}>
              {" "}
              <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "var(--gold)" })}>■ ATUALIZAÇÕES</span>
              {" "}
              <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1", textWrap: "balance" })}>O mundo não para de crescer.</h2>
              {" "}
            </div>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "20px", padding: "4px" })}>
              {" "}
              {arr(v.updates).map((u, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div data-reveal={u?.delay} style={st({ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "12px 32px", alignItems: "center", padding: "24px 28px", background: "var(--panel)", color: "var(--pink)", boxShadow: "inset 4px 4px 0 var(--hi),inset -4px -4px 0 var(--lo),0 0 0 4px #000" })}>
                    {" "}
                    <div style={st({ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" })}>
                      {" "}
                      <span data-blink={u?.blink} style={css(`font-family:'Pixelify Sans',monospace;font-weight:700;font-size:15px;padding:3px 10px;background:${s(u?.tagBg)};color:#000`)}>
                        {ti(u?.status)}
                      </span>
                      {" "}
                      <span style={st({ fontSize: "14px", fontWeight: "500", opacity: ".8" })}>
                        {ti(u?.date)}
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <h3 style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(26px,2.8vw,34px)" })}>
                      {ti(u?.name)}
                    </h3>
                    {" "}
                    <p style={st({ margin: "0", fontSize: "16px", lineHeight: "1.5", opacity: ".9", textWrap: "pretty" })}>
                      {ti(u?.text)}
                    </p>
                    {" "}
                  </div>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
        </section>
        <section id="faq" style={st({ background: "var(--s2)", color: "var(--sink)", borderTop: "4px solid #000", transition: "background .6s" })}>
          {" "}
          <div style={st({ maxWidth: "1240px", margin: "0 auto", padding: "96px clamp(16px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "48px", alignItems: "start" })}>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "18px" })}>
              {" "}
              <span data-reveal="0" style={st({ fontFamily: "'Pixelify Sans',monospace", fontSize: "16px", fontWeight: "700", letterSpacing: ".14em", color: "#3fd8d4" })}>■ FAQ</span>
              {" "}
              <h2 data-reveal="80" style={st({ margin: "0", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1" })}>Perguntas frequentes.</h2>
              {" "}
            </div>
            {" "}
            <div style={st({ display: "flex", flexDirection: "column", gap: "16px", padding: "4px" })}>
              {" "}
              {arr(v.faqs).map((f, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div data-reveal={f?.delay} style={st({ background: "#c6c6c6", color: "#1d1d1d", boxShadow: "inset 4px 4px 0 #fff,inset -4px -4px 0 #555,0 0 0 4px #000" })}>
                    {" "}
                    <button data-faq-q="1" onClick={f?.onClick} style={st({ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", textAlign: "left", padding: "18px 22px", background: "transparent", border: "0", cursor: "pointer", color: "#1d1d1d", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "20px" })}>
                      {" "}
                      <span>
                        {ti(f?.q)}
                      </span>
                      {" "}
                      <span style={css(`flex:none;width:32px;height:32px;display:grid;place-items:center;background:#000;color:#fff;font-size:22px;transform:rotate(${s(f?.rot)});transition:transform .3s cubic-bezier(.3,1.6,.5,1)`)}>+</span>
                      {" "}
                    </button>
                    {" "}
                    {f?.open ? (
                      <>
                        {" "}
                        <p data-faq-a="1" style={st({ margin: "0", padding: "0 22px 20px", fontSize: "16px", lineHeight: "1.55", maxWidth: "600px" })}>
                          {ti(f?.a)}
                        </p>
                        {" "}
                      </>
                    ) : null}
                    {" "}
                  </div>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
        </section>
      </main>
      <footer style={st({ background: "#120a1a", color: "#fff7ea", borderTop: "4px solid #000" })}>
        {" "}
        <div style={st({ height: "16px", background: "repeating-linear-gradient(90deg,#8b3dff 0 16px,#5a1fb0 16px 32px)" })} />
        {" "}
        <div style={st({ maxWidth: "1240px", margin: "0 auto", padding: "56px clamp(16px,4vw,40px)", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", alignItems: "flex-end" })}>
          {" "}
          <div style={st({ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "560px" })}>
            {" "}
            <span style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1" })}>NETHER EXPLORER</span>
            {" "}
            <p style={st({ margin: "0", fontSize: "14px", opacity: ".75" })}>
              {"Site de fã, sem afiliação com a Mojang Studios ou a Microsoft. Minecraft é marca registrada de seus respectivos donos. Imagens: "}
              <a href="https://minecraft.wiki" style={st({ color: "#c9a4ff" })}>Minecraft Wiki</a>
              {", sob a licença "}
              <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/deed.pt-br" style={st({ color: "#c9a4ff" })}>CC BY-NC-SA 3.0</a>
              {", salvo indicação na página de cada arquivo."}
            </p>
            {" "}
          </div>
          {" "}
          <a className="scpf" href="#topo" style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "19px", padding: "12px 22px", textDecoration: "none", background: "#8b3dff", color: "#fff", boxShadow: "inset 3px 3px 0 rgba(255,255,255,.35),inset -3px -3px 0 rgba(0,0,0,.4),0 0 0 3px #000", transition: "transform .15s" })}>▲ Voltar ao topo</a>
          {" "}
          <details id="creditos" style={st({ flexBasis: "100%", borderTop: "2px solid rgba(255,247,234,.15)", paddingTop: "20px" })}>
            {" "}
            <summary style={st({ cursor: "pointer", width: "max-content", maxWidth: "100%", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "17px", color: "#c9a4ff" })}>Créditos das imagens</summary>
            {" "}
            <p style={st({ margin: "14px 0 16px", fontSize: "14px", lineHeight: "1.55", opacity: ".75", maxWidth: "70ch" })}>Cada imagem abaixo leva à página do arquivo original na Minecraft Wiki, onde estão os autores e a licença. As imagens de biomas e estruturas foram reduzidas ou convertidas para JPG; essas versões seguem a mesma licença CC BY-NC-SA 3.0.</p>
            {" "}
            <ul style={st({ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,220px),1fr))", gap: "6px 24px", fontSize: "13px", lineHeight: "1.5" })}>
              {" "}
              {arr(v.credits).map((c, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <li>
                    <a href={c?.url} style={st({ color: "#c9a4ff", overflowWrap: "anywhere" })}>
                      {ti(c?.name)}
                    </a>
                  </li>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </ul>
            {" "}
          </details>
          {" "}
        </div>
      </footer>
      {v.toastOn ? (
        <>
          {" "}
          <div data-toast="1" role="status" style={st({ position: "fixed", right: "16px", bottom: "16px", zIndex: "90", display: "flex", gap: "14px", alignItems: "center", maxWidth: "min(380px,calc(100vw - 32px))", padding: "12px 12px 12px 12px", background: "#1d1216", color: "#fff7ea", boxShadow: "inset 3px 3px 0 #4a3040,inset -3px -3px 0 #000,0 0 0 3px #000,8px 8px 0 3px rgba(0,0,0,.4)" })}>
            {" "}
            <span style={st({ flex: "none", width: "52px", height: "52px", display: "grid", placeItems: "center", background: "#8b8b8b", boxShadow: "inset 3px 3px 0 #373737,inset -3px -3px 0 #fff" })}>
              <img src={v.toast?.icon} alt="" style={st({ width: "36px", height: "36px", imageRendering: "pixelated" })} />
            </span>
            {" "}
            <span style={st({ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0", flex: "1" })}>
              {" "}
              <span style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "13px", letterSpacing: ".1em", color: "#f5c518" })}>CONQUISTA DESBLOQUEADA</span>
              {" "}
              <strong style={st({ fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "19px", lineHeight: "1.1" })}>
                {ti(v.toast?.title)}
              </strong>
              {" "}
              <span style={st({ fontSize: "14px", lineHeight: "1.35", color: "#dcccbf" })}>
                {ti(v.toast?.text)}
              </span>
              {" "}
            </span>
            {" "}
            <button onClick={v.closeToast} aria-label="Fechar aviso de conquista" style={st({ flex: "none", alignSelf: "flex-start", width: "32px", height: "32px", display: "grid", placeItems: "center", padding: "0", border: "0", cursor: "pointer", background: "#c6c6c6", color: "#1d1d1d", fontFamily: "'Pixelify Sans',monospace", fontWeight: "700", fontSize: "18px", boxShadow: "inset 2px 2px 0 #fff,inset -2px -2px 0 #555,0 0 0 2px #000" })}>×</button>
            {" "}
          </div>
        </>
      ) : null}
    </div>
    </>
  )
}
