let amigos = []

/*
função adicionar amigos | vai verificar se 
no conteudo dado foi um numero ou colocado nada
e pedir para o usuario adicionar
*/

function adicionarAmigo() {
    a = document.getElementById("amigo").value
    
    
    if (a.value === "" | !isNaN(a)) {
        alert("digite somente nomes")
    } else {
        amigos.push(a)
        let b = document.getElementById("listaAmigos");
        b.innerHTML = amigos
    }
}

