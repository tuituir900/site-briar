const elemSlides = document.querySelector(".slides");
const elemBotaoEsquerdo = document.querySelector(".esquerda");
const elemBotaoDireito = document.querySelector(".direita");
const elemsImagem = document.querySelectorAll(".slides img");

if (elemSlides && elemBotaoEsquerdo && elemBotaoDireito && elemsImagem.length > 0) {

    const tamanhoLista = elemsImagem.length - 1;

    let index = 0;

    elemBotaoEsquerdo.addEventListener("click", () => {
        index--;

        if(index < 0) index = tamanhoLista;

        atualizarCarrossel();
    });

    elemBotaoDireito.addEventListener("click", () => {
        incrementarIndex();
        atualizarCarrossel();
    });

    const incrementarIndex = () => {
        index++;

        if(index > tamanhoLista) index = 0;
    };

    const atualizarCarrossel = () => {
        elemSlides.style.transform = `translateX(-${index * 100}%)`;
    };

    setInterval(() => {
        incrementarIndex();
        atualizarCarrossel();
    }, 3000);
}




const themeSwitch = document.getElementById('theme-switch');

let whiteMode = localStorage.getItem('whitemode') === 'active';

const atualizarTema = () => {
    document.body.classList.toggle('whiteMode', whiteMode);
};


atualizarTema();

themeSwitch.addEventListener('click', () => {
    whiteMode = !whiteMode;

    atualizarTema();

    localStorage.setItem('whitemode', whiteMode ? 'active' : 'inactive');
});




let tamanhoFonte = 1;

const aumentarFonte = document.getElementById('aumentar-fonte');
const diminuirFonte = document.getElementById('diminuir-fonte');

function atualizarFonte() {
    document.querySelectorAll('body *').forEach(elemento => {
        if (!elemento.dataset.tamanhoOriginal) {
            elemento.dataset.tamanhoOriginal = getComputedStyle(elemento).fontSize;
        }

        const tamanhoOriginal = parseFloat(elemento.dataset.tamanhoOriginal);
        elemento.style.fontSize = (tamanhoOriginal * tamanhoFonte) + 'px';
    });
}

if (aumentarFonte) {
    aumentarFonte.addEventListener('click', () => {
        if (tamanhoFonte < 1.5) {
            tamanhoFonte += 0.1;
            atualizarFonte();
        }
    });
}

if (diminuirFonte) {
    diminuirFonte.addEventListener('click', () => {
        if (tamanhoFonte > 0.8) {
            tamanhoFonte -= 0.1;
            atualizarFonte();
        }
    });
}