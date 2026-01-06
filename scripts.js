// Adicionando efeito de hover mais interativo nas imagens
const images = document.querySelectorAll('.gallery-item img');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = "scale(1.1)";
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = "scale(1)";
    });
});

const balloonContainer = document.querySelector('.balloon-container');
const maxBalloons = 12;
let currentBalloons = 0;
let balloonInterval = setInterval(createBalloon, 500);

function createBalloon() {
    // Verifica se já criamos o limite (30 balões). Se sim, para tudo.
    if (currentBalloons >= maxBalloons) {
        clearInterval(balloonInterval);
        return;
    }

    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // --- CORREÇÃO DO "TUDO PRA DIREITA" ---
    // Usamos 'vw' (largura da tela). Sorteia entre 0 e 90% da tela.
    // Isso garante que eles apareçam espalhados da esquerda até a direita.
    balloon.style.left = Math.random() * 90 + 'vw';
    
    // Começa invisível
    balloon.style.opacity = 0;

    balloonContainer.appendChild(balloon);

    // Faz aparecer suavemente (opcional, já que o CSS faz isso, mas mantive sua lógica)
    setTimeout(() => {
        balloon.style.opacity = 1;
    }, Math.random() * 1000);

    // Remove o balão depois de 10 segundos
    setTimeout(() => {
        balloon.remove();
    }, 10000);

    // Conta +1 balão criado
    currentBalloons++;
}

window.onload = () => {
    // Se você quiser que os balões comecem a aparecer após um tempo,
    // você pode usar setTimeout() aqui:
    // setTimeout(startBalloons, 5000); // Começa após 5 segundos
    startBalloons();
};
