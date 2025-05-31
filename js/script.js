document.addEventListener('DOMContentLoaded', () => {
  // Stato attuale lingua e sezione
  let currentLanguage = 'it';
  let currentSection = 'section1';

  // Traduzioni contenuti e testi menu
  const content = {
    it: {
      section1Name: "Storia",
      section2Name: "Architettura",
      section3Name: "Monaci",
      section4Name: "Arte",
      section5Name: "Visitare",
      langIt: "Italiano",
      langEn: "Inglese",
      langEs: "Spagnolo",
      section1: {
        title: "La Storia dell'Abbazia",
        text: "L'Abbazia è stata fondata nel 1100 e ha una ricca storia di spiritualità e cultura.",
        image: "https://picsum.photos/id/1018/600/400"
      },
      section2: {
        title: "L'Architettura",
        text: "L'architettura è un esempio perfetto di gotico medievale con dettagli unici.",
        image: "https://picsum.photos/id/1025/600/400"
      },
      section3: {
        title: "I Monaci",
        text: "La vita dei monaci è caratterizzata da preghiera, lavoro e meditazione.",
        image: "https://picsum.photos/id/1015/600/400"
      },
      section4: {
        title: "L'Arte dell'Abbazia",
        text: "L'abbazia ospita capolavori artistici di grande valore storico.",
        image: "https://picsum.photos/id/1019/600/400"
      },
      section5: {
        title: "Visitare l'Abbazia",
        text: "La visita all'abbazia offre un'esperienza unica tra storia e natura.",
        image: "https://picsum.photos/id/1020/600/400"
      }
    },
    en: {
      section1Name: "History",
      section2Name: "Architecture",
      section3Name: "Monks",
      section4Name: "Art",
      section5Name: "Visit",
      langIt: "Italian",
      langEn: "English",
      langEs: "Spanish",
      section1: {
        title: "Abbey's History",
        text: "The Abbey was founded in 1100 and has a rich history of spirituality and culture.",
        image: "https://picsum.photos/id/1018/600/400"
      },
      section2: {
        title: "Architecture",
        text: "The architecture is a perfect example of medieval Gothic with unique details.",
        image: "https://picsum.photos/id/1025/600/400"
      },
      section3: {
        title: "The Monks",
        text: "The life of the monks is characterized by prayer, work, and meditation.",
        image: "https://picsum.photos/id/1015/600/400"
      },
      section4: {
        title: "The Abbey's Art",
        text: "The abbey hosts artistic masterpieces of great historical value.",
        image: "https://picsum.photos/id/1019/600/400"
      },
      section5: {
        title: "Visiting the Abbey",
        text: "Visiting the abbey offers a unique experience between history and nature.",
        image: "https://picsum.photos/id/1020/600/400"
      }
    },
    es: {
      section1Name: "Historia",
      section2Name: "Arquitectura",
      section3Name: "Monjes",
      section4Name: "Arte",
      section5Name: "Visitar",
      langIt: "Italiano",
      langEn: "Inglés",
      langEs: "Español",
      section1: {
        title: "La Historia de la Abadía",
        text: "La Abadía fue fundada en 1100 y tiene una rica historia de espiritualidad y cultura.",
        image: "https://picsum.photos/id/1018/600/400"
      },
      section2: {
        title: "La Arquitectura",
        text: "La arquitectura es un ejemplo perfecto del gótico medieval con detalles únicos.",
        image: "https://picsum.photos/id/1025/600/400"
      },
      section3: {
        title: "Los Monjes",
        text: "La vida de los monjes se caracteriza por la oración, el trabajo y la meditación.",
        image: "https://picsum.photos/id/1015/600/400"
      },
      section4: {
        title: "El Arte de la Abadía",
        text: "La abadía alberga obras maestras artísticas de gran valor histórico.",
        image: "https://picsum.photos/id/1019/600/400"
      },
      section5: {
        title: "Visitar la Abadía",
        text: "La visita a la abadía ofrece una experiencia única entre historia y naturaleza.",
        image: "https://picsum.photos/id/1020/600/400"
      }
    }
  };

  // Elementi DOM
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const topMenu = document.getElementById('topmenu');
  const menuTextSpan = document.getElementById('menuText');
  const menuButtons = document.querySelectorAll('.menu-btn');
  const langButtons = document.querySelectorAll('.lang-btn');
  const mainContent = document.getElementById('mainContent');

  // Funzione per aggiornare testo bottoni menu e lingue
  function renderMenu() {
    // Bottoni sezioni
    menuButtons.forEach(btn => {
      const sectionKey = btn.getAttribute('data-section');
      btn.textContent = content[currentLanguage][sectionKey + 'Name'];
    });

    // Bottoni lingue
    langButtons.forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      btn.textContent = content[currentLanguage]['lang' + lang.charAt(0).toUpperCase() + lang.slice(1)];
    });

    // Aggiorna testo menu (fisso)
    menuTextSpan.textContent = "Menu";
  }

  // Funzione per aggiornare contenuto principale senza resettare section1 se cambio lingua
  function renderContent() {
    const sectionData = content[currentLanguage][currentSection];
    mainContent.innerHTML = `
      <h1>${sectionData.title}</h1>
      <p>${sectionData.text}</p>
      <img src="${sectionData.image}" alt="${sectionData.title}" />
    `;
  }

  // Cambia lingua ma NON resetta section1 se siamo già su section1
  function setLanguage(lang) {
    if (lang === currentLanguage) return;
    currentLanguage = lang;
    renderMenu();
    renderContent();
  }

  // Cambia sezione senza modificare lingua
  function setSection(section) {
    if (section === currentSection) return;
    currentSection = section;
    renderContent();
  }

  // Toggle menu visibilità
  hamburgerBtn.addEventListener('click', () => {
    const isVisible = topMenu.classList.toggle('visible');
    hamburgerBtn.setAttribute('aria-expanded', isVisible);
  });

  // Gestione click bottoni sezioni menu
  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setSection(btn.getAttribute('data-section'));
      topMenu.classList.remove('visible');
      hamburgerBtn.setAttribute('aria-expanded', false);
      hamburgerBtn.focus();
    });
  });

  // Gestione click bottoni lingue
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
      topMenu.classList.remove('visible');
      hamburgerBtn.setAttribute('aria-expanded', false);
      hamburgerBtn.focus();
    });
  });

  // Inizializza pagina
  renderMenu();
  renderContent();
});
