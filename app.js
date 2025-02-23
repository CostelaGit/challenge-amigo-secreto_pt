/*
        let amigos = []


        function adicionarAmigo() {

            //pega o que foi escrito pelo usuario
        var a = document.getElementById("amigo").value


            //#2 fazer uma validação para 
        if (a != Number || null) {
        amigos.push(a)

            //coloca com virgula tudo...
            let b = document.getElementById("listaAmigos");
            b.innerHTML = amigos

        } else {

            alert('digite algum caractere valido')
            
        }

        }
*/

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

