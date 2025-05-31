let currentLanguage = 'it';
let currentSection = 'section1';

const content = {
  it: {
    section1: {
      title: "Storia",
      text: "Secondo la tradizione la chiesa sorse nel luogo dove nacque Siro, vescovo di Genova nel IV sec. Non si può fissare una data precisa per l’edificazione, ma nel 1025, il vescovo Landolfo la consegnò ai monaci benedettini: ecco il motivo per cui quest’anno celebriamo il millenario.",
      image: "images/abbazia.jpg"
    },
    section2: {
      title: "Interni",
      text: "La pianta basilicale senza transetto è a 3 navate. Ci sono 11 colonne di circa 4 m di altezza che dividono lo spazio in 3 navate. In fondo troviamo una colonna più robusta che sostiene il campanile. Nelle tredici monofore sono state inserite le vetrate di Ilario Cuoghi, artista che ha realizzato anche il portale maggiore e le sculture per la Via Crucis. Il soffitto della navata centrale è una capriata in legno di Corsica del 1923.",
      image: "images/interni.jpg"
    },
    section3: {
      title: "Facciata",
      text: "La facciata evidenzia la ripartizione interna in tre navate, con un unico ingresso centrale e un semplice portale. Orientata verso Est, ha forma a salienti con quattro falde del tetto e presenta elementi tipici dell’architettura romanica: arcatelle, rosone e pavimentazione a ciottoli (risseu).",
      image: "images/facciata.jpg"
    },
    section4: {
      title: "Retro",
      text: "Il campanile è robusto e slanciato, alto più di 30 metri, ha pianta quadrata con tetto piramidale ed è basato sull’ultima campata della navata di destra. Nella cella campanaria si aprono trifore e sotto una bifora. Sul retro si vedono le tre absidi.",
      image: "images/retro.jpg"
    },
    section5: {
      title: "Polittico di San Siro",
      text: "Opera d’arte notevole è il Polittico di San Siro, realizzato nel 1516 da Pier Francesco Sacchi detto il Pavese. Restaurato nel 1960. Il santo è rappresentato in trono, benedicente, con il pastorale che schiaccia il Basilisco (simbolo dell’eresia ariana). Intorno, 8 scene della sua vita e vocazione, sovrastate dal busto della Vergine che allatta il Santo bambino.",
      image: "images/polittico.jpg"
    },
    menuLanguage: "Lingua",
    menuAbbey: "L'abbazia",
    langIt: "Italiano",
    langEn: "Inglese",
    langEs: "Spagnolo",
    section1Name: "Storia",
    section2Name: "Interni",
    section3Name: "Facciata",
    section4Name: "Retro",
    section5Name: "Polittico"
  },
  en: {
    section1: {
      title: "History",
      text: "According to tradition, the church was built on the site where Siro, bishop of Genoa, was born in the 4th century. There is no precise date for the construction, but in 1025 Bishop Landolfo handed it over to the Benedictine monks, which is why this year we celebrate the millennium.",
      image: "images/abbazia.jpg"
    },
    section2: {
      title: "Interior",
      text: "The basilical plan, without transept, has 3 aisles. There are 11 columns about 4 m high dividing the space into 3 aisles. At the end a more robust column supports the bell tower. In thirteen single-lancet windows there are stained glass windows by Ilario Cuoghi, who also made the main portal and sculptures for the Via Crucis. The ceiling of the central aisle is a wooden truss from Corsica, 1923.",
      image: "images/interni.jpg"
    },
    section3: {
      title: "Facade",
      text: "The facade highlights the internal division into three naves, with a single central entrance and a simple portal. Oriented eastward, it has a shape with salients and four roof slopes and typical Romanesque elements: small arches, rose window, and pebble paving (risseu).",
      image: "images/facciata.jpg"
    },
    section4: {
      title: "Back",
      text: "The bell tower is sturdy and slender, over 30 meters high, square plan with pyramidal roof, based on the last span of the right nave. The bell chamber has triforas and below a bifora. At the back you can see the three apses.",
      image: "images/retro.jpg"
    },
    section5: {
      title: "Polyptych of San Siro",
      text: "A notable artwork is the Polyptych of San Siro, made in 1516 by Pier Francesco Sacchi, called il Pavese. Restored in 1960. The saint is shown seated on a throne, blessing, with the pastoral staff crushing the Basilisk (symbol of Arian heresy). Around him, 8 scenes of his life and vocation, topped by the bust of the Virgin nursing the Holy Child.",
      image: "images/polittico.jpg"
    },
    menuLanguage: "Language",
    menuAbbey: "Abbey",
    langIt: "Italian",
    langEn: "English",
    langEs: "Spanish",
    section1Name: "History",
    section2Name: "Interior",
    section3Name: "Facade",
    section4Name: "Back",
    section5Name: "Polyptych"
  },
  es: {
    section1: {
      title: "Historia",
      text: "Según la tradición, la iglesia se construyó en el lugar donde nació Siro, obispo de Génova en el siglo IV. No hay una fecha precisa para la construcción, pero en 1025 el obispo Landolfo la entregó a los monjes benedictinos: por eso este año celebramos el milenario.",
      image: "images/abbazia.jpg"
    },
    section2: {
      title: "Interiores",
      text: "La planta basilical sin transepto tiene 3 naves. Hay 11 columnas de unos 4 m de altura que dividen el espacio en 3 naves. Al fondo hay una columna más robusta que sostiene el campanario. En las trece ventanas ojivales están las vidrieras de Ilario Cuoghi, artista que también realizó el portal mayor y las esculturas para el Vía Crucis. El techo de la nave central es una armadura de madera de Córcega de 1923.",
      image: "images/interni.jpg"
    },
    section3: {
      title: "Fachada",
      text: "La fachada muestra la división interna en tres naves, con una sola entrada central y un portal simple. Orientada hacia el este, tiene forma a faldones con cuatro vertientes y presenta elementos típicos de la arquitectura románica: arquerías, rosetón y pavimento de guijarros (risseu).",
      image: "images/facciata.jpg"
    },
    section4: {
      title: "Parte trasera",
      text: "El campanario es robusto y esbelto, de más de 30 metros de altura, con planta cuadrada y techo piramidal, apoyado en la última campata de la nave derecha. En la cámara de campanas se abren triforas y debajo una bifora. En la parte trasera se ven los tres ábsides.",
      image: "images/retro.jpg"
    },
    section5: {
      title: "Políptico de San Siro",
      text: "Una obra notable es el Políptico de San Siro, realizado en 1516 por Pier Francesco Sacchi llamado il Pavese. Restaurado en 1960. El santo está representado en un trono, bendiciendo, con el pastor que aplasta al Basilisco (símbolo de la herejía arriana). Alrededor, 8 escenas de su vida y vocación, rematadas por el busto de la Virgen que amamanta al Santo Niño.",
      image: "images/polittico.jpg"
    },
    menuLanguage: "Idioma",
    menuAbbey: "La Abadía",
    langIt: "Italiano",
    langEn: "Inglés",
    langEs: "Español",
    section1Name: "Historia",
    section2Name: "Interiores",
    section3Name: "Fachada",
    section4Name: "Parte trasera",
    section5Name: "Políptico"
  }
};

const hamburgerBtn = document.getElementById('hamburgerBtn');
const topmenu = document.getElementById('topmenu');
const menuText = document.getElementById('menuText');
const mainContent = document.getElementById('mainContent');

const menuButtons = [...document.querySelectorAll('.menu-btn')];
const langButtons = [...document.querySelectorAll('.lang-btn')];

function populateMenu() {
  // Aggiorna i testi dei bottoni menu e lingue
  const lang = content[currentLanguage];
  menuText.textContent = lang.menuAbbey;

  // Imposta testo bottoni sezioni
  if(menuButtons.length === 5){
    menuButtons[0].textContent = lang.section1Name;
    menuButtons[1].textContent = lang.section2Name;
    menuButtons[2].textContent = lang.section3Name;
    menuButtons[3].textContent = lang.section4Name;
    menuButtons[4].textContent = lang.section5Name;
  }

  // Imposta testo bottoni lingue
  if(langButtons.length === 3){
    langButtons[0].textContent = lang.langIt;
    langButtons[1].textContent = lang.langEn;
    langButtons[2].textContent = lang.langEs;
  }
}

function renderContent() {
  // Non resettare section1 alla lingua cambiata, mantieni currentSection
  const lang = content[currentLanguage][currentSection];
  mainContent.innerHTML = `
    <h1>${lang.title}</h1>
    <p>${lang.text}</p>
    <img src="${lang.image}" alt="${lang.title}" />
  `;
}

// Toggle menu visibilità
hamburgerBtn.addEventListener('click', () => {
  topmenu.classList.toggle('hidden');
});

// Cambio sezione
menuButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentSection = btn.getAttribute('data-section');
    renderContent();
    // Chiudi il menu dopo la scelta (su mobile)
    if(window.innerWidth <= 700){
      topmenu.classList.add('hidden');
    }
  });
});

// Cambio lingua
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const newLang = btn.getAttribute('data-lang');
    if(newLang !== currentLanguage){
      currentLanguage = newLang;
      populateMenu();
      renderContent();
    }
    // Chiudi menu dopo scelta lingua (su mobile)
    if(window.innerWidth <= 700){
      topmenu.classList.add('hidden');
    }
  });
});

// All'avvio
populateMenu();
renderContent();
