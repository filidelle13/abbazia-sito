let currentLanguage = 'it';
let currentSection = 'section1';

const content = {
  it: {
    section1: {
      title: "Storia",
      text: "Testo italiano della sezione Storia...",
      image: "images/abbazia.jpg"
    },
    section2: {
      title: "Interni",
      text: "Testo italiano della sezione Interni...",
      image: "images/interni.jpg"
    },
    section3: {
      title: "Facciata",
      text: "Testo italiano della sezione Facciata...",
      image: "images/facciata.jpg"
    },
    section4: {
      title: "Retro",
      text: "Testo italiano della sezione Retro...",
      image: "images/retro.jpg"
    },
    section5: {
      title: "Polittico di San Siro",
      text: "Testo italiano della sezione Polittico...",
      image: "images/polittico.jpg"
    }
  },
  en: {
    section1: {
      title: "History",
      text: "English text for History...",
      image: "images/abbazia.jpg"
    },
    section2: {
      title: "Interior",
      text: "English text for Interior...",
      image: "images/interni.jpg"
    },
    section3: {
      title: "Facade",
      text: "English text for Facade...",
      image: "images/facciata.jpg"
    },
    section4: {
      title: "Back",
      text: "English text for Back...",
      image: "images/retro.jpg"
    },
    section5: {
      title: "San Siro Polyptych",
      text: "English text for Polyptych...",
      image: "images/polittico.jpg"
    }
  },
  es: {
    section1: {
      title: "Historia",
      text: "Texto en español para Historia...",
      image: "images/abbazia.jpg"
    },
    section2: {
      title: "Interior",
      text: "Texto en español para Interior...",
      image: "images/interni.jpg"
    },
    section3: {
      title: "Fachada",
      text: "Texto en español para Fachada...",
      image: "images/facciata.jpg"
    },
    section4: {
      title: "Atrás",
      text: "Texto en español para Atrás...",
      image: "images/retro.jpg"
    },
    section5: {
      title: "Políptico de San Siro",
      text: "Texto en español para el Políptico...",
      image: "images/polittico.jpg"
    }
  }
};

const labels = {
  it: {
    language: "Lingua",
    abbey: "L'abbazia",
    languages: { it: "Italiano", en: "Inglese", es: "Spagnolo" },
    abbeySections: {
      section1: "Storia",
      section2: "Interni",
      section3: "Facciata",
      section4: "Retro",
      section5: "Polittico di San Siro"
    }
  },
  en: {
    language: "Language",
    abbey: "The Abbey",
    languages: { it: "Italian", en: "English", es: "Spanish" },
    abbeySections: {
      section1: "History",
      section2: "Interior",
      section3: "Facade",
      section4: "Back",
      section5: "San Siro Polyptych"
    }
  },
  es: {
    language: "Idioma",
    abbey: "La Abadía",
    languages: { it: "Italiano", en: "Inglés", es: "Español" },
    abbeySections: {
      section1: "Historia",
      section2: "Interior",
      section3: "Fachada",
      section4: "Atrás",
      section5: "Políptico de San Siro"
    }
  }
};

function toggleMenu(id) {
  const menu = document.getElementById(id);
  menu.classList.toggle('show');
}

function changeLanguage(lang) {
  currentLanguage = lang;
  updateMenuLabels();
  showContent(currentSection);
}

function showContent(sectionKey) {
  currentSection = sectionKey;
  const section = content[currentLanguage][sectionKey];
  document.getElementById('mainContent').innerHTML = `
    <h1>${section.title}</h1>
    <p>${section.text}</p>
    <img src="${section.image}" alt="${section.title}" style="max-width: 100%;">
  `;
}

function updateMenuLabels() {
  const l = labels[currentLanguage];

  document.getElementById('menuLanguageTitle').textContent = l.language;
  document.getElementById('menuAbbeyTitle').textContent = l.abbey;

  document.getElementById('btnLangIt').textContent = l.languages.it;
  document.getElementById('btnLangEn').textContent = l.languages.en;
  document.getElementById('btnLangEs').textContent = l.languages.es;

  document.getElementById('btnSection1').textContent = l.abbeySections.section1;
  document.getElementById('btnSection2').textContent = l.abbeySections.section2;
  document.getElementById('btnSection3').textContent = l.abbeySections.section3;
  document.getElementById('btnSection4').textContent = l.abbeySections.section4;
  document.getElementById('btnSection5').textContent = l.abbeySections.section5
;
}
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('hamburgerBtn').addEventListener('click', () => {
document.getElementById('sidebar').classList.toggle('active');
});
updateMenuLabels();
showContent(currentSection);
});