let array = [1,2,4,5,7,8,4] ;

function sumaTriplesPares() {
    let sum = 0;
    for (let i= 0 ; i < array.length ; i++){
        if (array[i] % 2 === 0){
            const tripleParNumero = array[i] * 3;
            sum += tripleParNumero;
        }
    }
    console.log(sum);
}

sumaTriplesPares();

function addOne(num){
    return num+1;

}
const arr = [1,2,3,4,5];
const mappedArr = arr.map(addOne);
console.log(mappedArr);
console.log(arr);

const mapeadoArr = arr.map((num) => num +3);
console.log(mapeadoArr);

const filteredArr = arr.filter((num) => num % 2 == 0);
console.log(filteredArr);


const reducedArr = arr.reduce((total, num) => total * num);
console.log(reducedArr);
//En resumen, FILTER PARA FILTRAR, MAP PARA ALTERAR EL ARRAY Y REDUCE PARA FUSIONAR EL ARRAY






const container = document.querySelector("#container");
const primero = document.querySelector(".display");

const content = document.createElement("div");
content.classList.add("content");
content.style.color = "green";
content.textContent = "Este es un saludo de rutina";
container.appendChild(content);

const rojito = document.createElement("p");
rojito.textContent = "Holis, soy rojito"
rojito.setAttribute("style", "color: red");
container.appendChild(rojito);

const azulito = document.createElement("h3");
azulito.textContent = "Soy azulito, buenis";
azulito.setAttribute("style", "color : blue");
primero.appendChild(azulito);

const boton = document.querySelector("#boton");








