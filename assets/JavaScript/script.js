const roulette = document.querySelector('.roulette');
let spinning = false;

function spinWheel() {
    if (spinning) return;

    const degrees = Math.floor(Math.random() * 360) + 3600;
    spinning = true;

    roulette.style.transform = `rotate(${degrees}deg)`;

    setTimeout(() => {
        spinning = false;
        const actualRotation = degrees % 360;
        alert(`Você ganhou ${getPrize(actualRotation)}!`);
    }, 5000);
}

function getPrize(degrees) {
    // Defina aqui as seções e prêmios da roleta com base nos graus de rotação.
    if (degrees >= 0 && degrees < 60) {
        return 'Prêmio 1';
    } else if (degrees >= 60 && degrees < 120) {
        return 'Prêmio 2';
    } else if (degrees >= 120 && degrees < 180) {
        return 'Prêmio 3';
    } else if (degrees >= 180 && degrees < 240) {
        return 'Prêmio 4';
    } else if (degrees >= 240 && degrees < 300) {
        return 'Prêmio 5';
    } else {
        return 'Prêmio 6';
    }
}

const options = document.querySelectorAll('.option');
const selectedOption = document.getElementById('selected-option');

options.forEach((option) => {
    option.addEventListener('click', () => {
        // Remova a classe 'selected' de todas as opções
        options.forEach((o) => o.classList.remove('selected'));

        // Adicione a classe 'selected' à opção clicada
        option.classList.add('selected');

        // Atualize o valor da opção selecionada na interface
        selectedOption.textContent = option.textContent;
    });
});
