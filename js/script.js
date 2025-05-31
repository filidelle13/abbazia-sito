// Traduzioni base
const translations = {
  it: {
    language: "Lingua",
    abbazia: "L'abbazia",
    storia: "Storia",
    interni: "Interni",
    facciata: "Facciata",
    retro: "Retro",
    polittico: "Polittico di San Siro",

    storia_title: "Storia dell'Abbazia",
    storia_content: "L'Abbazia di San Siro di Struppa ha origini antiche... [aggiungi contenuto in italiano qui]",
    
    interni_title: "Interni dell'Abbazia",
    interni_content: "Gli interni sono caratterizzati da... [aggiungi contenuto in italiano qui]",
    
    facciata_title: "Facciata dell'Abbazia",
    facciata_content: "La facciata presenta elementi romanici... [aggiungi contenuto in italiano qui]",
    
    retro_title: "Retro dell'Abbazia",
    retro_content: "Il retro dell'edificio è stato restaurato... [aggiungi contenuto in italiano qui]",
    
    polittico_title: "Polittico di San Siro",
    polittico_content: "Il polittico è un'opera d'arte famosa... [aggiungi contenuto in italiano qui]"
  },
  en: {
    language: "Language",
    abbazia: "The Abbey",
    storia: "History",
    interni: "Interiors",
    facciata: "Facade",
    retro: "Back",
    polittico: "Polyptych of San Siro",

    storia_title: "History of the Abbey",
    storia_content: "The Abbey of San Siro di Struppa has ancient origins... [add English content here]",
    
    interni_title: "Interiors of the Abbey",
    interni_content: "The interiors are characterized by... [add English content here]",
    
    facciata_title: "Facade of the Abbey",
    facciata_content: "The facade shows Romanesque elements... [add English content here]",
    
    retro_title: "Back of the Abbey",
    retro_content: "The back of the building has been restored... [add English content here]",
    
    polittico_title: "Polyptych of San Siro",
    polittico_content: "The polyptych is a famous artwork... [add English content here]"
  },
  es: {
    language: "Idioma",
    abbazia: "La Abadía",
    storia: "Historia",
    interni: "Interiores",
    facciata: "Fachada",
    retro: "Trasera",
    polittico: "Políptico de San Siro",

    storia_title: "Historia de la Abadía",
    storia_content: "La Abadía de San Siro di Struppa tiene orígenes antiguos... [añade contenido en español aquí]",
    
    interni_title: "Interiores de la Abadía",
    interni_content: "Los interiores están caracterizados por... [añade contenido en español aquí]",
    
    facciata_title: "Fachada de la Abadía",
    facciata_content: "La fachada presenta elementos románicos... [añade contenido en español aquí]",
    
    retro_title: "Parte Trasera de la Abadía",
    retro_content: "La parte trasera del edificio ha sido restaurada... [añade contenido en español aquí]",
    
    polittico_title: "Políptico de San Siro",
    polittico_content: "El políptico es una obra de arte famosa... [añade contenido en español aquí]"
  }
};

const menuToggle = document.getElementById('menu-toggle');
const topbar = document.getElementById('topbar');
const menuContent = document.getElementById('menu-content');
const languageSelect = document.getElementById('language-select');
const abbaziaButtons = document.querySelectorAll('#abbazia-menu button');
const contentSections = document.querySelectorAll('.content-section');
const headerTitles = document.querySelectorAll('[data-key]');
const footer = document.querySelector('footer');

let currentLang = localStorage.getItem('lang') || 'it';
let currentSection = null; // id sezione attiva

// Funzione per tradurre menu e contenuti
function translatePage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Traduci testi fissi nel menu
  headerTitles.forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Traduci contenuti della sezione attiva
  if (currentSection) {
    const section = document.getElementById(currentSection);
    if (section) {
      const titleEl = section.querySelector('h1');
      const pEl = section.querySelector('p');
      const keyTitle = section.getAttribute('data-key-title');
      const keyContent = section.getAttribute('data-key-content');
      titleEl.textContent = translations[lang][keyTitle] || "";
      pEl.textContent = translations[lang][keyContent] || "";
    }
  }

  // Traduci footer fisso (puoi anche tradurlo se vuoi)
  footer.textContent = "Made by F.Dellepiane, L.Santovito, R.Carpi.";
}

// Apri/chiudi menu
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  topbar.classList.toggle('expanded');
  menuContent.setAttribute('aria-hidden', String(expanded));
});

// Cambio lingua senza cambiare sezione
languageSelect.value = currentLang;
languageSelect.addEventListener('change', () => {
  translatePage(languageSelect.value);
});

// Cambio sezione contenuto
abbaziaButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Rimuovi active da tutti
    abbaziaButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Nascondi tutte le sezioni
    contentSections.forEach(section => section.hidden = true);

    // Mostra la sezione selezionata
    const id = btn.getAttribute('data-section');
    currentSection = id;
    const activeSection = document.getElementById(id);
    if (activeSection) {
      activeSection.hidden = false;
      // Traduci contenuto nella lingua attuale
      translatePage(currentLang);
      activeSection.querySelector('h1').focus();
    }
  });
});

// All’avvio pagina: traduci e mostra sezione 1 (storia) di default
window.addEventListener('DOMContentLoaded', () => {
  translatePage(currentLang);
  // Mostra sezione default (storia)
  const defaultBtn = document.querySelector('#abbazia-menu button[data-section="storia"]');
  if (defaultBtn) defaultBtn.click();
});
