// =========================================================
// CURIOSIDADES INCRÍVEIS - SCRIPT OFICIAL
// =========================================================

// 7 Artigos Oficiais existentes no portal
const articles = [
  {
    "id": "polvo-tres-coracoes",
    "title": "O Mistério dos Polvos: 3 Corações, Sangue Azul e Inteligência de Outro Mundo",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "4 min de leitura",
    "description": "Por que o corpo de um polvo funciona de uma maneira tão diferente e dois de seus corações param quando ele nada?",
    "image": "images/artigo-polvo.jpg",
    "link": "artigos/polvo-tres-coracoes.html",
    "featured": true,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "abelhas-rostos",
    "title": "Abelhas Conseguem Reconhecer Rostos Humanos?",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "4 min de leitura",
    "description": "Pesquisas comprovam que insetos com cérebros minúsculos conseguem memorizar traços faciais usando processamento holístico.",
    "image": "images/artigo-abelhas.jpg",
    "link": "artigos/abelhas-rostos.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "corvos-inteligencia",
    "title": "A Inteligência dos Corvos: Eles Guardam Rancor e Planejam o Futuro",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "4 min de leitura",
    "description": "Cientistas provaram que corvos reconhecem rostos de quem os prejudicou, passam esse rancor para filhotes e usam ferramentas complexas.",
    "image": "images/artigo-corvos.jpg",
    "link": "artigos/corvos-inteligencia.html",
    "featured": true,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "animal-imortal-agua-viva",
    "title": "O Único Animal Imortal da Terra: A Água-Viva Turritopsis Dohrnii",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "4 min de leitura",
    "description": "Conheça o animal que desafia a biologia: quando fica velha ou ferida, ela simplesmente rejuvenesce e volta a ser um pólipo jovem.",
    "image": "images/artigo-agua-viva.jpg",
    "link": "artigos/animal-imortal-agua-viva.html",
    "featured": false,
    "recent": true,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "camarao-mantis-soco",
    "title": "O Soco Supersônico do Camarão-Mantis que Ferve a Água",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "⚡ 3 min de leitura",
    "description": "Seu golpe veloz acelera mais rápido que uma bala calibre .22, gera luz por cavitação e produz calor similar à superfície solar.",
    "image": "images/artigo-mantis.jpg",
    "link": "artigos/camarao-mantis-soco.html",
    "featured": false,
    "recent": true,
    "popular": true,
    "quickFact": true
  },
  {
    "id": "exemplo-artigo",
    "title": "O Mistério das Profundezas: Criaturas que Desafiam a Biologia",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "5 min de leitura",
    "description": "Descubra como organismos sobrevivem à pressão esmagadora e à escuridão total no fundo dos oceanos.",
    "image": "images/artigo-destaque.jpg",
    "link": "artigos/exemplo-artigo.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "por-que-ceu-azul",
    "title": "Por Que o Céu É Azul? O Fenômeno que a Física Explica",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "4 min de leitura",
    "description": "O espalhamento de Rayleigh revela por que a luz solar pinta a nossa atmosfera de azul e dourado.",
    "image": "images/artigo-ceu.jpg",
    "link": "artigos/por-que-ceu-azul.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "som-mais-alto-krakatoa",
    "title": "O Som Mais Alto Já Ouvido na Terra: A Explosão do Krakatoa",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "4 min de leitura",
    "description": "Em 1883, a erupção do vulcão Krakatoa gerou uma onda sonora que deu 4 voltas completas no planeta e rompeu tímpanos a 64 km.",
    "image": "images/artigo-krakatoa.jpg",
    "link": "artigos/som-mais-alto-krakatoa.html",
    "featured": true,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "gelo-quente-estados-materia",
    "title": "Gelo Quente: Por Que a Água Congela a Mais de 100°C Sob Pressão Extrema",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "4 min de leitura",
    "description": "No coração de gigantes gasosos como Netuno e Urano existe gelo superiônico incandescente. Descubra a física inacreditável da água.",
    "image": "images/artigo-gelo-quente.jpg",
    "link": "artigos/gelo-quente-estados-materia.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "tempo-topo-montanha",
    "title": "Por Que o Tempo Passa Mais Rápido no Topo de Uma Montanha?",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "⚡ 3 min de leitura",
    "description": "A teoria da relatividade geral de Einstein na prática: a gravidade distorce o fluxo dos segundos e afeta até o GPS do seu celular.",
    "image": "images/artigo-tempo-montanha.jpg",
    "link": "artigos/tempo-topo-montanha.html",
    "featured": false,
    "recent": true,
    "popular": true,
    "quickFact": true
  },
  {
    "id": "internet-funciona",
    "title": "Como a Internet Realmente Funciona Debaixo dos Oceanos?",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "5 min de leitura",
    "description": "Quase 99% de todo o tráfego de dados intercontinental atravessa cabos de fibra óptica no fundo do mar.",
    "image": "images/artigo-internet.jpg",
    "link": "artigos/internet-funciona.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "bug-guerra-nuclear-1983",
    "title": "O Homem que Salvou o Mundo de um Bug de Computador em 1983",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "4 min de leitura",
    "description": "Stanislav Petrov confiou em sua intuição quando o sistema soviético apontou ataque de mísseis americanos que na verdade eram reflexos do Sol.",
    "image": "images/artigo-stanislav-bug.jpg",
    "link": "artigos/bug-guerra-nuclear-1983.html",
    "featured": true,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "sete-chaves-internet",
    "title": "As 7 Pessoas que Guardam as Chaves Mestras da Internet Mundial",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "4 min de leitura",
    "description": "Um ritual secreto da ICANN reúne especialistas para garantir a autenticidade do DNS que mantém o mundo online seguro.",
    "image": "images/artigo-chaves-internet.jpg",
    "link": "artigos/sete-chaves-internet.html",
    "featured": false,
    "recent": true,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "mecanismo-anticitera-computador",
    "title": "Mecanismo de Anticítera: O Primeiro Computador Analógico Tem Mais de 2.000 Anos",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "4 min de leitura",
    "description": "Engrenagens de bronze esculpidas na Grécia Antiga previam posições planetárias e eclipses com precisão milimétrica séculos antes de Cristo.",
    "image": "images/artigo-anticitera.jpg",
    "link": "artigos/mecanismo-anticitera-computador.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "virus-stuxnet-arma-digital",
    "title": "Stuxnet: O Primeiro Vírus Capaz de Destruir Máquinas Físicas no Mundo Real",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "⚡ 3 min de leitura",
    "description": "Como um código invisível infectou centrífugas nucleares iranianas sem estar conectado à internet e abriu a era da ciberguerra.",
    "image": "images/artigo-stuxnet.jpg",
    "link": "artigos/virus-stuxnet-arma-digital.html",
    "featured": false,
    "recent": true,
    "popular": true,
    "quickFact": true
  },
  {
    "id": "origem-palavras",
    "title": "A Fascinante Origem das Palavras que Falamos Todos os Dias",
    "category": "História",
    "categorySlug": "historia",
    "readingTime": "4 min de leitura",
    "description": "Termos comuns que guardam lendas curiosas, equívocos históricos e transformações linguísticas surpreendentes.",
    "image": "images/artigo-palavras.jpg",
    "link": "artigos/origem-palavras.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "guerra-dos-emus",
    "title": "A Grande Guerra dos Emus: Quando o Exército Australiano Perdeu Para Aves",
    "category": "História",
    "categorySlug": "historia",
    "readingTime": "⚡ 3 min de leitura",
    "description": "Em 1932, soldados armados com metralhadoras Lewis enfrentaram milhares de emus que destruíam plantações no deserto australiano.",
    "image": "images/artigo-emus.jpg",
    "link": "artigos/guerra-dos-emus.html",
    "featured": false,
    "recent": true,
    "popular": true,
    "quickFact": true
  },
  {
    "id": "epidemia-danca-1518",
    "title": "A Epidemia da Dança de 1518: Quando Centenas Dançaram Até a Morte",
    "category": "História",
    "categorySlug": "historia",
    "readingTime": "4 min de leitura",
    "description": "O misterioso surto em Estrasburgo que fez homens e mulheres dançarem freneticamente nas praças sem conseguir parar durante semanas.",
    "image": "images/artigo-epidemia-danca.jpg",
    "link": "artigos/epidemia-danca-1518.html",
    "featured": true,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "fogo-grego-arma-secreta",
    "title": "O Fogo Grego: A Terrível Arma Secreta Bizantina que Queimava na Água",
    "category": "História",
    "categorySlug": "historia",
    "readingTime": "4 min de leitura",
    "description": "O lança-chamas naval que salvou Constantinopla por séculos e cuja fórmula química foi guardada como segredo de Estado até sumir.",
    "image": "images/artigo-fogo-grego.jpg",
    "link": "artigos/fogo-grego-arma-secreta.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "adaga-tutancamon-meteorito",
    "title": "A Adaga de Tutancâmon Forjada com Ferro Vindo do Espaço",
    "category": "História",
    "categorySlug": "historia",
    "readingTime": "⚡ 3 min de leitura",
    "description": "Análises de raios-X comprovaram que a lâmina dourada da tumba do jovem faraó foi esculpida a partir de um meteorito metálico antes da Idade do Ferro.",
    "image": "images/artigo-adaga-tutancamon.jpg",
    "link": "artigos/adaga-tutancamon-meteorito.html",
    "featured": false,
    "recent": true,
    "popular": true,
    "quickFact": true
  },
  {
    "id": "lugares-incriveis",
    "title": "5 Lugares Mais Surpreendentes e Misteriosos da Terra",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "6 min de leitura",
    "description": "De cavernas de cristais gigantes a rios em ebulição natural: formações que parecem cenários de ficção científica.",
    "image": "images/artigo-mundo.jpg",
    "link": "artigos/lugares-incriveis.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "porta-do-inferno-darvaza",
    "title": "A Porta do Inferno: A Cratera de Darvaza que Queima Há Mais de 50 Anos",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "⚡ 3 min de leitura",
    "description": "No deserto do Turcomenistão, uma perfuração soviética falha deu origem a uma cratera em chamas perpétuas visível a quilômetros no escuro.",
    "image": "images/artigo-darvaza.jpg",
    "link": "artigos/porta-do-inferno-darvaza.html",
    "featured": false,
    "recent": true,
    "popular": true,
    "quickFact": true
  },
  {
    "id": "ponto-nemo-lugar-solitario",
    "title": "Ponto Nemo: O Ponto Mais Inacessível e Solitário do Planeta Terra",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "4 min de leitura",
    "description": "O local no oceano onde os seres humanos mais próximos são astronautas na órbita terrestre, transformado em cemitério oficial de naves espaciais.",
    "image": "images/artigo-ponto-nemo.jpg",
    "link": "artigos/ponto-nemo-lugar-solitario.html",
    "featured": true,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "lago-natron-petrificador",
    "title": "Lago Natron: As Águas Extremas que Transformam Animais em Estátuas",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "4 min de leitura",
    "description": "Com pH próximo ao da amônia e temperaturas que chegam a 60°C, este lago tanzaniano calcifica corpos com perfeição assustadora.",
    "image": "images/artigo-lago-natron.jpg",
    "link": "artigos/lago-natron-petrificador.html",
    "featured": false,
    "recent": true,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "floresta-arvores-tortas-polonia",
    "title": "A Floresta Torta de Gryfino: O Enigma dos 400 Pinheiros Curvados na Polônia",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "4 min de leitura",
    "description": "Quatrocentos pinheiros crescem com uma curva idêntica de 90 graus na base sem que a ciência ou a história tenham chegado a um consenso.",
    "image": "images/artigo-floresta-torta.jpg",
    "link": "artigos/floresta-arvores-tortas-polonia.html",
    "featured": false,
    "recent": true,
    "popular": false,
    "quickFact": false
  }
];

// Fatos rápidos para o "Você Sabia?" e "Curiosidade Aleatória" (Restritos às 5 categorias oficiais)
const curiosities = [
  {
    "category": "Animais",
    "icon": "🐙",
    "fact": "Polvos têm três corações e sangue azul à base de cobre. Quando nadam em alta velocidade, dois dos seus corações simplesmente param de bater para poupar energia.",
    "articleLink": "artigos/polvo-tres-coracoes.html"
  },
  {
    "category": "Animais",
    "icon": "🦅",
    "fact": "Corvos reconhecem rostos humanos individuais e guardam rancor por até 5 anos, ensinando seus filhotes e a colônia a atacarem quem os prejudicou.",
    "articleLink": "artigos/corvos-inteligencia.html"
  },
  {
    "category": "Animais",
    "icon": "🦐",
    "fact": "O golpe do camarão-mantis atinge a aceleração de uma bala de revólver e gera tanto calor que a água marinha ao redor ferve momentaneamente.",
    "articleLink": "artigos/camarao-mantis-soco.html"
  },
  {
    "category": "Animais",
    "icon": "🪼",
    "fact": "A água-viva Turritopsis dohrnii é biologicamente imortal: quando fica doente ou idosa, reverte suas células e volta a ser um filhote para recomeçar o ciclo da vida.",
    "articleLink": "artigos/animal-imortal-agua-viva.html"
  },
  {
    "category": "Ciência",
    "icon": "🌋",
    "fact": "A erupção do vulcão Krakatoa em 1883 gerou o som mais alto da história da humanidade: sua onda de choque percorreu o planeta Terra 4 vezes completas.",
    "articleLink": "artigos/som-mais-alto-krakatoa.html"
  },
  {
    "category": "Ciência",
    "icon": "⏱️",
    "fact": "Por causa da dilatação temporal de Einstein, o tempo passa ligeiramente mais rápido no topo de uma montanha do que na praia ao nível do mar.",
    "articleLink": "artigos/tempo-topo-montanha.html"
  },
  {
    "category": "Ciência",
    "icon": "🧊",
    "fact": "Nos núcleos de Urano e Netuno existe 'gelo quente': água superiônica comprimida a milhões de atmosferas que congela mesmo a milhares de graus Celsius.",
    "articleLink": "artigos/gelo-quente-estados-materia.html"
  },
  {
    "category": "Tecnologia",
    "icon": "🌐",
    "fact": "Quase 99% de todas as comunicações mundiais da internet viajam por mais de 1,4 milhão de km de cabos de fibra óptica depositados no fundo dos oceanos.",
    "articleLink": "artigos/internet-funciona.html"
  },
  {
    "category": "Tecnologia",
    "icon": "🚨",
    "fact": "Em 1983, o oficial soviético Stanislav Petrov salvou o mundo de uma guerra nuclear ao desconfiar de um alarme de satélite que na verdade era apenas reflexo do Sol em nuvens.",
    "articleLink": "artigos/bug-guerra-nuclear-1983.html"
  },
  {
    "category": "Tecnologia",
    "icon": "🔑",
    "fact": "A autoridade raiz do DNS mundial é protegida por 14 guardiões internacionais que guardam chaves físicas de metal em cofres biométricos subterrâneos.",
    "articleLink": "artigos/sete-chaves-internet.html"
  },
  {
    "category": "Tecnologia",
    "icon": "⚙️",
    "fact": "O Mecanismo de Anticítera, construído na Grécia Antiga há mais de 2.000 anos, usava mais de 30 engrenagens de bronze para calcular órbitas planetárias e eclipses.",
    "articleLink": "artigos/mecanismo-anticitera-computador.html"
  },
  {
    "category": "História",
    "icon": "🪖",
    "fact": "Em 1932, a Austrália mobilizou soldados com metralhadoras contra 20 mil emus e perdeu a batalha após as aves adotarem táticas de fuga em velocidade.",
    "articleLink": "artigos/guerra-dos-emus.html"
  },
  {
    "category": "História",
    "icon": "🗡️",
    "fact": "A adaga cerimonial de Tutancâmon foi esculpida a partir de um meteorito metálico vindo do espaço séculos antes da humanidade dominar a fundição de ferro.",
    "articleLink": "artigos/adaga-tutancamon-meteorito.html"
  },
  {
    "category": "História",
    "icon": "🔥",
    "fact": "O fogo grego, arma naval secreta que salvou Bizâncio por 500 anos, queimava sobre a água do mar e sua fórmula química foi guardada tão bem que se perdeu para sempre.",
    "articleLink": "artigos/fogo-grego-arma-secreta.html"
  },
  {
    "category": "Mundo",
    "icon": "🔥",
    "fact": "A Cratera de Darvaza ('A Porta do Inferno'), no Turcomenistão, queima continuamente no deserto há mais de 50 anos alimentada por gás metano natural.",
    "articleLink": "artigos/porta-do-inferno-darvaza.html"
  },
  {
    "category": "Mundo",
    "icon": "🌊",
    "fact": "No Ponto Nemo, o local mais isolado da Terra, os humanos mais próximos não estão em terra firme, mas sim a bordo da Estação Espacial Internacional a 400 km de altura.",
    "articleLink": "artigos/ponto-nemo-lugar-solitario.html"
  },
  {
    "category": "Mundo",
    "icon": "🧂",
    "fact": "O Lago Natron na Tanzânia tem águas com pH tão alcalino que calcifica e mumifica animais que caem nele como estátuas perfeitas de sal.",
    "articleLink": "artigos/lago-natron-petrificador.html"
  },
  {
    "category": "Mundo",
    "icon": "🌲",
    "fact": "Na Floresta Torta de Gryfino, 400 pinheiros crescem com uma curva idêntica de 90 graus na base apontando para o norte desde a década de 1930.",
    "articleLink": "artigos/floresta-arvores-tortas-polonia.html"
  }
];

// Card Templates
const createFeatureCard = (article) => `
  <article class="feature-card searchable" data-category="${article.categorySlug}" style="--image: url('${article.image}')" data-search="${article.title} ${article.category} ${article.description}" onclick="location.href='${article.link}'" style="cursor:pointer">
    <div class="card-content">
      <span class="tag">${article.category}</span>
      <h3><a href="${article.link}">${article.title}</a></h3>
      <p class="card-meta"><span>●</span>${article.readingTime}</p>
    </div>
  </article>`;

const createRecentCard = (article) => `
  <article class="recent-card searchable" data-category="${article.categorySlug}" data-search="${article.title} ${article.category} ${article.description}" onclick="location.href='${article.link}'" style="cursor:pointer">
    <img src="${article.image}" alt="Imagem ilustrativa para: ${article.title}" loading="lazy" />
    <div>
      <span class="tag">${article.category}</span>
      <h3><a href="${article.link}">${article.title}</a></h3>
      <p>${article.description}</p>
    </div>
    <a class="arrow-link" href="${article.link}" aria-label="Ler ${article.title}">→</a>
  </article>`;

const createPopularCard = (article, index) => `
  <article class="popular-card searchable" data-category="${article.categorySlug}" data-search="${article.title} ${article.category} ${article.description}" onclick="location.href='${article.link}'" style="cursor:pointer">
    <span class="popular-number">0${index + 1}</span>
    <div>
      <span class="tag">${article.category}</span>
      <h3><a href="${article.link}">${article.title}</a></h3>
      <p>${article.readingTime}</p>
    </div>
  </article>`;

// Inicialização de Grids na Home
const featuredGrid = document.querySelector('#featured-grid');
if (featuredGrid) {
  featuredGrid.innerHTML = articles.filter((a) => a.featured).map(createFeatureCard).join('');
}

const recentList = document.querySelector('#recent-list');
if (recentList) {
  recentList.innerHTML = articles.filter((a) => a.recent).map(createRecentCard).join('');
}

const popularGrid = document.querySelector('#popular-grid');
if (popularGrid) {
  popularGrid.innerHTML = articles.filter((a) => a.popular).map(createPopularCard).join('');
}

// Ano do rodapé
const yearElement = document.querySelector('#year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Alternância de Tema Claro / Escuro
const root = document.documentElement;
const themeToggles = document.querySelectorAll('.theme-toggle');
const savedTheme = localStorage.getItem('ci-theme');

if (savedTheme === 'light') {
  root.dataset.theme = 'light';
}

function updateThemeLabel() {
  const isLight = root.dataset.theme === 'light';
  themeToggles.forEach((btn) => {
    btn.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
  });
}
updateThemeLabel();

themeToggles.forEach((btn) => {
  btn.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    if (nextTheme === 'dark') {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = 'light';
    }
    localStorage.setItem('ci-theme', nextTheme);
    updateThemeLabel();
  });
});

// =========================================================
// TICKER DINÂMICO "VOCÊ SABIA?"
// =========================================================
const tickerContent = document.querySelector('#ticker-content');
const tickerNext = document.querySelector('#ticker-next');
let currentTickerIndex = 0;

function showTickerFact(index) {
  if (!tickerContent) return;
  const item = curiosities[index % curiosities.length];
  tickerContent.style.opacity = '0';
  setTimeout(() => {
    tickerContent.innerHTML = `<span>${item.icon} <strong>${item.category}:</strong> ${item.fact}</span>`;
    tickerContent.style.opacity = '1';
  }, 200);
}

if (tickerContent) {
  showTickerFact(0);
  setInterval(() => {
    currentTickerIndex = (currentTickerIndex + 1) % curiosities.length;
    showTickerFact(currentTickerIndex);
  }, 9000);
}

if (tickerNext) {
  tickerNext.addEventListener('click', () => {
    currentTickerIndex = (currentTickerIndex + 1) % curiosities.length;
    showTickerFact(currentTickerIndex);
  });
}

// =========================================================
// CARD INTERATIVO: CURIOSIDADE ALEATÓRIA (SURPREENDA-ME)
// =========================================================
const surpriseBadge = document.querySelector('#surprise-badge');
const surpriseFact = document.querySelector('#surprise-fact');
const surpriseLink = document.querySelector('#surprise-link');
const surpriseBtn = document.querySelector('#surprise-btn');

let lastSurpriseIndex = -1;

function rollRandomFact() {
  if (!surpriseFact) return;
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * curiosities.length);
  } while (newIndex === lastSurpriseIndex && curiosities.length > 1);
  lastSurpriseIndex = newIndex;

  const item = curiosities[newIndex];
  surpriseFact.style.opacity = '0';
  surpriseFact.style.transform = 'translateY(4px)';

  setTimeout(() => {
    if (surpriseBadge) {
      surpriseBadge.innerHTML = `${item.icon} ${item.category}`;
    }
    surpriseFact.textContent = `"${item.fact}"`;
    if (surpriseLink) {
      surpriseLink.href = item.articleLink;
      surpriseLink.textContent = `Explorar artigo em ${item.category} →`;
    }
    surpriseFact.style.opacity = '1';
    surpriseFact.style.transform = 'translateY(0)';
  }, 200);
}

if (surpriseBtn) {
  surpriseBtn.addEventListener('click', rollRandomFact);
  rollRandomFact();
}

// Botões "🎲 Curiosidade" na barra de navegação levam até a caixa de surpresa
document.querySelectorAll('.nav-surprise-btn, .drawer-surprise-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const box = document.querySelector('#curiosidade-aleatoria');
    if (box) {
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
      rollRandomFact();
      closeMobileDrawer();
    }
  });
});

// =========================================================
// FILTRO RÁPIDO DE CATEGORIAS NA HOME
// =========================================================
const homeFilterPills = document.querySelectorAll('.home-filters .filter-pill');
if (homeFilterPills.length > 0) {
  homeFilterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      homeFilterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      const selected = pill.dataset.category;

      document.querySelectorAll('#featured-grid .feature-card, #recent-list .recent-card').forEach((card) => {
        const cat = card.dataset.category;
        if (selected === 'all' || cat === selected) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// =========================================================
// MENU MOBILE GAVETA (DRAWER)
// =========================================================
const menuToggle = document.querySelector('.menu-toggle') || document.querySelector('.menu-button');
const mobileDrawer = document.querySelector('#mobile-drawer');
const drawerOverlay = document.querySelector('#drawer-overlay');
const drawerClose = document.querySelector('#drawer-close');

function openMobileDrawer() {
  if (mobileDrawer && drawerOverlay) {
    mobileDrawer.classList.add('is-open');
    drawerOverlay.classList.add('is-open');
    document.body.classList.add('drawer-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'true');
    }
  }
}

function closeMobileDrawer() {
  if (mobileDrawer && drawerOverlay) {
    mobileDrawer.classList.remove('is-open');
    drawerOverlay.classList.remove('is-open');
    document.body.classList.remove('drawer-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  }
}

if (menuToggle) {
  menuToggle.addEventListener('click', openMobileDrawer);
}
if (drawerClose) {
  drawerClose.addEventListener('click', closeMobileDrawer);
}
if (drawerOverlay) {
  drawerOverlay.addEventListener('click', closeMobileDrawer);
}
if (mobileDrawer) {
  mobileDrawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileDrawer);
  });
}

// =========================================================
// DROPDOWN DESKTOP DE CATEGORIAS
// =========================================================
const navDropdown = document.querySelector('.nav-dropdown');
if (navDropdown) {
  const trigger = navDropdown.querySelector('.nav-dropdown-trigger');
  if (trigger) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      navDropdown.classList.toggle('is-active');
    });
  }
  document.addEventListener('click', () => {
    navDropdown.classList.remove('is-active');
  });
}

// =========================================================
// PAINEL DE PESQUISA RÁPIDA
// =========================================================
const searchTrigger = document.querySelector('.search-trigger') || document.querySelector('.icon-button[aria-label="Pesquisar"]');
const searchPanel = document.querySelector('.search-panel');
const searchInput = document.querySelector('#search-input');
const searchClose = document.querySelector('.search-close');
const searchMessage = document.querySelector('.search-message');

function closeSearch() {
  if (!searchPanel) return;
  searchPanel.classList.remove('is-open');
  searchPanel.setAttribute('aria-hidden', 'true');
  if (searchTrigger) searchTrigger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('search-open');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.searchable').forEach((item) => (item.hidden = false));
}

if (searchTrigger && searchPanel) {
  searchTrigger.addEventListener('click', () => {
    searchPanel.classList.add('is-open');
    searchPanel.setAttribute('aria-hidden', 'false');
    searchTrigger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('search-open');
    if (searchInput) searchInput.focus();
  });
}

if (searchClose) {
  searchClose.addEventListener('click', closeSearch);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeSearch();
    closeMobileDrawer();
  }
});

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.trim().toLowerCase();
    const searchableItems = [...document.querySelectorAll('.searchable')];
    if (searchableItems.length > 0) {
      searchableItems.forEach((item) => {
        const text = (item.dataset.search || item.textContent || '').toLowerCase();
        item.hidden = term && !text.includes(term);
      });
    }
    if (searchMessage) {
      const matchCount = articles.filter((a) =>
        `${a.title} ${a.category} ${a.description}`.toLowerCase().includes(term)
      ).length;
      searchMessage.textContent = term
        ? `${matchCount} resultado(s) encontrado(s). Feche a busca para ver os cards.`
        : 'Pesquise entre os artigos e curiosidades.';
    }
  });
}

// Filtro de categoria por URL em artigos.html (?categoria=xxx)
const urlParams = new URLSearchParams(window.location.search);
const catParam = urlParams.get('categoria');
if (catParam) {
  const cards = document.querySelectorAll('.articles-grid .article-card, .searchable');
  const pills = document.querySelectorAll('.category-bar .category-pill');
  pills.forEach((p) => {
    if (p.getAttribute('href') && p.getAttribute('href').includes(catParam)) {
      pills.forEach((pill) => pill.classList.remove('active'));
      p.classList.add('active');
    }
  });
  cards.forEach((card) => {
    const cat = (card.dataset.category || card.querySelector('.card-category')?.textContent || '').toLowerCase();
    if (cat.includes(catParam.toLowerCase())) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// =========================================================
// CONTADOR AO VIVO DE COMUNIDADE (INSTAGRAM @curiosidades.incriveis6)
// =========================================================
(function initFollowerCounter() {
  const counterEl = document.getElementById('live-follower-counter');
  if (!counterEl) return;

  // Número base atual de seguidores (fácil de editar quando a página atingir novas marcas!)
  const BASE_FOLLOWERS = 55940;
  
  // Variação orgânica sutil baseada no tempo do dia (simulação de pulso contínuo)
  const now = new Date();
  const dayMinutes = now.getHours() * 60 + now.getMinutes();
  const organicVariation = Math.floor(dayMinutes / 18); // adiciona pequenos seguidores ao longo do dia
  const targetCount = BASE_FOLLOWERS + organicVariation;

  let currentCount = Math.max(0, targetCount - 120); // começa ligeiramente abaixo para a animação
  const duration = 1800; // 1.8 segundos de animação inicial
  const startTime = performance.now();

  function formatNumber(num) {
    return '+' + num.toLocaleString('pt-BR');
  }

  function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutExpo(progress);

    const val = Math.floor(currentCount + (targetCount - currentCount) * easedProgress);
    counterEl.textContent = formatNumber(val);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      counterEl.textContent = formatNumber(targetCount);
      // Pulso orgânico sutil a cada 45-90 segundos (novo seguidor engajando)
      setupOrganicTick(targetCount);
    }
  }

  function setupOrganicTick(count) {
    let runningCount = count;
    function scheduleNext() {
      const delay = Math.floor(Math.random() * (90000 - 45000)) + 45000;
      setTimeout(() => {
        runningCount += 1;
        if (counterEl) {
          counterEl.textContent = formatNumber(runningCount);
          // Efeito de flash suave verde/dourado ao subir
          counterEl.style.color = '#4ade80';
          setTimeout(() => {
            if (counterEl) counterEl.style.color = '#ffffff';
          }, 600);
        }
        scheduleNext();
      }, delay);
    }
    scheduleNext();
  }

  requestAnimationFrame(updateCounter);
})();

