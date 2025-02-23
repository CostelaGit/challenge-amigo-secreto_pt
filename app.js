let amigos = []

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