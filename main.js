const caixaPrincial = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('texto-resultado');

const perguntas = [
    {
        enunciado: "texto01",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    },
    {
        enunciado: "texto02",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    },
    {
        enunciado: "texto03",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    },
    {
        enunciado: "texto04",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    },
    {
        enunciado: "texto05",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
mostraPergunta();