let amigos = []


// consegui aprender como faz uma função e como pegar algo do usuario e colocar em outro lugar... aee
function adicionarAmigo() {

var a = document.getElementById("amigo").value
amigos.push(a)

let b = document.getElementById("listaAmigos");
b.innerHTML = amigos

}

