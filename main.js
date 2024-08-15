const caixaPrincial = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "texto01",
        alternativas: [
            {
                texto:"alternativa01",
                afirmacao:"afirmacao01"
            },
            {
                texto:"alternativa02",
                afirmacao:"afirmacao02"
            },
            
        ]
    },
    {
        enunciado: "texto02",
        alternativas: [
            {
                texto:"alternativa03",
                afirmacao:"afirmacao03"
            },
            {
                texto:"alternativa04",
                afirmacao:"afirmacao04"
            },
            
        ]
    },
    {
        enunciado: "texto03",
        alternativas: [
            {
                texto:"alternativa05",
                afirmacao:"afirmacao05"
            },
            {
                texto:"alternativa06",
                afirmacao:"afirmacao06"
            },
        ]
    },
    {
        enunciado: "texto04",
        alternativas: [
            {
                texto:"alternativa07",
                afirmacao:"afirmacao07"
            },
            {
                texto:"alternativa08",
                afirmacao:"afirmacao08"
            },
        ]
    },
    {
        enunciado: "texto05",
        alternativas: [
            {
                texto:"alternativa09",
                afirmacao:"afirmacao09"
            },
            {
                texto:"alternativa10",
                afirmacao:"afirmacao10"
            },
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal ='';

function mostraPergunta(){
    if(atual>= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click',() => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;            
    mostraPergunta()
}

function mostraResultado(){
    caixaPerguntas.textContent = "Inicio do Texto..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
