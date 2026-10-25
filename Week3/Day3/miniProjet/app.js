
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



