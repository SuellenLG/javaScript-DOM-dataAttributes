const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}



controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca)
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }

}

function atualizaEstatisticas(peca) {
    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]

    })
}


const botao = document.querySelectorAll("[data-cor]")
const robo = document.querySelector('#robotron');


botao.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        const cor = evento.target.dataset.cor
        robo.src = "img/Robotron 2000 - " + cor + ".png"
    })
})





/*
const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", () =>{
    console.log("oi")
})

function dizOi(nome) {
    console.log(nome)
    console.log('Bem vindo ao Robrotron 2000')
}

dizOi('Pedro')

*/

/*
function atualizaEstatisticas(peca) {
    console.log(pecas[peca]);
    estatistica.forEach((elemento) => {
        console.log(elemento.dataset.estatistica)
        console.log(elemento.textContent)

    })


*/

