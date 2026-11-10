import { createRoot } from 'react-dom/client'
import './index.css'
import './site/base.css'
import './site/pseudo.css'
import './site/site.css'
import './site/kokonut.css'
import { LogicHost } from './dc/runtime'
import { Component as SiteLogic } from './site/logic'
import { renderTemplate } from './site/template'

// Opções do site (antes no data-props do index.html), com os mesmos valores
const options = { animation: 'Intenso', startMode: 'Noite', showMarquee: true }

// Sem StrictMode de propósito: ele repetiria o arranque das animações em desenvolvimento
createRoot(document.getElementById('dc-root')!).render(
  <LogicHost name="index" Logic={SiteLogic} userProps={options} render={renderTemplate} />,
)
