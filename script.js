document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.flower-container');

    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        const flowerCenter = document.createElement('div');
        flowerCenter.classList.add('flower-center');

        flower.appendChild(flowerCenter);
        container.appendChild(flower);

        // Posición y tamaño aleatorios
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.top = `${Math.random() * 100}vh`;

        const size = Math.random() * 40 + 20;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;

        setTimeout(() => {
            flower.remove();
        }, 5000);
    }

    setInterval(createFlower, 500);
});
