let fichas = [
    {
        nome: "Tuler",
        idade: 20,
        hpMax: 15,
        sanidadeMax: 100,
        iniciativaMax: 5,
        sorteMax: 3
    },
    {
        nome: "Baros",
        idade: 35,
        hpMax: 20,
        sanidadeMax: 100,
        iniciativaMax: 5,
        sorteMax: 3
    }
]
mostrarFichas()
//Criar nova ficha
function CriarNovaFicha(){

   let hpMax = prompt("Hp do personagem:")
   let sanidadeMax = prompt("Sanidade do personagem:")





    novaFicha = {
        nome: "teste",
        idade: 20,
        hpMax: 20,
        hp: hpMax,
        sanidadeMax: 100,
        sanidade: sanidadeMax,
        iniciativaMax: 5,
        iniciativa: iniciativaMax,
        sorteMax: 3,
        sorte: sorteMax,
        força: 5,
        inteligencia: 7,
        dextreza: 5,
        ResistenciaMental: 15,
        percepcao: 7,
        rituais: 0
    }

    // mostrarSubTela("ficha")
}

function mostrarFichas(){
    let listaDeFichas = document.getElementById("listaDeFichas")
    listaDeFichas.innerHTML = ""

    for(let i = 0; i < fichas.length; i++){
        listaDeFichas.innerHTML += `
        <div class="card-ficha">
            <div class="status">
                <div class="textos">
                    <p>Nome: ${fichas[i].nome}</p>
                    <p>Idade :${fichas[i].idade}</p>
                </div>
                <div class="barras">
                    <p id="ficha-hp">HP: ${fichas[i].hpMax}</p>
                    <p id="ficha-sanidade">Sandidade: ${fichas[i].sanidadeMax}</p>
                    <p id="ficha-iniciativa">Iniciativa: ${fichas[i].iniciativaMax}</p>
                    <p id="ficha-sorte">Sorte: ${fichas[i].sorteMax}</p>
                </div>
            </div>
            <div class="imagens"
                <div class="ficha-imagem">
                    <img src="Imagens/MP-icon.png" id="imagem">
                </div>
            </div>
        </div>
        `
    }

}





//Mudar section
function mostrarTela(sectionId){
    let section = document.querySelectorAll(".tela")
    section.forEach(function (section){
        section.classList.remove("ativa")
        document.getElementById(sectionId).classList.add("ativa")
    })
}
function mostrarSubTela(sectionId){
    let section = document.querySelectorAll(".subtela")
    section.forEach(function (section){
        section.classList.remove("ativa")
        document.getElementById(sectionId).classList.add("ativa")
    })
}
