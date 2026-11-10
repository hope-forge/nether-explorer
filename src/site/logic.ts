// @ts-nocheck
// Lógica do site trazida do index.html antigo sem alterações (dados, estado, animações).
// Os tipos ficam para depois: nesta fase o código tem de ser o mesmo que já funcionava.
import { DCLogic } from '../dc/runtime'

const JPG = new Set(["Plains","Cherry_Grove","Basalt_Deltas","Bastion_Remnant","End_City","Crimson_Forest","Warped_Forest","Soul_Sand_Valley","Nether_Fortress","The_End","Nether_Wastes"]);
const W = n => { const b = n.replace(/\.png$/, ''); const f = JPG.has(b) ? b + '.jpg' : n; const R = window.__resources; return (R && R['img_' + f.replace(/\W/g, '_')]) || './assets/images/' + f; };
const DAY = {
  '--sky1': '#2f7fd8', '--sky2': '#6fb6ff', '--page': '#f3ecd9', '--ink': '#1d1a16', '--muted': '#4b4336',
  '--s1': '#6b4528', '--s2': '#4f4f56', '--sink': '#fff7ea', '--panel': '#c6c6c6', '--pink': '#1d1d1d',
  '--hi': '#ffffff', '--lo': '#555555', '--accent': '#357a1b', '--accentInk': '#ffffff', '--eyebrow': '#2f6e16',
  // Contraste no tema Dia: destaque do topo claro sobre o céu, e vida/XP/rótulos escuros sobre a pedra cinza
  '--heroAccent': '#b4f05a', '--hp': '#9c1c16', '--xp': '#235a0e', '--labelShadow': 'none'
};
const NIGHT = {
  '--sky1': '#2a0606', '--sky2': '#7a1a12', '--page': '#1b0d0d', '--ink': '#f6e6d6', '--muted': '#cdb7a5',
  '--s1': '#4a1a1a', '--s2': '#2b2433', '--sink': '#fff7ea', '--panel': '#3a2020', '--pink': '#f6e6d6',
  '--hi': '#6e3a3a', '--lo': '#0d0404', '--accent': '#ff7a1a', '--accentInk': '#1b0d0d', '--eyebrow': '#ff9a4a',
  '--heroAccent': '#ff7a1a', '--hp': '#ff6a4a', '--xp': '#5fb233', '--labelShadow': '1px 1px 0 #000'
};
const NIGHT_BODY = '#1b0d0d', DAY_BODY = '#f3ecd9';
const MAT = {
  T: { icon: W('Invicon_Oak_Planks.png'), label: 'Tábua', bg: '#c8964f', fg: '#2a1a08' },
  G: { icon: W('Invicon_Stick.png'), label: 'Graveto', bg: '#7a5232', fg: '#fff2e0' },
  C: { icon: W('Invicon_Coal.png'), label: 'Carvão', bg: '#2a2a2a', fg: '#f0f0f0' },
  P: { icon: W('Invicon_Cobblestone.png'), label: 'Pedregulho', bg: '#8a8a8a', fg: '#111' },
  F: { icon: W('Invicon_Iron_Ingot.png'), label: 'Ferro', bg: '#e6e6e6', fg: '#222' },
  D: { icon: W('Invicon_Flint.png'), label: 'Pederneira', bg: '#4a4a4a', fg: '#f0f0f0' },
  B: { icon: W('Invicon_Blaze_Powder.png'), label: 'Pó de blaze' },
  E: { icon: W('Invicon_Ender_Pearl.png'), label: 'Pérola' }
};
const RECIPES = [
  { icon: W('Invicon_Crafting_Table.png'), name: 'Bancada de trabalho', yield: '×1', grid: 'TT.TT....', note: 'Quatro tábuas num quadrado. Sem ela, nada de grade 3×3.' },
  { icon: W('Invicon_Wooden_Pickaxe.png'), name: 'Picareta de madeira', yield: '×1', grid: 'TTT.G..G.', note: 'Sua primeira ferramenta de mineração — troque por pedra o quanto antes.' },
  { icon: W('Invicon_Torch.png'), name: 'Tocha', yield: '×4', grid: '.C..G....', note: 'Carvão sobre graveto. Ilumine tudo: monstros não nascem na luz.' },
  { icon: W('Invicon_Furnace.png'), name: 'Fornalha', yield: '×1', grid: 'PPPP.PPPP', note: 'Oito pedregulhos em anel. Funde minério e assa comida.' },
  { icon: W('Invicon_Flint_and_Steel.png'), name: 'Isqueiro', yield: '×1', grid: '...FD....', note: 'Pederneira e aço: a chave que acende o portal do Nether.' },
  { icon: W('Invicon_Chest.png'), name: 'Baú', yield: '×1', grid: 'TTTT.TTTT', note: 'Oito tábuas em anel. Dois baús lado a lado viram um baú grande.' },
  { icon: W('Invicon_Iron_Sword.png'), name: 'Espada de ferro', yield: '×1', grid: '.F..F..G.', note: 'Duas barras de ferro sobre um graveto. A arma padrão da primeira semana.' },
  { icon: W('Invicon_Bucket.png'), name: 'Balde', yield: '×1', grid: 'F.F.F....', note: 'Três barras de ferro em V. Carrega água, lava, leite e até peixes.' },
  { icon: W('Invicon_Eye_of_Ender.png'), name: 'Olho do Ender', yield: '×1', grid: '...BE....', note: 'Pó de blaze + pérola do Ender. Jogue-o para achar a Fortaleza — e ative o portal do End.' }
];
const MODES = [
  { name: 'Sobrevivência', tag: 'O CLÁSSICO', text: 'Vida, fome e monstros. Colete recursos, construa abrigo e conquiste cada ferramenta com o próprio suor.', tip: 'Recomendado para a primeira vez.', img: W('Plains.png') },
  { name: 'Criativo', tag: 'SEM LIMITES', text: 'Blocos infinitos, voo livre e nenhum perigo. O modo dos grandes construtores.', tip: 'Ótimo para treinar construções antes de arriscar.', img: W('Cherry_Grove.png') },
  { name: 'Hardcore', tag: 'UMA VIDA SÓ', text: 'Sobrevivência na dificuldade máxima — e se você morrer, o mundo acabou para sempre.', tip: 'Só para quem já domina o Nether.', img: W('Basalt_Deltas.png') },
  { name: 'Aventura', tag: 'PARA MAPAS', text: 'Feito para mapas criados por outros jogadores: você interage, mas não quebra blocos livremente.', tip: 'Procure mapas de parkour e puzzle.', img: W('Bastion_Remnant.png') },
  { name: 'Espectador', tag: 'SÓ OBSERVAR', text: 'Atravesse paredes e voe invisível pelo mundo, sem interagir com nada.', tip: 'Perfeito para explorar construções de amigos.', img: W('End_City.png') }
];
const TYPE = {
  'Pacífico': { tag: '#7ee03a', bg: 'linear-gradient(#8fd1ff,#cfeeff)' },
  'Neutro': { tag: '#f5c518', bg: 'linear-gradient(#f2d27a,#fff0c2)' },
  'Hostil': { tag: '#ff6a4a', bg: 'linear-gradient(#b8322a,#ff8a5a)' }
};
const MOBS = [
  { name: 'Vaca', type: 'Pacífico', dim: 'Overworld', img: W('Cow.png'), text: 'Fonte de couro, carne e leite — e o leite remove efeitos de poção.' },
  { name: 'Strider', type: 'Pacífico', dim: 'Nether', img: W('Strider.png'), text: 'Caminha sobre lava. Com sela e fungo distorcido na vara, vira montaria.' },
  { name: 'Lobo', type: 'Neutro', dim: 'Overworld', img: W('Wolf.png'), text: 'Domado com ossos, vira o companheiro mais leal da jornada.' },
  { name: 'Enderman', type: 'Neutro', dim: 'Overworld · End', img: W('Enderman.png'), text: 'Não olhe nos olhos dele. Teletransporta e carrega blocos.' },
  { name: 'Piglin', type: 'Neutro', dim: 'Nether', img: W('Piglin.png'), text: 'Ataca quem não veste ouro. Troca itens por barras de ouro.' },
  { name: 'Creeper', type: 'Hostil', dim: 'Overworld', img: W('Creeper.png'), text: 'Silencioso até o último segundo. Ouviu um chiado? Corra.' },
  { name: 'Ghast', type: 'Hostil', dim: 'Nether', img: W('Ghast.png'), text: 'Gigante flutuante que dispara bolas de fogo. Rebata com um golpe.' },
  { name: 'Blaze', type: 'Hostil', dim: 'Nether', img: W('Blaze.png'), text: 'Guarda as fortalezas. Deixa cair a vara de blaze, essencial para chegar ao End.' },
  { name: 'Golem de ferro', type: 'Neutro', dim: 'Overworld', img: W('Iron_Golem.png'), text: 'Protetor das vilas. Ataque um aldeão perto dele e descubra a força que ele tem.' },
  { name: 'Zumbi', type: 'Hostil', dim: 'Overworld', img: W('Zombie.png'), text: 'O monstro mais comum da noite. Queima ao sol — a menos que use capacete.' },
  { name: 'Esqueleto', type: 'Hostil', dim: 'Overworld', img: W('Skeleton.png'), text: 'Arqueiro certeiro. Use um escudo e se aproxime em zigue-zague.' },
  { name: 'Aranha', type: 'Hostil', dim: 'Overworld', img: W('Spider.png'), text: 'Escala paredes. De dia fica calma, a não ser que seja provocada.' },
  { name: 'Cubo de magma', type: 'Hostil', dim: 'Nether', img: W('Magma_Cube.png'), text: 'Salta e se divide ao morrer. Deixa cair creme de magma, base da poção de resistência ao fogo.' },
  { name: 'Hoglin', type: 'Hostil', dim: 'Nether', img: W('Hoglin.png'), text: 'Javali agressivo da floresta carmesim. Foge de fungos distorcidos.' },
  { name: 'Warden', type: 'Hostil', dim: 'Overworld', img: W('Warden.png'), text: 'Cego, guiado por vibrações e absurdamente forte. Ande agachado e não faça barulho.' }
];
const TIPS = [
  { title: 'Madeira antes do pôr do sol', text: 'Soque árvores, faça uma bancada e um abrigo simples. A primeira noite não perdoa.' },
  { title: 'Nunca cave reto para baixo', text: 'Lava, cavernas e quedas esperam logo abaixo. Cave em escada.' },
  { title: 'Durma numa cama', text: 'Pula a noite e define seu ponto de renascimento. Três lãs e três tábuas.' },
  { title: 'Leve um balde de água', text: 'Apaga fogo, neutraliza lava e salva quedas no último segundo.' },
  { title: 'Ferro primeiro, diamante depois', text: 'Armadura de ferro te mantém vivo. Diamantes aparecem mais perto do fundo do mundo.' },
  { title: 'Prepare-se para o Nether', text: 'Uma peça de ouro para acalmar os Piglins, blocos para pontes — e nunca durma em cama lá.' }
];
const GALLERY = [
  { name: 'Floresta Carmesim', img: W('Crimson_Forest.png'), span: 'span 2' },
  { name: 'Floresta Distorcida', img: W('Warped_Forest.png'), span: 'span 1' },
  { name: 'Vale das Almas', img: W('Soul_Sand_Valley.png'), span: 'span 1' },
  { name: 'Fortaleza do Nether', img: W('Nether_Fortress.png'), span: 'span 1' },
  { name: 'The End', img: W('The_End.png'), span: 'span 1' }
];
const UPDATES = [
  { name: 'Quarto drop de 2026', status: 'EM TESTE', date: 'Previsto para o fim de 2026', text: 'Cavernas de gelo com estalactites, cristais brilhantes e uma nova variante de zumbi.' },
  { name: 'Wilderness Bound', status: 'DISPONÍVEL', date: 'Setembro de 2026', text: 'A floresta salpicada de tons outonais, acampamentos abandonados, camas de palha e mapas melhorados.' },
  { name: 'Tiny Takeover', status: 'DISPONÍVEL', date: 'Março de 2026', text: 'Filhotes de mobs redesenhados com modelos próprios, dente-de-leão dourado e etiquetas de nome fabricáveis.' }
];
const QUIZ = [
  { q: 'Qual bloco forma a moldura do portal do Nether?', o: ['Pedregulho', 'Obsidiana', 'Basalto', 'Pedra-negra'], a: 1, why: 'Obsidiana — nasce quando água encontra lava parada.' },
  { q: 'O que acontece se você dormir numa cama no Nether?', o: ['Pula a noite', 'Recupera vida', 'Ela explode', 'Nada'], a: 2, why: 'Ela explode. Camas só funcionam no Overworld.' },
  { q: 'O que os Piglins aceitam em troca de itens?', o: ['Esmeraldas', 'Barras de ouro', 'Diamantes', 'Ferro'], a: 1, why: 'Barras de ouro. Jogue uma perto deles e espere a troca.' },
  { q: 'Qual mob deixa cair a vara de blaze?', o: ['Ghast', 'Cubo de magma', 'Blaze', 'Esqueleto Wither'], a: 2, why: 'O Blaze, que guarda as fortalezas do Nether.' },
  { q: 'Quantas tábuas são necessárias para uma bancada?', o: ['2', '4', '6', '8'], a: 1, why: 'Quatro, num quadrado 2×2.' },
  { q: 'Em qual nível Y os diamantes são mais comuns?', o: ['Y 64', 'Y 15', 'Y -59', 'Y 120'], a: 2, why: 'Perto de Y -59, logo acima da rocha-matriz.' },
  { q: 'Qual poção deixa você imune à lava?', o: ['Força', 'Resistência ao fogo', 'Velocidade', 'Cura'], a: 1, why: 'Resistência ao fogo — feita com creme de magma.' },
  { q: 'Qual minério do Nether é usado para fazer netherite?', o: ['Detritos ancestrais', 'Quartzo', 'Ouro do Nether', 'Esmeralda'], a: 0, why: 'Detritos ancestrais, que viram fragmentos de netherite na fornalha.' },
  { q: 'Qual mob é cego e se guia por vibrações?', o: ['Enderman', 'Warden', 'Wither', 'Creeper'], a: 1, why: 'O Warden, que vive nas Cidades Antigas do Deep Dark.' },
  { q: 'Qual chefe espera por você no End?', o: ['Wither', 'Warden', 'Dragão do Ender', 'Guardião ancião'], a: 2, why: 'O Dragão do Ender — o chefe final da jornada.' }
];
const FAQS = [
  { q: 'O Nether Explorer é oficial?', a: 'Não. É um guia feito por fãs, sem ligação com a Mojang Studios ou a Microsoft.' },
  { q: 'Java ou Bedrock: qual escolher?', a: 'Java roda no PC e tem a maior cena de mods. Bedrock roda em consoles, celulares e PC, com jogo cruzado entre plataformas.' },
  { q: 'Como chego ao Nether?', a: 'Monte uma moldura retangular de obsidiana (no mínimo 4 de largura por 5 de altura; os cantos são opcionais) e acenda o interior com um isqueiro.' },
  { q: 'Minecraft é bom para crianças?', a: 'Sim. A dificuldade Pacífica remove os monstros hostis, e o modo Criativo elimina qualquer perigo.' },
  { q: 'Dá para jogar com amigos?', a: 'Sim: por servidores, Realms, rede local ou tela dividida nos consoles.' }
];
const DIMS = [
  { name: 'Overworld', tag: 'INÍCIO', color: '#7ee03a', img: W('Plains.png'), text: 'Onde tudo começa: biomas variados, vilas, cavernas profundas e o ciclo de dia e noite.', how: 'Você nasce aqui.', risk: 'Monstros à noite, quedas e cavernas escuras.' },
  { name: 'Nether', tag: 'PERIGO', color: '#ff7a1a', img: W('Nether_Wastes.png'), text: 'Um mundo de lava e fogo, com fortalezas, bastiões e recursos que não existem em nenhum outro lugar.', how: 'Portal de obsidiana aceso com isqueiro.', risk: 'Lava, Ghasts, Piglins e Hoglins.' },
  { name: 'The End', tag: 'FINAL', color: '#c9a4ff', img: W('The_End.png'), text: 'Ilhas flutuantes no vazio, cidades do End e o lar do Dragão.', how: 'Portal do End na Fortaleza, ativado com Olhos do Ender.', risk: 'O vazio, Endermen e o Dragão.' }
];
const PROG = [
  { name: 'Madeira', icon: W('Invicon_Oak_Log.png'), text: 'Troncos, bancada e ferramentas básicas.' },
  { name: 'Pedra', icon: W('Invicon_Stone_Pickaxe.png'), text: 'Ferramentas melhores e fornalha.' },
  { name: 'Ferro', icon: W('Invicon_Iron_Pickaxe.png'), text: 'Armadura, balde e escudo.' },
  { name: 'Diamante', icon: W('Invicon_Diamond_Pickaxe.png'), text: 'Equipamento de elite e obsidiana.' },
  { name: 'Nether', icon: W('Invicon_Obsidian.png'), text: 'Portal, fortalezas e blazes.' },
  { name: 'Netherite', icon: W('Invicon_Netherite_Pickaxe.png'), text: 'O melhor equipamento do jogo.' },
  { name: 'The End', icon: W('Invicon_Eye_of_Ender.png'), text: 'Ache a Fortaleza e o portal.' },
  { name: 'Vitória', icon: W('Invicon_Dragon_Egg.png'), text: 'Derrote o Dragão do Ender.' }
];
const BOSSES = [
  { name: 'Dragão do Ender', hp: 200, glow: '#5a2d8a', img: W('Ender_Dragon.png'), text: 'O chefe final. Destrua os cristais do End nas torres antes de atacar.', where: 'The End', drop: 'Ovo do dragão e muita XP' },
  { name: 'Wither', hp: 300, glow: '#3a3a4a', img: W('Wither.png'), text: 'Invocado com 4 areias das almas e 3 crânios de esqueleto Wither. Explode tudo ao redor.', where: 'Onde você invocar', drop: 'Estrela do Nether (para o sinalizador)' },
  { name: 'Warden', hp: 500, glow: '#0d3a40', img: W('Warden.png'), text: 'Não foi feito para ser vencido — foi feito para você fugir. Silêncio é sobrevivência.', where: 'Cidades Antigas (Deep Dark)', drop: 'Catalisador de sculk' },
  { name: 'Guardião ancião', hp: 80, glow: '#1d4a5a', img: W('Elder_Guardian.png'), text: 'Aplica Fadiga de mineração em quem se aproxima do monumento.', where: 'Monumentos oceânicos', drop: 'Esponja molhada' }
];
const ORES = [
  { name: 'Carvão', icon: W('Invicon_Coal_Ore.png'), y: '95', tool: 'Madeira', use: 'Combustível e tochas.' },
  { name: 'Cobre', icon: W('Invicon_Copper_Ore.png'), y: '48', tool: 'Pedra', use: 'Para-raios, luneta e blocos decorativos.' },
  { name: 'Ferro', icon: W('Invicon_Iron_Ore.png'), y: '15', tool: 'Pedra', use: 'Armadura, ferramentas e baldes.' },
  { name: 'Lápis-lazúli', icon: W('Invicon_Lapis_Lazuli_Ore.png'), y: '0', tool: 'Pedra', use: 'Necessário para encantar itens.' },
  { name: 'Ouro', icon: W('Invicon_Gold_Ore.png'), y: '-16', tool: 'Ferro', use: 'Trocas com Piglins e maçãs douradas.' },
  { name: 'Redstone', icon: W('Invicon_Redstone_Ore.png'), y: '-59', tool: 'Ferro', use: 'Circuitos, portas automáticas e máquinas.' },
  { name: 'Diamante', icon: W('Invicon_Diamond_Ore.png'), y: '-59', tool: 'Ferro', use: 'O melhor equipamento antes da netherite.' },
  { name: 'Esmeralda', icon: W('Invicon_Emerald_Ore.png'), y: '236', tool: 'Ferro', use: 'Moeda dos aldeões. Só em montanhas.' },
  { name: 'Detritos ancestrais', icon: W('Invicon_Ancient_Debris.png'), y: '15', tool: 'Diamante', use: 'Só no Nether. Vira netherite.', nether: true }
];
// Conquistas: só por esforço real, uma vez por navegador
const ACHIEVEMENTS = {
  quiz: { title: 'Pronto para o Nether', text: () => 'Acertou as ' + QUIZ.length + ' perguntas do quiz.', icon: W('Invicon_Flint_and_Steel.png') },
  dicas: { title: 'Primeira semana garantida', text: () => 'Marcou todas as regras de sobrevivência.', icon: W('Invicon_Torch.png') },
  bloco: { title: 'Isto é Minecraft!', text: () => 'Quebrou um bloco com as próprias mãos.', icon: W('Invicon_Wooden_Pickaxe.png') }
};
// Posição vertical no corte do terreno: Y 256 no topo, Y -64 no fundo (a margem evita marcas cortadas nas pontas)
const oreTop = y => (4 + (256 - y) / 320 * 92).toFixed(2) + '%';
const ENCHANTS = [
  { name: 'Eficiência', lvl: 'V', text: 'Minera e corta muito mais rápido.', on: 'PICARETAS · MACHADOS · PÁS' },
  { name: 'Fortuna', lvl: 'III', text: 'Mais drops de minérios como diamante.', on: 'PICARETAS' },
  { name: 'Toque de seda', lvl: 'I', text: 'Coleta o bloco intacto.', on: 'PICARETAS · MACHADOS · PÁS' },
  { name: 'Inquebrável', lvl: 'III', text: 'O item dura muito mais.', on: 'QUALQUER EQUIPAMENTO' },
  { name: 'Remendo', lvl: 'I', text: 'Conserta o item com a XP que você coleta.', on: 'QUALQUER EQUIPAMENTO' },
  { name: 'Proteção', lvl: 'IV', text: 'Reduz quase todo tipo de dano.', on: 'ARMADURAS' },
  { name: 'Afiação', lvl: 'V', text: 'Aumenta o dano corpo a corpo.', on: 'ESPADAS · MACHADOS' },
  { name: 'Peso-pena', lvl: 'IV', text: 'Reduz o dano de queda.', on: 'BOTAS' }
];
const POTIONS = [
  { name: 'Resistência ao fogo', color: '#e8962e', text: 'Imunidade a fogo e lava. Obrigatória no Nether.', ing: 'Creme de magma' },
  { name: 'Cura', color: '#f0302f', text: 'Recupera vida na hora.', ing: 'Melancia reluzente' },
  { name: 'Visão noturna', color: '#3a5bd9', text: 'Enxergue no escuro e debaixo d’água.', ing: 'Cenoura dourada' },
  { name: 'Força', color: '#a8322a', text: 'Aumenta o dano dos seus ataques.', ing: 'Pó de blaze' },
  { name: 'Regeneração', color: '#d364b4', text: 'Recupera vida aos poucos.', ing: 'Lágrima de Ghast' },
  { name: 'Velocidade', color: '#7cc0dc', text: 'Corre mais rápido.', ing: 'Açúcar' }
];
// Menu agrupado na ordem da jornada (a mesma ordem das seções na página)
const NAV = [
  { label: 'Primeiros passos', links: [['sobre', 'Sobre o jogo'], ['modos', 'Modos de jogo'], ['dicas', 'Dicas'], ['crafting', 'Crafting']] },
  { label: 'Evoluir', links: [['progressao', 'Progressão'], ['minerios', 'Minérios'], ['mundos', 'Mundos'], ['mobs', 'Mobs'], ['magia', 'Magia'], ['chefes', 'Chefes']] },
  { label: 'Quiz', direct: true, links: [['quiz', 'Quiz']] },
  { label: 'Extras', links: [['comandos', 'Comandos'], ['galeria', 'Galeria'], ['novidades', 'Novidades'], ['faq', 'FAQ']] }
];
const NAV_IDS = NAV.flatMap(g => g.links.map(l => l[0]));
// Número por extenso (feminino: regras, perguntas); acima de doze usa algarismos
const porExtenso = n => ['Nenhuma', 'Uma', 'Duas', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez', 'Onze', 'Doze'][n] || String(n);

const CMDS = [
  { cmd: '/gamemode creative', badge: 'MODO', text: 'Muda para o modo Criativo. Troque por survival para voltar.' },
  { cmd: '/time set day', badge: 'TEMPO', text: 'Transforma a noite em dia instantaneamente.' },
  { cmd: '/weather clear', badge: 'CLIMA', text: 'Acaba com a chuva e as tempestades.' },
  { cmd: '/locate structure fortress', badge: 'BUSCA', text: 'Mostra as coordenadas da Fortaleza do Nether mais próxima.' },
  { cmd: '/gamerule keepInventory true', badge: 'REGRA', text: 'Você não perde os itens ao morrer.' },
  { cmd: '/tp @s ~ ~10 ~', badge: 'TELEPORTE', text: 'Teleporta você 10 blocos para cima.' },
  { cmd: '/give @s diamond 64', badge: 'ITEM', text: 'Dá 64 diamantes para você.' },
  { cmd: '/seed', badge: 'MUNDO', text: 'Mostra a semente do mundo para compartilhar com amigos.' }
];
const CREDITS = [
  { name: 'Basalt Deltas.png', url: 'https://minecraft.wiki/w/File:Basalt_Deltas.png' },
  { name: 'Bastion Remnant.png', url: 'https://minecraft.wiki/w/File:Bastion_Remnant.png' },
  { name: 'Blaze JE2.png', url: 'https://minecraft.wiki/w/File:Blaze_JE2.png' },
  { name: 'Cherry Grove.png', url: 'https://minecraft.wiki/w/File:Cherry_Grove.png' },
  { name: 'Cow JE7 BE4.png', url: 'https://minecraft.wiki/w/File:Cow_JE7_BE4.png' },
  { name: 'Creeper JE3 BE1.png', url: 'https://minecraft.wiki/w/File:Creeper_JE3_BE1.png' },
  { name: 'Crimson Forest.png', url: 'https://minecraft.wiki/w/File:Crimson_Forest.png' },
  { name: 'Elder Guardian JE2 BE2.png', url: 'https://minecraft.wiki/w/File:Elder_Guardian_JE2_BE2.png' },
  { name: 'End City.png', url: 'https://minecraft.wiki/w/File:End_City.png' },
  { name: 'Ender Dragon JE1 BE1.png', url: 'https://minecraft.wiki/w/File:Ender_Dragon_JE1_BE1.png' },
  { name: 'Enderman JE3.png', url: 'https://minecraft.wiki/w/File:Enderman_JE3.png' },
  { name: 'Ghast JE3 BE3.png', url: 'https://minecraft.wiki/w/File:Ghast_JE3_BE3.png' },
  { name: 'Hoglin JE3.png', url: 'https://minecraft.wiki/w/File:Hoglin_JE3.png' },
  { name: 'Invicon Ancient Debris.png', url: 'https://minecraft.wiki/w/File:Invicon_Ancient_Debris.png' },
  { name: 'Invicon Blaze Powder.png', url: 'https://minecraft.wiki/w/File:Invicon_Blaze_Powder.png' },
  { name: 'Invicon Bucket.png', url: 'https://minecraft.wiki/w/File:Invicon_Bucket.png' },
  { name: 'Invicon Chest.png', url: 'https://minecraft.wiki/w/File:Invicon_Chest.png' },
  { name: 'Invicon Coal.png', url: 'https://minecraft.wiki/w/File:Invicon_Coal.png' },
  { name: 'Invicon Coal Ore.png', url: 'https://minecraft.wiki/w/File:Invicon_Coal_Ore.png' },
  { name: 'Invicon Cobblestone.png', url: 'https://minecraft.wiki/w/File:Invicon_Cobblestone.png' },
  { name: 'Invicon Copper Ore.png', url: 'https://minecraft.wiki/w/File:Invicon_Copper_Ore.png' },
  { name: 'Invicon Crafting Table.png', url: 'https://minecraft.wiki/w/File:Invicon_Crafting_Table.png' },
  { name: 'Invicon Diamond.png', url: 'https://minecraft.wiki/w/File:Invicon_Diamond.png' },
  { name: 'Invicon Diamond Ore.png', url: 'https://minecraft.wiki/w/File:Invicon_Diamond_Ore.png' },
  { name: 'Invicon Diamond Pickaxe.png', url: 'https://minecraft.wiki/w/File:Invicon_Diamond_Pickaxe.png' },
  { name: 'Invicon Dragon Egg.png', url: 'https://minecraft.wiki/w/File:Invicon_Dragon_Egg.png' },
  { name: 'Invicon Emerald Ore.png', url: 'https://minecraft.wiki/w/File:Invicon_Emerald_Ore.png' },
  { name: 'Invicon Ender Pearl.png', url: 'https://minecraft.wiki/w/File:Invicon_Ender_Pearl.png' },
  { name: 'Invicon Eye of Ender.png', url: 'https://minecraft.wiki/w/File:Invicon_Eye_of_Ender.png' },
  { name: 'Invicon Flint.png', url: 'https://minecraft.wiki/w/File:Invicon_Flint.png' },
  { name: 'Invicon Flint and Steel.png', url: 'https://minecraft.wiki/w/File:Invicon_Flint_and_Steel.png' },
  { name: 'Invicon Furnace.png', url: 'https://minecraft.wiki/w/File:Invicon_Furnace.png' },
  { name: 'Invicon Gold Ore.png', url: 'https://minecraft.wiki/w/File:Invicon_Gold_Ore.png' },
  { name: 'Invicon Iron Ingot.png', url: 'https://minecraft.wiki/w/File:Invicon_Iron_Ingot.png' },
  { name: 'Invicon Iron Ore.png', url: 'https://minecraft.wiki/w/File:Invicon_Iron_Ore.png' },
  { name: 'Invicon Iron Pickaxe.png', url: 'https://minecraft.wiki/w/File:Invicon_Iron_Pickaxe.png' },
  { name: 'Invicon Iron Sword.png', url: 'https://minecraft.wiki/w/File:Invicon_Iron_Sword.png' },
  { name: 'Invicon Lapis Lazuli Ore.png', url: 'https://minecraft.wiki/w/File:Invicon_Lapis_Lazuli_Ore.png' },
  { name: 'Invicon Netherite Ingot.png', url: 'https://minecraft.wiki/w/File:Invicon_Netherite_Ingot.png' },
  { name: 'Invicon Netherite Pickaxe.png', url: 'https://minecraft.wiki/w/File:Invicon_Netherite_Pickaxe.png' },
  { name: 'Invicon Oak Log.png', url: 'https://minecraft.wiki/w/File:Invicon_Oak_Log.png' },
  { name: 'Invicon Oak Planks.png', url: 'https://minecraft.wiki/w/File:Invicon_Oak_Planks.png' },
  { name: 'Invicon Obsidian.png', url: 'https://minecraft.wiki/w/File:Invicon_Obsidian.png' },
  { name: 'Invicon Redstone Ore.png', url: 'https://minecraft.wiki/w/File:Invicon_Redstone_Ore.png' },
  { name: 'Invicon Stick.png', url: 'https://minecraft.wiki/w/File:Invicon_Stick.png' },
  { name: 'Invicon Stone Pickaxe.png', url: 'https://minecraft.wiki/w/File:Invicon_Stone_Pickaxe.png' },
  { name: 'Invicon Torch.png', url: 'https://minecraft.wiki/w/File:Invicon_Torch.png' },
  { name: 'Invicon Wooden Pickaxe.png', url: 'https://minecraft.wiki/w/File:Invicon_Wooden_Pickaxe.png' },
  { name: 'Iron Golem JE2 BE2.png', url: 'https://minecraft.wiki/w/File:Iron_Golem_JE2_BE2.png' },
  { name: 'Magma Cube JE2 BE2.png', url: 'https://minecraft.wiki/w/File:Magma_Cube_JE2_BE2.png' },
  { name: 'Nether Fortress.png', url: 'https://minecraft.wiki/w/File:Nether_Fortress.png' },
  { name: 'Nether Wastes.png', url: 'https://minecraft.wiki/w/File:Nether_Wastes.png' },
  { name: 'Piglin JE1.png', url: 'https://minecraft.wiki/w/File:Piglin_JE1.png' },
  { name: 'Plains.png', url: 'https://minecraft.wiki/w/File:Plains.png' },
  { name: 'Skeleton JE6 BE4.png', url: 'https://minecraft.wiki/w/File:Skeleton_JE6_BE4.png' },
  { name: 'Soul Sand Valley.png', url: 'https://minecraft.wiki/w/File:Soul_Sand_Valley.png' },
  { name: 'Spider JE5 BE4.png', url: 'https://minecraft.wiki/w/File:Spider_JE5_BE4.png' },
  { name: 'Strider.png', url: 'https://minecraft.wiki/w/File:Strider.png' },
  { name: 'The End.png', url: 'https://minecraft.wiki/w/File:The_End.png' },
  { name: 'Warden JE1 BE1.png', url: 'https://minecraft.wiki/w/File:Warden_JE1_BE1.png' },
  { name: 'Warped Forest.jpg', url: 'https://minecraft.wiki/w/File:Warped_Forest.jpg' },
  { name: 'Wither JE2 BE2.png', url: 'https://minecraft.wiki/w/File:Wither_JE2_BE2.png' },
  { name: 'Wolf JE2 BE2.png', url: 'https://minecraft.wiki/w/File:Wolf_JE2_BE2.png' },
  { name: 'Zombie JE5 BE2.png', url: 'https://minecraft.wiki/w/File:Zombie_JE5_BE2.png' }
];
const BADGE = { MODO: '#7ee03a', TEMPO: '#f5c518', CLIMA: '#7cc0dc', BUSCA: '#ff7a1a', REGRA: '#c9a4ff', TELEPORTE: '#3fd8d4', ITEM: '#f5c518', MUNDO: '#7ee03a' };
const EMBERS = Array.from({ length: 18 }, (_, i) => ({
  left: ((i * 37) % 100) + '%', size: (6 + (i * 5) % 10) + 'px',
  color: ['#ff7a1a', '#f5c518', '#ff4a1a'][i % 3]
}));

class Component extends DCLogic {
  state = { night: null, mode: 0, mobFilter: 'Todos', recipe: 0, q: 0, picked: null, score: 0, done: false, faq: Math.max(0, FAQS.findIndex(f => f.q === 'Como chego ao Nether?')), copied: -1, w: typeof window !== 'undefined' ? window.innerWidth : 1200, menu: false, cur: '', tipsDone: [], toast: null, heroNight: null };

  getRoot() { return document.getElementById('ne2-root'); }
  componentDidMount() {
    this.onResize = () => this.setState({ w: window.innerWidth });
    window.addEventListener('resize', this.onResize, { passive: true });
    this.prevState = this.state;
    // Dicas marcadas ficam guardadas só neste navegador
    try { const saved = JSON.parse(localStorage.getItem('ne-dicas') || '[]'); if (Array.isArray(saved) && saved.length) this.setState({ tipsDone: saved.filter(n => Number.isInteger(n) && n >= 0 && n < TIPS.length) }); } catch (e) {}
    this.applyTheme(); this.setupAnim();
    // Ao abrir a página o mundo do topo carrega em blocos
    this.arriveT = setTimeout(() => this.worldLoad(null, null), 280);
    // Destaque da seção atual no menu
    this.onSpy = () => {
      if (this.spyRaf) return;
      this.spyRaf = requestAnimationFrame(() => {
        this.spyRaf = 0;
        const line = window.innerHeight * 0.35;
        let cur = '';
        NAV_IDS.forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= line) cur = id; });
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = NAV_IDS[NAV_IDS.length - 1];
        if (cur !== this.state.cur) this.setState({ cur });
      });
    };
    window.addEventListener('scroll', this.onSpy, { passive: true });
    this.onSpy();
    // Links com #secao abertos de fora: a página é montada depois do carregamento, então rola até a seção aqui
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash) {
      // As imagens acima carregam depois e empurram a seção; repete a rolagem até tudo assentar, a menos que a pessoa já tenha mexido
      let moved = false;
      const stop = () => { moved = true; };
      ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(ev => window.addEventListener(ev, stop, { once: true, passive: true }));
      const go = () => { const el = document.getElementById(hash); if (el && !moved) el.scrollIntoView({ behavior: 'instant' }); };
      requestAnimationFrame(go);
      [300, 800, 1500, 2500].forEach(ms => setTimeout(go, ms));
      window.addEventListener('load', go, { once: true });
    }
    const root = this.getRoot();
    const retry = img => {
      const src = img.getAttribute('src') || '';
      if (!src.startsWith('http')) return;
      const n = +(img.dataset.tries || 0); if (n >= 6) { img.style.visibility = 'hidden'; return; }
      img.dataset.tries = n + 1;
      const base = img.dataset.base || (img.dataset.base = src.split(/[?&]r=/)[0]);
      setTimeout(() => { img.style.visibility = ''; img.src = base + (base.includes('?') ? '&' : '?') + 'r=' + (n + 1); }, 500 + n * 700 + Math.random() * 400);
    };
    this.onImgErr = e => { if (e.target && e.target.tagName === 'IMG') retry(e.target); };
    root && root.addEventListener('error', this.onImgErr, true);
    this.sweep = setInterval(() => {
      const r = this.getRoot(); if (!r) return;
      r.querySelectorAll('img').forEach(i => { if (i.complete && !i.naturalWidth) retry(i); });
    }, 1500);
    setTimeout(() => clearInterval(this.sweep), 15000);
  }
  // O runtime chama componentDidUpdate só com as props anteriores; o estado anterior vem desta cópia.
  // Sem ela, a primeira linha falhava em silêncio e as animações abaixo (receita, troca de modo, mobs após filtro) nunca rodavam.
  componentDidUpdate(pp, ps) {
    ps = ps || this.prevState || this.state;
    this.prevState = this.state;
    if (ps.night !== this.state.night || pp.startMode !== this.props.startMode) this.applyTheme();
    if (pp.animation !== this.props.animation || pp.showMarquee !== this.props.showMarquee) { this.teardownAnim(true); this.setupAnim(); }
    if (ps.recipe !== this.state.recipe) { this.popGrid(); const tab = document.querySelectorAll('[data-recipe-tabs] > button')[this.state.recipe]; if (tab && window.innerWidth < 640) tab.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' }); }
    if (ps.mode !== this.state.mode) this.swapMode();
    if (ps.mobFilter !== this.state.mobFilter) setTimeout(() => this.bobMobs(), 30);
    if (ps.night !== this.state.night && this.state.heroNight !== null) this.worldLoad(this.isNight() ? W('Nether_Wastes.png') : W('Plains.png'), () => this.setState({ heroNight: null }));
    // Microinterações acrescentadas: pergunta nova entra, resposta reage, XP pula, selo COPIADO! aparece
    if (ps.q !== this.state.q && !this.state.done) this.swapQuiz();
    if (ps.picked === null && this.state.picked !== null) this.reactPick(this.state.picked);
    if (this.state.score > ps.score) this.pop(document.querySelector('[data-xp]'), 1.35);
    if (!ps.done && this.state.done && this.state.score === QUIZ.length) setTimeout(() => this.unlock('quiz'), 700);
    if (this.state.copied !== -1 && ps.copied !== this.state.copied) this.pop(document.querySelectorAll('#comandos [data-badge]')[this.state.copied], 1.25);
  }
  componentWillUnmount() { clearTimeout(this.arriveT); cancelAnimationFrame(this.worldRaf); (this.worldT || []).forEach(clearTimeout); clearTimeout(this.toastT); window.removeEventListener('resize', this.onResize); window.removeEventListener('scroll', this.onSpy); cancelAnimationFrame(this.spyRaf); this.teardownAnim(); clearInterval(this.sweep); const r = this.getRoot(); r && r.removeEventListener('error', this.onImgErr, true); }

  isNight() { return this.state.night ?? ((this.props.startMode ?? 'Noite') === 'Noite'); }
  lvl() { return this.props.animation ?? 'Intenso'; }
  applyTheme() {
    const el = this.getRoot(); if (!el) return;
    const n = this.isNight();
    Object.entries(n ? NIGHT : DAY).forEach(([k, v]) => el.style.setProperty(k, v));
    document.body.style.background = n ? NIGHT_BODY : DAY_BODY;
    document.documentElement.style.scrollbarColor = n ? '#8b8b8b #0d0404' : '#6b6b6b #e4dcc6';
  }

  setupAnim() {
    const root = this.getRoot(); if (!root) return;
    if (this.animOn) this.teardownAnim(true);
    this.animOn = true; this.anims = []; this.bobAnims = [];
    const lvl = this.lvl(); if (lvl === 'Desligado') return;
    const intense = lvl === 'Intenso';
    const A = (el, kf, opt) => { const a = el.animate(kf, opt); this.anims.push(a); return a; };

    root.querySelectorAll('[data-drop]').forEach(el => {
      A(el, [{ transform: 'translateY(-70px)', opacity: 0 }, { transform: 'translateY(8px)', opacity: 1, offset: .7 }, { transform: 'none', opacity: 1 }],
        { duration: intense ? 800 : 500, delay: +el.dataset.drop, fill: 'backwards', easing: 'cubic-bezier(.2,.7,.2,1)' });
    });
    const show = el => { el.style.opacity = '1'; el.style.transform = 'none'; };
    const vh = window.innerHeight;
    this.revealEls = Array.from(root.querySelectorAll('[data-reveal]'));
    this.io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { show(e.target); this.io.unobserve(e.target); } }), { threshold: .12 });
    this.revealEls.forEach(el => {
      const d = parseInt(el.dataset.reveal) || 0;
      el.style.opacity = '0';
      el.style.transform = intense ? 'translateY(50px) scale(.94)' : 'translateY(16px)';
      el.style.transition = `opacity .7s steps(${intense ? 6 : 12}) ${d}ms, transform .8s cubic-bezier(.3,1.5,.5,1) ${d}ms`;
      if (el.getBoundingClientRect().top < vh) requestAnimationFrame(() => requestAnimationFrame(() => show(el)));
      else this.io.observe(el);
    });
    this.checkScroll = () => { const h = window.innerHeight; this.revealEls.forEach(el => { if (el.style.opacity === '0' && el.getBoundingClientRect().top < h - 40) show(el); }); };
    window.addEventListener('scroll', this.checkScroll, { passive: true, capture: true });
    this.safety = setTimeout(() => this.revealEls.forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight) show(el); }), 2500);

    root.querySelectorAll('[data-float]').forEach((el, i) => {
      A(el, [{ transform: 'translateY(0) rotate(0deg)' }, { transform: `translateY(${intense ? -34 : -10}px) rotate(${intense ? (i % 2 ? -20 : 25) : 6}deg)` }],
        { duration: 2600 + i * 700, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
    });
    if (intense) {
      root.querySelectorAll('[data-ember]').forEach((el, i) => {
        A(el, [{ transform: 'translate(0,0) rotate(0)', opacity: 0 }, { opacity: 1, offset: .15 }, { transform: `translate(${(i % 2 ? 1 : -1) * (20 + i * 3)}px,-${420 + (i * 23) % 260}px) rotate(180deg)`, opacity: 0 }],
          { duration: 3800 + (i * 410) % 3000, delay: (i * 330) % 4000, iterations: Infinity, easing: 'linear' });
      });
    }
    root.querySelectorAll('[data-kb]').forEach(el => A(el, [{ transform: 'scale(1)' }, { transform: 'scale(1.14) translate(-2%,-1%)' }], { duration: 16000, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' }));
    root.querySelectorAll('[data-marquee]').forEach(el => A(el, [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: intense ? 20000 : 45000, iterations: Infinity }));
    root.querySelectorAll('[data-arrow]').forEach(el => A(el, [{ transform: 'translateX(0)' }, { transform: 'translateX(10px)' }], { duration: 500, direction: 'alternate', iterations: Infinity, easing: 'steps(2)' }));
    root.querySelectorAll('[data-blink="1"]').forEach(el => A(el, [{ opacity: 1 }, { opacity: .35 }], { duration: 700, direction: 'alternate', iterations: Infinity, easing: 'steps(1)' }));
    this.bobMobs();
    root.querySelectorAll('[data-shimmer]').forEach((el, i) => A(el, [{ backgroundPosition: '100% 0' }, { backgroundPosition: '-100% 0' }], { duration: 3200, delay: i * 260, iterations: Infinity, easing: 'ease-in-out' }));
    root.querySelectorAll('[data-bubble]').forEach((el, i) => A(el, [{ transform: 'translateY(0) rotate(0)' }, { transform: `translateY(${intense ? -6 : -2}px) rotate(${i % 2 ? 6 : -6}deg)` }], { duration: 1100 + i * 130, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' }));
    if (intense) {
      const par = Array.from(root.querySelectorAll('[data-parallax]'));
      this.onScroll = () => { const y = window.scrollY; par.forEach(el => { el.style.transform = `translateY(${y * parseFloat(el.dataset.parallax)}px) rotate(${Math.min(y * 0.01, 4)}deg)`; }); };
      window.addEventListener('scroll', this.onScroll, { passive: true });
    }
  }
  bobMobs() {
    const root = this.getRoot(); if (!root || this.lvl() === 'Desligado') return;
    (this.bobAnims || []).forEach(a => a.cancel());
    this.bobAnims = Array.from(root.querySelectorAll('[data-bob]')).map((el, i) =>
      el.animate([{ transform: 'translateY(0)' }, { transform: `translateY(${this.lvl() === 'Intenso' ? -12 : -4}px)` }],
        { duration: 900 + (i % 4) * 180, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out', delay: -i * 220 }));
  }
  popGrid() {
    if (this.lvl() === 'Desligado') return;
    const cells = document.querySelectorAll('#ne2-grid > div');
    cells.forEach((el, i) => el.animate([{ transform: 'scale(0) rotate(-20deg)' }, { transform: 'scale(1.15)', offset: .7 }, { transform: 'none' }], { duration: 420, delay: i * 45, fill: 'backwards', easing: 'ease-out' }));
    const r = document.getElementById('ne2-result');
    r && r.animate([{ transform: 'scale(.6) rotate(8deg)' }, { transform: 'scale(1.12)', offset: .6 }, { transform: 'none' }], { duration: 600, delay: 400, fill: 'backwards', easing: 'ease-out' });
  }
  swapMode() {
    if (this.lvl() === 'Desligado') return;
    document.querySelectorAll('[data-modeswap]').forEach((el, i) =>
      el.animate([{ opacity: 0, transform: `translateX(${i ? 40 : -40}px)` }, { opacity: 1, transform: 'none' }], { duration: 450, easing: 'cubic-bezier(.2,.7,.2,1)' }));
  }
  // Movimento extra fica de fora com animações desligadas ou com "reduzir movimento" no sistema
  // Desenha uma imagem no canvas como object-fit:cover, em blocos de `block` px (0 = nítida)
  paintWorld(cv, img, block) {
    const w = cv.width, h = cv.height, ctx = cv.getContext('2d');
    const iw = img.naturalWidth, ih = img.naturalHeight; if (!iw || !ih) return false;
    const sc = Math.max(w / iw, h / ih), sw = w / sc, sh = h / sc, sx = (iw - sw) / 2, sy = (ih - sh) / 2;
    if (!block) { ctx.imageSmoothingEnabled = true; ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h); return true; }
    const dpr = w / cv.clientWidth || 1, cols = Math.max(1, Math.round(w / (block * dpr))), rows = Math.max(1, Math.round(h / (block * dpr)));
    const tiny = this.tinyCv || (this.tinyCv = document.createElement('canvas'));
    tiny.width = cols; tiny.height = rows;
    const tc = tiny.getContext('2d'); tc.imageSmoothingEnabled = true; tc.drawImage(img, sx, sy, sw, sh, 0, 0, cols, rows);
    ctx.imageSmoothingEnabled = false; ctx.clearRect(0, 0, w, h); ctx.drawImage(tiny, 0, 0, cols, rows, 0, 0, w, h);
    return true;
  }
  // Mundo a carregar: o mundo atual se desfaz em blocos (4→32px), o novo aparece em blocos e ganha definição (32→4px).
  // src = imagem do mundo novo (null = só a chegada ao abrir a página); swap troca a <img> real por baixo.
  worldLoad(src, swap) {
    (this.worldT || []).forEach(clearTimeout); this.worldT = [];
    const host = document.querySelector('[data-world]'), cv = document.querySelector('[data-world-fx]'), base = document.querySelector('[data-kb]');
    const done = () => { swap && swap(); };
    if (!host || !cv || !base || this.lvl() === 'Desligado') { done(); return; }
    const reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(host.clientWidth * dpr); cv.height = Math.round(host.clientHeight * dpr);
    // acompanha o zoom lento da imagem para os blocos ficarem alinhados com ela
    cv.style.transform = getComputedStyle(base).transform;
    const later = (ms, fn) => this.worldT.push(setTimeout(fn, ms));
    const hide = (ms) => { cv.animate([{ opacity: 1 }, { opacity: 0 }], { duration: ms, easing: 'cubic-bezier(.16,1,.3,1)' }); later(ms, () => { cv.style.opacity = '0'; }); };
    const run = (next) => {
      if (reduced) {
        // Reduzir movimento: sem blocos, o mundo antigo só se dissolve no novo
        if (!src) return;
        this.paintWorld(cv, base, 0); cv.style.opacity = '1'; done();
        later(30, () => { cv.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 320, easing: 'linear' }); later(320, () => { cv.style.opacity = '0'; }); });
        return;
      }
      // Degraus pequenos e rápidos: cada quadro parece com o anterior, então a troca flui em vez de saltar
      const steps = [];
      if (src) [2, 3, 4, 6, 8, 12, 16, 24].forEach(b => steps.push({ img: base, b, ms: 28 }));
      [24, 16, 12, 8, 6, 4, 3, 2].forEach(b => steps.push({ img: next, b, ms: 38, isNew: true }));
      let at = 0; steps.forEach(st => { st.at = at; at += st.ms; });
      const total = at, t0 = performance.now(); let shown = -1, swapped = false, ended = false;
      const show = i => {
        const st = steps[i]; if (!this.paintWorld(cv, st.img, st.b)) return;
        cv.style.opacity = '1';
        if (st.isNew && !swapped) { swapped = true; done(); }
      };
      const finish = () => { if (ended) return; ended = true; cancelAnimationFrame(this.worldRaf); if (!swapped) { swapped = true; done(); } hide(140); };
      // Desenha no ritmo do ecrã; o temporizador só garante o fim se os quadros atrasarem
      const tick = () => {
        if (ended) return;
        const el = performance.now() - t0;
        let i = shown; while (i + 1 < steps.length && steps[i + 1].at <= el) i++;
        if (i !== shown) { shown = i; show(i); }
        if (el >= total) finish(); else this.worldRaf = requestAnimationFrame(tick);
      };
      cancelAnimationFrame(this.worldRaf);
      show(0); shown = 0;
      this.worldRaf = requestAnimationFrame(tick);
      later(total + 80, finish);
    };
    if (!src) { if (base.complete && base.naturalWidth) run(base); else base.addEventListener('load', () => run(base), { once: true }); return; }
    const next = new Image(); next.decoding = 'async';
    next.onload = () => run(next);
    next.onerror = () => done();
    next.src = src;
  }
  unlock(key) {
    let got = [];
    try { got = JSON.parse(localStorage.getItem('ne-conquistas') || '[]'); } catch (e) {}
    this.gotSession = this.gotSession || {};
    if (got.includes(key) || this.gotSession[key]) return;
    this.gotSession[key] = true;
    try { localStorage.setItem('ne-conquistas', JSON.stringify(got.concat(key))); } catch (e) {}
    const a = ACHIEVEMENTS[key];
    this.setState({ toast: { title: a.title, text: a.text(), icon: a.icon } });
    clearTimeout(this.toastT); this.toastT = setTimeout(() => this.setState({ toast: null }), 6000);
  }
  hitBlock(el) {
    if (!el || this.blockBusy) return;
    this.hits = (this.hits || 0) + 1;
    if (this.hits < 4) {
      el.dataset.crack = String(this.hits);
      if (!this.calm()) el.animate([{ translate: '0 0' }, { translate: '-3px 2px' }, { translate: '3px -1px' }, { translate: '0 0' }], { duration: 160, easing: 'steps(3)' });
      return;
    }
    // Quebra: o bloco some em pedaços de grama e terra e volta depois
    this.blockBusy = true; this.hits = 0;
    const host = el.parentElement, r = el.getBoundingClientRect(), hr = host.getBoundingClientRect();
    if (!this.calm()) {
      const cols = ['#5fb233', '#7a5232', '#5e3d22', '#3f8a22', '#95693f'];
      for (let i = 0; i < 14; i++) {
        const s = document.createElement('span');
        const sz = 6 + Math.round(Math.random() * 6);
        s.style.cssText = 'position:absolute;z-index:4;pointer-events:none;width:' + sz + 'px;height:' + sz + 'px;background:' + cols[i % cols.length] + ';left:' + (r.left - hr.left + r.width / 2) + 'px;top:' + (r.top - hr.top + r.height / 2) + 'px';
        host.appendChild(s);
        const dx = (Math.random() - .5) * 140, dy = -40 - Math.random() * 60;
        s.animate([{ translate: '0 0', opacity: 1 }, { translate: dx + 'px ' + dy + 'px', opacity: 1, offset: .45 }, { translate: dx * 1.3 + 'px ' + (dy + 160) + 'px', opacity: 0 }], { duration: 900, easing: 'cubic-bezier(.2,.7,.4,1)' }).onfinish = () => s.remove();
      }
    }
    el.dataset.crack = '0';
    el.style.visibility = 'hidden';
    this.unlock('bloco');
    setTimeout(() => {
      el.style.visibility = '';
      if (!this.calm()) el.animate([{ scale: '0', opacity: 0 }, { scale: '1.1', opacity: 1, offset: .7 }, { scale: '1', opacity: 1 }], { duration: 360, easing: 'steps(5)' });
      this.blockBusy = false;
    }, 2400);
  }
  saveTips() { try { localStorage.setItem('ne-dicas', JSON.stringify(this.state.tipsDone)); } catch (e) {} }
  calm() { return this.lvl() === 'Desligado' || !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }
  swapQuiz() {
    if (this.calm()) return;
    document.querySelectorAll('[data-quizswap]').forEach((el, i) =>
      el.animate([{ opacity: 0, translate: '28px 0' }, { opacity: 1, translate: '0 0' }], { duration: 320, delay: i * 70, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' }));
  }
  reactPick(i) {
    const b = document.querySelectorAll('[data-quizopts] button')[i];
    if (!b || this.calm()) return;
    if (QUIZ[this.state.q].a === i) b.animate([{ scale: '1' }, { scale: '1.06' }, { scale: '1' }], { duration: 280, easing: 'cubic-bezier(.16,1,.3,1)' });
    else b.animate([{ translate: '0 0' }, { translate: '-6px 0' }, { translate: '6px 0' }, { translate: '-4px 0' }, { translate: '4px 0' }, { translate: '0 0' }], { duration: 320, easing: 'steps(5)' });
  }
  pop(el, peak) {
    if (!el || this.calm()) return;
    el.animate([{ scale: '1' }, { scale: String(peak) }, { scale: '1' }], { duration: 300, easing: 'steps(4)' });
  }
  burst(good) {
    const fx = document.getElementById('ne2-fx'); if (!fx || this.lvl() === 'Desligado') return;
    const cols = good ? ['#7ee03a', '#f5c518', '#3fd8d4', '#ffffff'] : ['#ff6a4a', '#555', '#222'];
    for (let i = 0; i < (good ? 28 : 12); i++) {
      const p = document.createElement('span');
      const s = 6 + Math.random() * 10;
      p.style.cssText = `position:absolute;left:50%;top:40%;width:${s}px;height:${s}px;background:${cols[i % cols.length]};box-shadow:0 0 0 2px #000`;
      fx.appendChild(p);
      const ang = Math.random() * Math.PI * 2, dist = 120 + Math.random() * 220;
      p.animate([{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: `translate(${Math.cos(ang) * dist}px,${Math.sin(ang) * dist + 120}px) rotate(${Math.random() * 540}deg)`, opacity: 0 }],
        { duration: 900 + Math.random() * 500, easing: 'cubic-bezier(.2,.7,.4,1)' }).onfinish = () => p.remove();
    }
  }
  teardownAnim(reset) {
    this.animOn = false;
    this.io && this.io.disconnect();
    clearTimeout(this.safety);
    this.checkScroll && window.removeEventListener('scroll', this.checkScroll, { capture: true });
    this.onScroll && window.removeEventListener('scroll', this.onScroll);
    (this.anims || []).concat(this.bobAnims || []).forEach(a => a.cancel());
    if (reset) {
      (this.revealEls || []).forEach(el => { el.style.opacity = ''; el.style.transform = ''; el.style.transition = ''; });
      const root = this.getRoot();
      root && root.querySelectorAll('[data-parallax]').forEach(el => { el.style.transform = ''; });
    }
  }

  renderVals() {
    const s = this.state;
    const night = this.isNight();
    const btn = on => ({ bg: on ? '#f5c518' : '#c6c6c6', fg: '#111' });

    const Q = QUIZ[s.q];
    const answered = s.picked !== null;
    const options = Q.o.map((label, i) => {
      let bg = '#c6c6c6', fg = '#111', opacity = 1, scale = 1;
      if (answered) {
        if (i === Q.a) { bg = '#7ee03a'; scale = 1.04; }
        else if (i === s.picked) { bg = '#ff6a4a'; scale = .96; }
        else opacity = .45;
      }
      return { label, bg, fg, opacity, scale, onClick: () => {
        if (this.state.picked !== null) return;
        const ok = i === Q.a;
        this.setState(st => ({ picked: i, score: st.score + (ok ? 1 : 0) }), () => this.burst(ok));
      } };
    });
    const total = QUIZ.length;
    const verdict = s.score === total ? { title: 'Lenda do Nether!', text: 'Gabaritou. Pode acender o portal sem medo.' }
      : s.score >= 4 ? { title: 'Explorador experiente.', text: 'Quase lá. Mais uma revisada nas dicas e você está pronto.' }
      : { title: 'Ainda no Overworld.', text: 'Sem pressa: releia as dicas e tente de novo antes de cruzar o portal.' };
    const recipe = RECIPES[s.recipe];

    return {
      credits: CREDITS,
      themeLabel: night ? 'VER DE DIA' : 'VER À NOITE', themeAria: night ? 'Mudar para o tema Dia' : 'Mudar para o tema Noite', toggleSwatch: night ? '#f5c518' : '#ff7a1a',
      // A imagem do topo segura o mundo antigo até ele se desfazer em blocos
      toggleNight: () => this.setState({ night: !night, heroNight: night }, () => this.applyTheme()),
      heroImg: (s.heroNight ?? night) ? W('Nether_Wastes.png') : W('Plains.png'),
      heroAlt: (s.heroNight ?? night) ? 'Nether' : 'Planícies do Overworld',
      embers: EMBERS,
      showMarquee: this.props.showMarquee ?? true,
      loop: [
        { n: 1, title: 'Explore', text: 'Florestas, desertos, cavernas e oceanos.', color: '#3fd8d4' },
        { n: 2, title: 'Colete', text: 'Madeira, pedra, ferro — e um dia, diamantes.', color: '#c8964f' },
        { n: 3, title: 'Construa', text: 'Ferramentas, abrigos, cidades inteiras.', color: '#7ee03a' },
        { n: 4, title: 'Sobreviva', text: 'A noite chega. Os monstros também.', color: '#ff6a4a' }
      ].map((x, i) => ({ ...x, delay: 120 * i })),
      modeTabs: MODES.map((m, i) => ({ name: m.name, ...btn(i === s.mode), lift: i === s.mode ? '-4px' : '0px', onClick: () => this.setState({ mode: i }) })),
      mode: MODES[s.mode],
      mobFilters: ['Todos', 'Pacífico', 'Neutro', 'Hostil'].map(f => ({
        name: { Todos: 'Todos', 'Pacífico': 'Pacíficos', Neutro: 'Neutros', Hostil: 'Hostis' }[f], ...btn(f === s.mobFilter), onClick: () => this.setState({ mobFilter: f })
      })),
      mobs: MOBS.filter(m => s.mobFilter === 'Todos' || m.type === s.mobFilter).map(m => ({ ...m, tagBg: TYPE[m.type].tag, bg: TYPE[m.type].bg })),
      recipe,
      recipeTabs: RECIPES.map((r, i) => ({ name: r.name, yield: r.yield, ...btn(i === s.recipe), shift: i === s.recipe ? '10px' : '0px', onClick: () => this.setState({ recipe: i }) })),
      cells: recipe.grid.split('').map(ch => {
        const m = MAT[ch];
        return m ? { label: m.label, icon: m.icon, op: 1, has: true }
          : { label: '', icon: '', op: 0, has: false };
      }),
      tipsWord: porExtenso(TIPS.length), quizWord: porExtenso(QUIZ.length),
      tips: TIPS.map((t, i) => {
        const on = s.tipsDone.includes(i);
        return { ...t, n: String(i + 1).padStart(2, '0'), delay: (i % 2) * 120 + Math.floor(i / 2) * 60,
          checked: on, open: !on, pressed: on ? 'true' : 'false', fade: on ? '.6' : '1', slotBg: on ? '#3f8a22' : '#8b8b8b',
          aria: (on ? 'Desmarcar: ' : 'Marcar como feita: ') + t.title,
          toggle: () => this.setState(st => ({ tipsDone: st.tipsDone.includes(i) ? st.tipsDone.filter(x => x !== i) : st.tipsDone.concat(i) }), () => { this.saveTips(); if (this.state.tipsDone.includes(i)) this.pop(document.querySelectorAll('[data-tip-slot]')[i], 1.18); if (this.state.tipsDone.length === TIPS.length) this.unlock('dicas'); }) };
      }),
      toastOn: !!s.toast, toast: s.toast || { title: '', text: '', icon: '' },
      closeToast: () => { clearTimeout(this.toastT); this.setState({ toast: null }); },
      hitBlock: e => this.hitBlock((e && e.currentTarget) || document.querySelector('[data-float="1"]')),
      tipsBar: Math.round(s.tipsDone.length / TIPS.length * 100) + '%',
      tipsProgress: s.tipsDone.length === 0 ? 'Marque cada regra quando já souber fazer.' : s.tipsDone.length === TIPS.length ? 'Tudo pronto para a primeira semana!' : s.tipsDone.length + ' de ' + TIPS.length + ' prontas',
      gallery: GALLERY.map((g, i) => ({ ...g, delay: i * 100 })),
      updates: UPDATES.map((u, i) => ({ ...u, delay: i * 120, blink: u.status === 'EM TESTE' ? '1' : '0', tagBg: u.status === 'EM TESTE' ? '#ff7a1a' : '#7ee03a' })),
      quizActive: !s.done, quizDone: s.done, answered,
      question: Q, options, qNum: s.q + 1, qTotal: total, score: s.score,
      progress: ((s.q + (answered ? 1 : 0)) / total * 100) + '%',
      nextLabel: s.q === total - 1 ? 'Ver resultado ►' : 'Próxima ►',
      next: () => this.setState(st => st.q === total - 1 ? { done: true } : { q: st.q + 1, picked: null }, () => { if (this.state.done) this.burst(true); }),
      restart: () => this.setState({ q: 0, picked: null, score: 0, done: false }),
      verdict,
      isDesktop: s.w >= 1040, isMobile: s.w < 1040, menuOpen: s.w < 1040 && s.menu,
      menuIcon: s.menu ? '✕' : '☰',
      toggleMenu: () => this.setState(st => ({ menu: !st.menu })),
      closeMenu: () => this.setState({ menu: false }),
      navGroups: NAV.map(g => {
        const on = g.links.some(l => l[0] === s.cur);
        return {
          label: g.label, kind: g.direct ? 'direct' : 'menu', href: '#' + g.links[0][0],
          popup: g.direct ? 'false' : 'true', current: on ? 'true' : 'false',
          mark: on ? 'inset 0 -4px 0 var(--gold)' : 'none',
          links: g.links.map(([id, label]) => {
            const c = id === s.cur;
            return { href: '#' + id, label, current: c ? 'page' : 'false', bg: c ? 'var(--gold)' : 'transparent', color: c ? '#1b0d0d' : '#fff7ea', hoverBg: c ? 'var(--gold)' : 'rgba(255,255,255,.12)' };
          })
        };
      }),
      menuGroups: NAV.filter(g => !g.direct).map((g, gi) => ({
        label: g.label.toUpperCase(),
        links: (gi === 1 ? g.links.concat(NAV.find(x => x.direct).links) : g.links).map(([id, label]) => {
          const c = id === s.cur;
          return { href: '#' + id, label, current: c ? 'page' : 'false', mBg: c ? 'var(--gold)' : 'var(--panel)', mColor: c ? '#1b0d0d' : 'var(--pink)', mHi: c ? 'rgba(255,255,255,.5)' : 'var(--hi)' };
        })
      })),
      // No Dia o painel é pedra clara: o rótulo usa a versão escura da cor do mundo
      dims: DIMS.map((d, i) => ({ ...d, delay: i * 120, labelColor: night ? d.color : ({ '#7ee03a': '#1d4f09', '#ff7a1a': '#7f3200', '#c9a4ff': '#5b2ea0' }[d.color] || '#1d1d1d') })),
      prog: PROG.map((p, i) => ({ ...p, n: i + 1, delay: i * 90 })),
      bosses: BOSSES.map((b, i) => ({ ...b, delay: i * 110, hpPct: Math.round(b.hp / 500 * 100) + '%' })),
      // Cartões em ordem de profundidade (do alto da montanha à rocha-matriz); os do Nether vão por último
      ores: ORES.slice().sort((a, b) => (a.nether ? 1 : 0) - (b.nether ? 1 : 0) || +b.y - +a.y).map((o, i) => ({ ...o, delay: (i % 3) * 90 })),
      oreTicks: [256, 64, 0, -64].map(y => ({ y: 'Y ' + y, top: oreTop(y) })),
      oreLayers: [{ name: 'MONTANHAS', top: '1%' }, { name: 'SUPERFÍCIE', top: 'calc(59.2% + 12px)' }, { name: 'ARDÓSIA', top: '86%' }],
      oreMarks: (() => { let prev = null, lane = 0; return ORES.filter(o => !o.nether).sort((a, b) => +b.y - +a.y).map(o => { const top = parseFloat(oreTop(+o.y)); lane = prev !== null && top - prev < 7 ? 1 - lane : 0; prev = top; return { icon: o.icon, label: o.name + ' · Y ' + o.y, top: top + '%', left: (lane ? 70 : 30) + '%' }; }); })(),
      enchants: ENCHANTS.map((e, i) => ({ ...e, delay: (i % 2) * 80 })),
      potions: POTIONS.map((p, i) => ({ ...p, delay: i * 70 })),
      cmds: CMDS.map((c, i) => ({ ...c, delay: (i % 2) * 90,
        badge: s.copied === i ? 'COPIADO!' : c.badge, badgeBg: s.copied === i ? '#ffffff' : BADGE[c.badge],
        onClick: () => {
          const done = () => { this.setState({ copied: i }); clearTimeout(this.copyT); this.copyT = setTimeout(() => this.setState({ copied: -1 }), 1400); };
          const fallback = () => { const t = document.createElement('textarea'); t.value = c.cmd; t.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (e) {} t.remove(); done(); };
          try { navigator.clipboard.writeText(c.cmd).then(done, fallback); } catch (e) { fallback(); }
        } })),
      faqs: FAQS.map((f, i) => ({ ...f, open: s.faq === i, rot: s.faq === i ? '45deg' : '0deg', delay: i * 80,
        onClick: () => this.setState(st => ({ faq: st.faq === i ? -1 : i })) }))
    };
  }
}

export { Component }
