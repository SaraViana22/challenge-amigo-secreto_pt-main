let listaDeNomes = [];
let nomeSorteado = "";

function exibirTextoNaTela(texto){
    let lista = document.getElementById("resultado")
    if (lista) {
        lista.innerHTML = ""
        let li = document.createElement("li")
        li.textContent = texto
        lista.appendChild(li)
        } else {
        console.error('elemento não encontrado')
    }
}

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome && !listaDeNomes.includes(nome)) {
        listaDeNomes.push(nome);
        atualizarListaNomes();
        nomeInput.value = "";
    }
}

function atualizarListaNomes() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    listaDeNomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    console.log('botão foi clicado')
    if (listaDeNomes.length > 0) {
        let indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
        nomeSorteado = listaDeNomes[indiceSorteado];
        exibirTextoNaTela(`O amigo secreto é: ${nomeSorteado}`);
    } else {
        exibirTextoNaTela("p", "Adicione pelo menos um nome antes de sortear.");
    }
}

