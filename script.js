const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:"Qual o melhor mapa na opinião do Matheus"
      alternativas: [
        "Breeze";
        "Sunset";
            ]
},
{
    enunciado:"Qual melhor agente pro Matheus?"
      alternativas: [
        "Reyna";
        "Jett";
            ]
},
{
    enunciado:"Qual foi o peak do Matheus?"
      alternativas: [
        "Imortal 1";
        "Ascendente 3";
            ]
},
{
    enunciado:"perguntas 4"
      alternativas: [
        "alternativa 1";
        "alternativa 2";
            ]
},
{
    enunciado:"perguntas 5"
      alternativas: [
        "alternativa 1";
        "alternativa 2";
            ]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
