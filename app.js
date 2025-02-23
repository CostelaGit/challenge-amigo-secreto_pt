let amigos = []

function adicionarAmigo() {
    a = document.getElementById("amigo").value

    if (a.value === "" | !isNaN(a)) {
        alert("Por favor, insira um nome")

    } else {
        amigos.push(a)
        let b = document.getElementById("listaAmigos");
        b.innerHTML = amigos

        document.getElementById("amigo").value = "";
    }
}
