// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  
  // Filtrar y ordenar el array
  const filteredAndSorted = array
    .filter(element => typeof element === 'string') // Filtra solo los strings
    .sort(); // Ordena alfabéticamente
  
  // Mostrar los elementos filtrados y ordenados
  filteredAndSorted.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

// Ejecutar showList cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  showList(strangeArray);
});
