let numeroSecreto = numeroAleatorio();

function exibirTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function verificarChute() {
  alert("o botao foi clicado");
}

function numeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

exibirTela("h1", "Numero Secreto");
exibirTela("p", "Escolha um numero entre 1 e 10");
numeroAleatorio();
