        /* Área de fichas */

let fichas = [
]
let id = 0

mostrarFichas()

//Criar nova ficha
function CriarNovaFicha(){

    let hpMax = prompt("Hp")
    let sanidadeMax = prompt("Sanidade:")
    let iniciativaMax = prompt("Iniciativa:")
    let sorteMax = prompt("Sorte:")

    novaFicha = {
        nome: "teste",
        idade: 20,
        especialidade: "TDAH",
        etnia: "macaco",
        hpMax: hpMax,
        hp: hpMax,
        sanidadeMax: sanidadeMax,
        sanidade: sanidadeMax,
        iniciativaMax: iniciativaMax,
        iniciativa: iniciativaMax,
        sorteMax: sorteMax,
        sorte: sorteMax,
        força: 5,
        inteligencia: 7,
        dextreza: 5,
        ResistenciaMental: 15,
        percepcao: 7,
        rituais: 0,
        id: id
    }
    id++
    fichas.push(novaFicha)
    console.log(fichas)
    mostrarFichas()
}


//mostrar fichas
function mostrarFichas(){

        const container = document.getElementById("div-fichas");
        container.innerHTML = ""


        fichas.forEach(ficha => {
            const card = document.createElement("div");
            card.className = "ficha";


            card.innerHTML = `
                <div class="ficha-status" onclick="mostrarTela('section-ficha${ficha.id}')">
                    <div class="ficha-texto">
                        <p>Nome: ${ficha.nome}</p>
                        <p>Idade: ${ficha.idade}</p>
                    </div>
                    <div class="ficha-barra">
                        ${criarBarra("HP", ficha.hp, ficha.hpMax, "red")}
                        ${criarBarra("Sanidade", ficha.sanidade, ficha.sanidadeMax, "purple")}
                        ${criarBarra("Iniciativa", ficha.iniciativa, ficha.iniciativaMax, "gold")}
                        ${criarBarra("Sorte", ficha.sorte, ficha.sorteMax, "green")}
                    </div>
                </div>
            `;

            container.appendChild(card);


        }); 
        
        //section
        const containerFicha = document.getElementById("fichaAtual");
        containerFicha.innerHTML = ""


        fichas.forEach(ficha => {
            const teste = document.createElement("section");
            teste.className = "tela";
            teste.id = `section-ficha${ficha.id}`


            teste.innerHTML = `
            <div class="fichaGrande">
                <div class="fichaGrande-status">
                    <div class="fichaGrande-texto">
                        <h1>Nome: ${ficha.nome}</h1>
                        <h1>Idade: ${ficha.idade}</h1>
                        <h1>Espacialidade: ${ficha.especialidade}</h1>
                        <h1>Etnia: ${ficha.etnia}</h1>
                    </div>
                    <div class="fichaGrande-barra">
                        ${criarBarra("HP", ficha.hp, ficha.hpMax, "red")}
                        ${criarBarra("Sanidade", ficha.sanidade, ficha.sanidadeMax, "purple")}
                        ${criarBarra("Iniciativa", ficha.iniciativa, ficha.iniciativaMax, "gold")}
                        ${criarBarra("Sorte", ficha.sorte, ficha.sorteMax, "lightgreen")}
                    </div>
                </div>
                <div class="fichaGrande-img">
                    <img src="Imagens/D&D-logo.webp" id="fichaGrande-foto">
                    <img src="Imagens/atributos-icon.png" id="fichaGrande-atributos">
                </div>
            </div>
            `;

            containerFicha.appendChild(teste);
        });

}
function criarBarra(nome, atual, max, cor) {
    const porcentagem = (atual / max) * 100;

    return `
        <div class="barra">
            
            <div class="progresso"
                style="
                    --fill:${porcentagem}%;
                    --color:${cor};
                "><span class="ficha-barra-texto">${nome}: ${atual}/${max}</span>
            </div>
        </div>
    `;
}

//Mudar section
function mostrarTela(sectionId){
    let section = document.querySelectorAll(".tela")
    section.forEach(function (section){
        section.classList.remove("ativa")
        document.getElementById(sectionId).classList.add("ativa")
    })
}