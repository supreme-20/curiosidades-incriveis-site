const articles = [
  {
    title: "Existe um planeta onde pode chover vidro de lado",
    category: "Mundo",
    readingTime: "3 min de leitura",
    description: "Os ventos em um mundo distante são tão intensos que transformam partículas de silicato em uma tempestade extraordinária.",
    image: "images/artigo-mundo.jpg",
    link: "artigos/lugares-incriveis.html",
    featured: true,
    popular: true,
  },
  {
    title: "Polvos têm três corações — e dois param quando eles nadam",
    category: "Animais",
    readingTime: "4 min de leitura",
    description: "Por que o corpo de um polvo funciona de uma maneira tão diferente da nossa?",
    image: "images/artigo-polvo.jpg",
    link: "artigos/polvo-tres-coracoes.html",
    featured: true,
    popular: true,
  },
  {
    title: "Seu corpo emite uma luz invisível a olhos humanos",
    category: "Ciência",
    readingTime: "5 min de leitura",
    description: "Células liberam uma pequena quantidade de fótons durante processos naturais do organismo.",
    image: "images/artigo-destaque.jpg",
    link: "artigos/exemplo-artigo.html",
    featured: true,
  },
  {
    title: "A floresta que parece conversar por baixo da terra",
    category: "Mundo",
    readingTime: "4 min de leitura",
    description: "Fungos conectam raízes e ajudam árvores a trocar sinais e recursos no subsolo.",
    image: "images/artigo-mundo.jpg",
    link: "artigos/lugares-incriveis.html",
    featured: true,
  },
  {
    title: "Por que alguns povos antigos construíam cidades inteiras sem carros?",
    category: "História",
    readingTime: "6 min de leitura",
    description: "O planejamento urbano existe há milênios — e algumas ideias ainda surpreendem arquitetos atuais.",
    image: "images/artigo-palavras.jpg",
    link: "artigos/origem-palavras.html",
  },
  {
    title: "O lugar mais silencioso do planeta pode fazer você ouvir o próprio corpo",
    category: "Mundo",
    readingTime: "3 min de leitura",
    description: "Uma câmara especial absorve quase todo som externo e muda completamente a experiência de escutar.",
    image: "images/artigo-ceu.jpg",
    link: "artigos/lugares-incriveis.html",
    popular: true,
  },
  {
    title: "A inteligência artificial já ajuda a decifrar línguas perdidas",
    category: "Tecnologia",
    readingTime: "5 min de leitura",
    description: "Algoritmos encontram padrões em inscrições que pareciam impossíveis de interpretar.",
    image: "images/artigo-internet.jpg",
    link: "artigos/internet-funciona.html",
  },
  {
    title: "Há mais árvores na Terra do que estrelas na nossa galáxia",
    category: "Mundo",
    readingTime: "3 min de leitura",
    description: "Uma comparação que ajuda a imaginar a escala impressionante da vida no planeta.",
    image: "images/artigo-destaque.jpg",
    link: "artigos/exemplo-artigo.html",
  },
];

const createFeatureCard = (article) => `
  <article class="feature-card searchable" style="--image: url('${article.image}')" data-search="${article.title} ${article.category} ${article.description}" onclick="location.href='${article.link}'" style="cursor:pointer">
    <div class="card-content">
      <span class="tag">${article.category}</span>
      <h3><a href="${article.link}">${article.title}</a></h3>
      <p class="card-meta"><span>●</span>${article.readingTime}</p>
    </div>
  </article>`;

const createRecentCard = (article) => `
  <article class="recent-card searchable" data-search="${article.title} ${article.category} ${article.description}" onclick="location.href='${article.link}'" style="cursor:pointer">
    <img src="${article.image}" alt="Imagem ilustrativa para: ${article.title}" loading="lazy" />
    <div>
      <span class="tag">${article.category}</span>
      <h3><a href="${article.link}">${article.title}</a></h3>
      <p>${article.description}</p>
    </div>
    <a class="arrow-link" href="${article.link}" aria-label="Ler ${article.title}">→</a>
  </article>`;

const createPopularCard = (article, index) => `
  <article class="popular-card searchable" data-search="${article.title} ${article.category} ${article.description}" onclick="location.href='${article.link}'" style="cursor:pointer">
    <span class="popular-number">0${index + 1}</span>
    <div>
      <span class="tag">${article.category}</span>
      <h3><a href="${article.link}">${article.title}</a></h3>
      <p>${article.readingTime}</p>
    </div>
  </article>`;

// Render grids if present on index.html
const featuredGrid = document.querySelector('#featured-grid');
if (featuredGrid) {
  featuredGrid.innerHTML = articles.filter((article) => article.featured).map(createFeatureCard).join('');
}

const recentList = document.querySelector('#recent-list');
if (recentList) {
  recentList.innerHTML = articles.slice(4).map(createRecentCard).join('');
}

const popularGrid = document.querySelector('#popular-grid');
if (popularGrid) {
  popularGrid.innerHTML = articles.filter((article) => article.popular).map(createPopularCard).join('');
}

const yearElement = document.querySelector('#year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Theme Toggle
const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('ci-theme');

if (savedTheme === 'light') {
  root.dataset.theme = 'light';
}

function updateThemeLabel() {
  if (!themeToggle) return;
  const isLight = root.dataset.theme === 'light';
  themeToggle.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
}

updateThemeLabel();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    if (nextTheme === 'dark') {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = 'light';
    }
    localStorage.setItem('ci-theme', nextTheme);
    updateThemeLabel();
  });
}

// Mobile Menu Toggle
const menuButton = document.querySelector('.menu-toggle') || document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  navigation.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
    })
  );
}

// Live Search Panel
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
  if (event.key === 'Escape') closeSearch();
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
        : 'Pesquise entre as curiosidades.';
    }
  });
}

// Category filter in artigos.html (if query param present)
const urlParams = new URLSearchParams(window.location.search);
const catParam = urlParams.get('categoria');
if (catParam) {
  const cards = document.querySelectorAll('.articles-grid .article-card');
  const pills = document.querySelectorAll('.category-bar .category-pill');
  pills.forEach((p) => {
    if (p.getAttribute('href') && p.getAttribute('href').includes(catParam)) {
      pills.forEach((pill) => pill.classList.remove('active'));
      p.classList.add('active');
    }
  });
  cards.forEach((card) => {
    const cat = card.querySelector('.card-category')?.textContent?.toLowerCase() || '';
    if (cat.includes(catParam.toLowerCase())) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
