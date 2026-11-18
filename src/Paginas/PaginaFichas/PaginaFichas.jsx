import { useState, useEffect  } from "react";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaFichas.css"
import { buscarNoLocalStorage, salvarNoLocalStorage} from "../../servicos/localStorage.servico"
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useNavigate } from "react-router-dom";


function PaginaFichas(){
    const [fichas, setFichas] = useState(() => buscarNoLocalStorage("fichas"));
    const navigate = useNavigate()

    useEffect(() => {
        salvarNoLocalStorage("fichas", fichas)
    }, [fichas]);

    function AdicionarFicha(){
        const novaFicha = {
            id: 2,
            nome: "Gabriel"
        }
        setFichas([...fichas, novaFicha]);
    }

    return (
    <Principal className="PaginaFichas_root" titulo="Suas Fichas" voltarPara="/">
        <BotaoCustomizado tipo="primario" aoClicar={AdicionarFicha}>Adicionar nova ficha</BotaoCustomizado>

        <div className="div_listaDeFichas">
            {fichas.map((ficha, index) => {
                return (
                    <div className="div_fichaContainer" key={index} onClick={() => navigate(`/ficha/${ficha.id}`)}>
                        <h4>{ficha.nome}</h4>
                    </div>
                )
            })}
        </div>
    </Principal>
    )

}

export default PaginaFichas;