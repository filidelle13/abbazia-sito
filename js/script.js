let currentLanguage = 'it';
let currentSection = 'section1';

const content = {
  it: {
    section1: {
      title: "Storia",
      text: "Secondo la tradizione, l'abbazia è stata fondata nel XII secolo da monaci benedettini...",
      image: "images/abbazia.jpg"
    },
    section2: {
      title: "Interni",
      text: "La pianta basilicale si sviluppa su tre navate con colonne in pietra locale...",
      image: "images/interni.jpg"
    },
    section3: {
      title: "Facciata",
      text: "La facciata evidenzia elementi romanici con archi a tutto sesto e decorazioni scolpite...",
      image: "images/facciata.jpg"
    },
    section4: {
      title: "Retro",
      text: "Il campanile è robusto e si erge sopra l’abside, visibile da tutta la valle circostante...",
      image: "images/retro.jpg"
    },
    section5: {
      title: "Polittico",
      text: "Opera d’arte notevole custodita nella chiesa, realizzata da un artista locale del XV secolo...",
      image: "images/polittico.jpg"
    },
    langIt: "Italiano",
    langEn: "Inglese",
    langEs: "Spagnolo"
  },

  en: {
    section1: {
      title: "History",
      text: "According to tradition, the abbey was founded in the 12th century by Benedictine monks...",
      image: "images/abbazia.jpg"
    },
    section2: {
      title: "Interior",
      text: "The basilical plan develops on three naves with columns made of local stone...",
      image: "images/interni.jpg"
    },
    section3: {
      title: "Facade",
      text: "The facade features Romanesque elements with semicircular arches and carved decorations...",
      image: "images/facciata.jpg"
    },
    section4: {
      title: "Back",
      text: "The bell tower is sturdy and rises above the apse, visible from the entire surrounding valley...",
      image: "images/retro.jpg"
    },
    section5: {
      title: "Polyptych",
      text: "A remarkable artwork housed in the church, created by a local artist in the 15th century...",
      image: "images/polittico.jpg"
    },
    langIt: "Italian",
    langEn: "English",
    langEs: "Spanish"
  },

  es: {
    section1: {
      title: "Historia",
      text: "Según la tradición, la abadía fue fundada en el siglo XII por monjes benedictinos...",
      image: "images/abbazia.jpg"
    },
    section2: {
      title: "Interiores",
      text: "La planta basilical se desarrolla en tres naves con columnas de piedra local...",
      image: "images/interni.jpg"
    },
    section3: {
      title: "Fachada",
      text: "La fachada muestra elementos románicos con arcos de medio punto y decoraciones talladas...",
      image: "images/facciata.jpg"
    },
    section4: {
      title: "Parte trasera",
      text: "El campanario es robusto y se eleva sobre el ábside, visible desde todo el valle circundante...",
      image: "images/retro.jpg"
    },
    section5: {
      title: "Políptico",
      text: "Una obra destacada que se encuentra en la iglesia, creada por un artista local del siglo XV...",
      image: "images/polittico.jpg"
    },
    langIt: "Italiano",
    langEn: "Inglés",
    langEs: "Español"
  }
};

const hamburgerBtn = document.getElementById('hamburgerBtn');
const topmenu = document.getElementById('topmenu');
const menuText = document.getElementById('menuText');
const mainContent = document.getElementById('mainContent');

function renderMenu() {
  const menuBtns = document.querySelectorAll('.menu-btn');
  menuBtns.forEach((btn, i) => {
    const sectionKey = `section${i + 1}`;
    btn.textContent = content[currentLanguage][sectionKey].title;
  });

  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns[0].textContent = content[currentLanguage].langIt;
  langBtns[1].textContent = content[currentLanguage].langEn;
  langBtns[2].textContent = content[currentLanguage].langEs;

  menuText.textContent = "Menu";
}

function renderContent(section) {
  const data = content[currentLanguage][section];
  if (!data) return;

  mainContent.innerHTML = `
    <h1>${data.title}</h1>
    <p>${data.text}</p>
    <img src="${data.image}" alt="${data.title}" />
  `;
  mainContent.focus();
}

document.querySelectorAll('.menu-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentSection = btn.dataset.section;
    renderContent(currentSection);
    if (window.innerWidth <= 700) topmenu.classList.remove('visible');
  });
});

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang !== currentLanguage) {
      currentLanguage = lang;
      renderMenu();
      renderContent(currentSection); // Mantieni la sezione attiva!
      if (window.innerWidth <= 700) topmenu.classList.remove('visible');
    }
  });
});

hamburgerBtn.addEventListener('click', () => {
  topmenu.classList.toggle('visible');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    topmenu.classList.remove('visible');
    topmenu.classList.remove('hidden');
  } else {
    topmenu.classList.add('hidden');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 700) {
    topmenu.classList.add('hidden');
  }
  renderMenu();
  renderContent(currentSection);
});
