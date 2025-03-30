// Función para crear estrellas que caen
function createFallingStar() {
    const container = document.getElementById('falling-container-2');
    const img = document.createElement('img');
    img.src = 'img/stitch.gif'; // Ruta a la imagen de la estrella
    img.classList.add('falling-star');
    img.style.left = Math.random() * window.innerWidth + 'px'; 
    img.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    container.appendChild(img);

    setTimeout(() => {
        const gif = document.createElement('img');
        gif.src = 'img/confeti.gif'; 
        gif.classList.add('confetti-gif'); 
        gif.style.position = 'absolute';
        gif.style.left = img.style.left; 
        gif.style.top = img.getBoundingClientRect().top + 'px'; 
        container.appendChild(gif);

        const audio = new Audio('audio/artifial.mp3'); 
        audio.play();

        setTimeout(() => {
            gif.remove();
        }, Math.random() * 3000 + 3000); 
    }, Math.random() * 3000); 

    img.addEventListener('animationend', () => {
        img.remove();
    });
}


setInterval(createFallingStar, 1000);  

