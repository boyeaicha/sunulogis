const IMG = {
  chambre1:"img/chambre1.jpeg",
  chambre2: "img/chambre 9.jfif" ,  
  studio1: "img/Studio.jpeg"   , 
  studio2: "img/studio5.jfif"  ,  
  appart1:"img/studio2.jpeg",
  appart2:"img/appartement.jfif",
  coloc1:"img/Coloc2.jpeg"  ,
  coloc2:"img/coloc1.jpeg"   ,
  cuisine:"img/CUISINE1.jfif" ,   
  salon: "img/studio6.jfif",    
  exterieur1:"img/exterieur1.jfif"  ,
  exterieur2:"img/exterieur2.jfif",
  chambre3:"img/Master.jfif",
  salon2:"img/salon2.jfif",
  salon3:"img/salon3.jfif",
  chambre4:"img/clim2.jfif",
  salon4:"img/ssalon.jfif",
  chambre5:"img/site.jfif",
  douche1:"img/Douche1.jfif",
};

/* Images de couverture pour les catégories "type" */
const TYPE_COVER = {
  "Chambre":  "img/Chambre8.jfif"   ,
  "Studio":  "img/CHAMBRE7.jfif"    ,
  "Appartement": "img/appartement.jfif",
  "Colocation":  "img/coloc2.jfif",
};

/* Images de couverture pour les catégories "quartier" */
const QUARTIER_COVER = {
  "Sor":          "img/sor.jfif",
  "Guet Ndar":    "img/getndar.jfif",
  "Sanar peulh":        "img/Sanarpeulh.jfif",
  "Sanar wolof":       "img/sanarwolof.jfif",
  "Bango":  "img/bango.jfif",
};

/* ===================================================
   DONNÉES FICTIVES – 20 LOGEMENTS (avec images)
=================================================== */
const LOGEMENTS = [
  { id: 1,  titre: "Chambre meublée – Résidence Amitié", type: "Chambre", quartier: "Sor", prix: 25000, distanceKm: 0.8, superficie: 12, dispo: "Disponible",
    amenities: ["WiFi", "Électricité", "Eau courante"],
    images: [IMG.chambre5, IMG.salon4, IMG.douche1],
    desc: "Chambre propre et lumineuse dans une maison calme. Salle de bain partagée. Gardien présent. Idéal pour étudiant(e) sérieux/se." },

  { id: 2,  titre: "Studio moderne – Sor Centre", type: "Studio", quartier: "Sor", prix: 55000, distanceKm: 1.2, superficie: 25, dispo: "Disponible",
    amenities: ["WiFi", "Cuisine", "Climatisation", "Eau courante", "Électricité"],
    images: [IMG.studio1, IMG.cuisine, IMG.salon],
    desc: "Studio entièrement meublé avec kitchenette et salle de bain privée. Climatisation réversible. Très bien entretenu." },

  { id: 3,  titre: "Colocation 4 personnes – Guet Ndar", type: "Colocation", quartier: "Guet Ndar", prix: 25000, distanceKm: 3.5, superficie: 10, dispo: "Disponible",
    amenities: ["Eau courante", "Électricité"],
    images: [IMG.coloc1, IMG.cuisine, IMG.exterieur2],
    desc: "Chambre en colocation dans un appartement de 4 étudiants. Ambiance conviviale. Accès à la cuisine commune." },

  { id: 4,  titre: "Appartement F2 – Sanar peul", type: "Appartement", quartier: "Sanar peul", prix: 80000, distanceKm: 1.5, superficie: 45, dispo: "Indisponible",
    amenities: ["WiFi", "Cuisine", "Climatisation", "Eau courante", "Électricité", "Sécurisé"],
    images: [IMG.appart1, IMG.salon, IMG.cuisine],
    desc: "Beau F2 en immeuble résidentiel sécurisé. Salon séparé, cuisine équipée. Bail 12 mois minimum." },

  { id: 5,  titre: "Chambre économique – Sanar wolof", type: "Chambre", quartier: "Sanar wolof", prix: 25000, distanceKm: 1, superficie: 9, dispo: "Disponible",
    amenities: ["Eau courante", "Électricité"],
    images: [IMG.chambre2, IMG.exterieur1],
    desc: "Petite chambre sobre, idéale pour un budget serré. Proche du marché. Transports communs facilement accessibles." },

  { id: 7,  titre: "Studio neuf – Sor Nord", type: "Studio", quartier: "Sor", prix: 65000, distanceKm: 1.5, superficie: 30, dispo: "Disponible",
    amenities: ["WiFi", "Cuisine", "Climatisation", "Eau courante", "Électricité", "Sécurisé"],
    images: [IMG.studio2, IMG.salon, IMG.cuisine],
    desc: "Studio neuf en résidence moderne sécurisée. Gardiennage 24h/24, interphone, parking vélo." },

  { id: 8,  titre: "Chambre en famille – Sanar peulh", type: "Chambre", quartier: " Sanar peulh", prix: 20000, distanceKm: 1, superficie: 11, dispo: "Disponible",
    amenities: ["Eau courante", "Électricité", "WiFi"],
    images: [IMG.chambre3, IMG.exterieur2],
    desc: "Logée chez une famille accueillante. Repas possible en option. Cadre calme, idéal pour les révisions." },

  { id: 9,  titre: "Appartement F3 – Guet Ndar", type: "Appartement", quartier: "Guet Ndar", prix: 120000, distanceKm: 3.8, superficie: 70, dispo: "Disponible",
    amenities: ["WiFi", "Cuisine", "Climatisation", "Eau courante", "Électricité", "Parking", "Sécurisé"],
    images: [IMG.appart2, IMG.salon, IMG.cuisine],
    desc: "Grand appartement familial converti en location étudiante haut de gamme. Vue sur fleuve. Parking privé." },

  { id: 10, titre: "Chambre meublée –  Sanar wolof", type: "Chambre", quartier: " Sanar wolof", prix: 25000, distanceKm: 1, superficie: 8, dispo: "Indisponible",
    amenities: ["Électricité"],
    images: [IMG.chambre2],
    desc: "Petite chambre très abordable. Eau à remplir (pas de robinet). Idéal transit ou petite bourse." },

  { id: 11, titre: "Colocation mixte – Sor Sud", type: "Colocation", quartier: "Sor", prix: 22000, distanceKm: 0.5, superficie: 13, dispo: "Disponible",
    amenities: ["WiFi", "Cuisine", "Eau courante", "Électricité"],
    images: [IMG.coloc2, IMG.cuisine, IMG.salon],
    desc: "Colocation mixte de 3 étudiants. Très proche du campus. Ambiance studieuse. Internet haut débit." },

  { id: 12, titre: "Studio meublé – Bango", type: "Studio", quartier: " Bango", prix: 45000, distanceKm: 7.0, superficie: 22, dispo: "Disponible",
    amenities: ["WiFi", "Cuisine", "Eau courante", "Électricité"],
    images: [IMG.studio1, IMG.cuisine],
    desc: "Studio calme en périphérie de la ville. Marché à 200m. Bus UGB à 5 min à pied." },

  { id: 13, titre: "Chambre climatisée – Sanar pleuh", type: "Chambre", quartier: " Sanar peulh", prix: 32000, distanceKm: 1, superficie: 15, dispo: "Disponible",
    amenities: ["WiFi", "Climatisation", "Eau courante", "Électricité"],
    images: [IMG.chambre4, IMG.salon3],
    desc: "Chambre climatisée dans une maison propre. Idéal pour supporter les étés chauds de Saint-Louis." },

  { id: 14, titre: "Appartement F1 bis – Sor", type: "Appartement", quartier: "Sor", prix: 70000, distanceKm: 1.0, superficie: 38, dispo: "Disponible",
    amenities: ["WiFi", "Cuisine", "Climatisation", "Eau courante", "Électricité", "Sécurisé"],
    images: [IMG.appart1, IMG.cuisine, IMG.salon],
    desc: "F1 bis lumineux avec coin repas. Immeuble récent avec ascenseur. Parfait pour couple ou étudiant confortable." },

  { id: 16, titre: "Chambre simple –  Sanar Wolof", type: "Chambre", quartier: " Sanar wolof", prix: 20000, distanceKm: 5.8, superficie: 7, dispo: "Disponible",
    amenities: ["Eau courante"],
    images: [IMG.chambre2],
    desc: "La moins chère du quartier. Logement fonctionnel dans une famille du village. Ambiance traditionnelle." },

  { id: 17, titre: "Colocation étudiants – Bango", type: "Colocation", quartier: "Bango", prix: 20000, distanceKm: 6.5, superficie: 12, dispo: "Disponible",
    amenities: ["WiFi", "Cuisine", "Eau courante", "Électricité"],
    images: [IMG.coloc1, IMG.salon],
    desc: "Groupe de 5 étudiants cherche un 6e colocataire. Maison spacieuse. Tâches ménagères partagées." },

  { id: 18, titre: "Studio climatisé –Sanar peulh", type: "Studio", quartier: " Sanar peulh", prix: 75000, distanceKm: 2.5, superficie: 28, dispo: "Disponible",
    amenities: ["WiFi", "Cuisine", "Climatisation", "Eau courante", "Électricité", "Sécurisé"],
    images: [IMG.studio2, IMG.cuisine, IMG.salon],
    desc: "Studio haut de gamme en résidence fermée. Concierge,  tout inclus. Bail court possible." },

  { id: 19, titre: "Appartement F2 –  Sanar wolof", type: "Appartement", quartier: " Sanar wolf", prix: 60000, distanceKm: 1, superficie: 42, dispo: "Disponible",
    amenities: ["WiFi", "Cuisine", "Eau courante", "Électricité"],
    images: [IMG.Studio, IMG.douche1],
    desc: "Appartement propre avec deux chambres. Idéal pour deux étudiants. Quartier calme, bien desservi." },

  { id: 20, titre: "Chambre VIP – Sor Campus", type: "Chambre", quartier: "Sor", prix: 40000, distanceKm: 0.3, superficie: 20, dispo: "Disponible",
    amenities: ["WiFi", "Climatisation", "Eau courante", "Électricité", "Sécurisé"],
    images: [IMG.chambre3, IMG.salon3],
    desc: "La chambre la plus proche du campus ! Entrée indépendante, salle de bain privée, très sécurisé." }
];

/* ===================================================
   ÉTAT DE L'APPLICATION
=================================================== */
let favoris     = new Set();
let currentView = 'grid';
let filtered    = [...LOGEMENTS];
let toastTimer;

/* ===================================================
   NAVIGATION ENTRE PAGES (Accueil / Listing)
=================================================== */
function goHome() {
  document.getElementById('homePage').style.display    = '';
  document.getElementById('listingPage').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToCategory(filterType, filterValue) {
  document.getElementById('homePage').style.display    = 'none';
  document.getElementById('listingPage').style.display  = '';
  resetFilters(false);

  let title = "Toutes les offres";
  if (filterType === 'type') {
    document.getElementById('fType').value = filterValue;
    title = filterValue;
  } else if (filterType === 'quartier') {
    document.getElementById('fQuartier').value = filterValue;
    title = "Quartier " + filterValue;
  }
  document.getElementById('listingTitle').textContent = title;

  applyFilters();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function searchFromHome() {
  const val = document.getElementById('heroSearch').value;
  document.getElementById('homePage').style.display    = 'none';
  document.getElementById('listingPage').style.display  = '';
  document.getElementById('listingTitle').textContent = val ? `Résultats pour « ${val} »` : "Toutes les offres";
  applyFilters();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===================================================
   RENDU DES CATÉGORIES (page d'accueil)
=================================================== */
function renderHomeCategories() {
  const types = ["Chambre", "Studio", "Appartement", "Colocation"];
  const typeGrid = document.getElementById('typeGrid');
  typeGrid.innerHTML = types.map(t => {
    const count = LOGEMENTS.filter(l => l.type === t).length;
    return `
    <div class="cat-card" onclick="goToCategory('type','${t}')">
      <img src="${TYPE_COVER[t]}" alt="${t}" loading="lazy"/>
      <div class="cat-card-overlay">
        <h3>${t}</h3>
        <span>${count} offre(s)</span>
      </div>
    </div>`;
  }).join('');
  const quartiers = ["Sor", "Guet Ndar", "Sanar peulh", "Bango"];
  const quartierGrid = document.getElementById('quartierGrid');
  quartierGrid.innerHTML = quartiers.map(q => {
    const count = LOGEMENTS.filter(l => l.quartier === q).length;
    return `
    <div class="cat-card" onclick="goToCategory('quartier','${q}')">
      <img src="${QUARTIER_COVER[q]}" alt="${q}" loading="lazy"/>
      <div class="cat-card-overlay">
        <h3>${q}</h3>
        <span>${count} offre(s)</span>
      </div>
    </div>`;
  }).join('');

  // Offres en vedette : les 4 moins chères et disponibles
  const featured = [...LOGEMENTS]
    .filter(l => l.dispo === 'Disponible')
    .sort((a, b) => a.prix - b.prix)
    .slice(0, 4);
  document.getElementById('featuredGrid').innerHTML = featured.map(l => cardHTML(l)).join('');
}

/* ===================================================
   FILTRES & TRI (page listing)
=================================================== */
function applyFilters() {
  const search   = document.getElementById('heroSearch').value.toLowerCase().trim();
  const type     = document.getElementById('fType').value;
  const quartier = document.getElementById('fQuartier').value;
  const prixMax  = parseInt(document.getElementById('fPrix').value);
  const distVal  = document.getElementById('fDistance').value;
  const distMax  = distVal ? parseFloat(distVal) : Infinity;
  const dispo    = document.getElementById('fDispo').value;
  const sort     = document.getElementById('sortSelect').value;
  const checkedAmenities = [...document.querySelectorAll('.amenityCheck:checked')].map(c => c.value);

  filtered = LOGEMENTS.filter(l => {
    if (type     && l.type     !== type)     return false;
    if (quartier && l.quartier !== quartier) return false;
    if (l.prix > prixMax)                   return false;
    if (l.distanceKm > distMax)             return false;
    if (dispo    && l.dispo    !== dispo)    return false;
    if (checkedAmenities.length > 0 && !checkedAmenities.every(a => l.amenities.includes(a))) return false;
    if (search) {
      const haystack = `${l.titre} ${l.type} ${l.quartier} ${l.amenities.join(' ')} ${l.desc}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    return true;
  });

  if (sort === 'prix-asc')  filtered.sort((a, b) => a.prix - b.prix);
  if (sort === 'prix-desc') filtered.sort((a, b) => b.prix - a.prix);
  if (sort === 'distance')  filtered.sort((a, b) => a.distanceKm - b.distanceKm);
  if (sort === 'nom')       filtered.sort((a, b) => a.titre.localeCompare(b.titre));

  renderCards();
  closeFilters();
}

function resetFilters(rerender = true) {
  document.getElementById('fType').value      = '';
  document.getElementById('fQuartier').value  = '';
  document.getElementById('fPrix').value      = 150000;
  document.getElementById('prixLabel').textContent = '150 000';
  document.getElementById('fDistance').value  = '';
  document.getElementById('fDispo').value     = '';
  document.getElementById('sortSelect').value = 'default';
  document.querySelectorAll('.amenityCheck').forEach(c => c.checked = false);
  filtered = [...LOGEMENTS];
  if (rerender) renderCards();
}

/* ===================================================
   RENDU DES CARTES
=================================================== */
function renderCards() {
  const grid = document.getElementById('listingsGrid');
  document.getElementById('resultCount').textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>Aucun logement ne correspond à votre recherche</h3>
        <p>Essayez de modifier vos filtres ou d'élargir votre recherche.</p>
      </div>`;
    return;
  }
  grid.innerHTML = filtered.map(l => cardHTML(l)).join('');
}

function cardHTML(l) {
  const isFav      = favoris.has(l.id);
  const dispoClass = l.dispo === 'Disponible' ? 'dispo' : 'indispo';
  const amenHTML   = l.amenities.slice(0, 3).map(a => `<span class="amenity-tag">${a}</span>`).join('');
  const coverImg   = l.images[0];

  return `
  <article class="card" data-id="${l.id}">
    <div class="card-img">
      <img src="${coverImg}" alt="${l.titre}" loading="lazy"/>
      <span class="badge-type">${l.type}</span>
      <span class="badge-dispo ${dispoClass}">${l.dispo}</span>
      <button class="card-fav ${isFav ? 'active' : ''}"
              onclick="toggleFav(event, ${l.id})"
              title="Ajouter aux favoris">${isFav ? '❤️' : '🤍'}</button>
    </div>
    <div class="card-body">
      <h3 class="card-title">${l.titre}</h3>
      <p class="card-location">📍 ${l.quartier}</p>
      <p class="card-price">${l.prix.toLocaleString('fr-FR')} F CFA <span>/ mois</span></p>
      <div class="card-meta">
        <span class="meta-pill"> ${l.superficie} m²</span>
        <span class="meta-pill"> ${l.distanceKm} km du campus</span>
      </div>
      <div class="card-amenities">${amenHTML}</div>
    </div>
    <div class="card-footer">
      <span class="card-distance">À ${l.distanceKm} km de l'UGB</span>
      <button class="btn-contact" onclick="openModal(${l.id})">Voir détails</button>
    </div>
  </article>`;
}

/* ===================================================
   VUE GRILLE / LISTE
=================================================== */
function setView(v) {
  currentView = v;
  const grid = document.getElementById('listingsGrid');
  if (v === 'list') {
    grid.classList.add('list-view');
    document.getElementById('listBtn').classList.add('active');
    document.getElementById('gridBtn').classList.remove('active');
  } else {
    grid.classList.remove('list-view');
    document.getElementById('gridBtn').classList.add('active');
    document.getElementById('listBtn').classList.remove('active');
  }
}

/* ===================================================
   FAVORIS
=================================================== */
function toggleFav(e, id) {
  e.stopPropagation();
  if (favoris.has(id)) {
    favoris.delete(id);
    showToast('Retiré des favoris');
  } else {
    favoris.add(id);
    showToast('Ajouté aux favoris ❤️');
  }
  document.getElementById('favsCount').textContent = favoris.size;
  renderCards();
  renderHomeCategories();
}

document.getElementById('favsBtn').addEventListener('click', () => {
  if (favoris.size === 0) {
    showToast('Aucun favori enregistré.');
    return;
  }
  document.getElementById('homePage').style.display    = 'none';
  document.getElementById('listingPage').style.display  = '';
  document.getElementById('listingTitle').textContent = 'Mes favoris';
  filtered = LOGEMENTS.filter(l => favoris.has(l.id));
  renderCards();
  showToast(`${favoris.size} favori(s) affiché(s)`);
});

/* ===================================================
   MODAL DÉTAIL (avec galerie d'images)
=================================================== */
function openModal(id) {
  const l = LOGEMENTS.find(x => x.id === id);
  if (!l) return;

  document.getElementById('modalTitle').textContent = l.titre;
  document.getElementById('modalDesc').textContent  = l.desc;

  // Galerie : jusqu'à 3 images
  const gallery = l.images.slice(0, 3);
  document.getElementById('modalGallery').innerHTML =
    gallery.map(src => `<img src="${src}" alt="${l.titre}" loading="lazy"/>`).join('');

  document.getElementById('modalGrid').innerHTML = `
    <div class="modal-info-item"><div class="modal-info-label">Prix mensuel</div><div class="modal-info-value">${l.prix.toLocaleString('fr-FR')} F CFA</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Type</div><div class="modal-info-value">${l.type}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Quartier</div><div class="modal-info-value">${l.quartier}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Superficie</div><div class="modal-info-value">${l.superficie} m²</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Distance campus</div><div class="modal-info-value">${l.distanceKm} km</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Disponibilité</div><div class="modal-info-value">${l.dispo}</div></div>`;

  document.getElementById('modalAmenities').innerHTML =
    l.amenities.map(a => `<span class="amenity-tag" style="font-size:.8rem;padding:.3rem .7rem">${a}</span>`).join('');

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay')) return;
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* ===================================================
   TOAST
=================================================== */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ===================================================
   FILTRES MOBILE (BURGER)
=================================================== */
function openFiltersMobile() {
  document.getElementById('filtersPanel').classList.add('open');
  document.getElementById('backdrop').classList.add('open');
}
function closeFilters() {
  document.getElementById('filtersPanel').classList.remove('open');
  document.getElementById('backdrop').classList.remove('open');
}
const burgerFilterBtn = document.getElementById('burgerFilterBtn');
if (burgerFilterBtn) burgerFilterBtn.addEventListener('click', openFiltersMobile);

/* ===================================================
   RECHERCHE PAR TOUCHE ENTRÉE (depuis l'accueil)
=================================================== */
document.getElementById('heroSearch').addEventListener('keydown', e => {
  if (e.key === 'Enter') searchFromHome();
});

/* ===================================================
   INITIALISATION
=================================================== */
renderHomeCategories();


