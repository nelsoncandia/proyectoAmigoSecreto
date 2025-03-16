let amigos = []; // Array para almacenar los nombres
let sorteoRealizado = false; // Variable para verificar si se sorteó

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validación: No permitir campos vacíos
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validación: Evitar nombres duplicados
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue ingresado.");
        return;
    }

    // Si ya se sorteó, reiniciar el juego
    if (sorteoRealizado) {
        reiniciarJuego();
    }

    amigos.push(nombre); // Agregar el nombre al array
    actualizarLista(); // Actualizar la lista en el HTML
    input.value = ""; // Limpiar el campo de entrada
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    // Recorrer el array amigos y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre al <li>
        lista.appendChild(li); // Agregar <li> a la lista
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    resultado.innerHTML = `<li>🎉 Amigo secreto: <strong>${amigoSorteado}</strong> 🎉</li>`;

    // Marcar que el sorteo se realizó
    sorteoRealizado = true;
}

function reiniciarJuego() {
    amigos = []; // Vaciar el array
    sorteoRealizado = false; // Resetear el estado del sorteo

    // Limpiar la lista y el resultado en el HTML
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

// Permitir agregar amigos con la tecla "Enter"
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
