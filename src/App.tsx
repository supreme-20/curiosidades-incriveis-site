import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  Clock,
  Share2,
  Check,
  ExternalLink,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { ARTICLES_DATA, CATEGORIES, type Article } from './data/articles';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'articles' | 'article-detail'>('home');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleArticlesCount, setVisibleArticlesCount] = useState(6);
  const [copiedLink, setCopiedLink] = useState(false);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('ci-theme') as 'dark' | 'light' | null;
    if (savedTheme === 'light') {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('ci-theme', nextTheme);
  };

  // Keyboard escape handler for search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  // Navigate to article reader
  const handleOpenArticle = (article: Article) => {
    setActiveArticle(article);
    setCurrentView('article-detail');
    setSearchOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to specific category in articles view
  const handleSelectCategoryFromHome = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('articles');
    setVisibleArticlesCount(6);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Share article link
  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2400);
  };

  // Filtered articles for the Articles page
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return ARTICLES_DATA;
    }
    return ARTICLES_DATA.filter((art) => art.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [selectedCategory]);

  // Live search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return ARTICLES_DATA.filter(
      (art) =>
        art.title.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q) ||
        art.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Home page data slices
  const featuredArticles = useMemo(() => ARTICLES_DATA.filter((a) => a.featured), []);
  const recentArticles = useMemo(() => ARTICLES_DATA.slice(3, 8), []);
  const popularArticles = useMemo(() => ARTICLES_DATA.filter((a) => a.popular).slice(0, 3), []);

  // Contador de seguidores animado com efeito "Ao Vivo" (Instagram @curiosidades.incriveis6)
  const [followerCount, setFollowerCount] = useState<number>(55900);
  const [isCounterHighlighted, setIsCounterHighlighted] = useState<boolean>(false);

  useEffect(() => {
    const baseFollowers = 55940;
    const now = new Date();
    const dayMinutes = now.getHours() * 60 + now.getMinutes();
    const organicVariation = Math.floor(dayMinutes / 18);
    const target = baseFollowers + organicVariation;

    const startVal = Math.max(0, target - 120);
    const duration = 1800;
    const startTime = performance.now();

    let animationFrameId: number;

    const update = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(startVal + (target - startVal) * ease);
      setFollowerCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(update);
      } else {
        setFollowerCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(update);

    // Micro-incremento sutil a cada 60s simulando novo engajamento
    const interval = setInterval(() => {
      setFollowerCount((prev) => prev + 1);
      setIsCounterHighlighted(true);
      setTimeout(() => setIsCounterHighlighted(false), 600);
    }, 60000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={searchOpen ? 'search-open' : ''}>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          <button
            type="button"
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="brand bg-transparent border-0 cursor-pointer text-left"
            aria-label="Curiosidades Incríveis - início"
          >
            <img src="/favicon.png" alt="Curiosidades Incríveis Logo" className="brand-logo" />
            <span>
              Curiosidades <strong>Incríveis</strong>
            </span>
          </button>

          <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Navegação principal">
            <button
              type="button"
              className={currentView === 'home' ? 'active' : ''}
              onClick={() => {
                setCurrentView('home');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Início
            </button>

            <button
              type="button"
              onClick={() => {
                if (currentView !== 'home') setCurrentView('home');
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('em-alta')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Em alta
            </button>

            <button
              type="button"
              className={currentView === 'articles' ? 'active' : ''}
              onClick={() => {
                setCurrentView('articles');
                setSelectedCategory('Todos');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Artigos
            </button>

            <button
              type="button"
              onClick={() => {
                if (currentView !== 'home') setCurrentView('home');
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Categorias
            </button>
          </nav>

          <div className="header-actions">
            <button
              className="icon-button"
              type="button"
              aria-label="Pesquisar"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            <button
              className="icon-button theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              title="Mudar tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-[18px] h-[18px]" />
              ) : (
                <Moon className="w-[18px] h-[18px]" />
              )}
            </button>

            <a
              className="instagram-button"
              href="https://www.instagram.com/curiosidades.incriveis6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>

            <button
              className="menu-toggle"
              type="button"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay Panel */}
      {searchOpen && (
        <div className="search-panel" aria-modal="true" role="dialog">
          <div className="search-box">
            <label htmlFor="search-input">O que você quer descobrir?</label>
            <div className="search-field">
              <Search className="w-5 h-5 text-[#169eff]" />
              <input
                id="search-input"
                type="search"
                autoFocus
                placeholder="Ex.: espaço, polvo, cérebro, floresta, física..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
              />
              <button
                className="search-close"
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
              >
                Fechar
              </button>
            </div>

            <p className="search-message" aria-live="polite">
              {searchQuery.trim()
                ? `${searchResults.length} resultado(s) encontrado(s) para "${searchQuery}".`
                : 'Digite uma palavra-chave para explorar curiosidades.'}
            </p>

            {searchResults.length > 0 && (
              <div className="search-results-list">
                {searchResults.map((article) => (
                  <div
                    key={article.id}
                    className="search-result-item cursor-pointer"
                    onClick={() => handleOpenArticle(article)}
                  >
                    <img src={article.image} alt={article.title} />
                    <div>
                      <span className="tag mb-1">{article.category}</span>
                      <h4 className="font-semibold text-sm mb-1">{article.title}</h4>
                      <p className="text-xs text-[var(--muted)] line-clamp-1">{article.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content Areas */}
      <main id="conteudo">
        {/* =========================================================
            VIEW 1: INÍCIO (HOMEPAGE)
            ========================================================= */}
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <section className="hero" id="inicio">
              <div className="hero-background" role="img" aria-label="Curiosidades Incríveis Banner"></div>
              <div className="container hero-content">
                <p className="eyebrow">
                  <span></span> em destaque
                </p>
                <h1>O universo está cheio de coisas que parecem impossíveis.</h1>
                <p className="hero-copy">
                  E a melhor parte é que muitas delas são reais. Descubra fatos surpreendentes que transformam a
                  forma de enxergar a ciência, a natureza e o mundo ao seu redor.
                </p>
                <div className="hero-buttons flex gap-5 flex-wrap items-center">
                  <button
                    className="button button-primary cursor-pointer"
                    onClick={() => {
                      const featuredItem = ARTICLES_DATA[0];
                      handleOpenArticle(featuredItem);
                    }}
                  >
                    Ler agora <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                  <button
                    className="button button-light cursor-pointer"
                    onClick={() => {
                      setCurrentView('articles');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Ver todos os artigos
                  </button>
                </div>
              </div>
              <a
                className="hero-stat"
                href="https://www.instagram.com/curiosidades.incriveis6"
                target="_blank"
                rel="noreferrer"
                title="Ver comunidade oficial no Instagram @curiosidades.incriveis6"
              >
                <div className="hero-stat-info">
                  <div className="hero-stat-header">
                    <strong
                      style={{
                        color: isCounterHighlighted ? '#4ade80' : '#ffffff',
                        transition: 'color 0.4s ease',
                      }}
                    >
                      +{followerCount.toLocaleString('pt-BR')}
                    </strong>
                    <div className="hero-stat-live">
                      <span className="live-dot" aria-hidden="true"></span>
                      <span>AO VIVO</span>
                    </div>
                  </div>
                  <span className="hero-stat-label">mentes curiosas no Instagram</span>
                </div>
                <span className="hero-stat-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </section>

            {/* Em Alta Section */}
            <section className="section container" id="em-alta">
              <div className="section-heading">
                <div>
                  <p className="eyebrow accent">
                    <span></span> em alta
                  </p>
                  <h2>O que está despertando a curiosidade</h2>
                </div>
                <button
                  className="text-link bg-transparent border-0 cursor-pointer"
                  onClick={() => {
                    setCurrentView('articles');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Ver todos os artigos <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="featured-grid">
                {featuredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="feature-card"
                    style={{ ['--card-image' as any]: `url('${article.image}')` }}
                    onClick={() => handleOpenArticle(article)}
                  >
                    <div className="card-content">
                      <span className="tag">{article.category}</span>
                      <h3>{article.title}</h3>
                      <p className="card-meta">
                        <span>●</span>
                        {article.readingTime}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Recent Articles Section */}
            <section className="section recent-section" id="recentes">
              <div className="container">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow">
                      <span></span> artigos recentes
                    </p>
                    <h2>Descobertas para levar com você</h2>
                  </div>
                  <p className="section-intro">Uma seleção criteriosa de fatos para alimentar a curiosidade todos os dias.</p>
                </div>

                <div className="recent-list">
                  {recentArticles.map((article) => (
                    <article
                      key={article.id}
                      className="recent-card"
                      onClick={() => handleOpenArticle(article)}
                    >
                      <img src={article.image} alt={article.title} loading="lazy" />
                      <div>
                        <span className="tag">{article.category}</span>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                      </div>
                      <div className="arrow-link" aria-label="Ler artigo">
                        →
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* Categorias Section */}
            <section className="section container" id="categorias">
              <div className="section-heading centered-heading">
                <div>
                  <p className="eyebrow">
                    <span></span> explore por assunto
                  </p>
                  <h2>Qual universo você quer explorar?</h2>
                </div>
              </div>

              <div className="category-grid">
                <div
                  className="category-card animals"
                  onClick={() => handleSelectCategoryFromHome('Animais')}
                >
                  <span className="cat-emoji">🐘</span>
                  <strong>Animais</strong>
                  <small>Vida selvagem & biologia</small>
                </div>

                <div
                  className="category-card science"
                  onClick={() => handleSelectCategoryFromHome('Ciência')}
                >
                  <span className="cat-emoji">🧠</span>
                  <strong>Ciência</strong>
                  <small>Física, química e cosmos</small>
                </div>

                <div
                  className="category-card tech"
                  onClick={() => handleSelectCategoryFromHome('Tecnologia')}
                >
                  <span className="cat-emoji">🚀</span>
                  <strong>Tecnologia</strong>
                  <small>Inovações & futuro</small>
                </div>

                <div
                  className="category-card history"
                  onClick={() => handleSelectCategoryFromHome('História')}
                >
                  <span className="cat-emoji">🏛️</span>
                  <strong>História</strong>
                  <small>Origens & civilizações</small>
                </div>

                <div
                  className="category-card world"
                  onClick={() => handleSelectCategoryFromHome('Mundo')}
                >
                  <span className="cat-emoji">🌎</span>
                  <strong>Mundo</strong>
                  <small>Lugares extremos & planeta</small>
                </div>
              </div>
            </section>

            {/* Mais Lidos Section */}
            <section className="section container" id="mais-lidos">
              <div className="section-heading">
                <div>
                  <p className="eyebrow accent">
                    <span></span> mais lidos
                  </p>
                  <h2>Fatos rápidos, impacto duradouro</h2>
                </div>
              </div>

              <div className="popular-grid">
                {popularArticles.map((article, idx) => (
                  <article
                    key={article.id}
                    className="popular-card"
                    onClick={() => handleOpenArticle(article)}
                  >
                    <span className="popular-number">0{idx + 1}</span>
                    <div>
                      <span className="tag">{article.category}</span>
                      <h3>{article.title}</h3>
                      <p>{article.readingTime}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Instagram CTA */}
            <section className="instagram-cta">
              <div className="container cta-inner">
                <div>
                  <p className="eyebrow">
                    <span></span> curiosidade todos os dias
                  </p>
                  <h2>Siga a Curiosidades Incríveis no Instagram.</h2>
                  <p className="text-white/80 mt-2 text-base">
                    Descubra fatos rápidos, carrosséis explicativos e vídeos diários com mais de 55 mil seguidores.
                  </p>
                </div>
                <a
                  className="button button-light whitespace-nowrap"
                  href="https://www.instagram.com/curiosidades.incriveis6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Conhecer a página <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </section>
          </>
        )}

        {/* =========================================================
            VIEW 2: ARTIGOS (ARTICLES DIRECTORY)
            ========================================================= */}
        {currentView === 'articles' && (
          <>
            <section className="articles-hero">
              <div className="container">
                <div className="breadcrumb">
                  <button type="button" onClick={() => setCurrentView('home')}>
                    Início
                  </button>
                  <span>/</span>
                  <span className="text-[var(--text)] font-semibold">Artigos</span>
                </div>

                <div className="hero-content-articles">
                  <div>
                    <span className="eyebrow">CURIOSIDADES INCRÍVEIS</span>
                    <h1>Descubra algo novo.</h1>
                    <p>
                      Curiosidades, descobertas e histórias que fazem você olhar para o mundo de um jeito diferente.
                    </p>
                  </div>

                  <div className="hero-decoration" aria-hidden="true">
                    <span>?</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="articles-content">
              <div className="container">
                <div className="section-heading">
                  <div>
                    <span className="section-kicker">EXPLORE</span>
                    <h2>Todos os artigos</h2>
                  </div>
                  <p className="section-intro">Encontre uma nova curiosidade para descobrir hoje.</p>
                </div>

                {/* Category Bar Filter */}
                <div className="category-bar" aria-label="Categorias de artigos">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setVisibleArticlesCount(6);
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Featured Article Banner in Artigos */}
                {selectedCategory === 'Todos' && (
                  <article
                    className="featured-article"
                    onClick={() => handleOpenArticle(ARTICLES_DATA[0])}
                  >
                    <div className="featured-image">
                      <img
                        src={ARTICLES_DATA[0].image}
                        alt="Imagem ilustrativa do artigo em destaque"
                      />
                      <span className="image-category">EM DESTAQUE</span>
                    </div>

                    <div className="featured-info">
                      <span className="article-category">{ARTICLES_DATA[0].category.toUpperCase()}</span>
                      <h2>{ARTICLES_DATA[0].title}</h2>
                      <p>{ARTICLES_DATA[0].description}</p>
                      <div className="article-meta">
                        <span>{ARTICLES_DATA[0].readingTime}</span>
                        <span>•</span>
                        <span>Curiosidades Incríveis</span>
                      </div>
                      <div className="read-link">
                        Ler artigo <span>→</span>
                      </div>
                    </div>
                  </article>
                )}

                {/* Articles Grid */}
                <div className="articles-grid">
                  {(selectedCategory === 'Todos'
                    ? filteredArticles.slice(1, visibleArticlesCount + 1)
                    : filteredArticles.slice(0, visibleArticlesCount)
                  ).map((article) => (
                    <article
                      key={article.id}
                      className="article-card"
                      onClick={() => handleOpenArticle(article)}
                    >
                      <div className="card-image">
                        <img src={article.image} alt={article.title} loading="lazy" />
                        <span className="card-category">{article.category.toUpperCase()}</span>
                      </div>

                      <div className="card-body">
                        <span className="article-category">{article.category.toUpperCase()}</span>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <div className="card-meta-bottom">
                          <span>{article.readingTime}</span>
                          <span className="text-[var(--blue)] font-bold">Ler artigo →</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More Button */}
                {visibleArticlesCount < filteredArticles.length && (
                  <div className="load-more">
                    <button
                      type="button"
                      onClick={() => setVisibleArticlesCount((prev) => prev + 6)}
                    >
                      Carregar mais artigos ({filteredArticles.length - visibleArticlesCount} restantes)
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Instagram CTA */}
            <section className="instagram-cta" style={{ margin: 0, padding: '0 0 90px', background: 'transparent' }}>
              <div className="container">
                <div className="cta-box">
                  <div>
                    <span className="section-kicker">AINDA MAIS CURIOSIDADES</span>
                    <h2>Você também pode acompanhar a gente no Instagram.</h2>
                    <p>Descubra fatos rápidos, vídeos e curiosidades todos os dias.</p>
                  </div>
                  <a
                    href="https://www.instagram.com/curiosidades.incriveis6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Seguir no Instagram →
                  </a>
                </div>
              </div>
            </section>
          </>
        )}

        {/* =========================================================
            VIEW 3: LEITOR DE ARTIGO (ARTICLE DETAIL READER VIEW)
            ========================================================= */}
        {currentView === 'article-detail' && activeArticle && (
          <article className="article-reader-view">
            <div className="container">
              {/* Back to articles navigation */}
              <div className="breadcrumb">
                <button type="button" onClick={() => setCurrentView('home')}>
                  Início
                </button>
                <span>/</span>
                <button type="button" onClick={() => setCurrentView('articles')}>
                  Artigos
                </button>
                <span>/</span>
                <span className="text-[var(--text)] font-semibold truncate max-w-[280px]">
                  {activeArticle.title}
                </span>
              </div>

              {/* Article Header */}
              <div className="article-header">
                <span className="eyebrow accent">
                  <span></span> {activeArticle.category}
                </span>
                <h1>{activeArticle.title}</h1>
                <p className="article-header-lead">{activeArticle.description}</p>

                <div className="article-header-meta">
                  <div className="article-meta-left">
                    <img
                      src="/favicon.png"
                      alt="Curiosidades Incríveis"
                      className="author-avatar"
                    />
                    <div>
                      <strong className="block text-sm font-semibold text-[var(--text)]">
                        Curiosidades Incríveis
                      </strong>
                      <span className="text-xs text-[var(--muted)] flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        {activeArticle.readingTime} • {activeArticle.date}
                      </span>
                    </div>
                  </div>

                  <div className="article-actions-bar">
                    <button
                      type="button"
                      className="action-btn"
                      onClick={handleCopyShareLink}
                      title="Copiar link do artigo"
                    >
                      {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                      {copiedLink ? 'Link copiado!' : 'Compartilhar'}
                    </button>
                    <a
                      className="action-btn text-[#25D366]"
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        `${activeArticle.title} - Leia no Curiosidades Incríveis:`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Banner Image */}
              <div className="article-banner-hero">
                <img src={activeArticle.image} alt={activeArticle.title} />
              </div>

              {/* Article Body */}
              <div className="article-body-container">
                <div className="article-prose">
                  <p className="text-xl font-medium leading-relaxed text-[var(--text)]">
                    {activeArticle.content.intro}
                  </p>

                  {activeArticle.content.sections.map((sec, i) => (
                    <div key={i}>
                      <h2>{sec.heading}</h2>
                      <p>{sec.text}</p>
                      {sec.highlight && (
                        <div className="article-highlight-box">
                          💡 "{sec.highlight}"
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Fun Fact Callout Box */}
                  <div className="curiosity-card-callout">
                    <strong>
                      <Sparkles className="w-5 h-5" /> FATO CURIOSO
                    </strong>
                    <p>{activeArticle.content.curiosityFact}</p>
                  </div>

                  <h2>Conclusão</h2>
                  <p>{activeArticle.content.conclusion}</p>
                </div>

                {/* Article Footer Actions & Related */}
                <div className="article-share-footer">
                  <button
                    type="button"
                    className="button button-light"
                    onClick={() => {
                      setCurrentView('articles');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <ArrowLeft className="w-4 h-4" /> Voltar para Artigos
                  </button>

                  <a
                    className="button button-primary"
                    href="https://www.instagram.com/curiosidades.incriveis6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Siga no Instagram <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Related Articles Suggestions */}
                <div className="mt-16 pt-10 border-t border-[var(--line)]">
                  <h3 className="text-2xl font-bold mb-6 font-['Space_Grotesk']">
                    Mais curiosidades sobre {activeArticle.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {ARTICLES_DATA.filter((a) => a.id !== activeArticle.id)
                      .slice(0, 2)
                      .map((rel) => (
                        <div
                          key={rel.id}
                          className="search-result-item cursor-pointer"
                          onClick={() => handleOpenArticle(rel)}
                        >
                          <img src={rel.image} alt={rel.title} />
                          <div>
                            <span className="tag mb-1">{rel.category}</span>
                            <h4 className="font-semibold text-base mb-1">{rel.title}</h4>
                            <span className="text-xs text-[var(--muted)]">{rel.readingTime}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <button
              type="button"
              onClick={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="brand bg-transparent border-0 cursor-pointer p-0 text-left"
            >
              <img className="brand-logo" src="/favicon.png" alt="" />
              <span>
                Curiosidades <strong>Incríveis</strong>
              </span>
            </button>
            <p>
              🌍 O lado mais absurdo da realidade.
              <br />
              ✨ Acompanhe para ver o mundo de um jeito diferente todos os dias.
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <button
              type="button"
              onClick={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Início
            </button>
            <button
              type="button"
              onClick={() => {
                if (currentView !== 'home') setCurrentView('home');
                setTimeout(() => {
                  document.getElementById('em-alta')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Em alta
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrentView('articles');
                setSelectedCategory('Todos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Artigos
            </button>
            <button
              type="button"
              onClick={() => {
                if (currentView !== 'home') setCurrentView('home');
                setTimeout(() => {
                  document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Categorias
            </button>
          </div>

          <div>
            <h3>Categorias</h3>
            <button type="button" onClick={() => handleSelectCategoryFromHome('Animais')}>
              Animais
            </button>
            <button type="button" onClick={() => handleSelectCategoryFromHome('Ciência')}>
              Ciência
            </button>
            <button type="button" onClick={() => handleSelectCategoryFromHome('Tecnologia')}>
              Tecnologia
            </button>
            <button type="button" onClick={() => handleSelectCategoryFromHome('História')}>
              História
            </button>
            <button type="button" onClick={() => handleSelectCategoryFromHome('Mundo')}>
              Mundo
            </button>
          </div>

          <div>
            <h3>Conecte-se</h3>
            <a
              href="https://www.instagram.com/curiosidades.incriveis6"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a href="mailto:contato@curiosidadesincriveis.com">
              contato@curiosidadesincriveis.com
            </a>
            <button
              type="button"
              onClick={() => alert('Curiosidades Incríveis respeita sua privacidade.')}
            >
              Política de privacidade
            </button>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Curiosidades Incríveis.</span>
          <span>Feito para quem nunca para de perguntar.</span>
        </div>
      </footer>
    </div>
  );
}
