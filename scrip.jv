document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.flower-container');

    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        // Posición inicial aleatoria
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.top = `${Math.random() * 100}vh`;

        // Tamaño aleatorio para variar la apariencia
        const size = Math.random() * 20 + 10;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;

        container.appendChild(flower);

        // Remover la flor después de un tiempo para evitar sobrecargar el DOM
        setTimeout(() => {
            flower.remove();
        }, 5000); // Remueve la flor después de 5 segundos
    }

    // Crea una flor cada 500 milisegundos
    setInterval(createFlower, 500);
});
