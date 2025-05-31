const translations = {
  it: {
    storia_title: "Storia dell'Abbazia",
    storia_content: "L'Abbazia di San Siro di Struppa ha origini medievali...",
    interni_title: "Interni dell'Abbazia",
    interni_content: "Gli interni presentano archi romanici e affreschi...",
    facciata_title: "Facciata dell'Abbazia",
    facciata_content: "La facciata è semplice e in stile romanico...",
    retro_title: "Retro dell'Abbazia",
    retro_content: "La parte posteriore mostra elementi originali ben conservati...",
    polittico_title: "Polittico di San Siro",
    polittico_content: "Il polittico è una delle opere principali conservate all'interno..."
  },
  en: {
    storia_title: "History of the Abbey",
    storia_content: "The Abbey of San Siro di Struppa has medieval origins...",
    interni_title: "Interiors of the Abbey",
    interni_content: "The interiors feature Romanesque arches and frescoes...",
    facciata_title: "Facade of the Abbey",
    facciata_content: "The facade is simple and Romanesque in style...",
    retro_title: "Back of the Abbey",
    retro_content: "The back features original well-preserved architectural elements...",
    polittico_title: "Polyptych of San Siro",
    polittico_content: "The polyptych is one of the main artworks preserved inside..."
  },
  es: {
    storia_title: "Historia de la Abadía",
    storia_content: "La Abadía de San Siro di Struppa tiene orígenes medievales...",
    interni_title: "Interiores de la Abadía",
    interni_content: "Los interiores tienen arcos románicos y frescos...",
    facciata_title: "Fachada de la Abadía",
    facciata_content: "La fachada es simple y de estilo románico...",
    retro_title: "Parte trasera de la Abadía",
    retro_content: "La parte trasera muestra elementos arquitectónicos bien conservados...",
    polittico_title: "Políptico de San Siro",
    polittico_content: "El políptico es una de las principales obras conservadas en el interior..."
  }
};

let currentLang = localStorage.getItem('lang') || 'it';
let currentSection = 'storia';

const menuToggle = document.getElementById('menu-toggle');
const menuContent = document.getElementById('menu-content');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  menuContent.style.display = isExpanded ? 'none' : 'flex';
  menuContent.setAttribute('aria-hidden', String(isExpanded));
});

// Cambia lingua
['it', 'en', 'es'].forEach(lang => {
  document.getElementById(`lang-${lang}`).addEventListener('click', () => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateContent();
  });
});

// Cambia sezione
document.querySelectorAll('.abbazia-menu button').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.dataset.section;
    currentSection = section;
    showSection(section);
    updateContent();
  });
});

function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.classList.remove('active');
  });
  const sec = document.getElementById(sectionId);
  if (sec) sec.classList.add('active');
}

function updateContent() {
  const t = translations[currentLang];
  const sec = document.getElementById(currentSection);
  if (sec) {
    sec.querySelector('h1').textContent = t[`${currentSection}_title`];
    sec.querySelector('p').textContent = t[`${currentSection}_content`];
  }
}

window.addEventListener('DOMContentLoaded', () => {
  showSection(currentSection);
  updateContent();
});
