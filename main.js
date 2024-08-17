const caixaPrincial = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Ao chegar à mansão, você se depara com duas portas: uma à esquerda e outra à direita. Qual delas você escolhe?",
        alternativas: [
            {
                texto:"A porta à esquerda, que está um pouco enferrujada e tem um brilho esverdeado.",
                afirmacao:"Você abre a porta enferrujada e entra em um corredor escuro e úmido, levando a uma sala grande com móveis cobertos de poeira e um grande espelho na parede."
            },
            {
                texto:"A porta à direita, que está bem conservada e tem símbolos antigos gravados nela.",
                afirmacao:"Você abre a porta com símbolos antigos e entra em uma biblioteca antiga, cheia de livros empoeirados. Há uma mesa com um livro aberto e uma vela acesa."
            },
            
        ]
    },
    {
        enunciado: "O que você faz?",
        alternativas: [
            {
                texto:"Examina o livro aberto e nota que contém anotações sobre um ritual antigo.",
                afirmacao:"Você toca o espelho, e ele se move, revelando uma passagem secreta. A passagem leva a uma sala escondida com um cofre antigo."
            },
            {
                texto:"Procura outros livros na biblioteca que possam conter informações adicionais.",
                afirmacao:"O livro contém detalhes sobre um ritual antigo e um mapa da mansão com anotações criptografadas."
            },
            
        ]
    },
    {
        enunciado: "O que você faz com o cofre?",
        alternativas: [
            {
                texto:"Tenta abrir o cofre imediatamente.",
                afirmacao:"O cofre está trancado por um mecanismo complexo. Após várias tentativas, você descobre que o cofre está vazio, mas encontra um mapa antigo no fundo."
            },
            {
                texto:"Procura pistas na sala que possam ajudar a abrir o cofre.",
                afirmacao:"Você descifra o mapa e encontra uma localização secreta na mansão. Descobre um altar antigo com objetos místicos."
            },
        ]
    },
    {
        enunciado: "O que você faz com o mapa?",
        alternativas: [
            {
                texto:"Segue o mapa para explorar o novo local indicado.",
                afirmacao:"Você encontra uma carta antiga com um código para o cofre e consegue abri-lo. Dentro, há um diário que detalha a história da mansão."
            },
            {
                texto:"Decide levar o mapa de volta para estudar com mais calma em um lugar seguro.",
                afirmacao:"Você encontra um livro raro com informações detalhadas sobre a mansão e seus antigos proprietários."
            },
        ]
    },
    {
        enunciado: "O que você faz com o diário?",
        alternativas: [
            {
                texto:"Lê o diário para entender a história da mansão e suas sombras.",
                afirmacao:"Fim."
            },
            {
                texto:"Leva o diário de volta para consultar especialistas e obter uma análise detalhada.",
                afirmacao:"Fim."
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
    caixaPerguntas.textContent = "O Mapa e o Novo Mistério"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
