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
            barra1Nome: "",
            barra1: 0,
            barra1Max: 20,
        }
        setFichas([...fichas, novaFicha]);
    }

    return (
    <Principal className="PaginaFichas_root" titulo="Suas Fichas" voltarPara="/">
        <BotaoCustomizado tipo="primario" aoClicar={AdicionarFicha}>Adicionar nova ficha</BotaoCustomizado>

        <div className="div_listaDeFichas">
            {fichas.map((ficha, index) => {
                return (
                    <div className="div_fichaContainer" key={index} >
                        <div>
                            <h4>{ficha.nome}</h4>
                            <h5>{ficha.idade}</h5>
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