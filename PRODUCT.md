# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Iniciantes no Minecraft que falam português. Estão começando a jogar (ou vão começar) e precisam entender o jogo do primeiro bloco até o End: o que são as dimensões, quais mobs evitar, o que fabricar primeiro, onde minerar e como chegar ao Nether. Leem o site antes ou durante uma sessão de jogo.

## Product Purpose

Nether Explorer é um guia de fã, não oficial, de Minecraft, em página única. Ele organiza o essencial para um iniciante numa sequência que acompanha a jornada do jogador: sobre o jogo, mundos, modos, progressão, mobs, chefes, crafting, minérios, magia (encantamentos e poções), dicas, comandos, galeria, novidades, quiz e FAQ.

O objetivo é ser publicado para a comunidade. Sucesso é jogadores iniciantes usando o site de verdade e voltando a ele como referência.

## Positioning

Um guia em português feito para quem está começando, que segue a ordem da jornada do jogo (do primeiro tronco ao ovo do dragão) em vez de ser uma enciclopédia, e que termina com um quiz para o jogador testar se está pronto para o Nether.

## Operating Context

- Leitura em navegador, de cima para baixo ou pulando por âncoras do menu (`#mundos`, `#modos`, `#mobs`, `#crafting`, `#minerios`, `#comandos`, `#quiz`, `#faq`).
- Uso interativo: alternar tema Dia/Noite, trocar abas de modos de jogo, filtrar mobs, escolher receitas na grade de crafting, copiar comandos, responder o quiz e abrir perguntas do FAQ.
- O site vai ser publicado online; a hospedagem ainda não foi escolhida.

## Capabilities and Constraints

- **Implementação atual:** página única `index.html` no formato de componente do Claude Design (`<x-dc>` com sintaxe `{{ }}`, `<sc-if>`, `<sc-for>`), renderizada por `assets/js/dc-runtime.js` sobre React 18.3.1 local. Fontes, imagens e scripts estão em `assets/`, sem dependência de CDN. Ver `README.md`.
- **Opções configuráveis do componente** (`data-props`): intensidade da animação (Intenso / Sutil / Desligado), modo inicial (Noite / Dia) e faixa de texto rolante (liga/desliga).
- **Publicação online:** tudo precisa funcionar hospedado num servidor estático, com caminhos relativos. Hospedagem: **decisão em aberto**.
- **Sem fins lucrativos:** o site é gratuito e não comercial. As imagens da wiki (CC BY-NC-SA 3.0) e as diretrizes da Mojang dependem disso: nada de vender produtos, cobrar acesso ou ganhar dinheiro com essas imagens.
- **Cookies e privacidade (requisito confirmado, ainda não implementado):**
  - aviso de consentimento de cookies conforme a LGPD;
  - lembrar preferências do visitante entre visitas (por exemplo, tema Dia/Noite e progresso no quiz);
  - estatísticas de visitas; ferramenta ainda **não escolhida**. Nenhuma coleta que exija consentimento roda antes do visitante aceitar.
- Hoje o site não usa cookies, `localStorage` nem `sessionStorage`: tudo volta ao padrão a cada visita.
- **Idioma:** o conteúdo atual é todo em português do Brasil. Exclusividade do idioma não foi definida como regra.

## Brand Commitments

- Nome: **Nether Explorer**, com o subtítulo "guia de fã de Minecraft".
- O site sempre deixa claro que é de fã e não oficial. O aviso do rodapé é obrigatório em qualquer versão: "Site de fã, sem afiliação com a Mojang Studios ou a Microsoft. Minecraft é marca registrada de seus respectivos donos." O selo "Guia de fã · não oficial" no topo segue a mesma regra.
- Voz atual: português direto, falando com "você", frases curtas e tom de aventura ("Desça às profundezas. Volte uma lenda.").

## Evidence on Hand

- 64 imagens em `assets/images/` (mobs, biomas e ícones de itens), creditadas no rodapé à [Minecraft Wiki](https://minecraft.wiki), com um link só para a página inicial da wiki.
- **Licença das imagens (pesquisado em 09/11/2026):**
  - O conteúdo da Minecraft Wiki está sob **CC BY-NC-SA 3.0**, salvo indicação em contrário. Imagens podem ter licença própria, que aparece na página de cada arquivo ([Weird Gloop – Licensing](https://meta.weirdgloop.org/w/Licensing)).
  - Para reutilizar, a wiki pede pelo menos uma destas formas de crédito: link para cada página reutilizada, ou lista dos autores.
  - Imagens do próprio jogo (capturas de tela, texturas, ícones) são da Mojang. As diretrizes de uso da Mojang permitem uso por fãs sem fins comerciais, com aviso de "não oficial" bem visível.
  - **Feito em 09/11/2026:** o rodapé cita a licença e tem o bloco "Créditos das imagens" (`#creditos`), com um link para a página de cada um dos 64 arquivos na wiki. A lista fica na constante `CREDITS` em `index.html`. Toda imagem nova precisa entrar nessa lista.
  - Se alguma imagem for editada (recortada, colorida, combinada), a versão editada também precisa ficar sob CC BY-NC-SA 3.0.
- O conteúdo do jogo (receitas, mobs, minérios, comandos, quiz, FAQ) está escrito em `index.html`, nas constantes `RECIPES`, `MODES`, `MOBS`, `TIPS`, `GALLERY`, `UPDATES`, `QUIZ`, `FAQS`, `DIMS`, `PROG`, `BOSSES`, `ORES`, `ENCHANTS`, `POTIONS` e `CMDS`.
- Não existem depoimentos, números de visitantes, avaliações nem parcerias. Nada disso deve ser inventado.
- O site original exportado está guardado em `_original/Nether Explorer (bundle).html`, como referência.

## Product Principles

1. **Iniciante primeiro.** Todo conteúdo parte do zero e explica termos do jogo antes de usá-los.
2. **Útil de verdade.** Informação correta e fácil de consultar vale mais que volume; o site precisa ajudar quem está jogando agora.
3. **Honestidade de fã.** Sempre não oficial, com créditos das imagens, sem sugerir ligação com a Mojang ou a Microsoft.
4. **Privacidade com consentimento.** O visitante decide o que é guardado ou medido; nada de rastreio antes do aceite.
5. **Pronto para publicar.** Qualquer mudança continua funcionando num servidor estático comum.
