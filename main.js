onload = () =>{
    document.body.classList.remove("container");
};

let clickCount = 0; // Contador de clics
const maxClicks = 5; // Límite de clics
const clickableText = document.getElementById('clickable-text');

// Función para mostrar el texto en una posición aleatoria
function showClickableText() {
    if (clickCount >= maxClicks) return; // No mostrar más si se alcanzó el límite

    // Generar posición aleatoria
    const x = Math.random() * (window.innerWidth - 200); // Evitar que salga de la pantalla
    const y = Math.random() * (window.innerHeight - 50); // Evitar que salga de la pantalla

    // Posicionar el texto
    clickableText.style.left = `${x}px`;
    clickableText.style.top = `${y}px`;
    clickableText.style.display = 'block'; // Mostrar el texto
}

// Evento para manejar el clic en el texto
clickableText.addEventListener('click', () => {
    clickCount++; // Incrementar el contador
    clickableText.style.display = 'none'; // Ocultar el texto

    if (clickCount < maxClicks) {
        // Mostrar el texto nuevamente después de un tiempo aleatorio
        setTimeout(showClickableText, Math.random() * 3000 + 1000); // Entre 1 y 4 segundos
    } else {
        // Mostrar mensaje cuando se alcance el límite
        alert(`¡Te has ganado ${clickCount} huevos kinder!`);
    }
});

// Mostrar el texto por primera vez después de cargar la página
setTimeout(showClickableText, 2000); 
