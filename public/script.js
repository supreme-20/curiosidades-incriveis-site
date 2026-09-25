// =========================================================
// CURIOSIDADES INCRÍVEIS - SCRIPT OFICIAL
// =========================================================

// 7 Artigos Oficiais existentes no portal
const articles = [
  {
    id: "exemplo-artigo",
    title: "O Mistério das Profundezas: Criaturas que Desafiam a Biologia",
    category: "Ciência",
    categorySlug: "ciencia",
    readingTime: "5 min de leitura",
    description: "Descubra como organismos sobrevivem à pressão esmagadora e à escuridão total no fundo dos oceanos.",
    image: "images/artigo-destaque.jpg",
    link: "artigos/exemplo-artigo.html",
    featured: true,
    popular: true,
  },
  {
    id: "polvo-tres-coracoes",
    title: "O Mistério dos Polvos: 3 Corações, Sangue Azul e Inteligência de Outro Mundo",
    category: "Animais",
    categorySlug: "animais",
    readingTime: "4 min de leitura",
    description: "Por que o corpo de um polvo funciona de uma maneira tão diferente e dois de seus corações param quando ele nada?",
    image: "images/artigo-polvo.jpg",
    link: "artigos/polvo-tres-coracoes.html",
    featured: true,
    popular: true,
  },
  {
    id: "por-que-ceu-azul",
    title: "Por Que o Céu É Azul? O Fenômeno que a Física Explica",
    category: "Ciência",
    categorySlug: "ciencia",
    readingTime: "4 min de leitura",
    description: "O espalhamento de Rayleigh revela por que a luz solar pinta a nossa atmosfera de azul e dourado.",
    image: "images/artigo-ceu.jpg",
    link: "artigos/por-que-ceu-azul.html",
    featured: true,
    popular: false,
  },
  {
    id: "internet-funciona",
    title: "Como a Internet Realmente Funciona Debaixo dos Oceanos?",
    category: "Tecnologia",
    categorySlug: "tecnologia",
    readingTime: "5 min de leitura",
    description: "Quase 99% de todo o tráfego de dados intercontinental atravessa cabos de fibra óptica no fundo do mar.",
    image: "images/artigo-internet.jpg",
    link: "artigos/internet-funciona.html",
    featured: true,
    popular: true,
  },
  {
    id: "lugares-incriveis",
    title: "5 Lugares Mais Surpreendentes e Misteriosos da Terra",
    category: "Mundo",
    categorySlug: "mundo",
    readingTime: "6 min de leitura",
    description: "De cavernas de cristais gigantes a rios em ebulição natural: formações que parecem cenários de ficção científica.",
    image: "images/artigo-mundo.jpg",
    link: "artigos/lugares-incriveis.html",
    featured: false,
    popular: true,
  },
  {
    id: "abelhas-rostos",
    title: "Abelhas Conseguem Reconhecer Rostos Humanos?",
    category: "Animais",
    categorySlug: "animais",
    readingTime: "4 min de leitura",
    description: "Pesquisas comprovam que insetos com cérebros minúsculos conseguem memorizar traços faciais usando processamento holístico.",
    image: "images/artigo-abelhas.jpg",
    link: "artigos/abelhas-rostos.html",
    featured: false,
    popular: false,
  },
  {
    id: "origem-palavras",
    title: "A Fascinante Origem das Palavras que Falamos Todos os Dias",
    category: "História",
    categorySlug: "historia",
    readingTime: "4 min de leitura",
    description: "Termos comuns que guardam lendas curiosas, equívocos históricos e transformações linguísticas surpreendentes.",
    image: "images/artigo-palavras.jpg",
    link: "artigos/origem-palavras.html",
    featured: false,
    popular: false,
  },
];

// Fatos rápidos para o "Você Sabia?" e "Curiosidade Aleatória" (Restritos às 5 categorias oficiais)
const curiosities = [
  {
    category: "Animais",
    icon: "🐙",
    fact: "Polvos têm três corações e sangue azul à base de cobre (hemocianina). Quando nadam, dois dos seus corações simplesmente param de bater para economizar energia.",
    articleLink: "artigos/polvo-tres-coracoes.html",
  },
  {
    category: "Ciência",
    icon: "☀️",
    fact: "A luz azul do Sol se espalha em todas as direções pelos gases da atmosfera porque viaja em ondas menores e mais curtas. É por isso que vemos o céu azul durante o dia.",
    articleLink: "artigos/por-que-ceu-azul.html",
  },
  {
    category: "Tecnologia",
    icon: "🌐",
    fact: "Mais de 1,4 milhão de quilômetros de cabos submarinos de fibra óptica repousam no leito dos oceanos, transmitindo cerca de 99% de todas as comunicações mundiais da internet.",
    articleLink: "artigos/internet-funciona.html",
  },
  {
    category: "Animais",
    icon: "🐝",
    fact: "Mesmo tendo um cérebro com menos de 1 milhão de neurônios, as abelhas conseguem aprender a distinguir e memorizar rostos humanos individuais usando a mesma técnica visual que nós usamos.",
    articleLink: "artigos/abelhas-rostos.html",
  },
  {
    category: "História",
    icon: "📜",
    fact: "A palavra 'salário' vem do latim 'salarium', que era a cota de sal fornecida aos soldados e funcionários do Império Romano, um bem valioso na preservação de alimentos.",
    articleLink: "artigos/origem-palavras.html",
  },
  {
    category: "Mundo",
    icon: "🌋",
    fact: "No coração da Amazônia peruana corre o rio Shanay-timpishka, cujas águas chegam a quase 100°C devido a um sistema hidrotérmico profundo que jorra água fervente naturalmente.",
    articleLink: "artigos/lugares-incriveis.html",
  },
  {
    category: "Ciência",
    icon: "🌊",
    fact: "Na Fossa das Marianas, a quase 11.000 metros de profundidade, a pressão exercida pela água é de mais de 1.000 vezes a pressão atmosférica ao nível do mar — equivalente ao peso de um elefante na ponta do seu polegar.",
    articleLink: "artigos/exemplo-artigo.html",
  },
  {
    category: "Mundo",
    icon: "🪐",
    fact: "No exoplaneta HD 189733b, os ventos sopram a mais de 8.000 km/h e a atmosfera é composta por partículas de silicato, o que faz com que literalmente chova vidro derretido na horizontal.",
    articleLink: "artigos/lugares-incriveis.html",
  },
  {
    category: "Tecnologia",
    icon: "🛰️",
    fact: "Os relógios atômicos a bordo dos satélites GPS precisam ser ajustados para a relatividade de Einstein: no espaço, o tempo passa cerca de 38 microssegundos por dia mais rápido que na Terra.",
    articleLink: "artigos/internet-funciona.html",
  },
  {
    category: "História",
    icon: "🏛️",
    fact: "Cleópatra viveu cronologicamente mais perto da criação do iPhone e da chegada à Lua do que da construção da Grande Pirâmide de Gizé.",
    articleLink: "artigos/origem-palavras.html",
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
  recentList.innerHTML = articles.filter((a) => !a.featured).map(createRecentCard).join('');
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
