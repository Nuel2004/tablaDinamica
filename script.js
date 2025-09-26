//Crear tabla
const tableElement = document.createElement("table");

//Arrays de cabeceras y nombres
let cabeceras = ["Nombre", "Edad"];
let nombres = ["Ana", "Luis", "María", "Carlos", "Lucía", "Javier", "Elena"];


const maxColumns = 2;


// Crea las fila de cabecera de la tabla
const trElement = document.createElement("tr");

for (let i = 0; i < maxColumns; i++) {
    //Crea cada cabecera
    const thElement = document.createElement("th");
    thElement.innerText = cabeceras[i];
    //la añade al th
    trElement.appendChild(thElement);
}

tableElement.appendChild(trElement);   // Añade la fila de cabeceras a la tabla
document.body.appendChild(tableElement); // Añade la tabla al body

const buttonElement = document.createElement("button");
buttonElement.innerText = "Crear fila";

function newRow() {
    const trElement = document.createElement("tr");
    //Generar el nombre (usamos un random para acceder a la pos de array)
    let randomId = Math.floor(Math.random() * nombres.length);
    let randomName = nombres[randomId];

    //Crear td nombre
    let tdElement = document.createElement("td");
    tdElement.innerText = randomName;
    trElement.appendChild(tdElement);

    //Generar la edad
    let randomAge = Math.floor(Math.random() * 100);

    //Crear td edad
    tdElement = document.createElement("td");
    tdElement.innerText = randomAge;
    trElement.appendChild(tdElement);

    //Añadir fila a la tabla
    tableElement.appendChild(trElement);
}

//newRow debe ir sin () para que asi se repita cada vez que se hace click,
//si escribimos newRow() solo se ejecuta una vez
buttonElement.addEventListener("click", newRow);
document.body.appendChild(buttonElement);