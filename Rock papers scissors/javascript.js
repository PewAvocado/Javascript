

const rock = document.querySelector("#rock"); 
const paper = document.querySelector("#paper"); 
const scissor = document.querySelector("#scissor");
const inicio = document.querySelector("#inicio");
const resultado = document.querySelector("#resultado");

// --- CREACIÓN DINÁMICA DE ELEMENTOS DE RESULTADO ---
// 1. Array para los resultados de las 5 rondas
const rondaElements = [];
const NUMERO_RONDAS = 5;

for (let i = 0; i < NUMERO_RONDAS; i++) {
    const div = document.createElement("div");
    // Opcional: añade una clase para dar estilos
    div.classList.add('ronda-resultado'); 
    resultado.appendChild(div);
    rondaElements.push(div);
}

// 2. Elementos separados para el resumen final del juego
const jugada7 = document.createElement("div");
const jugada8 = document.createElement("div");
const jugada9 = document.createElement("div");

resultado.appendChild(jugada7);
resultado.appendChild(jugada8);
resultado.appendChild(jugada9);

// --- EVENT LISTENER ---
inicio.addEventListener("click", jugarRonda);

// --- VARIABLES DE PUNTUACIÓN GLOBALES ---
let myscore = 0;
let pcscore = 0;



/**
 * Genera la elección aleatoria de la PC.
 * @returns {string} La elección de la PC ("piedra", "papel" o "tijera").
 */
function pcchoice(){
    let ppt;
    // Genera un número aleatorio entre 1 y 3
    const pc = Math.floor(Math.random() * 3) + 1; 

    if (pc === 1){
        ppt = "piedra";
    } 
    else if(pc === 2) {
        ppt = "papel";
    }
    else { 
        ppt = "tijera";
    }
    return ppt;
}

/**
 * Solicita la elección al jugador.
 * @returns {string} La elección del jugador.
 */
function mychoice(){
    // Se recomienda validar y normalizar la entrada del usuario en un código más robusto
    let decision = prompt("¿Piedra, papel o tijera?");
    return decision ? decision.toLowerCase() : ''; // Normaliza a minúsculas o cadena vacía
}

/**
 * Determina el ganador de una ronda y actualiza el marcador y el DOM.
 * @param {string} human - Elección del jugador.
 * @param {string} machine - Elección de la PC.
 * @param {number} rondaIndex - El índice de la ronda actual (0 a 4).
 */
function round(human, machine, rondaIndex){
    // Selecciona el div correcto del array para esta ronda
    const currentRoundDiv = rondaElements[rondaIndex];
    let resultMessage = ""; 

    // Limpia el input del usuario (ej: si escribe "Papel" lo trata como "papel")
    const humanNormalized = human.toLowerCase(); 

    if (humanNormalized === machine){
        resultMessage = `Ronda ${rondaIndex + 1} (Tú: ${humanNormalized} vs PC: ${machine}): ¡EMPATE!`;
    } 
    // --- Lógica de Victoria del Humano ---
    else if (
        (humanNormalized === "papel" && machine === "piedra") || 
        (humanNormalized === "piedra" && machine === "tijera") || 
        (humanNormalized === "tijera" && machine === "papel")
    ) {
        resultMessage = `Ronda ${rondaIndex + 1} (Tú: ${humanNormalized} vs PC: ${machine}): ¡GANASTE! 🎉`;
        myscore++;
    }
    // --- Lógica de Derrota del Humano (Victoria de la PC) ---
    else {
        resultMessage = `Ronda ${rondaIndex + 1} (Tú: ${humanNormalized} vs PC: ${machine}): ¡PERDISTE! 🙁`;
        pcscore++;
    }

    // Actualiza el contenido del DIV específico de la ronda
    currentRoundDiv.textContent = resultMessage;
    console.log(resultMessage);
}

/**
 * Función principal para iniciar y jugar la partida de 5 rondas.
 */
function jugarRonda(){
    // Reinicia las puntuaciones al inicio de cada juego
    myscore = 0;
    pcscore = 0;
    
    // Limpia los resultados previos en el DOM
    rondaElements.forEach(div => div.textContent = '');
    jugada7.textContent = '';
    jugada8.textContent = '';
    jugada9.textContent = '';


    for (let i = 0; i < NUMERO_RONDAS; i++){
        let humano = mychoice();
        let maquina = pcchoice();
        
        // La clave: pasamos el índice 'i' a la función round()
        round(humano, maquina, i); 
    }
    
    // --- Mostrar Resultado Final en el DOM ---
    jugada7.textContent = "--- RESULTADO FINAL ---";
    jugada8.textContent = `Tu Puntuación: ${myscore}`;
    jugada9.textContent = `Máquina Puntuación: ${pcscore}`;
    
    // --- Mostrar Resultado Final en la Consola ---
    console.log("\n*** RESULTADO FINAL ***");
    console.log(`Tu Puntuación (myscore): ${myscore}`);
    console.log(`Máquina Puntuación (pcscore): ${pcscore}`);

    // --- Alerta del Ganador ---
    if (myscore > pcscore) {
        alert(`¡Felicidades! Ganaste el juego ${myscore} a ${pcscore}.`);
    } else if (pcscore > myscore) {
        alert(`La Máquina te ganó ${pcscore} a ${myscore}.`);
    } else {
        alert("¡El juego terminó en empate!");
    }
}

