const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Qual o melhor mapa na opinião do Matheus?",
      alternativas: [
  {
 texto: "Breeze",
afirmaçao: "afirmaçao"
}
{
  texto: "Sunset",
afirmaçao: "afirmaçao"
}
            ]
},
{
    enunciado:"Qual o agente mais divertido de jogar?",
      alternativas: [
        {
        texto: "Reyna",
          afirmaçao: "afirmaçao"
        }
        {
        texto: "Jett",
          afirmaçao: "afirmaçao"
            ]
},
{
    enunciado:"Qual foi o peak do Matheus?",
      alternativas: [
  {
        texto: "Imortal 2",
    afirmaçao: "afirmaçao"
  }
  {
        texto: "Ascendente 3",
          afirmaçao: "afirmaçao"
            ]
},
{
    enunciado:"Qual o main do Matheus?",
      alternativas: [
        {
        texto: "Jett",
        afirmaçao: "afirmaçao"
        }
        {
          texto: "Clove",
          afirmaçao: "afirmaçao"
        }
            ]
},

{
    enunciado:"Melhor faca do jogo?",
      alternativas: [
        {
        texto: "karambit rgx",
          afirmaçao: "afirmaçao"
        }
        {
        texto: "butterfly rgx",
          afirmaçao: "afirmaçao"
        }
            ]
},
];


let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    return;
  }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.text;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmação
  historiaFinal += afirmacoes + " ";
  atual++
mostraPergunta();
}

funciton mostraResultado() {
caixaPerguntas.textContent = " ";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
