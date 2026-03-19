/* =========================
   CONFIGURAZIONE TESTI
========================= */

const texts = [ 
  "Ciao amore mio, come stai?🩷",

  "Purtroppo, essendo ancora solo al primo anno di questo lungo percorso universitario, per ora dobbiamo accontentarci di qualcosa di semplice HAHAHAH.",  
  "Una piccola pagina web che potrai sempre aprire quando vorrai (almeno credo), dove ho deciso di lasciarti qualche parola per ricordare questa giornata.",

  "Ricordo ancora benissimo quel lontano mese di luglio, quando ci scrivemmo per la prima volta. eravamo entrambi ignari di tutto quello che sarebbe successo dopo, senza immaginare minimamente cosa saremmo diventati l’uno per l’altra.",  
  "E invece guarda un po’: oggi, 20 marzo, sono quattro mesi che stiamo insieme🥹 a dirlo sembra incredibile",

  "In questi mesi il nostro rapporto ha vissuto tanti momenti diversi: ci sono stati alti e bassi, momenti bellissimi e altri più difficili che a volte ci hanno portato anche a prendere decisioni davvero pesanti.",  
  "Ma nonostante tutto quello che abbiamo passato, siamo ancora qui. e questo per me significa tantissimo.🩷",

  "Siamo qui con la stessa voglia di amarci, con la stessa forza di volontà e con lo stesso desiderio di far crescere ogni giorno di più qualcosa di speciale tra noi. Qualcosa che spero possa diventare sempre più unico e indimenticabile.",

  "Silvia, per me sei davvero tutto. Sei la mia forza quando ne ho bisogno, il mio sorriso nei momenti più semplici e una delle cose più belle che mi siano mai capitate. hai un cuore enorme, pieno di amore e di dolcezza, e non puoi immaginare quanto io sia grato alla vita per averti incontrata.",

  "Essere il tuo fidanzato è qualcosa che per me ha un valore immenso. è un ruolo importante, e sapere di poter essere una persona così speciale nella tua vita mi rende incredibilmente felice.",

  "Ti amo scemetta mia🩷",

  "Per festeggiare questo momento ho pensato di farti un piccolo regalo. non ti dirò subito di cosa si tratta, ma qui sotto troverai un “piccolo” indizio che ti aiuterà ad arrivarci🩷",

  "Il modo in cui ti ho fatto arrivare a questa pagina non era quello che avevo davvero in mente. in realtà avevo un’altra idea molto più carina ma visti i tempi (capirai poi perché), non ho avuto altra scelta che usare questa scusa terribile, più avanti ti racconterò qual era il mio piano iniziale.",

  "Adesso però divertiti a provare a capire questo codice da “informatico” quale sono.",  
  "Non è così facile.",

  "Niente aiuti esterni.",
  "Se hai bisogno chiedi a me, ti aiuterò senza dirti troppo:)🩷",

];

/* =========================
   VARIABILI
========================= */
let step = 0;

const intro = document.getElementById("intro");
const letterSection = document.getElementById("letter-section");
const startBtn = document.getElementById("startBtn");

const container = document.getElementById("messages-container");
const template = document.getElementById("message-template");

const finalSection = document.getElementById("final-section");
const revealBtn = document.getElementById("revealBtn");
const binaryContainer = document.getElementById("binary-container");
const binaryText = document.querySelector(".binary-text");

const music = document.getElementById("bg-music");

/* =========================
   START EXPERIENCE (TRANSIZIONE WOW)
========================= */
startBtn.addEventListener("click", startExperience);

function startExperience() {

    // blocca click multipli
    startBtn.disabled = true;

    // effetto fade + zoom leggero (cinematico)
    intro.style.transition = "all 0.8s ease";
    intro.style.opacity = "0";
    intro.style.transform = "scale(1.05)";

    setTimeout(() => {
        intro.style.display = "none";

        // mostra lettera con fade in
        letterSection.style.display = "block";
        letterSection.style.opacity = "0";
        letterSection.style.transform = "translateY(20px)";

        setTimeout(() => {
            letterSection.style.transition = "all 1s ease";
            letterSection.style.opacity = "1";
            letterSection.style.transform = "translateY(0)";
        }, 50);

        // reset scroll
        window.scrollTo({ top: 0, behavior: "instant" });

        // primo messaggio
        setTimeout(() => {
            showNextMessage();
        }, 400);

    }, 800);

    // musica
    if (music) {
        music.volume = 0.3;
        music.play().catch(() => {});
    }
}

/* =========================
   MOSTRA MESSAGGI (smooth)
========================= */
function showNextMessage() {

    if (step >= texts.length) {
        showFinalButton();
        return;
    }

    const clone = template.content.cloneNode(true);
    const textEl = clone.querySelector(".message-text");

    textEl.textContent = texts[step];

    container.appendChild(clone);

    const lastMessage = container.lastElementChild;

    // animazione morbida
    setTimeout(() => {
        lastMessage.classList.add("show");
        smoothScrollToBottom();
    }, 100);

    // click una sola volta
    lastMessage.addEventListener("click", showNextMessage, { once: true });

    step++;

    createSparkle();
}

/* =========================
   SCROLL FLUIDO
========================= */
function smoothScrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

/* =========================
   FINALE
========================= */
function showFinalButton() {

    finalSection.classList.remove("hidden");

    // piccolo delay per renderlo più romantico
    setTimeout(() => {
        finalSection.classList.add("show");
        smoothScrollToBottom();
    }, 300);

    revealBtn.addEventListener("click", revealBinary, { once: true });
}

function revealBinary() {

    const binaryString = "01010110 01001001 01001110 01001001 01001100 01000101";

    binaryContainer.classList.remove("hidden");
    binaryText.textContent = "";

    let i = 0;

    function typeWriter() {
        if (i < binaryString.length) {
            binaryText.textContent += binaryString[i];
            i++;
            setTimeout(typeWriter, 80); // velocità scrittura
        }
    }

    setTimeout(() => {
        binaryText.classList.add("show");
        typeWriter();
    }, 200);

    burstHearts();
}

/* =========================
   CUORI
========================= */
function createHeart() {
    const heart = document.createElement("div");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);

/* =========================
   BURST FINALE
========================= */
function burstHearts() {
    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 80);
    }
}

/* =========================
   SPARKLE
========================= */
function createSparkle() {
    const sparkle = document.createElement("div");

    sparkle.style.position = "fixed";
    sparkle.style.width = "6px";
    sparkle.style.height = "6px";
    sparkle.style.background = "white";
    sparkle.style.borderRadius = "50%";
    sparkle.style.left = (50 + Math.random() * 20 - 10) + "vw";
    sparkle.style.top = window.scrollY + 200 + "px";
    sparkle.style.opacity = "0.8";
    sparkle.style.pointerEvents = "none";
    sparkle.style.transition = "1s";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.style.transform = "translateY(-40px)";
        sparkle.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

/* =========================
   TOUCH UX
========================= */
document.addEventListener("touchstart", function() {
    document.body.classList.add("touched");
}, { once: true });