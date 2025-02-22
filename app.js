let amigos = []


function adicionarAmigo() {

    //pega o que foi escrito pelo usuario
var a = document.getElementById("amigo").value


    //#2 fazer uma validação para 
if (a != null) {
amigos.push(a)

}

else {

}
    //coloca com virgula tudo...
let b = document.getElementById("listaAmigos");
b.innerHTML = amigos

}

