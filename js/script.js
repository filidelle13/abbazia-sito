// Lingue + sezioni
const translations = {
  it: {
    menuLanguage: "Lingua",
    menuAbbey: "L'abbazia",
    langIt: "Italiano",
    langEn: "Inglese",
    langEs: "Spagnolo",
    section1Name: "Storia",
    section2Name: "Interni",
    section3Name: "Facciata",
    section4Name: "Retro",
    section5Name: "Polittico di San Siro",
    content: {
      section1: {
        title: "Storia",
        text: "Secondo la tradizione la chiesa sorse nel luogo dove nacque Siro, discepolo e successore di Sant’Ambrogio, e fu costruita nel IV secolo.",
        img: "images/abbazia.jpg",
      },
      section2: {
        title: "Interni",
        text: "La pianta basilicale senza transetto è a 3 navate con volte a crociera. Le colonne sono di epoca romana.",
        img: "images/interni.jpg",
      },
      section3: {
        title: "Facciata",
        text: "La facciata evidenzia la ripartizione interna in tre navate con un grande rosone centrale.",
        img: "images/facciata.jpg",
      },
      section4: {
        title: "Retro",
        text: "Il campanile è robusto e slanciato, alto più di 30 metri, con bifore e monofore.",
        img: "images/retro.jpg",
      },
      section5: {
        title: "Polittico di San Siro",
        text: "Opera d’arte notevole è il Polittico di San Siro, risalente al XIV secolo.",
        img: "images/polittico.jpg",
      }
    }
  },
  en: {
    menuLanguage: "Language",
    menuAbbey: "Abbey",
    langIt: "Italian",
    langEn: "English",
    langEs: "Spanish",
    section1Name: "History",
    section2Name: "Interior",
    section3Name: "Facade",
    section4Name: "Back",
    section5Name: "Polyptych of San Siro",
    content: {
      section1: {
        title: "History",
        text: "According to tradition, the church was built where Siro was born, disciple and successor of Saint Ambrose, in the 4th century.",
        img: "images/abbazia.jpg",
      },
      section2: {
        title: "Interior",
        text: "The basilica plan without transept has 3 naves with groin vaults. The columns date back to the Roman era.",
        img: "images/interni.jpg",
      },
      section3: {
        title: "Facade",
        text: "The facade highlights the internal division into three naves with a large central rose window.",
        img: "images/facciata.jpg",
      },
      section4: {
        title: "Back",
        text: "The bell tower is robust and slender, more than 30 meters high, with biforas and monoforas.",
        img: "images/retro.jpg",
      },
      section5: {
        title: "Polyptych of San Siro",
        text: "A remarkable artwork is the Polyptych of San Siro, dating back to the 14th century.",
        img: "images/polittico.jpg",
      }
    }
  },
  es: {
    menuLanguage: "Idioma",
    menuAbbey: "La abadía",
    langIt: "Italiano",
    langEn: "Inglés",
    langEs: "Español",
    section1Name: "Historia",
    section2Name: "Interiores",
    section3Name: "Fachada",
    section4Name: "Parte trasera",
    section5Name: "Políptico de San Siro",
    content: {
      section1: {
        title: "Historia",
        text: "Según la tradición, la iglesia se construyó en el lugar donde nació Siro, discípulo y sucesor de San Ambrosio, en el siglo IV.",
        img: "images/abbazia.jpg",
      },
      section2: {
        title: "Interiores",
        text: "La planta basilical sin transepto tiene 3 naves con bóvedas de crucería. Las columnas son de época romana.",
        img: "images/interni.jpg",
      },
      section3: {
        title: "Fachada",
        text: "La fachada destaca la división interna en tres naves con una gran roseta central.",
        img: "images/facciata.jpg",
      },
      section4: {
        title: "Parte trasera",
        text: "El campanario es robusto y esbelto, con más de 30 metros de altura, con biforas y monoforas.",
        img: "images/retro.jpg",
      },
      section5: {
        title: "Políptico de San Siro",
        text: "Una obra de arte notable es el Políptico de San Siro, que data del siglo XIV.",
        img: "images/polittico.jpg",
      }
    }
  }
};

// Variabili stato
let currentLanguage = 'it';
let currentSection = 'section1';

// Elementi
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuDropdown = document.getElementById('menuDropdown');
const mainContent = document.getElementById('mainContent');

const langButtons = document.querySelectorAll('.lang-btn');
const sectionButtons = document.querySelectorAll('.section-btn');

const menuLanguageTitle = document.getElementById('menuLanguageTitle');
const menuAbbeyTitle = document.getElementById('menuAbbeyTitle');

// Funzione per aggiornare testi menu (lingue + sezioni)
function updateMenuTexts() {
  menuLanguageTitle.textContent = translations[currentLanguage].menuLanguage;
  menuAbbeyTitle.textContent = translations[currentLanguage].menuAbbey;

  langButtons.forEach(btn => {
    if (btn.dataset.lang === 'it') btn.textContent = translations[currentLanguage].langIt;
    if (btn.dataset.lang === 'en') btn.textContent = translations[currentLanguage].langEn;
    if (btn.dataset.lang === 'es') btn.textContent = translations[currentLanguage].langEs;
  });

  sectionButtons.forEach(btn => {
    const sec = btn.dataset.section;
    if (sec && translations[currentLanguage][`section${sec.slice(-1)}Name`]) {
      btn.textContent = translations[currentLanguage][`section${sec.slice(-1)}Name`];
    }
  });
}

// Funzione per aggiornare contenuto principale (NON resetta section1 se cambia lingua)
function updateMainContent() {
  const content = translations[currentLanguage].content[currentSection];
  if (!content) return;
  mainContent.innerHTML = `
    <h1>${content.title}</h1>
    <p>${content.text}</p>
    <img src="${content.img}" alt="${content.title}" />
  `;
  mainContent.focus();
}

// Toggle menu dropdown
hamburgerBtn.addEventListener('click', () => {
  menuDropdown.classList.toggle('hidden');
});

// Cambia lingua
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedLang = btn.dataset.lang;
    if (selectedLang !== currentLanguage) {
      currentLanguage = selectedLang;
      updateMenuTexts();
      updateMainContent();
      menuDropdown.classList.add('hidden');
    }
  });
});

// Cambia sezione
sectionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedSection = btn.dataset.section;
    if (selectedSection !== currentSection) {
      currentSection = selectedSection;
      updateMainContent();
      menuDropdown.classList.add('hidden');
    }
  });
});

// Inizializza
updateMenuTexts();
updateMainContent();
