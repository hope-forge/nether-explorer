---
name: Nether Explorer
description: Guia de fã de Minecraft em página única, com visual de inventário de jogo em dois temas, Noite (Nether) e Dia (Overworld).
colors:
  laranja-lava: "#ff7a1a"
  brasa-clara: "#ff9a4a"
  verde-grama: "#5fb233"
  grama-funda: "#3f8a22"
  grama-sombra: "#2f6e16"
  verde-xp: "#7ee03a"
  ouro: "#f5c518"
  roxo-do-portal: "#8b3dff"
  portal-profundo: "#5a1fb0"
  lilas-ametista: "#c9a4ff"
  ciano-diamante: "#3fd8d4"
  vermelho-redstone: "#ff6a4a"
  terra: "#7a5232"
  pedra-da-interface: "#c6c6c6"
  pedra-luz: "#ffffff"
  pedra-sombra: "#555555"
  slot-cinza: "#8b8b8b"
  slot-fundo: "#373737"
  contorno: "#000000"
  tinta-na-pedra: "#1d1d1d"
  musgo-escuro: "#0f2208"
  pergaminho-claro: "#fff7ea"
  vazio-do-end: "#120a1a"
  bedrock: "#0d0d0d"
  bedrock-texto: "#e8e8e8"
  noite-ceu-alto: "#2a0606"
  noite-ceu-baixo: "#7a1a12"
  netherrack-queimado: "#1b0d0d"
  noite-tinta: "#f6e6d6"
  noite-tinta-suave: "#cdb7a5"
  noite-faixa-quente: "#4a1a1a"
  noite-faixa-fria: "#2b2433"
  noite-painel: "#3a2020"
  noite-painel-luz: "#6e3a3a"
  noite-painel-sombra: "#0d0404"
  dia-ceu-alto: "#2f7fd8"
  dia-ceu-baixo: "#6fb6ff"
  pergaminho: "#f3ecd9"
  dia-tinta: "#1d1a16"
  dia-tinta-suave: "#4b4336"
  tronco-de-carvalho: "#6b4528"
  pedra-lisa: "#4f4f56"
typography:
  display:
    fontFamily: "Pixelify Sans, monospace"
    fontSize: "clamp(48px, 7.6vw, 108px)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Pixelify Sans, monospace"
    fontSize: "clamp(38px, 5vw, 66px)"
    fontWeight: 700
    lineHeight: 1
  title-lg:
    fontFamily: "Pixelify Sans, monospace"
    fontSize: "clamp(34px, 4vw, 52px)"
    fontWeight: 700
    lineHeight: 1
  title:
    fontFamily: "Pixelify Sans, monospace"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1
  button:
    fontFamily: "Pixelify Sans, monospace"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1
  label:
    fontFamily: "Pixelify Sans, monospace"
    fontSize: "16px"
    fontWeight: 700
    letterSpacing: "0.14em"
  body-lead:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.6vw, 20px)"
    fontWeight: 500
    lineHeight: 1.55
  body:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0px"
spacing:
  margem-do-contorno: "4px"
  xs: "6px"
  sm: "10px"
  md: "18px"
  lg: "24px"
  xl: "48px"
  secao: "96px"
  secao-lg: "110px"
  calha: "clamp(16px, 4vw, 40px)"
components:
  button-primary:
    backgroundColor: "{colors.verde-grama}"
    textColor: "{colors.musgo-escuro}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 26px"
  button-secondary:
    backgroundColor: "{colors.pedra-da-interface}"
    textColor: "{colors.tinta-na-pedra}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 26px"
  button-portal:
    backgroundColor: "{colors.roxo-do-portal}"
    textColor: "{colors.pedra-luz}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 22px"
  tab:
    backgroundColor: "{colors.pedra-da-interface}"
    textColor: "{colors.tinta-na-pedra}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  tab-selected:
    backgroundColor: "{colors.ouro}"
    textColor: "{colors.tinta-na-pedra}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  chip-filter:
    backgroundColor: "{colors.pedra-da-interface}"
    textColor: "{colors.tinta-na-pedra}"
    rounded: "{rounded.none}"
    padding: "9px 16px"
  chip-filter-selected:
    backgroundColor: "{colors.ouro}"
    textColor: "{colors.tinta-na-pedra}"
    rounded: "{rounded.none}"
    padding: "9px 16px"
  panel-noite:
    backgroundColor: "{colors.noite-painel}"
    textColor: "{colors.noite-tinta}"
    rounded: "{rounded.none}"
    padding: "16px 20px"
  panel-dia:
    backgroundColor: "{colors.pedra-da-interface}"
    textColor: "{colors.tinta-na-pedra}"
    rounded: "{rounded.none}"
    padding: "16px 20px"
  nav-bar-noite:
    backgroundColor: "{colors.noite-painel-sombra}"
    textColor: "{colors.pergaminho-claro}"
    padding: "12px clamp(16px, 4vw, 40px)"
  nav-bar-dia:
    backgroundColor: "{colors.pedra-sombra}"
    textColor: "{colors.pergaminho-claro}"
    padding: "12px clamp(16px, 4vw, 40px)"
  quiz-option:
    backgroundColor: "{colors.pedra-da-interface}"
    textColor: "{colors.tinta-na-pedra}"
    rounded: "{rounded.none}"
    padding: "14px 18px"
  quiz-option-correct:
    backgroundColor: "{colors.verde-xp}"
    textColor: "{colors.tinta-na-pedra}"
    rounded: "{rounded.none}"
    padding: "14px 18px"
  quiz-option-wrong:
    backgroundColor: "{colors.vermelho-redstone}"
    textColor: "{colors.tinta-na-pedra}"
    rounded: "{rounded.none}"
    padding: "14px 18px"
  command-card:
    backgroundColor: "{colors.bedrock}"
    textColor: "{colors.bedrock-texto}"
    rounded: "{rounded.none}"
    padding: "16px 18px"
  item-slot:
    backgroundColor: "{colors.slot-cinza}"
    rounded: "{rounded.none}"
    size: "84px"
  caption-tag:
    backgroundColor: "{colors.contorno}"
    textColor: "{colors.pergaminho-claro}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
---

# Design System: Nether Explorer

## Overview

**Creative North Star: "O Inventário do Aventureiro"**

A página inteira se comporta como a interface de um jogo de blocos. Cada painel é um slot em relevo, cada botão é um bloco que dá vontade de apertar, e cada título é escrito em letra pixelada. O visitante, um iniciante que acabou de chegar, deve sentir que está mexendo no próprio inventário: pegando itens, trocando abas, testando receitas. A informação está organizada como equipamento à mão, não como uma enciclopédia.

A densidade é generosa e chunky. Seções altas (96–110px de respiro vertical), blocos grandes, contornos pretos grossos e sombras duras sem desfoque. A personalidade é tátil e brincalhona: as coisas pulam ao passar o mouse, afundam ao clicar, caem do céu na entrada e balançam como itens soltos no chão. O mesmo inventário existe em dois mundos. À **Noite** ele é o Nether, com céu vermelho, painéis cor de netherrack e brasas subindo. De **Dia** ele é o Overworld, com céu azul, painéis de pedra cinza e grama. Os dois temas têm o mesmo peso e toda tela precisa funcionar nos dois.

O que o visual não é: não é uma cópia do material oficial (logotipo do jogo, páginas da Mojang) e não é um site plano e corporativo, branco e sem textura.

**Key Characteristics:**
- Pixelify Sans em todo título, rótulo e botão; Rubik no texto corrido.
- Relevo de bloco em tudo: luz em cima e à esquerda, sombra embaixo e à direita, contorno preto sólido por fora.
- Cantos retos em todo o sistema (0px).
- Sombras duras, sem desfoque, deslocadas para baixo e para a direita.
- Dois temas completos, Noite (Nether) e Dia (Overworld), trocados por variáveis CSS com transição de 0,6s.
- Movimento elástico e brincalhão, com três níveis de intensidade (Intenso, Sutil, Desligado).

## Colors

Uma paleta de materiais do jogo: lava, grama, ouro, portal e diamante sobre pedra de interface, em dois conjuntos de superfícies, um para cada mundo.

### Primary
- **Laranja Lava** (laranja-lava): destaque do tema Noite. Palavra em destaque no título principal ("PROFUNDEZAS."), faixa rolante e acentos de seção. De Dia, esse papel passa para a **Grama Funda** (grama-funda).
- **Verde Grama** (verde-grama): o botão principal ("▶ Começar a jornada", "Próxima", "Jogar de novo") e a borda de grama quadriculada sob o topo. Sempre com texto **Musgo Escuro** (musgo-escuro).

### Secondary
- **Ouro** (ouro): o estado "selecionado". Aba de modo ativa, receita escolhida, filtro de mob ativo; também rótulos de seção e dicas ("► Recomendado…"). O texto sobre ouro é escuro.
- **Roxo do Portal** (roxo-do-portal) e **Portal Profundo** (portal-profundo): o rodapé, ou seja, o botão "▲ Voltar ao topo" e a borda quadriculada roxa. **Lilás Ametista** (lilas-ametista) é a cor dos links sobre o fundo **Vazio do End** (vazio-do-end).

### Tertiary
- **Ciano Diamante** (ciano-diamante): rótulos de seção alternados e o bloco flutuante de diamante no topo.
- **Verde XP** (verde-xp): sucesso. Resposta certa no quiz, barra de XP, tag "Pacífico".
- **Vermelho Redstone** (vermelho-redstone): perigo e erro. Resposta errada, tag "Hostil", corações de vida dos chefes.
- **Brasa Clara** (brasa-clara) e **Grama Sombra** (grama-sombra): cor dos rótulos de seção (variável `--eyebrow`) à Noite e de Dia.

### Neutral
- **Pedra da Interface** (pedra-da-interface), com **Pedra Luz** (pedra-luz) e **Pedra Sombra** (pedra-sombra): o cinza de botões secundários, abas, opções de quiz, FAQ e de todos os painéis no tema Dia. Luz e sombra formam o relevo.
- **Slot Cinza** (slot-cinza) e **Slot Fundo** (slot-fundo): os slots de item afundados da rota de progressão e da grade de crafting.
- **Contorno** (contorno): o preto puro de todo contorno, sombra dura e etiqueta de legenda. É a cor mais usada do sistema.
- **Tinta na Pedra** (tinta-na-pedra): texto sobre superfícies cinza.
- **Pergaminho Claro** (pergaminho-claro): texto sobre faixas escuras, barra de navegação e rodapé.
- **Bedrock** (bedrock) e **Bedrock Texto** (bedrock-texto): cartões de comando, com aparência de terminal.
- **Terra** (terra): a metade de baixo do bloco de grama do logotipo e dos blocos flutuantes.

**Tema Noite (Nether).** Céu em degradê de **Noite Céu Alto** a **Noite Céu Baixo**; página **Netherrack Queimado**; texto **Noite Tinta** e **Noite Tinta Suave**; faixas de seção **Noite Faixa Quente** e **Noite Faixa Fria**; painéis **Noite Painel**, com relevo **Noite Painel Luz** e **Noite Painel Sombra** (que também pinta a barra de navegação).

**Tema Dia (Overworld).** Céu em degradê de **Dia Céu Alto** a **Dia Céu Baixo**; página **Pergaminho**; texto **Dia Tinta** e **Dia Tinta Suave**; faixas de seção **Tronco de Carvalho** e **Pedra Lisa**; painéis **Pedra da Interface**, com relevo **Pedra Luz** e **Pedra Sombra** (que também pinta a barra de navegação).

### Named Rules
**A Regra dos Dois Mundos.** Toda superfície que muda entre Noite e Dia usa a variável de tema (`--page`, `--ink`, `--muted`, `--s1`, `--s2`, `--panel`, `--pink`, `--hi`, `--lo`, `--accent`, `--accentInk`, `--eyebrow`, `--sky1`, `--sky2`), definida nos objetos `NIGHT` e `DAY`. Nunca uma cor fixa. Cores fixas ficam só para materiais que não mudam de mundo: pedra da interface, ouro, grama, portal, contorno.

**A Regra da Pedra Clara.** De Dia os painéis viram pedra cinza clara, então cor clara de destaque sobre painel precisa de uma versão escura: vida (`--hp`), XP (`--xp`), rótulos dos mundos (`labelColor`, a cor do mundo escurecida) e sem sombra de texto (`--labelShadow: none`). O destaque do título do topo usa `--heroAccent`: Laranja Lava à Noite, verde-grama claro de Dia sobre o céu. Toda cor nova sobre painel passa pela varredura de contraste nos dois temas (texto ≥4.5:1, grande ≥3:1). A quantidade de um resultado de receita vai numa etiqueta preta, nunca branco direto sobre Ouro.

**A Regra do Ouro Selecionado.** Ouro marca o que está escolhido agora. Uma aba, filtro ou receita ativa fica dourada e levantada; o resto fica em pedra da interface.

## Typography

**Display Font:** Pixelify Sans (com monospace)
**Body Font:** Rubik (com system-ui, sans-serif)

**Character:** A Pixelify Sans é a voz do jogo: pixelada, sempre em negrito (700), usada em tudo que se lê de relance. A Rubik é a voz do guia: arredondada, legível e calma, para as explicações. As duas fontes são locais, em `assets/fonts/`.

### Hierarchy
- **Display** (700, clamp(48px, 7.6vw, 108px), 0.95): só no título principal do topo, em três linhas que caem uma por vez, com sombra dura de 6px.
- **Headline** (700, clamp(38px, 5vw, 66px), 1): o título de cada seção ("Três mundos. Uma jornada."), com `text-wrap: balance`.
- **Title Large** (700, clamp(34px, 4vw, 52px), 1): nome do modo de jogo em destaque e a marca "NETHER EXPLORER" no rodapé.
- **Title** (700, 28px, 1): títulos de cartões (mobs, chefes, encantamentos). Varia de 24 a 34px conforme o cartão.
- **Button** (700, 19px): rótulo de botões e abas; os botões do topo usam 20px.
- **Label** (700, 16px, 0.14em, caixa alta no texto): o rótulo acima de cada título de seção, sempre começando com "■" ("■ SOBRE O JOGO"), colorido com `--eyebrow`, ouro, ciano diamante ou lilás ametista.
- **Body Lead** (500, clamp(17px, 1.6vw, 20px), 1.55): o parágrafo do topo, limitado a 520px.
- **Body** (400, 16px, 1.55): texto corrido dos cartões e do FAQ. Parágrafos longos vão até 520–600px de largura.
- **Body Small** (400, 14px, 1.45): descrições de comandos e o aviso do rodapé.

### Named Rules
**A Regra do Pixel nos Títulos.** Se é para ler de relance (título, rótulo, botão, aba, legenda, número), é Pixelify Sans 700. Se é para ler com calma (explicação, resposta, descrição), é Rubik. A única exceção são as opções do quiz, em Rubik 700, para que frases longas continuem legíveis.

## Layout

Página única com seções empilhadas. O conteúdo fica num contêiner central de no máximo 1240px, com calha lateral fluida (`clamp(16px, 4vw, 40px)`). As seções alternam entre fundo da página e faixas coloridas de largura total (`--s1` e `--s2`), separadas por linhas pretas de 4px em cima e embaixo. O respiro vertical das seções é de 96px nas faixas e 110px nas seções sobre o fundo da página.

**A Ordem da Jornada.** As seções seguem o caminho de quem começa a jogar: Sobre → Modos → Dicas → Crafting → Progressão → Minérios → Mundos → Mobs → Magia → Chefes → Quiz, e depois o material de consulta (Comandos → Galeria → Novidades), com o FAQ fechando antes do rodapé. O menu segue a mesma ordem. Uma seção nova entra no ponto da jornada em que o jogador precisa dela. Duas faixas coloridas vizinhas nunca usam o mesmo tom: se encostarem, uma é `--s1` e a outra `--s2` (por isso Magia usa `--s2` ao lado de Chefes em `--s1`).

As grades são fluidas, sem breakpoints fixos: `repeat(auto-fit, minmax(min(100%, Npx), 1fr))`, com mínimos de 130px (slots de progressão) a 440px (topo). Cada seção abre com um bloco de rótulo + título (gap de 18px) e 36–48px de espaço antes do conteúdo. Os espaçamentos mais comuns são 18px entre itens, 10–14px dentro de grupos e 24px entre cartões.

Os pontos de quebra seguem o conteúdo:
- **1040px:** abaixo disso, os grupos da navegação não cabem numa linha e viram um botão de menu (grade de 2 colunas).
- **~1008px:** o topo passa a ter uma coluna, e o bloco de grama decorativo é ocultado para não ficar atrás do título.
- **440px:** abaixo disso, o botão de tema mostra só o quadradinho de cor; o texto "NOITE" ou "DIA" continua disponível para leitores de tela.

O título principal é limitado pela largura da própria coluna (`min(clamp(48px, 7.6vw, 108px), 14.2cqi)`, com `container-type: inline-size` na coluna), para "PROFUNDEZAS." nunca ficar atrás da imagem. Em telas de toque (`pointer: coarse`), botões e links da barra têm altura mínima de 44px. O contêiner da página usa `overflow-x: clip`, e não `hidden`, para a barra do topo continuar fixa ao rolar.

### Named Rules
**A Regra da Margem do Contorno.** Toda grade ou lista de blocos contornados tem 4–6px de padding no contêiner. O contorno preto é desenhado com `box-shadow` por fora do elemento e seria cortado sem essa margem.

## Elevation & Depth

A profundidade vem do relevo de bloco, não de sombras suaves. Cada superfície tem três camadas na mesma `box-shadow`: um realce interno em cima e à esquerda, uma sombra interna embaixo e à direita, e um contorno preto sólido por fora (spread de 3–4px). Elementos que flutuam acima da página, como as imagens grandes, ganham ainda uma sombra dura deslocada, sem desfoque. Os slots de item invertem o relevo e parecem afundados. Textos sobre imagens ou céu recebem sombra dura preta (1–6px). O sistema usa sombras de propósito e com papel estrutural: elas dizem o que é bloco, o que é slot e o que flutua.

### Shadow Vocabulary
- **Bloco de painel** (`box-shadow: inset 4px 4px 0 var(--hi), inset -4px -4px 0 var(--lo), 0 0 0 4px #000`): cartões e painéis que mudam com o tema.
- **Bloco de pedra** (`box-shadow: inset 4px 4px 0 #fff, inset -4px -4px 0 #555, 0 0 0 4px #000`): botão secundário e FAQ. A versão de 3px é usada em controles menores.
- **Bloco de botão** (`box-shadow: inset 3px 3px 0 rgba(255,255,255,.4), inset -3px -3px 0 rgba(0,0,0,.35), 0 0 0 3px #000`): botões coloridos, abas e filtros. O relevo translúcido funciona sobre qualquer cor de fundo.
- **Slot afundado** (`box-shadow: inset 4px 4px 0 #373737, inset -4px -4px 0 #fff, 0 0 0 4px #000`): slots de item.
- **Imagem emoldurada** (`box-shadow: 0 0 0 6px #000, 12px 12px 0 6px rgba(0,0,0,.4)`): imagens grandes do topo e dos modos de jogo.
- **Barra de navegação** (`box-shadow: 0 4px 0 #000`): a base preta da barra fixa no topo.
- **Brilho de brasa** (`box-shadow: 0 0 12px <cor da brasa>`): só nas faíscas que sobem no topo.

### Named Rules
**A Regra do Bloco em Relevo.** Luz sempre em cima e à esquerda, sombra sempre embaixo e à direita. Superfícies que se apertam (botões, abas) ou se leem (painéis) são blocos salientes; lugares onde um item fica guardado são slots afundados.

**A Regra do Contorno Preto.** Todo painel, botão e imagem tem contorno preto sólido: 3px em controles, 4px em painéis, 5–6px em imagens. O contorno é feito com `box-shadow` (spread), e os elementos usam `border: 0`.

## Shapes

Tudo é retangular, com cantos retos (0px) em todo o sistema: botões, painéis, imagens, slots e etiquetas. As formas vêm de blocos e pixels. Os blocos decorativos do topo são quadrados (40–56px) com relevo e contorno. As bordas de seção são faixas quadriculadas de 16px, verde de grama sob o topo e roxo de portal sobre o rodapé, feitas com gradiente repetido. Ícones de item são pixel art de 16–32px, mostrados com `image-rendering: pixelated`. Os únicos elementos com rotação são o "+" do FAQ, que gira 45° ao abrir, e alguns cartões, que inclinam no hover.

## Components

### Buttons
Blocos pesados que pulam ao passar o mouse e afundam ao clicar.
- **Shape:** cantos retos (0px), sem borda, com contorno preto e relevo (Bloco de botão ou Bloco de pedra).
- **Primary:** Verde Grama com texto Musgo Escuro, em Pixelify 700. No topo usa 20px e padding de 14px 26px, com relevo de 4px; em outros lugares, 19px e 12px 22px.
- **Secondary:** Pedra da Interface com texto Tinta na Pedra e relevo branco/cinza ("Fazer o quiz").
- **Portal:** Roxo do Portal com texto branco, só no rodapé ("▲ Voltar ao topo").
- **Hover / Active:** sobe de 3 a 4px (`translateY(-4px)`) em 0,15s. Os botões do topo também afundam 2px ao clicar (`translateY(2px)`). O foco usa o contorno global de 3px em Ouro, com 3px de afastamento.
- **Ícones:** o texto do botão começa com um caractere ("▶", "▲", "↻", "►") no lugar de ícones desenhados.

### Chips (abas e filtros)
- **Style:** Pedra da Interface com contorno de 3px e relevo translúcido; Pixelify 700, 19px nas abas de modo e de receita, 17px nos filtros de mob.
- **State:** a aba selecionada fica Ouro e levantada 4px (modos) ou deslocada 10px para a direita (receitas). As não selecionadas sobem 3px no hover. A troca de cor é animada em 0,2s.

### Cards / Containers
- **Corner Style:** retos (0px).
- **Background:** `--panel`, ou seja, Noite Painel à noite e Pedra da Interface de dia. O texto usa `--pink` (Noite Tinta ou Tinta na Pedra).
- **Shadow Strategy:** Bloco de painel (ver Elevation & Depth).
- **Border:** só o contorno preto de 4px via `box-shadow`. As imagens do topo do cartão são separadas por uma linha preta interna de 4px (`inset 0 -4px 0 #000`).
- **Internal Padding:** 20–24px no corpo do cartão; 16px 20px em itens de lista.
- **Hover:** o cartão sobe 8px com ease elástico (`cubic-bezier(.3,1.6,.5,1)`), e a imagem interna aproxima 8% devagar (0,8s). Os cartões de mob também inclinam -1,5°; os itens da lista "Sobre" deslizam 8px para a direita.

### Navigation
- **Style:** barra fixa no topo, fundo `--lo` (Noite Painel Sombra ou Pedra Sombra), texto Pergaminho Claro e base preta de 4px.
- **Marca:** um mini bloco de grama de 28px, seguido de "Nether Explorer" em Pixelify.
- **Links:** agrupados na ordem da jornada (dados em `NAV`): **Primeiros passos ▾**, **Evoluir ▾**, **Quiz** (link direto) e **Extras ▾**. Toda seção da página está num grupo; uma seção nova entra no grupo da sua etapa. Texto Pergaminho Claro em Pixelify 17px, sem sublinhado.
- **Painel do grupo:** abre ao passar o mouse ou focar pelo teclado (`:hover` e `:focus-within`, sem JavaScript). Fundo `--lo`, contorno preto de 4px e sombra dura. A seta é um triângulo em degraus de pixel que gira ao abrir. Clicar no nome do grupo leva à primeira seção dele.
- **Seção atual:** o grupo ganha uma barra Ouro de 4px por baixo, e o link da seção fica com fundo Ouro e texto escuro (`aria-current="page"`). A detecção acompanha a rolagem: vale a última seção cujo topo passou de 35% da altura da tela.
- **Links com #:** a página é montada depois do carregamento, então `#secao` vindo de fora rola até a seção em JavaScript (instantâneo, repetido enquanto as imagens assentam, e cancelado se a pessoa mexer). As seções têm `scroll-margin-top: 68px` para não ficarem atrás da barra.
- **Tema:** o botão de pedra com quadradinho colorido diz a ação, não o estado: "VER DE DIA" com quadradinho Ouro à Noite, "VER À NOITE" com quadradinho Laranja Lava de Dia. O `aria-label` diz o mesmo ("Mudar para o tema Dia"). Abaixo de 560px fica só o quadradinho.
- **Celular e tablet (< 1040px):** os grupos somem e aparecem num botão de menu de 44px, que abre uma grade de 2 colunas com os títulos dos grupos (Quiz entra no fim de Evoluir) e a seção atual em Ouro. A barra fica sempre em uma linha (68px), de 320px para cima.

### Quiz
- **Painel:** bloco de painel com relevo de 5px e contorno de 5px. Leva um cabeçalho "PERGUNTA n/total" e "XP n" em Verde Grama.
- **Barra de XP:** trilho preto com padding de 3px. O preenchimento é listrado em Verde XP, avança em 8 passos (`steps(8)`) e tem um brilho verde.
- **Opções:** blocos de Pedra da Interface em Rubik 700, 16px. Depois da resposta, a certa vira Verde XP e cresce 4%, a errada vira Vermelho Redstone e encolhe 4%, e as demais ficam com 45% de opacidade. Uma explosão de partículas quadradas comemora ou lamenta.

### Item Slot (componente assinatura)
Um quadrado de 84px em Slot Cinza com relevo afundado e contorno preto, que guarda um ícone de item pixel art de 52px com sombra dura. Ele aparece na rota de progressão e, em versão menor, na grade de crafting 3×3. No hover sobe 6px e gira -4°; o ícone balança devagar.

### Command Card
Um terminal de Bedrock com texto Bedrock Texto, relevo escuro e contorno de 3px. O comando aparece em destaque, com etiqueta colorida por categoria (ITEM, MUNDO, MODO etc.) e descrição em Body Small cinza. Clicar copia o comando. O cartão sobe 4px no hover.

### Caption Tag
Etiqueta preta com texto Pergaminho Claro, em Pixelify 700, 16px e padding de 4px 10px, sobre as imagens da galeria (canto inferior esquerdo).

**Etiquetas de categoria** são a versão colorida: fundo na cor da categoria e texto preto, sempre. Nos cartões de dimensão ("INÍCIO", "PERIGO", "FINAL"), ficam no canto superior esquerdo da imagem, em Pixelify 700, 14px, padding de 4px 10px e contorno de 3px. Nos mobs ("Pacífico", "Neutro", "Hostil") e comandos ("ITEM", "MUNDO"…), usam padding de 3px 8px.

### Enchantment Card
Painel com degradê violeta (#2a1640 → #3d1f63 → #6a3fb0) que corre pelo cartão como o brilho de um item encantado (`data-shimmer`). Leva o nível do encantamento em lilás claro.

## Do's and Don'ts

### Do:
- **Do** contornar todo painel, botão e imagem com preto sólido, por `box-shadow` (spread de 3px em controles, 4px em painéis, 5–6px em imagens), e dar 4–6px de padding ao contêiner para o contorno não ser cortado.
- **Do** desenhar o relevo de bloco com luz em cima e à esquerda e sombra embaixo e à direita; slots de item usam o relevo invertido (afundado).
- **Do** usar Pixelify Sans 700 em títulos, rótulos, botões e abas, e Rubik no texto corrido.
- **Do** pintar toda superfície que muda de mundo com as variáveis de tema (`--panel`, `--hi`, `--lo`, `--accent`, `--eyebrow`…) e conferir cada tela nova nos temas Noite e Dia.
- **Do** marcar o item selecionado com Ouro, e sucesso e erro com Verde XP e Vermelho Redstone.
- **Do** fazer os controles reagirem ao toque: subir de 3 a 8px no hover, com o ease elástico `cubic-bezier(.3,1.6,.5,1)` nos cartões, e afundar 2px ao clicar nos botões principais.
- **Do** criar animações novas dentro de `setupAnim()`, respeitando o nível escolhido (Intenso, Sutil, Desligado).
- **Do** dar a cada ação a sua reação curta (até 320ms), em degraus de pixel (`steps()`): painéis que desenrolam de cima para baixo, resposta certa que pula, resposta errada que treme, XP e selo "COPIADO!" que dão um "pop", e pergunta nova do quiz que entra pela direita. Animações por WAAPI usam `translate` e `scale` (propriedades individuais), para somar às `transform` já existentes sem as substituir.
- **Do** passar toda animação nova por `calm()`: ela fica de fora no nível Desligado e com "reduzir movimento" no sistema. Nesse caso, painéis e respostas só aparecem suavemente, sem deslocamento.
- **Do** ler o estado anterior em `componentDidUpdate` pela cópia `this.prevState`: o runtime passa só as props anteriores.
- **Do** manter visíveis o selo "Guia de fã · não oficial" no topo e o aviso de fã com os créditos das imagens no rodapé.

### Don't:
- **Don't** usar o logotipo oficial do Minecraft nem imitar páginas ou materiais da Mojang a ponto de o site parecer oficial.
- **Don't** deixar o visual plano e corporativo: superfícies sem relevo nem contorno, fundo branco liso, sem textura nem personalidade.
- **Don't** usar uma cor fixa numa superfície que deveria mudar entre Noite e Dia.
- **Don't** criar uma tela ou componente que só funcione num dos dois temas.
- **Don't** fazer o contorno com `border`; o sistema usa `border: 0` e desenha o contorno com `box-shadow`.
