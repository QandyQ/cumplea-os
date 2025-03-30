// Función para crear imágenes que caen
function createFallingImage() {
    const container = document.getElementById('falling-container');
    const img = document.createElement('img');
    img.src = 'img/pato.gif'; 
    img.classList.add('falling-image');
    img.style.left = Math.random() * window.innerWidth + 'px'; 
    img.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    container.appendChild(img);
    img.addEventListener('animationend', () => {
        img.style.animation = 'none';
        img.style.position = 'static';
    });
}

setInterval(createFallingImage, 500); 

window.addEventListener('load', () => {
    const audio = document.getElementById('background-audio');
    audio.play().catch((error) => {
        console.log('El audio no se pudo reproducir automáticamente:', error);
    });
});

document.getElementById('play-audio').addEventListener('click', () => {
    const audio = document.getElementById('background-audio');
    audio.play().catch((error) => {
        console.log('Error al reproducir el audio:', error);
    });
});
