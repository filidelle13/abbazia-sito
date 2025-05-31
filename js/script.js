const translations = {
  it: {
    storia_title: "Storia dell'Abbazia",
    storia_content: "L'Abbazia di San Siro di Struppa ha origini medievali ed è un monumento storico importante per la regione.",
    interni_title: "Interni dell'Abbazia",
    interni_content: "Gli interni presentano archi romanici e affreschi ben conservati.",
    facciata_title: "Facciata dell'Abbazia",
    facciata_content: "La facciata è semplice e in stile romanico, con pietre antiche e una porta centrale.",
    retro_title: "Retro dell'Abbazia",
    retro_content: "La parte posteriore mostra elementi originali ben conservati e un piccolo giardino.",
    polittico_title: "Polittico di San Siro",
    polittico_content: "Il polittico è una delle opere principali conservate all'interno, risalente al XIV secolo."
  },
  en: {
    storia_title: "History of the Abbey",
    storia_content: "The Abbey of San Siro di Struppa has medieval origins and is an important historical monument for the region.",
    interni_title: "Interiors of the Abbey",
    interni_content: "The interiors feature Romanesque arches and well-preserved frescoes.",
    facciata_title: "Facade of the Abbey",
    facciata_content: "The facade is simple and Romanesque in style, with ancient stones and a central door.",
    retro_title: "Back of the Abbey",
    retro_content: "The back shows original well-preserved elements and a small garden.",
    polittico_title: "Polyptych of San Siro",
    polittico_content: "The polyptych is one of the main artworks preserved inside, dating back to the 14th century."
  },
  es: {
    storia_title: "Historia de la Abadía",
    storia_content: "La Abadía de San Siro di Struppa tiene orígenes medievales y es un monumento histórico importante para la región.",
    interni_title: "Interiores de la Abadía",
    interni_content: "Los interiores cuentan con arcos románicos y frescos bien conservados.",
    facciata_title: "Fachada de la Abadía",
    facciata_content: "La fachada es simple y de estilo románico, con piedras antiguas y una puerta central.",
    retro_title: "Parte trasera de la Abadía",
    retro_content: "La parte trasera muestra elementos originales bien conservados y un pequeño jardín.",
    polittico_title: "Políptico de San Siro",
    polittico_content: "El políptico es una de las principales obras conservadas en el interior, que data del siglo XIV."
  }
};

let currentLang = localStorage.getItem("lang") || "it";
let currentSection = localStorage.getItem("section") || "storia";

const hamburgerBtn = document.getElementById("hamburger");
const menu = document.getElementById("menu");

const submenuLingua = document.getElementById("submenu-lingua");
const submenuAbbazia = document.getElementById("submenu-abbazia");

const menuToggleButtons = document.querySelectorAll(".menu-toggle");
const sectionButtons = document.querySelectorAll(".section-btn");
const langButtons = document.querySelectorAll(".lang-btn");

// Toggle menu hamburger
hamburgerBtn.addEventListener("click", () => {
  const expanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
  hamburgerBtn.setAttribute("aria-expanded", !expanded);
  if (!expanded) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
    closeAllSubmenus();
  }
});

// Toggle submenu open/close
menuToggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const submenu = document.getElementById(targetId);
    const expanded = btn.getAttribute("aria-expanded") === "true";

    // Close all other submenus first
    closeAllSubmenus();

    if (!expanded) {
      submenu.classList.add("active");
      submenu.setAttribute("aria-hidden", "false");
      btn.setAttribute("aria-expanded", "true");
    } else {
      submenu.classList.remove("active");
      submenu.setAttribute("aria-hidden", "true");
      btn.setAttribute("aria-expanded", "false");
    }
  });
});

function closeAllSubmenus() {
  menuToggleButtons.forEach(btn => {
    const targetId = btn.dataset.target;
    const submenu = document.getElementById(targetId);
    submenu.classList.remove("active");
    submenu.setAttribute("aria-hidden", "true");
    btn.setAttribute("aria-expanded", "false");
  });
}

// Cambia lingua senza ricaricare, mantieni sezione
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const newLang = btn.dataset.lang;
    if (newLang === currentLang) return; // niente se stessa lingua

    currentLang = newLang;
    localStorage.setItem("lang", currentLang);
    updateContent();

    // Chiudi menu e submenu dopo scelta lingua
    menu.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    closeAllSubmenus();
  });
});

// Cambia sezione e aggiorna contenuto
sectionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const newSection = btn.dataset.section;
    if (newSection === currentSection) return;

    currentSection = newSection;
    localStorage.setItem("section", currentSection);
    updateContent();

    // Chiudi menu e submenu dopo scelta sezione
    menu.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    closeAllSubmenus();
  });
});

// Funzione per aggiornare il contenuto visibile in base a lingua e sezione
function updateContent() {
  // Nascondi tutte le sezioni
  document.querySelectorAll(".content-section").forEach(section => {
    section.classList.remove("active");
    section.hidden = true;
  });

  // Mostra solo sezione corrente
  const visibleSection = document.getElementById(currentSection);
  visibleSection.hidden = false;
  visibleSection.classList.add("active");

  // Aggiorna titolo e testo tradotto
  const t = translations[currentLang];
  visibleSection.querySelector("h1").textContent = t[`${currentSection}_title`];
  visibleSection.querySelector("p").textContent = t[`${currentSection}_content`];
}

// All’avvio pagina
updateContent();
