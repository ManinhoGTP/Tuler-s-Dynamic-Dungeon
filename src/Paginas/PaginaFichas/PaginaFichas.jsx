import { useState, useEffect  } from "react";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaFichas.css"
import { buscarNoLocalStorage, salvarNoLocalStorage} from "../../servicos/localStorage.servico"
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useNavigate } from "react-router-dom";


function PaginaFichas(){
    const [fichas, setFichas] = useState(buscarNoLocalStorage())

    useEffect(() => {
        salvarNoLocalStorage("fichas", fichas)
    })

    function AdicionarFicha(){
        const novaFicha = {
            id: Date.now(),
            nome: "Nome teste"
        }

        setFichas([...fichas, novaFicha]);
    }

    return (
    <Principal className="PaginaFichas_root" titulo="Suas Fichas" voltarPara="/">
        <BotaoCustomizado tipo="primario" aoClicar={() => novaFicha}>Adicionar nova ficha</BotaoCustomizado>
    </Principal>
    )

}

export default PaginaFichas;