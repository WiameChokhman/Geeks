/* =========================================================
   WIAMORE — Catalogue, thème, favoris et ajout d'articles
   JavaScript Vanilla, sans dépendances externes.
========================================================= */

// --- Références DOM ---------------------------------------------------------
const cardsGrid = document.getElementById("cards-grid");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const sortSelect = document.getElementById("sort-select");
const emptyState = document.getElementById("empty-state");
const emptyStateTitle = document.getElementById("empty-state-title");
const emptyStateDescription = document.getElementById("empty-state-description");
const resetButton = document.getElementById("reset-filters");
const favoritesFilterButton = document.getElementById("favorites-filter");
const favoritesCount = document.getElementById("favorites-count");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const modal = document.getElementById("product-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");
const modalDetails = document.getElementById("modal-details");
const modalPrice = document.getElementById("modal-price");
const closeModalButton = document.getElementById("close-modal");

const addItemModal = document.getElementById("add-item-modal");
const openAddItemButton = document.getElementById("open-add-item");
const closeAddItemButton = document.getElementById("close-add-item");
const cancelAddItemButton = document.getElementById("cancel-add-item");
const addItemForm = document.getElementById("add-item-form");
const addItemFeedback = document.getElementById("add-item-feedback");
const addItemFields = {
  title: document.getElementById("item-title"),
  category: document.getElementById("item-category"),
  price: document.getElementById("item-price"),
  image: document.getElementById("item-image"),
  shortDescription: document.getElementById("item-short-description"),
  fullDetails: document.getElementById("item-full-details")
};

// --- Clés de stockage -------------------------------------------------------
const STORAGE_KEYS = {
  addedItems: "wiamore-added-catalog-items-v1",
  favorites: "wiamore-favorites-v1",
  theme: "wiamore-theme-v1"
};
const ORIGINAL_ITEM_IDS = new Set(catalogItems.map((item) => String(item.id)));
let favorites = new Set(readStorageArray(STORAGE_KEYS.favorites).map(String));
let favoritesOnly = false;

function readStorageArray(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn(`Impossible de lire ${key} depuis le stockage local.`, error);
    return [];
  }
}

function safeSetStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn(`Impossible d'enregistrer ${key} dans le stockage local.`, error);
    return false;
  }
}

// --- Persistance des articles créés avec le formulaire ----------------------
function restoreAddedItems() {
  const savedItems = readStorageArray(STORAGE_KEYS.addedItems);
  const existingIds = new Set(catalogItems.map((item) => String(item.id)));

  savedItems.forEach((item) => {
    const validShape = item && item.id != null &&
      ["title", "category", "image", "metric", "shortDescription", "fullDetails"]
        .every((key) => typeof item[key] === "string");
    if (validShape && !existingIds.has(String(item.id))) {
      catalogItems.push(item);
      existingIds.add(String(item.id));
    }
  });
}

function persistAddedItems() {
  const addedItems = catalogItems.filter((item) => !ORIGINAL_ITEM_IDS.has(String(item.id)));
  return safeSetStorage(STORAGE_KEYS.addedItems, JSON.stringify(addedItems));
}

restoreAddedItems();

// --- Thème clair / sombre ---------------------------------------------------
function getInitialTheme() {
  const savedTheme = (() => {
    try { return localStorage.getItem(STORAGE_KEYS.theme); }
    catch (_) { return null; }
  })();
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme, persist = true) {
  document.documentElement.dataset.theme = theme;
  const darkMode = theme === "dark";
  themeIcon.textContent = darkMode ? "☀" : "☾";
  themeToggle.setAttribute("aria-pressed", String(darkMode));
  themeToggle.setAttribute("aria-label", darkMode ? "Activer le thème clair" : "Activer le thème sombre");
  if (persist) safeSetStorage(STORAGE_KEYS.theme, theme);
}

applyTheme(getInitialTheme(), false);
themeToggle.addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

// Si aucun choix n'a été enregistré, suivre les changements du thème système.
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
systemTheme.addEventListener?.("change", (event) => {
  let savedTheme = null;
  try { savedTheme = localStorage.getItem(STORAGE_KEYS.theme); } catch (_) { /* stockage indisponible */ }
  if (savedTheme !== "light" && savedTheme !== "dark") applyTheme(event.matches ? "dark" : "light", false);
});

// --- En-tête qui réagit au défilement ---------------------------------------
const siteHeader = document.querySelector(".site-header");
function updateHeaderOnScroll() {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
}
window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

// --- Favoris ---------------------------------------------------------------
function persistFavorites() {
  safeSetStorage(STORAGE_KEYS.favorites, JSON.stringify([...favorites]));
}

function updateFavoritesControl() {
  favoritesCount.textContent = String(favorites.size);
  favoritesFilterButton.classList.toggle("is-active", favoritesOnly);
  favoritesFilterButton.setAttribute("aria-pressed", String(favoritesOnly));
  favoritesFilterButton.querySelector("span").textContent = favoritesOnly ? "♥" : "♡";
}

function toggleFavorite(itemId) {
  const key = String(itemId);
  if (favorites.has(key)) favorites.delete(key);
  else favorites.add(key);
  persistFavorites();
  updateCatalog();
}

// --- Rendu des cartes -------------------------------------------------------
function renderItems(items) {
  cardsGrid.replaceChildren();

  if (items.length === 0) {
    emptyState.hidden = false;
    if (favoritesOnly) {
      emptyStateTitle.textContent = "Aucun favori pour le moment";
      emptyStateDescription.textContent = "Appuyez sur le cœur d’un article pour l’ajouter à vos favoris.";
    } else {
      emptyStateTitle.textContent = "Aucun bijou trouvé";
      emptyStateDescription.textContent = "Essayez un autre mot-clé ou choisissez une autre catégorie.";
    }
    return;
  }

  emptyState.hidden = true;
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageContainer = document.createElement("div");
    imageContainer.className = "product-image-container";

    const image = document.createElement("img");
    image.className = "product-image";
    image.src = item.image;
    image.alt = item.title;
    image.loading = "lazy";
    image.addEventListener("error", () => {
      image.classList.add("image-unavailable");
      image.alt = `${item.title} — image indisponible`;
    }, { once: true });

    const badge = document.createElement("span");
    badge.className = "product-badge";
    badge.textContent = item.category;

    const favoriteButton = document.createElement("button");
    const isFavorite = favorites.has(String(item.id));
    favoriteButton.type = "button";
    favoriteButton.className = `favorite-button${isFavorite ? " is-favorite" : ""}`;
    favoriteButton.textContent = isFavorite ? "♥" : "♡";
    favoriteButton.setAttribute("aria-pressed", String(isFavorite));
    favoriteButton.setAttribute("aria-label", isFavorite ? `Retirer ${item.title} des favoris` : `Ajouter ${item.title} aux favoris`);
    favoriteButton.title = favoriteButton.getAttribute("aria-label");
    favoriteButton.addEventListener("click", () => toggleFavorite(item.id));

    imageContainer.append(image, badge, favoriteButton);

    const productInfo = document.createElement("div");
    productInfo.className = "product-info";
    const category = document.createElement("p");
    category.className = "product-category";
    category.textContent = item.category;
    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = item.title;
    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = item.shortDescription;

    const footer = document.createElement("div");
    footer.className = "product-footer";
    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = item.metric;
    const detailsButton = document.createElement("button");
    detailsButton.className = "details-button";
    detailsButton.type = "button";
    detailsButton.textContent = "Voir détails";
    detailsButton.addEventListener("click", () => openProductModal(item));

    footer.append(price, detailsButton);
    productInfo.append(category, title, description, footer);
    card.append(imageContainer, productInfo);
    fragment.appendChild(card);
  });

  cardsGrid.appendChild(fragment);
}

function openProductModal(item) {
  modalImage.src = item.image;
  modalImage.alt = item.title;
  modalTitle.textContent = item.title;
  modalCategory.textContent = item.category;
  modalDescription.textContent = item.shortDescription;
  modalDetails.textContent = item.fullDetails;
  modalPrice.textContent = item.metric;
  modal.showModal();
}

// --- Recherche, filtres et tri ---------------------------------------------
function filterItems() {
  const searchText = searchInput.value.toLocaleLowerCase("fr").trim();
  const selectedCategory = categoryFilter.value;

  return catalogItems.filter((item) => {
    const matchesSearch = item.title.toLocaleLowerCase("fr").includes(searchText) ||
      item.category.toLocaleLowerCase("fr").includes(searchText);
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesFavorite = !favoritesOnly || favorites.has(String(item.id));
    return matchesSearch && matchesCategory && matchesFavorite;
  });
}

function getPrice(priceText) {
  const normalized = String(priceText).replace(/[^\d.,]/g, "").replace(",", ".");
  const price = Number.parseFloat(normalized);
  return Number.isFinite(price) ? price : 0;
}

function sortItems(items) {
  const sorted = [...items];
  switch (sortSelect.value) {
    case "title-asc": sorted.sort((a, b) => a.title.localeCompare(b.title, "fr")); break;
    case "title-desc": sorted.sort((a, b) => b.title.localeCompare(a.title, "fr")); break;
    case "price-asc": sorted.sort((a, b) => getPrice(a.metric) - getPrice(b.metric)); break;
    case "price-desc": sorted.sort((a, b) => getPrice(b.metric) - getPrice(a.metric)); break;
  }
  return sorted;
}

function updateCatalog() {
  updateFavoritesControl();
  renderItems(sortItems(filterItems()));
}

searchInput.addEventListener("input", updateCatalog);
categoryFilter.addEventListener("change", updateCatalog);
sortSelect.addEventListener("change", updateCatalog);
favoritesFilterButton.addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  updateCatalog();
});
resetButton.addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  sortSelect.value = "default";
  favoritesOnly = false;
  updateCatalog();
});
closeModalButton.addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

// --- Formulaire d'ajout -----------------------------------------------------
function openAddItemModal() {
  clearAddItemErrors();
  addItemModal.showModal();
  addItemFields.title.focus();
}
function closeAddItemModal() { addItemModal.close(); }
function clearAddItemErrors() {
  addItemForm.querySelectorAll(".field-error").forEach((node) => { node.textContent = ""; });
  Object.values(addItemFields).forEach((field) => field.removeAttribute("aria-invalid"));
  addItemFeedback.textContent = "";
}

function showAddItemErrors() {
  const messages = {
    title: "Saisissez le nom de l’article.",
    category: "Choisissez une catégorie.",
    price: "Saisissez un prix valide supérieur à zéro.",
    image: "Saisissez une URL d’image valide commençant par http ou https.",
    shortDescription: "Ajoutez une courte description.",
    fullDetails: "Ajoutez une description détaillée."
  };
  let firstInvalid = null;

  Object.entries(addItemFields).forEach(([name, field]) => {
    let message = "";
    if (!field.value.trim()) message = messages[name];
    else if (name === "price" && (!Number.isFinite(Number(field.value)) || Number(field.value) <= 0)) message = messages.price;
    else if (name === "image") {
      try {
        const url = new URL(field.value.trim());
        if (!["http:", "https:"].includes(url.protocol)) message = messages.image;
      } catch (_) { message = messages.image; }
    }
    const errorElement = document.getElementById(`${name}-error`);
    if (errorElement) errorElement.textContent = message;
    if (message) {
      field.setAttribute("aria-invalid", "true");
      if (!firstInvalid) firstInvalid = field;
    }
  });

  if (firstInvalid) {
    addItemFeedback.textContent = "Vérifiez les champs indiqués avant de continuer.";
    firstInvalid.focus();
    return false;
  }
  return true;
}

function createCatalogItem(formData) {
  const maxId = catalogItems.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0);
  const price = Number(formData.get("price"));
  return {
    id: maxId + 1,
    title: String(formData.get("title")).trim(),
    category: String(formData.get("category")).trim(),
    image: String(formData.get("image")).trim(),
    metric: `${new Intl.NumberFormat("fr-MA", { maximumFractionDigits: 2 }).format(price)} MAD`,
    shortDescription: String(formData.get("shortDescription")).trim(),
    fullDetails: String(formData.get("fullDetails")).trim()
  };
}

openAddItemButton.addEventListener("click", openAddItemModal);
closeAddItemButton.addEventListener("click", closeAddItemModal);
cancelAddItemButton.addEventListener("click", closeAddItemModal);
addItemModal.addEventListener("click", (event) => {
  if (event.target === addItemModal) closeAddItemModal();
});
Object.entries(addItemFields).forEach(([name, field]) => {
  field.addEventListener("input", () => {
    field.removeAttribute("aria-invalid");
    const errorElement = document.getElementById(`${name}-error`);
    if (errorElement) errorElement.textContent = "";
    addItemFeedback.textContent = "";
  });
});

addItemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearAddItemErrors();
  const customValidationPassed = showAddItemErrors();
  if (!addItemForm.checkValidity() || !customValidationPassed) {
    addItemForm.reportValidity();
    return;
  }

  const newItem = createCatalogItem(new FormData(addItemForm));
  catalogItems.push(newItem);
  const persisted = persistAddedItems();

  // Retirer les contraintes de filtrage afin de rendre la nouvelle carte visible.
  searchInput.value = "";
  categoryFilter.value = "all";
  sortSelect.value = "default";
  favoritesOnly = false;
  updateCatalog();

  addItemForm.reset();
  clearAddItemErrors();
  closeAddItemModal();
  if (!persisted) console.warn("L’article est visible pour cette session, mais sa sauvegarde locale a échoué.");
  cardsGrid.lastElementChild?.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

// Première mise à jour de l'interface.
updateCatalog();