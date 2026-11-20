import "./PaginaFicha.css"
import Principal from "../../componentes/Principal/Principal";
import BarraCustomizada from "../../componentes/BarraCustomizada/BarraCustomizada";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import defaultPfp from "../../assets/defaultPfp.jpg"

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscarNoLocalStorage, salvarNoLocalStorage} from "../../servicos/localStorage.servico"


function PaginaFicha(){
    // informações da ficha
    const [ficha, setFicha] = useState({
        id: 0,
        nome: "",
        idade: 0,
        barras: [],
        informacoes: []
    })
    //ficha colapsada
    const [aberto, setAberto] = useState(true);

    // Parametros para a página
    const params = useParams();
        useEffect(() => {
            if(params.id) {
                const fichas = buscarNoLocalStorage("fichas") || [];
                const fichaParaEditar = fichas.find((item) => item.id === +params.id,);
                
                if (fichaParaEditar) {
                    setFicha(fichaParaEditar);
                }
            }
    }, [params.id]);

    // Função para mudar o valor das barras
    function alterarValorBarra(index, quantidade) {
    setFicha((fichaAtual) => {
        const fichaAtualizada = {
            ...fichaAtual,
            barras: fichaAtual.barras.map((barra, i) => {
                if (i === index) {
                    return {
                        ...barra,
                        valor: Math.max(
                            0,
                            Math.min(
                                barra.valor + quantidade,
                                barra.valorMax
                            )
                        )
                    };
                }

                return barra;
            })
        };

        // Busca todas as fichas salvas
        const fichas = buscarNoLocalStorage("fichas") || [];

        // Substitui somente a ficha modificada
        const fichasAtualizadas = fichas.map((item) => {
            if (item.id === fichaAtualizada.id) {
                return fichaAtualizada;
            }

            return item;
        });

        // Salva novamente o array completo
        salvarNoLocalStorage("fichas", fichasAtualizadas);

        return fichaAtualizada;
    });
    }

    // Ficha em si
    return <Principal voltarPara="/minhasFichas">
        <main className="main_fichaDoPersonagem">

            {/* foto de perfil e botão de editar */}
            <div className="div_topo">
                <img src={defaultPfp} className="imagemPadrao"/>
                <BotaoCustomizado tipo="secundario" className="teste">Editar</BotaoCustomizado>
            </div>
            
            {/* Barras de status */}
            <div className="div_barras">
                {ficha.barras.map((barra, index) => {
                    return (
                        <div>
                            <label>{barra.nome}</label>
                            <BarraCustomizada key={index} valor={barra.valor} valorMax={barra.valorMax} cor={barra.cor}
                            alterarValor={(quantidade) => alterarValorBarra(index, quantidade)} />
                        </div>
                    )
                })}
            </div>

            {/* informações */}
            <div>
                <div className="div_informacoes_label">
                    <h2>Informações</h2>
                    <button className={aberto ? "aberto" : "fechado"} onClick={() => setAberto(!aberto)}>{"<"}</button>
                </div>
                <div className={`div_informacoes ${aberto ? "aberto" : "fechado"}`}>
                    <div className="div_informacoes_campos">
                        {ficha.informacoes.map((campo, index) => {
                            return (
                                <div className="div_informacoes_labelXtext" key={index}>
                                    <label>{campo.nomeDoCampo}:</label>

                                    <textarea
                                        rows={1}
                                        onInput={(e) => {
                                            e.currentTarget.style.height = "28px";
                                            e.currentTarget.style.height =
                                                e.currentTarget.scrollHeight + "px";
                                        }}
                                        defaultValue={campo.conteudo}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    </Principal>
}

export default PaginaFicha;