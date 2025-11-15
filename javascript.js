let numero = parseInt(prompt("Escoge un numero entre el 1 y 20"));

for (let i=1; i<=numero; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FIZZBUFF");
    } 
    else if (i % 5 === 0){
        console.log("Buzz");
    } 
    else if (i % 3 === 0){
        console.log("Fizz");
    } else {
        console.log(i)
    }
    
}