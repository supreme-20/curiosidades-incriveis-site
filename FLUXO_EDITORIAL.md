# 🌳 Árvore de Produção e Fluxo Editorial — Curiosidades Incríveis

Este documento mapeia o ciclo de vida completo de cada artigo adicionado ao portal **Curiosidades Incríveis**, garantindo consistência técnica, SEO de alta performance e experiência de usuário premium.

---

## 1. Critérios de Seleção (Triagem)
Para um tema ser aprovado e transformado em artigo, ele deve atender a **pelo menos 3 destes 4 pilares**:
1. **Fator "Uau" / Viralidade:** Desafia o senso comum, quebra expectativas ou revela um fato inacreditável.
2. **Potencial de Busca (SEO):** Responde a dúvidas reais do público ("por que...", "como funciona...", "o que é...").
3. **Embasamento & Rigor:** Fatos históricos documentados ou pesquisas científicas verificadas (sem fake news).
4. **Enquadramento nas 5 Categorias Oficiais:**
   - 🐾 **Animais**
   - 🔬 **Ciência**
   - 💻 **Tecnologia**
   - 📜 **História**
   - 🌍 **Mundo & Mistérios**

---

## 2. Tipologia e Classificação Editorial

| Tipo | Ícone | Tempo de Leitura | Critério | Destino Principal |
| :--- | :---: | :---: | :--- | :--- |
| **Fato Rápido** | ⚡ | **3 min** | Fato direto, dinâmico, chocante e conciso. | • Seção **Fatos Rápidos / Impacto Duradouro**<br>• Seção **Artigos Recentes**<br>• Ticker **Você Sabia?**<br>• Catálogo Geral |
| **Artigo Profundo** | 📖 | **4 a 5 min** | Explicação detalhada com contexto histórico ou científico. | • Seção **Em Alta** ou **Recentes**<br>• Catálogo Geral |

---

## 3. Árvore de Roteamento (Para Onde o Artigo Vai)

```
[ NOVO ARTIGO CRIADO ]
          │
          ├── 1. GERAÇÃO DO ARQUIVO HTML INDIVIDUAL (/artigos/slug.html)
          │      ├── Head com SEO Completo (Title, Description, Robots, Author, Canonical)
          │      ├── OpenGraph (Facebook, WhatsApp, LinkedIn) + Twitter Cards
          │      ├── Schema.org JSON-LD (@type: "Article")
          │      ├── Header & Navegação Padrão + Gaveta Mobile
          │      ├── Lead + Banner + 2x Seções H2 + Caixa Destaque + Fato Curioso
          │      └── Rodapé + Links de Retorno e Instagram
          │
          ├── 2. CATALOGAÇÃO NO SCRIPT CENTRAL (script.js -> articles[])
          │      ├── id, title, category, categorySlug, readingTime, description, image, link
          │      ├── featured: true  ──> Vai para "Em Alta" na Home
          │      ├── recent: true    ──> Vai para "Recentes" na Home (TODOS os Fatos Rápidos entram aqui!)
          │      └── popular: true   ──> Vai para "Fatos Rápidos / Impacto Duradouro" na Home
          │
          ├── 3. ALIMENTAÇÃO DO TICKER & SURPREENDA-ME (script.js -> curiosities[])
          │      └── Criação de pílula de curiosidade resumida para o carrossel "Você Sabia?"
          │
          ├── 4. INCLUSÃO NO CATÁLOGO GERAL (artigos.html)
          │      └── Card renderizado com tags de busca e filtro por categoria (?categoria=xxx)
          │
          └── 5. SITEMAP & GOOGLE INDEXING (sitemap.xml & robots.txt)
                 └── URL adicionada ao sitemap oficial com prioridade e frequência de rastreio
```

---

## 4. Estado Atual do Catálogo (25 Artigos: 5 por Categoria)

### 🐾 Animais (5)
1. `polvo-tres-coracoes.html` (4 min) — Em alta
2. `corvos-inteligencia.html` (4 min) — Em alta
3. `abelhas-rostos.html` (4 min)
4. `animal-imortal-agua-viva.html` (4 min) — Recentes
5. `camarao-mantis-soco.html` (⚡ 3 min) — Fato Rápido & Recentes

### 🔬 Ciência (5)
1. `som-mais-alto-krakatoa.html` (4 min) — Em alta
2. `exemplo-artigo.html` (5 min)
3. `por-que-ceu-azul.html` (4 min)
4. `gelo-quente-estados-materia.html` (4 min)
5. `tempo-topo-montanha.html` (⚡ 3 min) — Fato Rápido & Recentes

### 💻 Tecnologia (5)
1. `bug-guerra-nuclear-1983.html` (4 min) — Em alta
2. `internet-funciona.html` (5 min)
3. `mecanismo-anticitera-computador.html` (4 min)
4. `sete-chaves-internet.html` (4 min) — Recentes
5. `virus-stuxnet-arma-digital.html` (⚡ 3 min) — Fato Rápido & Recentes

### 📜 História (5)
1. `epidemia-danca-1518.html` (4 min) — Em alta
2. `origem-palavras.html` (4 min)
3. `fogo-grego-arma-secreta.html` (4 min)
4. `guerra-dos-emus.html` (⚡ 3 min) — Fato Rápido & Recentes
5. `adaga-tutancamon-meteorito.html` (⚡ 3 min) — Fato Rápido & Recentes

### 🌍 Mundo & Mistérios (5)
1. `ponto-nemo-lugar-solitario.html` (4 min) — Em alta
2. `lugares-incriveis.html` (6 min)
3. `lago-natron-petrificador.html` (4 min) — Recentes
4. `floresta-arvores-tortas-polonia.html` (4 min) — Recentes
5. `porta-do-inferno-darvaza.html` (⚡ 3 min) — Fato Rápido & Recentes
