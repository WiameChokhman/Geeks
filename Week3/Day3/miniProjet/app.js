
//RÉCUPÉRER LES ÉLÉMENTS HTML

// Grille et contrôles
const cardsGrid = document.getElementById("cards-grid");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const sortSelect = document.getElementById("sort-select");
const emptyState = document.getElementById("empty-state");
const resetButton = document.getElementById("reset-filters");

// Éléments de la fenêtre modale
const modal = document.getElementById("product-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");
const modalDetails = document.getElementById("modal-details");
const modalPrice = document.getElementById("modal-price");
const closeModalButton = document.getElementById("close-modal");

// Formulaire d'ajout d'article
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
const STORAGE_KEY = "wiamore-added-catalog-items-v1";
const ORIGINAL_ITEM_IDS = new Set(catalogItems.map((item) => String(item.id)));

// Restaurer uniquement les articles créés par l'utilisateur dans ce navigateur.
// Le catalogue initial de data.js reste la source des produits de démonstration.
function restoreAddedItems() {
  try {
    const savedItems = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(savedItems)) return;

    const existingIds = new Set(catalogItems.map((item) => String(item.id)));
    savedItems.forEach((item) => {
      if (item && item.id != null && !existingIds.has(String(item.id)) &&
          ["title", "category", "image", "metric", "shortDescription", "fullDetails"].every((key) => typeof item[key] === "string")) {
        catalogItems.push(item);
        existingIds.add(String(item.id));
      }
    });
  } catch (error) {
    console.warn("Les articles enregistrés localement n'ont pas pu être restaurés.", error);
  }
}

function persistAddedItems() {
  // Ne persister que les articles ajoutés, pas les produits livrés dans data.js.
  const addedItems = catalogItems.filter((item) => !ORIGINAL_ITEM_IDS.has(String(item.id)));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(addedItems));
}

restoreAddedItems();


// AFFICHER LES CARTES DES PRODUITS

function renderItems(data) {
  // Vider la grille avant de créer les nouvelles cartes
  cardsGrid.innerHTML = "";

  // Afficher un message si aucun produit ne correspond
  if (data.length === 0) {
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  // Créer une carte pour chaque produit
  data.forEach((item) => {
    const card = document.createElement("article");
    card.classList.add("product-card");

    // Conteneur de l'image
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("product-image-container");

    const image = document.createElement("img");
    image.classList.add("product-image");
    image.src = item.image;
    image.alt = item.title;
    // Charger l'image seulement quand elle approche de l'écran
    image.loading = "lazy";

    // Badge de catégorie
    const badge = document.createElement("span");
    badge.classList.add("product-badge");
    badge.textContent = item.category;

    imageContainer.append(image, badge);

    // Informations du produit
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const category = document.createElement("p");
    category.classList.add("product-category");
    category.textContent = item.category;

    const title = document.createElement("h3");
    title.classList.add("product-title");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.classList.add("product-description");
    description.textContent = item.shortDescription;

    // Pied de carte : prix et bouton
    const footer = document.createElement("div");
    footer.classList.add("product-footer");

    const price = document.createElement("span");
    price.classList.add("product-price");
    price.textContent = item.metric;

    const detailsButton = document.createElement("button");
    detailsButton.classList.add("details-button");
    detailsButton.type = "button";
    detailsButton.textContent = "Voir détails";

    // Ouvrir la modale du produit sélectionné
    detailsButton.addEventListener("click", () => {
      openProductModal(item);
    });

    footer.append(price, detailsButton);
    productInfo.append(category, title, description, footer);
    card.append(imageContainer, productInfo);

    cardsGrid.appendChild(card);
  });
}


//OUVRIR LA FENÊTRE MODALE

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

// FILTRER LES PRODUITS

function filterItems() {
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;

  return catalogItems.filter((item) => {
    // Vérifier si le texte existe dans le titre, et le nom de catégorie
    const matchesSearch =
      item.title.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText);

    // Vérifier la catégorie sélectionnée
    const matchesCategory =
      selectedCategory === "all" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
}


//TRIER LES PRODUITS


function sortItems(data) {
  const sortValue = sortSelect.value;

  // Créer une copie pour ne pas modifier le tableau original
  const sortedItems = [...data];

  switch (sortValue) {
    case "title-asc":
      sortedItems.sort((a, b) =>
        // compare les titres de deux produits, a et b, pour les trier par ordre alphabétique.
        a.title.localeCompare(b.title)
      );
      break;

    case "title-desc":
      sortedItems.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      break;

    case "price-asc":
      sortedItems.sort((a, b) =>
        getPrice(a.metric) - getPrice(b.metric)
      );
      break;

    case "price-desc":
      sortedItems.sort((a, b) =>
        getPrice(b.metric) - getPrice(a.metric)
      );
      break;

    // Conserver l'ordre d'origine
    // si aucune option de tri n'est sélectionnée
    case "default":
    default:
      break;
  }

  return sortedItems;
}


/* ========================================
   6. EXTRAIRE LE PRIX NUMÉRIQUE
======================================== */

function getPrice(priceText) {
  // Exemple : "350 MAD" devient 350
  return Number.parseFloat(
    String(priceText).replace(/[^\d.,]/g, "").replace(",", ".")
  ) || 0;
}


// OUVRIR / FERMER LE FORMULAIRE D'AJOUT
function openAddItemModal() {
  addItemFeedback.textContent = "";
  addItemModal.showModal();
  addItemFields.title.focus();
}

function closeAddItemModal() {
  addItemModal.close();
}

function clearAddItemErrors() {
  addItemForm.querySelectorAll(".field-error").forEach((element) => { element.textContent = ""; });
  Object.values(addItemFields).forEach((field) => field.removeAttribute("aria-invalid"));
  addItemFeedback.textContent = "";
}

function showAddItemErrors() {
  const messages = {
    title: "Saisissez le nom de l’article.",
    category: "Choisissez une catégorie.",
    price: "Saisissez un prix supérieur à 0.",
    image: "Saisissez une URL d’image valide (http ou https).",
    shortDescription: "Ajoutez une courte description.",
    fullDetails: "Ajoutez une description détaillée."
  };
  let firstInvalidField = null;

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
    if (message) {
      document.getElementById(`${name}-error`).textContent = message;
      field.setAttribute("aria-invalid", "true");
      firstInvalidField ||= field;
    }
  });

  if (firstInvalidField) {
    addItemFeedback.textContent = "Vérifiez les champs indiqués avant de continuer.";
    firstInvalidField.focus();
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

// Fermer aussi en cliquant sur la zone de fond du dialogue.
addItemModal.addEventListener("click", (event) => {
  if (event.target === addItemModal) closeAddItemModal();
});

// Effacer les messages au fur et à mesure que l'utilisateur corrige un champ.
Object.entries(addItemFields).forEach(([name, field]) => {
  field.addEventListener("input", () => {
    field.removeAttribute("aria-invalid");
    const error = document.getElementById(`${name}-error`);
    if (error) error.textContent = "";
    addItemFeedback.textContent = "";
  });
});

addItemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearAddItemErrors();

  // Le navigateur vérifie aussi required, type, min/max, step et maxlength.
  const customValidationPassed = showAddItemErrors();
  if (!addItemForm.checkValidity() || !customValidationPassed) {
    addItemForm.reportValidity();
    return;
  }

  const newItem = createCatalogItem(new FormData(addItemForm));
  catalogItems.push(newItem);

  try {
    persistAddedItems();
  } catch (error) {
    // L'article reste visible en mémoire même si le navigateur bloque le stockage.
    console.warn("L'article a été ajouté, mais la sauvegarde locale a échoué.", error);
    addItemFeedback.textContent = "Article ajouté à cette session, mais la sauvegarde locale a échoué.";
  }

  // Actualiser sans recharger la page et afficher la nouvelle carte même si un filtre était actif.
  searchInput.value = "";
  categoryFilter.value = "all";
  sortSelect.value = "default";
  updateCatalog();

  addItemForm.reset();
  clearAddItemErrors();
  closeAddItemModal();

  // Faire défiler jusqu'à la grille pour que la carte ajoutée soit facile à repérer.
  cardsGrid.lastElementChild?.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

// METTRE À JOUR LE CATALOGUE

function updateCatalog() {
  // Étape 1 : filtrer les produits
  const filteredItems = filterItems();

  // Étape 2 : trier les produits filtrés
  const sortedItems = sortItems(filteredItems);

  // Étape 3 : afficher le résultat
  renderItems(sortedItems);
}


//GÉRER LES ÉVÉNEMENTS


// Recherche en temps réel
searchInput.addEventListener("input", updateCatalog);

// Filtre par catégorie
categoryFilter.addEventListener("change", updateCatalog);

// Tri par titre ou par prix
sortSelect.addEventListener("change", updateCatalog);

// Fermer la modale avec le bouton
closeModalButton.addEventListener("click", () => {
  modal.close();
});

// Fermer la modale en cliquant sur le fond sombre
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

// Fermer la modale avec Échap
// Le navigateur gère déjà ce comportement avec <dialog>
// et showModal()


// Réinitialiser la recherche, le filtre et le tri
resetButton.addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  sortSelect.value = "default";

  updateCatalog();
});



// Afficher tous les produits au chargement
updateCatalog();





