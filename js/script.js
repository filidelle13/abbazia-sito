

let currentLang = localStorage.getItem("lang") || "it";
let currentSection = localStorage.getItem("section") || "storia";

const hamburgerBtn = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const main = document.getElementById("main")
const menuToggleButtons = document.querySelectorAll(".menu-toggle");
const langButtons = document.querySelectorAll(".lang-btn");
const sectionButtons = document.querySelectorAll(".section-btn");
const contentSections = document.querySelectorAll(".content-section");

// Aggiorna contenuti e traduzioni
function updateContent() {
  
  const visibleSection = document.getElementById("content");
  
  const t = translations[currentLang];
  visibleSection.querySelector("h1").textContent = t[`${currentSection}_title`];
  visibleSection.querySelector("p").textContent = t[`${currentSection}_content`];

 //aggiungi un carosello di foto in base all'array images
 
  const imageContainer = visibleSection.querySelector(".carousel-inner");
  imageContainer.innerHTML = ""; // Pulisci il contenitore esistente

  images[currentSection].forEach(image => {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";
    
    const imgElement = document.createElement("img");
    imgElement.src = "images/" +image;
    imgElement.alt = t[`${currentSection}_title`];
    imgElement.classList.add("d-block", "w-100");
    imgElement.setAttribute("loading", "lazy"); // Aggiungi l'attributo loading per il caricamento lazy
    imgElement.style.height = "600px"; // Imposta un'altezza fissa
    imgElement.style.objectFit = "cover"; // Mantieni le proporzioni
  
    
    carouselItem.appendChild(imgElement);
    imageContainer.appendChild(carouselItem);
  });

  imageContainer.querySelector(".carousel-item").classList.add("active"); // Imposta la prima immagine come attiva

}

function updateMenu(){
  var buttons=document.querySelectorAll("button");
  buttons.forEach(btn=>{
    var resource=btn.dataset["resource"];
    if(resource)
    {
        var traduzione=dizionario[currentLang][resource];
        if (traduzione )
        {
          btn.textContent=traduzione;
        }

    }

  });


}

// Inizializza
updateMenu();
updateContent();


// Cambia lingua senza cambiare sezione
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const newLang = btn.dataset.lang;
    if (newLang === currentLang) return;
    currentLang = newLang;
    localStorage.setItem("lang", currentLang);
    updateMenu();
    updateContent();
    closeAllSubmenus();
  });
});

// Cambia sezione e aggiorna contenuto
sectionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const newSection = btn.dataset.section;
    if (newSection === currentSection) return;
    currentSection = newSection;
    localStorage.setItem("section", currentSection);
    updateContent();
    // Chiudi menu
    
    closeAllSubmenus();
  
  });
});

function closeAllSubmenus() {
  
  hamburgerBtn.click();

}


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const menuToggles = document.querySelectorAll(".menu-toggle");

  // Gestione apertura/chiusura menu principale
  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !isExpanded);
    menu.setAttribute("aria-hidden", isExpanded);
  });

  // Gestione apertura/chiusura sottomenu
  menuToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const targetId = toggle.getAttribute("data-target");
      const submenu = document.getElementById(targetId);
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", !isExpanded);
      submenu.setAttribute("aria-hidden", isExpanded);
    });
  });
});

// function updateViewportHeight() {
//   const vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// }

// // Aggiorna l'altezza del viewport al caricamento e al ridimensionamento
// window.addEventListener('resize', updateViewportHeight);
// window.addEventListener('load', updateViewportHeight);