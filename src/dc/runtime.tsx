// Substituto do dc-runtime.js antigo, só com o que o site usa.
// Reproduz o comportamento do runtime para a lógica (src/site/logic.ts) correr sem alterações:
// estado atualizado na hora, componentDidUpdate só com as props anteriores, e erros
// das animações apanhados (vão para a consola) em vez de derrubarem a página.
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, isValidElement, type CSSProperties, type ReactNode } from 'react'

type Props = Record<string, any>

// Base da classe de lógica (antes DCLogic/StreamableLogic dentro do runtime)
export class DCLogic {
  props: Props
  state: any = {}
  __host: LogicHost | undefined
  constructor(props?: Props) {
    this.props = props || {}
  }
  setState(update: any, cb?: () => void) {
    this.__host && this.__host.__setLogicState(update, cb)
  }
  forceUpdate() {
    this.__host && this.__host.forceUpdate()
  }
  componentDidMount() {}
  componentDidUpdate(_prevProps: Props) {}
  componentWillUnmount() {}
  /** Valores que o modelo da página lê */
  renderVals(): Props {
    return {}
  }
}

const msg = (e: unknown) => (e instanceof Error && e.message ? e.message : String(e))

type HostProps = {
  name: string
  /** A classe de lógica do site (sem tipos nesta fase) */
  Logic: new (props: Props) => any
  userProps: Props
  render: (vals: any) => ReactNode
}

// Componente que segura a lógica e desenha o modelo (antes StreamableComponent)
export class LogicHost extends Component<HostProps, { __v: number; __err: string | null }> {
  logic: DCLogic
  ctorError: string | null = null
  constructor(props: HostProps) {
    super(props)
    this.state = { __v: 0, __err: null }
    try {
      this.logic = new props.Logic(props.userProps)
    } catch (e) {
      console.error(e)
      this.ctorError = props.name + ': ' + msg(e)
      this.logic = new DCLogic(props.userProps)
    }
    this.logic.__host = this
  }
  static getDerivedStateFromError(e: unknown) {
    return { __err: msg(e) }
  }
  componentDidCatch(e: unknown, info: { componentStack?: string | null }) {
    console.error('[dc-runtime] render error in <' + this.props.name + '>:', e, info?.componentStack || '')
  }
  __setLogicState(update: any, cb?: () => void) {
    const prev = this.logic.state
    const patch = typeof update === 'function' ? update(prev) : update
    this.logic.state = { ...prev, ...patch }
    this.setState((s) => ({ __v: s.__v + 1 }), cb)
  }
  componentDidMount() {
    try {
      this.logic.componentDidMount()
    } catch (e) {
      console.error(e)
    }
  }
  componentDidUpdate(prevProps: HostProps) {
    this.logic.props = this.props.userProps
    try {
      this.logic.componentDidUpdate(prevProps.userProps)
    } catch (e) {
      console.error(e)
    }
  }
  componentWillUnmount() {
    try {
      this.logic.componentWillUnmount()
    } catch (e) {
      console.error(e)
    }
  }
  render() {
    const { name, userProps } = this.props
    if (this.state.__err) {
      return (
        <div className="sc-host sc-has-error" data-sc-name={name}>
          <div className="sc-logic-error" data-omelette-chrome="">{name + ': ' + this.state.__err}</div>
        </div>
      )
    }
    this.logic.props = userProps
    let vals: Props = userProps
    let renderErr = this.ctorError
    try {
      vals = { ...userProps, ...(this.logic.renderVals() || {}) }
    } catch (e) {
      console.error(e)
      renderErr = name + '.renderVals(): ' + msg(e)
    }
    return (
      <div className={'sc-host' + (renderErr ? ' sc-has-error' : '')} data-sc-name={name}>
        {renderErr && <div className="sc-logic-error" data-omelette-chrome="">{renderErr}</div>}
        {this.props.render(vals)}
      </div>
    )
  }
}

// ---------- ajudantes usados pelo modelo (src/site/template.tsx)

/** Texto de estilo → objeto do React, com as mesmas regras do runtime antigo */
export function cssToObj(css: string): Record<string, string> {
  const o: Record<string, string> = {}
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':')
    if (i < 0) continue
    const prop = decl.slice(0, i).trim()
    o[prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())] = decl.slice(i + 1).trim()
  }
  return o
}

/** Estilo com valores preenchidos em tempo de execução */
export const css = (v: unknown): CSSProperties | undefined =>
  (typeof v === 'string' ? cssToObj(v) : (v as CSSProperties | undefined))

/** Estilo fixo (já convertido para objeto na migração) */
export const st = (o: Record<string, string>) => o as CSSProperties

/** Valor dentro de um atributo com texto à volta: vazio quando não existe */
export const s = (v: unknown) => v ?? ''

/** Lista para repetir; qualquer outra coisa vira lista vazia */
export const arr = (v: unknown): any[] => (Array.isArray(v) ? v : [])

/** Valor dentro do texto: igual ao runtime antigo (texto dentro de <span class="sc-interp">) */
export function ti(v: unknown): ReactNode {
  if (v === undefined) return null
  if (isValidElement(v) || Array.isArray(v)) return v as ReactNode
  if (v === null || typeof v === 'boolean') return null
  return <span className="sc-interp">{String(v)}</span>
}
