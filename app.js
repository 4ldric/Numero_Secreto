let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function textoInicio() {
  exibirTexto("h1", "Jogo do numero secreto");
  exibirTexto("p", "Escolha o numero entre 1 e 10");
}

function gerarNumero() {
  return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  let mensagem = tentativas > 1 ? "Tentativas" : "Tentativa";

  if (chute == numeroSecreto) {
    exibirTexto("h1", "Acertou!");
    exibirTexto(
      "p",
      `Voce descobriu o numero secreto, com ${tentativas} ${mensagem}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTexto("p", "O numero secreto e Menor!");
    } else {
      exibirTexto("p", "O numero secreto e Maior!");
    }
  }

  tentativas++;
  limparCampo();
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
function reinciarJogo() {
  numeroSecreto = gerarNumero();
  limparCampo();
  tentativas = 1;
  textoInicio();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

textoInicio();
