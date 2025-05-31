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

    // Titoli e contenuti per sezioni
    storia_title: "Storia dell'Abbazia",
    storia_content: "L'Abbazia di San Siro di Struppa ha origini antiche... [aggiungi contenuto in italiano qui]",
    
    interni_title: "Interni dell'Abbazia",
    interni_content: "Gli interni sono caratterizzati da... [aggiungi contenuto in italiano qui]",
    
    facciata_title: "Facciata dell'Abbazia",
    facciata_content: "La facciata presenta elementi romanici... [aggiungi contenuto in italiano qui]",
    
    retro_title: "Retro dell'Abbazia",
    retro_content: "Il retro dell'edificio è stato restaurato... [aggiungi contenuto in italiano qui]",
    
    polittico_title: "Polittico di San Siro",
    polittico_content: "Il polittico è un'opera d'arte famosa... [aggiungi contenuto in italiano qui]",
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
    storia_content: "The Abbey of San Siro di Struppa has ancient origins... [add content in English here]",

    interni_title: "Interiors of the Abbey",
    interni_content: "The interiors are characterized by... [add content in English here]",

    facciata_title: "Facade of the Abbey",
    facciata_content: "The facade features Romanesque elements... [add content in English here]",

    retro_title: "Back of the Abbey",
    retro_content: "The back of the building has been restored... [add content in English here]",

    polittico_title: "Polyptych of San Siro",
    polittico_content: "The polyptych is a famous artwork... [add content in English here]",
  },
  es: {
    language: "Idioma",
    abbazia: "La Abadía",
    storia: "Historia",
    interni: "Interiores",
    facciata: "Fachada",
    retro: "Parte trasera",
    polittico: "Políptico de San Siro",

    storia_title: "Historia de la Abadía",
    storia_content: "La Abadía de San Siro di Struppa tiene orígenes antiguos... [agrega contenido en español aquí]",

    interni_title: "Interiores de la Abadía",
    interni_content: "Los interiores están caracterizados por... [agrega contenido en español aquí]",

    facciata_title: "Fachada de la Abadía",
    facciata_content: "La fachada presenta elementos románicos... [agrega contenido en español aquí]",

    retro_title: "Parte trasera de la Abadía",
    retro_content: "La parte trasera del edificio ha sido restaurada... [agrega contenido en español aquí]",

    polittico_title: "Políptico de San Siro",
    polittico_content: "El políptico es una obra de arte famosa... [agrega contenido en español aquí]",
  }
};

const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const languageSelect = document.getElementById("language-select");
const abbaziaMenuButtons = document.querySelectorAll("#abbazia-menu button");
const contentSections = document.querySelectorAll(".content-section");

let currentLanguage = localStorage.getItem("language") || "it";
let currentSection = localStorage.getItem("section") || "storia";

languageSelect.value = currentLanguage;

function translatePage() {
  // Traduci le intestazioni del menu
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[currentLanguage][key];
  });

  // Traduci le sezioni di contenuto (titolo e testo)
  contentSections.forEach(section => {
    const titleKey = section.getAttribute("data-key-title");
    const contentKey = section.getAttribute("data-key-content");
    section.querySelector("h1").textContent = translations[currentLanguage][titleKey];
    section.querySelector("p").textContent = translations[currentLanguage][contentKey];
  });
}

function showSection(sectionId) {
  contentSections.forEach(section => {
    if (section.id === sectionId) {
      section.hidden = false;
      // Evidenzia il bottone attivo nel menu
      abbaziaMenuButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.section === sectionId);
      });
    } else {
      section.hidden = true;
    }
  });
  currentSection = sectionId;
  localStorage.setItem("section", currentSection);
}

menuToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  sidebar.setAttribute("aria-hidden", !isOpen);
});

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  localStorage.setItem("language", currentLanguage);
  translatePage();
  // Restiamo sulla stessa sezione, non cambiamo pagina
  showSection(currentSection);
});

abbaziaMenuButtons.forEach(button => {
  button.addEventListener("click", () => {
    showSection(button.dataset.section);
    // Chiudi il menu dopo la selezione (per mobile)
    sidebar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", false);
    sidebar.setAttribute("aria-hidden", true);
  });
});

// Inizializzazione pagina
translatePage();
showSection(currentSection);
