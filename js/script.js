let currentLanguage = 'it';
let currentSection = 'section1';

const labels = {
  it: {
    menu: {
      language: "Lingua",
      abbey: "L'abbazia",
      section1: "Storia",
      section2: "Interni",
      section3: "Facciata",
      section4: "Retro",
      section5: "Polittico di San Siro"
    }
  },
  en: {
    menu: {
      language: "Language",
      abbey: "The Abbey",
      section1: "History",
      section2: "Interior",
      section3: "Facade",
      section4: "Back",
      section5: "San Siro Polyptych"
    }
  },
  es: {
    menu: {
      language: "Idioma",
      abbey: "La Abadía",
      section1: "Historia",
      section2: "Interior",
      section3: "Fachada",
      section4: "Atrás",
      section5: "Políptico de San Siro"
    }
  }
};


const content = {
  it: {
    section1: {
      title: "Storia",
      text: "Secondo la tradizione la chiesa sorse nel luogo dove nacque Siro, vescovo di Genova nel IV sec. Non si può fissare una data dell'abbazia. precisa per l’edificazione, ma, nel 1025, il vescovo Landolfo la consegnò ai monaci benedettini: ecco il motivo per il quale quest’anno ci ritroviamo a festeggiare il millenario",
      image: "images/abbazia.jpg"
    },
    section2: {
      title: "Interni",
      text: "La Pianta BASILICALE, senza TRANSETTO, è a 3 NAVATE. Ci sono 11 colonne di circa 4 m di altezza, che dividono lo spazio in 3 NAVATE. In fondo troviamo una colonna più robusta che fa da sostegno per il campanile. Nelle tredici monofore presenti nella muratura perimetrale, sono state inserite le vetrate di Ilario Cuoghi, artista che ha realizzato anche il portale maggiore e le sculture per la Via Crucis. Le vetrate, che sono delle decorazioni fatte in ferro e vetro colorato che permettono alla luce di filtrare all’interno della chiesa, rappresentano le FIGURE DELLA BIBBIA (come i Profeti e Giuditta). Il soffitto della NAVATA CENTRALE è una CAPRIATA IN LEGNO di Corsica del 1923.",
      image: "images/interni.jpg"
    },
    section3: {
      title: "Facciata",
      text: "La facciata evidenzia la ripartizione interna in tre navate, ha un unico ingresso centrale, con un semplice portale. La facciata, orientata verso Est, ha una forma a salienti, con quattro falde del tetto, e presenta alcuni elementi tipici dell’architettura romanica, che possiamo riconoscere insieme: ● le arcatelle, ● il rosone, ● La pavimentazione del sagrato è a ciottoli (risseu)",
      image: "images/facciata.jpg" 
    },
    section4: {
      title: "Retro",
      text: "Il campanile è robusto e slanciato, alto più di 30 metri, ha una pianta quadrata con tetto piramidale ed è basato sull’ultima campata della navata di destra. Nella cella campanaria si aprono le TRIFORE e sotto una BIFORA. Sul retro si vedono le tre absidi.",
      image: "images/retro.jpg" 
    },
    section5: {
      title: "Polittico di San Siro",
      text: "La più notevole tra le opere d’arte conservate nella chiesa è il Polittico di San Siro, realizzato nel 1516, attribuito a Pier Francesco Sacchi, detto il Pavese. Il dipinto è stato restaurato nel 1960. Nel riquadro centrale è rappresentato il santo in trono, benedicente (lo capiamo dalla posizione della mano destra con le due dita alzate) che con il pastorale schiaccia il Basilisco (mostro che simboleggia l’eresia ariana). Questa immagine è circondata da 8 scene che riguardano la sua vita e la sua vocazione ed è sovrastata dal mezzo busto della Vergine che allatta il Santo bambino. Ai lati ci sono quattro riquadri per lato che raffigurano altrettante scene della vita di San Siro.",
      image: "images/polittico.jpg" 
    }
  },
  en: {
    section1: {
      title: "History",
      text: "According to tradition, the church was built on the site where Siro, bishop of Genoa, was born in the 4th century. It is not possible to set a precise date for the abbey.for its construction, but in 1025, Bishop Landolfo handed it over to the Benedictine monks: this is the reason why this year we find ourselves celebrating the millennium LIFE OF SAN SIRO There is no precise information on the life of San Siro, Bishop of Genoa. We know that he was born on the site known as Emiliana or Imiliana, later called Molassana and finally Struppa.",
      image: "images/abbazia.jpg"
    },
    section2: {
      title: "Interior",
      text: "The BASILICAL Plant, without TRANSEPT, has 3 AISLES. There are 11 columns of about 4 m high, which divide the space into 3 AISLES. At the end we find a more robust column that supports the bell tower. In the thirteen single-lancet windows in the perimeter wall, the stained glass windows by Ilario Cuoghi have been inserted, an artist who also created the main portal and the sculptures for the Via Crucis. The stained glass windows, which are decorations made of iron and colored glass that allow light to filter inside the church, represent the FIGURES OF THE BIBLE (such as the Prophets and Judith). The ceiling of the CENTRAL AISLE is a WOODEN TRUSS from Corsica from 1923.",
      image: "images/interni.jpg"
    },
    section3: {
      title: "Facade",
      text: "The facade highlights the internal division into three naves, has a single central entrance, with a simple portal. The facade, oriented towards the East, has a shape with salients, with four roof slopes, and presents some typical elements of Romanesque architecture, which we can recognize together: ● the small arches, ● the rose window, ● The paving of the churchyard is made of pebbles (risseu)",
      image: "images/facciata.jpg"
    },
  
    section4: {
    title: "Back",
    text: "The bell tower is sturdy and slender, more than 30 meters high, has a square plan with a pyramidal roof and is based on the last span of the right nave. In the bell tower there are the TRIPLE LIGHTS and below a TWIN LIGHT. On the back you can see the three apses.",
    image: "images/retro.jpg"
    },
  
    section5: {
      title: "San Siro Polyptych",
      text: "The most notable of the works of art preserved in the church is the Polyptych of San Siro, made in 1516, attributed to Pier Francesco Sacchi, known as Pavese. The painting was restored in 1960. In the central panel, the saint is depicted on a throne, blessing (we understand this from the position of his right hand with two fingers raised) who with the pastoral staff crushes the Basilisk (a monster that symbolizes the Arian heresy). This image is surrounded by 8 scenes that concern his life and his vocation and is dominated by the half-length of the Virgin breastfeeding the Holy Child. On the sides there are four panels per side that depict as many scenes from the life of San Siro.",
      image: "images/polittico.jpg" 
    }
  },
  es: {
    section1: {
      title: "Historia",
      text: "Según la tradición, la iglesia fue construida en el lugar donde nació Siro, obispo. de Génova en el siglo IV. No es posible fijar una fecha para la abadía.precisa para su construcción, pero, en 1025, el obispo Landolfo la entregó a la Monjes benedictinos: esta es la razón por la que este año nos encontramos en celebrar el milenio",
      image: "images/abbazia.jpg"
    },
    section2: {
      title: "Interior",
      text: "La planta de BASÍLICA, sin CRUCERO, presenta 3 NAVES. Hay 11columnas de aproximadamente 4 m de altura, que dividen el espacio en 3 PASILLOS. En conclusión Encontramos una columna más robusta que sostiene el campanario. En las trece ventanas monolancetas presentes en el muro perimetral se hanSe insertaron las vidrieras de Ilario Cuoghi, el artista que también creó el portal. mayor y las esculturas para el Vía Crucis. Las vidrieras, que sondecoraciones hechas de hierro y vidrio de colores que permiten filtrar la luz Dentro de la iglesia, representan las FIGURAS DE LA BIBLIA (como el Profetas y Judit). El techo de la NAVE CENTRAL es una CEJA DE MADERA de Córcega. de 1923.",
      image: "images/interni.jpg"
    },
    section3: {
      title: "Fachada",
      text: "La facciata evidenzia la ripartizione interna in tre navate, ha un unico ingresso centrale, con un semplice portale. La facciata, orientata verso Est, ha una forma a salienti, con quattro falde del tetto, e presenta alcuni elementi tipici dell’architettura romanica, che possiamo riconoscere insieme: ● le arcatelle, ● il rosone, ● La pavimentazione del sagrato è a ciottoli (risseu)",
      image: "images/facciata.jpg"
    },
    section4: {
      title: "àtras",
      text: "El campanario es robusto y esbelto, más alto que De 30 metros de altura, tiene planta cuadrada con tejado. piramidal y se basa en el último tramo del pasillo derecho. en la celda El campanario abre el TRIFORE y debajo una VENTANA DE MUFFIN. En la parte posterior se pueden ver los tres ábsides.",
      image: "images/retro.jpg"
    },
    section5: {
      title: "Políptico de San Siro",
      text: "La más notable de las obras de arte conservadas en la iglesia es el Políptico de San Siro, construido en 1516, atribuido a Pier Francesco Sacchi, conocido como el Pavés. El cuadro fue restaurado en 1960. En el panel central se representa al santo en el trono, bendiciendo (el entendemos por la posición de la mano derecha con los dos dedos levantados) que con la pastoral aplasta al basilisco (monstruo que simboliza la herejía arriana). Esta imagen está rodeada de 8 escenas que se relacionan con su vida y su vocación y está dominada por el busto de medio cuerpo de la Virgen amamantando al Santo niño. En los laterales hay cuatro paneles por lado que representan otras tantas escenas de la vida de San Siro.",
      image: "images/polittico.jpg"
    }
  }
};

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
}

function toggleMenu(id) {
  const menu = document.getElementById(id);
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function changeLanguage(lang) {
  currentLanguage = lang;
  updateMenuLabels();            // Aggiorna le etichette
  showContent(currentSection);   // 🔁 Mostra la sezione attuale, NON forzare section1
}

function updateMenuLabels() {
  const langLabels = labels[currentLanguage];

  document.getElementById('languageTitle').textContent = langLabels.menu.language;
  document.getElementById('abbeyTitle').textContent = langLabels.menu.abbey;

  for (let i = 1; i <= 5; i++) {
    document.getElementById(`btn-section1`.replace('1', i)).textContent = langLabels.menu[`section${i}`];
  }
}

function showContent(sectionKey) {
  currentSection = sectionKey;
  const section = content[currentLanguage][sectionKey];
  const html = `
    <h1>${section.title}</h1>
    <p>${section.text}</p>
    <img src="${section.image}" alt="${section.title}" style="max-width:100%; margin-top:15px;">
  `;
  document.getElementById('mainContent').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  updateMenuLabels();
  showContent(currentSection); // Avvia con section1 ma mantiene la logica aggiornata
});