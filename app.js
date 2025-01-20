function exibirTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

exibirTexto("h1", "Jogo do numero secreto")
exibirTexto("p", "Escolha o numero entre 1 e 10")

function verificarChute(){
    
}
