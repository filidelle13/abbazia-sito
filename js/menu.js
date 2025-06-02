var dizionario={
    en: {
        lingua: "Language",
        abbazia: "The Abbey",
        storia: "History",
        interni: "Interiors",
        facciata: "Facade",
        retro: "Back",
        polittico_di_san_siro: "San Siro's polyptych"
    },
    it: {
        lingua: "Lingua",
        abbazia: "L'Abbazia",
        storia: "Storia",
        interni: "Interni",
        facciata: "Facciata",
        retro: "Retro",
        polittico_di_san_siro: "Polittico di San Siro"

    },
    es: {
        lingua: "Idioma",
        abbazia: "La Abadía",
        storia: "Historia",
        interni: "Interiores",
        facciata: "Fachada",
        retro: "Parte trasera",
        polittico_di_san_siro: "Políptico de San Siro"
    }
}


const translations = {
  it: {
    storia_title: "Storia dell'Abbazia",
    storia_content: "Secondo la tradizione la chiesa sorse nel luogo dove nacque Siro, vescovo di Genova nel IV sec. Non si può fissare una data precisa per l’edificazione, ma nel 1025 il vescovo Landolfo la consegnò ai monaci benedettini. Sulla vita di San Siro, Vescovo di Genova, non si hanno informazioni precise. Sappiamo che è nato nel sito conosciuto con il nome di Emiliana o Imiliana detto poi Molassana e infine Struppa.",
    interni_title: "Interni dell'Abbazia",
    interni_content: "La pianta basilicale, senza transetto, è a tre navate. Ci sono 11 colonne di circa 4 metri di altezza che dividono lo spazio in tre navate. In fondo troviamo una colonna più robusta che fa da sostegno per il campanile. Nelle tredici monofore presenti nella muratura perimetrale, sono state inserite le vetrate di Ilario Cuoghi, che rappresentano figure della Bibbia. Il soffitto della navata centrale è una capriata in legno di Corsica del 1923.",
    facciata_title: "Facciata dell'Abbazia",
    facciata_content: "La facciata evidenzia la ripartizione interna in tre navate, ha un unico ingresso centrale con un semplice portale. La facciata, orientata verso est, ha una forma a salienti e presenta elementi tipici dell’architettura romanica, come arcatelle, rosone e pavimentazione a ciottoli (risseu).",
    retro_title: "Retro dell'Abbazia",
    retro_content: "Il campanile è robusto e slanciato, alto più di 30 metri, con una pianta quadrata e tetto piramidale. Sul retro si vedono le tre absidi e il campanile con trifore e bifore.",
    polittico_title: "Polittico di San Siro",
    polittico_content: "La più notevole tra le opere d’arte conservate nella chiesa è il Polittico di San Siro, realizzato nel 1516 e attribuito a Pier Francesco Sacchi. Nel riquadro centrale è rappresentato San Siro in trono, benedicente, che con il pastorale schiaccia il Basilisco, simbolo dell’eresia ariana. Questa immagine è circondata da otto scene della sua vita e sovrastata dal mezzo busto della Vergine che allatta il Santo Bambino."
  },
  en: {
    storia_title: "History of the Abbey",
    storia_content: "According to tradition, the church was built where Siro, bishop of Genoa in the 4th century, was born. A precise date for the construction cannot be established, but in 1025 Bishop Landolfo entrusted it to the Benedictine monks. Little is known about the life of Saint Siro, Bishop of Genoa. It is known that he was born in the area known as Emiliana or Imiliana, later called Molassana and finally Struppa.",
    interni_title: "Interiors of the Abbey",
    interni_content: "The basilical layout, without a transept, has three naves. There are 11 columns about 4 meters high that divide the space into three naves. At the end, there is a sturdier column supporting the bell tower. The perimeter walls feature stained glass windows by Ilario Cuoghi, depicting figures from the Bible. The central nave's ceiling is a wooden truss from Corsica, dating back to 1923.",
    facciata_title: "Facade of the Abbey",
    facciata_content: "The facade highlights the internal division into three naves, with a single central entrance and a simple portal. Facing east, the facade has a gabled shape and features typical Romanesque elements such as arches, a rose window, and cobblestone paving (risseu).",
    retro_title: "Back of the Abbey",
    retro_content: "The bell tower is sturdy and slender, over 30 meters high, with a square base and a pyramidal roof. The back shows the three apses and the bell tower with triforate and biforate windows.",
    polittico_title: "Polyptych of San Siro",
    polittico_content: "The most notable artwork preserved in the church is the Polyptych of San Siro, created in 1516 and attributed to Pier Francesco Sacchi. The central panel depicts Saint Siro enthroned, blessing, and crushing the Basilisk, a symbol of Arian heresy, with his pastoral staff. This image is surrounded by eight scenes from his life and topped by a bust of the Virgin nursing the Holy Child."
  },
  es: {
    storia_title: "Historia de la Abadía",
    storia_content: "Según la tradición, la iglesia fue construida en el lugar donde nació Siro, obispo de Génova en el siglo IV. No se puede establecer una fecha precisa para la construcción, pero en 1025 el obispo Landolfo la entregó a los monjes benedictinos. Se sabe poco sobre la vida de San Siro, obispo de Génova. Se sabe que nació en el área conocida como Emiliana o Imiliana, luego llamada Molassana y finalmente Struppa.",
    interni_title: "Interiores de la Abadía",
    interni_content: "El diseño basilical, sin crucero, tiene tres naves. Hay 11 columnas de aproximadamente 4 metros de altura que dividen el espacio en tres naves. Al final, hay una columna más robusta que sostiene el campanario. Las paredes perimetrales tienen vitrales de Ilario Cuoghi, que representan figuras de la Biblia. El techo de la nave central es una armadura de madera de Córcega, que data de 1923.",
    facciata_title: "Fachada de la Abadía",
    facciata_content: "La fachada destaca la división interna en tres naves, con una única entrada central y un portal sencillo. Orientada hacia el este, la fachada tiene una forma de gablete y presenta elementos típicos del estilo románico, como arcos, un rosetón y un pavimento de guijarros (risseu).",
    retro_title: "Parte trasera de la Abadía",
    retro_content: "El campanario es robusto y esbelto, con más de 30 metros de altura, una base cuadrada y un techo piramidal. La parte trasera muestra las tres ábsides y el campanario con ventanas triforadas y biforadas.",
    polittico_title: "Políptico de San Siro",
    polittico_content: "La obra de arte más notable conservada en la iglesia es el Políptico de San Siro, creado en 1516 y atribuido a Pier Francesco Sacchi. El panel central representa a San Siro en su trono, bendiciendo y aplastando al Basilisco, símbolo de la herejía arriana, con su bastón pastoral. Esta imagen está rodeada por ocho escenas de su vida y coronada por un busto de la Virgen amamantando al Santo Niño."
  }
};


const images = {
    
  storia: ["facciata.jpg","storia-1.jpg", "navata.jpg"],
  interni: ["navata.jpg", "navata-2.jpg", "altare.jpg"],
  facciata: ["facciata.jpg","sagrato.jpg"],
  retro: ["abside.jpg", "panorama.jpg"],
  polittico: ["polittico.jpg", "polittico-2.jpg"]
 
};

  