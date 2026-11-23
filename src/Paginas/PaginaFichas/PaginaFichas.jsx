import "./PaginaFichas.css"
import Principal from "../../componentes/Principal/Principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";

import { useState, useEffect  } from "react";
import { buscarNoLocalStorage, salvarNoLocalStorage} from "../../servicos/localStorage.servico"
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";


function PaginaFichas(){
    const [fichas, setFichas] = useState(() => buscarNoLocalStorage("fichas") || []);
    const navigate = useNavigate()

    useEffect(() => {
        salvarNoLocalStorage("fichas", fichas)
    }, [fichas]);

    function AdicionarFicha(){
        const novaFicha = {
            id: Date.now(),
            nome: "Nome do personagem",
            idade: 18,
            barras: [{nome: "vida", valor: 10, valorMax: 20, cor: "red" }, {nome: "mana", valor: 5, valorMax: 50, cor: "blue" }],
            informacoes: [{nomeDoCampo: "história", conteudo: "Ele nasceu em 2009"}],
            atributos: [{nomeDoAtributo: "Força", Abreviacao: "For", valor: 5}, {nomeDoAtributo: "Agilidade", Abreviacao: "Agi", valor: 6}]
        }
        setFichas([...fichas, novaFicha]);
    }

    function removerFicha(id){
        setFichas((fichasAtuais) => fichasAtuais.filter((ficha) => ficha.id !== id))
    }

    return (
    <Principal className="PaginaFichas_root" titulo="Suas Fichas" voltarPara="/">
        <BotaoCustomizado tipo="primario" aoClicar={AdicionarFicha}>Adicionar nova ficha</BotaoCustomizado>

        <div className="div_listaDeFichas">
            {fichas.map((ficha) => {
                return (
                    <div className="div_fichaContainer" key={ficha.id} >
                        <div>
                            <h4>{ficha.nome}</h4>
                            <h5>{ficha.idade}</h5>
                            <FaTrashAlt style={{color: "red", cursor: "pointer"}} onClick={() => removerFicha(ficha.id)}/>
                        </div>
                        <div>
                            <BotaoCustomizado aoClicar={() => navigate(`/ficha/${ficha.id}`)}>Acessar ficha</BotaoCustomizado>
                        </div>
                    </div>
                )
            })}
        </div>
    </Principal>
    )

}

export default PaginaFichas;