console.log("Hello world")

let myscore = 0;
let pcscore = 0;

function pcchoice(){
    let ppt;
    pc = Math.floor(Math.random()*3)+1;
    if (pc == 1){
        ppt = "piedra";
    } 
    else if(pc == 2) {
        ppt = "papel";
    }
    else if (pc == 3){
        ppt = "tijera";
    }
    console.log(ppt);
    return ppt;
}

function mychoice(){
    let decision = prompt("¿Piedra, papel o tijera?")
    console.log(decision);
    return decision;
}

function round(human, machine){
    if (human === machine){
        console.log("EMPATE");
    } 
    else if (human === "papel" && machine === "piedra"){
        console.log("GANASTE");
        myscore ++;
    }
    else if (human === "papel" && machine === "tijera"){
        console.log("PERDISTE");
        pcscore ++;
    } 
    else if (human === "piedra" && machine === "tijera"){
        console.log("GANASTE");
        myscore ++;
    } 
    else if (human === "piedra" && machine === "papel"){
        console.log("PERDISTE");
        pcscore ++;
    } 
    else if (human === "tijera" && machine === "piedra"){
        console.log("PERDISTE");
        pcscore ++;
    } 
    else if (human === "tijera" && machine === "papel"){
        console.log("GANASTE");
        myscore ++;
    } 
}




function jugarRonda(){
    const numeroRondas = 5;
    myscore = 0;
    pcscore = 0;
    for (let i= 0; i<numeroRondas; i++){
        let humano = mychoice();
        let maquina = pcchoice();
        round(humano,maquina);
    }
        
    console.log("\n*** RESULTADO FINAL ***");
    console.log(`Tu Puntuación (myscore): ${myscore}`);
    console.log(`Máquina Puntuación (pcscore): ${pcscore}`);

    if (myscore > pcscore) {
        alert(`¡Felicidades! Ganaste el juego ${myscore} a ${pcscore}.`);
    } else if (pcscore > myscore) {
        alert(`La Máquina te ganó ${pcscore} a ${myscore}.`);
    } else {
        alert("¡El juego terminó en empate!");
    }
}

jugarRonda();

