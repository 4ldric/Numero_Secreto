let numeroSecreto = gerarNumero();

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function gerarNumero() {
  return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  console.log(chute == numeroSecreto);
}

exibirTexto("h1", "Jogo do numero secreto");
exibirTexto("p", "Escolha o numero entre 1 e 10");
