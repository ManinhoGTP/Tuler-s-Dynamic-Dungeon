let fichas = []
let id = 0


function criarNovaFicha(){
    let novaFicha = {
        nome: "Bárbatos Baros",
        player: "Player",
        idade: "idade",
        classe: "lutador",
        fotoDePerfil: "../images/defaultPfp.jpg",
        level: "2",
        vidaMax: 20,
        vida: 10,
        sanidadeMax: 20,
        sanidade:10,
        iniciativaMax: 20,
        iniciativa:10,
        sorteMax: 20,
        sorte: 10,
        forca: 5,
        inteligencia: 5,
        resistenciaMental: 5,
        percepcao: 5,
        ritual: 5,
        id: id + 1
    }

    id = id + 1
    fichas.push(novaFicha)
    mostrarFichas()
}

function mostrarFichas(){
    let divFichas = document.getElementById("div-fichas")
    divFichas.innerHTML = ""

    for(let i = 0; i < fichas.length; i++)
    divFichas.innerHTML += `
    <div id="agente-container">
        <img src="${fichas[i].fotoDePerfil}" id="agente-img">
        <div>
            <p id="agente-nome">${fichas[i].nome} </p>
            <p id="agente-classe">${fichas[i].classe}</p>
        </div>
        <button>Abrir ficha</button>
    </div>
    `
}