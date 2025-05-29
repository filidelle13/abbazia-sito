let currentLanguage = 'it';

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
      text: "",
      image: "images/retro.jpg" 
    },
    section5: {
      title: "Polittico di San Siro",
      text: "",
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
      text: "The façade highlights the internal division into three naves, has a single central entrance, with a simple portal. The facade, oriented towards the East, has a shape with salients, with four roof slopes, and presents some typical elements of Romanesque architecture, which we can recognize together: ● the small arches, ● the rose window, ● The paving of the churchyard is made of pebbles (risseu)",
      image: "images/facciata.jpg"
    },
  
    section4: {
    title: "Back",
    text: "",
    image: "images/retro.jpg"
    },
  
    section5: {
      title: "San Siro Polyptych",
      text: "",
      image: "images/polittico.jpg" 
    }
  }
};

function toggleMenu(id) {
  const menu = document.getElementById(id);
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function changeLanguage(lang) {
  currentLanguage = lang;
  showContent('section1'); // Mostra sempre una sezione dopo il cambio lingua
}

function showContent(sectionKey) {
  const section = content[currentLanguage][sectionKey];
  const html = `
    <h1>${section.title}</h1>
    <p>${section.text}</p>
    <img src="${section.image}" alt="${section.title}">
  `;
  document.getElementById('mainContent').innerHTML = html;
}

// Carica la prima sezione all'avvio
document.addEventListener('DOMContentLoaded', () => {
  showContent('section1');
});
