# Nether Explorer — guia de fã de Minecraft

Site estático de página única. Sem build, sem dependências de CDN: tudo roda a partir desta pasta.

## Rodar localmente

Abra `index.html` direto no navegador **ou** sirva a pasta (recomendado):

```bash
python -m http.server 8000
# abra http://localhost:8000
```

No Antigravity/VS Code, a extensão **Live Server** (recomendada em `.vscode/extensions.json`) também funciona: clique com o botão direito em `index.html` → *Open with Live Server*.

## Estrutura

```
index.html                  ← ARQUIVO PRINCIPAL (todo o conteúdo, estilos e lógica do site)
assets/
  css/fonts.css             ← @font-face de Pixelify Sans e Rubik (auto-hospedadas)
  fonts/*.woff2             ← arquivos das fontes
  images/                   ← 64 imagens (mobs, biomas, ícones de itens)
  js/dc-runtime.js          ← runtime que renderiza o componente (arquivo gerado — não editar)
  js/vendor/                ← React 18.3.1 e ReactDOM 18.3.1 (UMD, produção)
_original/
  Nether Explorer (bundle).html  ← export original auto-extraível (backup, não usado)
```

## Como o `index.html` funciona

O site foi criado como um componente do Claude Design. O `index.html` tem três partes:

1. **`<head>`** — carrega as fontes, o React e o `dc-runtime.js`.
2. **`<x-dc>` … `</x-dc>`** — o template HTML. Usa uma sintaxe própria:
   - `{{ expressao }}` — interpolação de valores
   - `<sc-if value="{{ cond }}">` — renderização condicional
   - `<sc-for list="{{ lista }}" as="item">` — repetição
   - `style-hover="..."` — estilo aplicado no hover
   - `<helmet>` — conteúdo que vai para o `<head>` (título, estilos globais)
3. **`<script type="text/x-dc" data-dc-script>`** — a lógica: dados (`RECIPES`, `MOBS`, `FAQS`…), temas dia/noite (`DAY`/`NIGHT`) e a classe `Component` (estado, animações, quiz). O método `renderVals()` devolve os valores usados no template.

As imagens são referenciadas pela função `W('Nome.png')`, que resolve para `./assets/images/` (biomas usam `.jpg` automaticamente via o conjunto `JPG`).

**Créditos das imagens:** toda imagem em `assets/images/` precisa ter uma entrada na constante `CREDITS` (`{ name, url }`), com link para a página do arquivo na Minecraft Wiki. A lista aparece no rodapé, em "Créditos das imagens". As imagens da wiki estão sob CC BY-NC-SA 3.0, então o site precisa continuar sem fins comerciais.

O atributo `data-props` do script define as opções editáveis (animação, modo inicial dia/noite, faixa de texto).

## Observação

`<script>window.__resources = {};</script>` no `<head>` mantém o runtime no mesmo modo do bundle original. Sem ele, o runtime busca a própria página de novo e gera um erro no console. Não remova.
