const toolInput = document.querySelector("[data-tool-search-input]");
const toolForm = document.querySelector("[data-tool-search-form]");
const toolResultsSection = document.querySelector("[data-tool-results-section]");
const toolResults = document.querySelector("[data-tool-results]");
const toolResultsTitle = document.querySelector("[data-tool-results-title]");
const toolResultsCount = document.querySelector("[data-tool-results-count]");
const toolEmpty = document.querySelector("[data-tool-empty]");
const toolCategorySections = [...document.querySelectorAll(".tool-section")];
const toolCategories = document.querySelector(".tool-categories");
const osSection = document.querySelector(".os-section");
const osCards = [...document.querySelectorAll("[data-os-card]")];
const virtualLabSection = document.querySelector(".virtual-lab-section");
const virtualLabCards = [...document.querySelectorAll("[data-virtual-lab-card]")];
const languageSection = document.querySelector(".language-section");
const languageCards = [...document.querySelectorAll("[data-language-card]")];

const normalizeToolQuery = (value) => value.toLowerCase().trim().replace(/\s+/g, " ");

function toolScore(tool, terms) {
  let score = 0;
  const name = tool.name.toLowerCase();
  const category = tool.category.toLowerCase();
  const keywords = tool.keywords.map((keyword) => keyword.toLowerCase());

  for (const term of terms) {
    if (name.includes(term)) score += 50;
    if (category.includes(term)) score += 35;
    if (keywords.some((keyword) => keyword.includes(term))) score += 30;
    if (tool.searchText?.includes(term)) score += 8;

    if ((term === "passwd" || term === "password") && keywords.includes("password")) score += 60;
    if (term === "network" && (category.includes("network") || keywords.includes("network"))) score += 50;
    if (term === "web" && (category.includes("web") || keywords.includes("web"))) score += 50;
  }

  return score;
}

function escapeToolHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderToolCard(tool) {
  const root = window.__SITE_ROOT__ || "../";
  return `<article class="tool-card">
    <div>
      <p class="tool-category">${escapeToolHtml(tool.category)}</p>
      <h3>${escapeToolHtml(tool.name)}</h3>
      <p>${escapeToolHtml(tool.summary)}</p>
    </div>
    <div class="tool-actions">
      <a href="${root}tools/${tool.slug}/index.html">Open details</a>
      <a href="${escapeToolHtml(tool.link)}" rel="noreferrer" target="_blank">Official site</a>
    </div>
  </article>`;
}

function cardMatchesSearch(card, terms) {
  const searchText = card.dataset.search || "";
  return terms.every((term) => searchText.includes(term));
}

function filterStaticCards(section, cards, terms) {
  if (!section || !cards.length) return 0;

  let visible = 0;
  cards.forEach((card) => {
    const isMatch = cardMatchesSearch(card, terms);
    card.hidden = !isMatch;
    if (isMatch) visible += 1;
  });
  section.hidden = visible === 0;
  const count = section.querySelector(".section-heading p");
  if (count) count.textContent = `${visible} ${visible === 1 ? "option" : "options"}`;
  return visible;
}

function resetStaticCards(section, cards, totalLabel = "options") {
  if (!section || !cards.length) return;

  cards.forEach((card) => {
    card.hidden = false;
  });
  section.hidden = false;
  const count = section.querySelector(".section-heading p");
  if (count) count.textContent = `${cards.length} ${totalLabel}`;
}

async function setupToolSearch() {
  if (!toolInput || !toolResults) return;

  let tools;
  try {
    const response = await fetch(window.__TOOLS_INDEX__ || "../tools-index.json");
    tools = await response.json();
  } catch {
    return;
  }

  const render = () => {
    const query = normalizeToolQuery(toolInput.value);
    if (!query) {
      toolResultsSection.hidden = true;
      toolEmpty.hidden = true;
      toolCategorySections.forEach((section) => (section.hidden = false));
      if (toolCategories) toolCategories.hidden = false;
      resetStaticCards(osSection, osCards);
      resetStaticCards(virtualLabSection, virtualLabCards);
      resetStaticCards(languageSection, languageCards, "languages");
      return;
    }

    const terms = query.split(" ").filter(Boolean);
    const matches = tools
      .map((tool) => ({ tool, score: toolScore(tool, terms) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
      .map((item) => item.tool);
    const osMatches = filterStaticCards(osSection, osCards, terms);
    const virtualLabMatches = filterStaticCards(virtualLabSection, virtualLabCards, terms);
    const languageMatches = filterStaticCards(languageSection, languageCards, terms);
    const totalMatches = matches.length + osMatches + virtualLabMatches + languageMatches;

    toolResultsSection.hidden = false;
    toolCategorySections.forEach((section) => (section.hidden = true));
    if (toolCategories) toolCategories.hidden = true;
    toolResults.innerHTML = matches.map(renderToolCard).join("");
    toolResults.hidden = matches.length === 0;
    toolEmpty.hidden = totalMatches > 0;
    toolResultsTitle.textContent = `Results for "${toolInput.value.trim()}"`;
    toolResultsCount.textContent = `${totalMatches} ${totalMatches === 1 ? "match" : "matches"}`;
  };

  toolInput.addEventListener("input", render);
  toolForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    render();
    toolResultsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

setupToolSearch();
