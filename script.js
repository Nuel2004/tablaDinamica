const tableElement = document.createElement("table");
const trElement = document.createElement("tr");
const nombres = [
    "Ana", "Luis", "María", "Jorge", "Elena",
    "Carlos", "Sofía", "Diego", "Lucía", "Pablo",
    "Valeria", "Andrés", "Camila", "Mateo", "Isabella",
    "Fernando", "Gabriela", "Héctor", "Paula", "Ricardo"
];
const maxColumnas = 2
for (let th = 0; th < maxColumnas; th++) {
    const thElement = document.createElement("th");
    trElement.appendChild(thElement);
}

tableElement.appendChild(trElement);
document.body.appendChild(tableElement);

const buttonElement = document.createElement("button");
buttonElement.innerText = "Crear Fila"
function newRow() {
    const trElement = document.createElement("tr");
    for(let td = 0; td <maxColumnas ; td++){
        let randomId = 0;
    }
}
buttonElement.addEventListener("click", newRow);
document.body.appendChild(buttonElement);