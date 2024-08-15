const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "texto01",
        alternativas: [
            {
                texto: "alternativa01",
                afirmacao:"afirmacao01"
            }
        ]
    },
    {
        enunciado: "texto02",
        alternativas: [
            'alternativa01',
            'alternativa02'
        ]
    },
    {
        enunciado: "texto03",
        alternativas: [
            'alternativa01',
            'alternativa02'
        ]
    },
    {
        enunciado: "texto04",
        alternativas: [
            'alternativa01',
            'alternativa02'
        ]
    },
    {
        enunciado: "texto05",
        alternativas: [
            'alternativa01',
            'alternativa02'
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
    mostraAlternativas();
}

function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement('button')
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();


