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

        atualizarAmigo()

    }
}

function atualizarAmigo() {

    novalistaamigos = [];

    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i]; 
        novalistaamigos.push(item);
        lista.appendChild(item);
    
    }
    

}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("não há amigos para sortear")
    } else {
        n = Math.floor(Math.random() * amigos.length);
        alert(`o amigo sorteado foi: ${amigos[n]}`);
    }
}