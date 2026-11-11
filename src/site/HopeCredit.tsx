import { HOPE } from './hope'

const PIXEL = "'Pixelify Sans',monospace"

// Aviso no rodapé: este site é um projeto demonstrativo feito pela Hope
export function HopeCredit() {
  const link = (
    <span style={{ fontFamily: PIXEL, fontWeight: 700, fontSize: 17 }}>Feito pela Hope · ver mais projetos</span>
  )
  return (
    <div
      data-hope="1"
      style={{
        flexBasis: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        borderTop: '2px solid rgba(255,247,234,.15)',
        paddingTop: 20,
      }}
    >
      {HOPE.logo ? (
        <img
          src={HOPE.logo}
          alt="Logo da Hope"
          width={40}
          height={40}
          style={{ flex: 'none', width: 40, height: 40, objectFit: 'contain', }}
        />
      ) : null}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
        <span style={{ fontFamily: PIXEL, fontWeight: 700, fontSize: 13, letterSpacing: '.1em', opacity: 0.75 }}>
          Projeto demonstrativo da Hope
        </span>
        {HOPE.url ? (
          <a className="scpf" href={HOPE.url} target="_blank" rel="noopener" style={{ color: '#c9a4ff', textDecoration: 'none', width: 'max-content', maxWidth: '100%' }}>
            {link}
          </a>
        ) : (
          <span style={{ color: '#c9a4ff' }}>{link}</span>
        )}
      </div>
    </div>
  )
}
