let listaAmigos = [];
console.log(listaAmigos);
let lista = document.getElementById("listaAmigos");

// Captura el formulario y previene el envío automático
document.getElementById("form-amigo").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue
    agregarAmigo();
});

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim(); // Elimina espacios en blanco
    
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución si el nombre está vacío
    } 
    
    listaAmigos.push(nombreAmigo);
    document.getElementById("amigo").value = ""; // Limpia el campo de entrada
    actualizarLista();
    
    console.log(listaAmigos);
}

function actualizarLista() {
    lista.innerHTML = ""; 

    listaAmigos.forEach((amigo) => {
        let listaNombre = document.createElement("li");
        listaNombre.textContent = amigo;
        lista.appendChild(listaNombre);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay ningún nombre disponible.");
        return;
    } 

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let nombreSorteado = listaAmigos[indiceSorteado];
    let nombreMostrado = document.getElementById("resultado");
    nombreMostrado.innerHTML = `<li>${nombreSorteado}</li>`;
}

