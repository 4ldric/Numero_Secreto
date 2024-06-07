let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTela("h1", "Numero Secreto");
  exibirTela("p", "Escolha um numero entre 1 e 10");
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let msgtentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
    exibirTela("h1", "parabens!");
    exibirTela("p", msgtentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTela("p", "o numero secreto e menor");
    } else {
      exibirTela("p", "o numero secreto e maior");
    }
    tentativas++;
    limparCampo();
  }
}

function numeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroAleatorio + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == 3) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return numeroAleatorio;
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = numeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

exibirMensagemInicial();
numeroAleatorio();
