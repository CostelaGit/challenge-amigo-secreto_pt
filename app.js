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

function atualizarAmigo() {

    novalistaamigos = [];

    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Cria um elemento <li>
        item.textContent = amigos[i]; // Define o texto do <li>
        novalistaamigos.push(item); // Adiciona à nova lista (opcional)
        lista.appendChild(item); // Adiciona o <li> à lista <ul>
    
    }
    


}