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

// Toggle menu on hamburger click
hamburgerBtn.addEventListener("click", () => {
  const expanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
  if (expanded) {
    hamburgerBtn.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    menu.classList.remove("active");
    closeAllSubmenus();
  } else {
    hamburgerBtn.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    menu.classList.add("active");
  }
});

// Toggle submenu open/close on click, independently
menuToggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const submenu = document.getElementById(targetId);
    const isActive = submenu.classList.contains("active");

    // Chiude solo il submenu cliccato se aperto, altrimenti lo apre
    if (isActive) {
      submenu.classList.remove("active");
      submenu.setAttribute("aria-hidden", "true");
      btn.setAttribute("aria-expanded", "false");
    } else {
      submenu.classList.add("active");
      submenu.setAttribute("aria-hidden", "false");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

function closeAllSubmenus() {
  submenuLingua.classList.remove("active");
  submenuLingua.setAttribute("aria-hidden", "true");
  submenuAbbazia.classList.remove("active");
  submenuAbbazia.setAttribute("aria-hidden", "true");
  menuToggleButtons.forEach(btn => btn.setAttribute("aria-expanded", "false"));
}

function showSection(section) {
  document.querySelectorAll(".content-section").forEach(sec => {
    sec.hidden = true;
    sec.classList.remove("active");
  });
  const sec = document.getElementById(section);
  if (sec) {
    sec.hidden = false;
    sec.classList.add("active");
  }
}

function updateContent() {
  const t = translations[currentLang];
  const sec = document.getElementById(currentSection);
  if (!sec) return;
  sec.querySelector("h1").textContent = t[`${currentSection}_title`];
  sec.querySelector("p").textContent = t[`${currentSection}_content`];
}

// Cambia sezione senza chiudere il menu (ma qui chiudiamo menu)
sectionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentSection = btn.dataset.section;
    localStorage.setItem("section", currentSection);
    showSection(currentSection);
    updateContent();

    // Chiudi menu dopo scelta se mobile
    menu.classList.remove("active");
    menu.setAttribute("aria-hidden", "true");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    closeAllSubmenus();
  });
});

// Cambia lingua senza cambiare sezione
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    if (lang !== currentLang) {
      currentLang = lang;
      localStorage.setItem("lang", currentLang);
      updateContent();
    }

    // Chiudi menu dopo scelta
    menu.classList.remove("active");
    menu.setAttribute("aria-hidden", "true");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    closeAllSubmenus();
  });
});

// All'avvio pagina mostra sezione e contenuti corretti
window.addEventListener("DOMContentLoaded", () => {
  showSection(currentSection);
  updateContent();
});
