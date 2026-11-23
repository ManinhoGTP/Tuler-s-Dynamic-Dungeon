import "./PaginaFicha.css"
import Principal from "../../componentes/Principal/Principal";
import BarraCustomizada from "../../componentes/BarraCustomizada/BarraCustomizada";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import defaultPfp from "../../assets/defaultPfp.jpg"

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscarNoLocalStorage, salvarNoLocalStorage} from "../../servicos/localStorage.servico"
import { FaTrashAlt } from "react-icons/fa";


function PaginaFicha(){
    // informações da ficha
    const [ficha, setFicha] = useState({
        id: 0,
        nome: "",
        idade: 0,
        barras: [],
        informacoes: [],
        atributos: []
    })
    //ficha colapsada
    const [aberto, setAberto] = useState(true);
    const [abertoAtributo, setAbertoAtributo] = useState(true);

    // Parametros para a página
    const [fichaCarregada, setFichaCarregada] = useState(false);
    const params = useParams();
        useEffect(() => {
            if(params.id) {
                const fichas = buscarNoLocalStorage("fichas") || [];
                const fichaParaEditar = fichas.find((item) => item.id === +params.id,);
                
                if (fichaParaEditar) {
                    setFicha(fichaParaEditar);
                }
            }
        setFichaCarregada(true);
    }, [params.id]);

    //Salvar alterações no localStorage
    useEffect(() => {
    if (!fichaCarregada || !ficha.id) return;

    const fichas = buscarNoLocalStorage("fichas") || [];

    const fichasAtualizadas = fichas.map((item) =>
        item.id === ficha.id ? ficha : item
    );

    salvarNoLocalStorage("fichas", fichasAtualizadas);

}, [ficha, fichaCarregada]);

    // Funções para mudar o valor de partes da ficha
    function alterarValorBarra(index, quantidade) {
    setFicha((fichaAtual) => {
        const fichaAtualizada = {
            ...fichaAtual,
            barras: fichaAtual.barras.map((barra, i) => {
                if (i === index && !modoEditando) {
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
                } else if(i === index && modoEditando) {
                    return {
                        ...barra,
                        valorMax: Math.max(
                            0, barra.valorMax + quantidade
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
    function alterarInformacao(index, novoConteudo) {
    setFicha((fichaAtual) => ({
        ...fichaAtual,
        informacoes: fichaAtual.informacoes.map((campo, i) => {
            if (i === index) {
                return {
                    ...campo,
                    conteudo: novoConteudo
                };
            }

            return campo;
        })
    }));
    }
    function alterarAtributo(index, novoConteudo) {
    setFicha((fichaAtual) => ({
        ...fichaAtual,
        atributos: fichaAtual.atributos.map((atributo, i) => {
            if (i === index) {
                return {
                    ...atributo,
                    valor: novoConteudo
                };
            }

            return atributo;
        })
    }));
    }

    // Modo de editção
    let [modoEditando, setModoEditando] = useState(false)
    function ativarEdicao(){
        if(!modoEditando){
            setModoEditando(true)
        } else{
            setModoEditando(false)
        }
    }

    // cria ou deleta uma barra de status
    function novaBarra() {
        const nome = prompt("Nome da barra:");
        const valorMax = prompt("Valor maximo da barra");
        const cor = prompt("Cor da barra em ingles");

        if (!nome) return;

        setFicha({...ficha, barras: [...ficha.barras,{ nome: nome, valor: 0, valorMax: valorMax, cor: cor}]});
    }
    function removerBarra(index){
        setFicha((fichaAtual) => ({...fichaAtual, barras: fichaAtual.barras.filter((barra, i) => i !== index)}))
    }

    // cria ou deleta uma informacao
    function novaInformacao(){
        const nomeDoCampo = prompt("Nome do campo a ser adicionado:")
        setFicha({...ficha, informacoes: [...ficha.informacoes, {nomeDoCampo: nomeDoCampo, conteudo: ""}]})
    }
    function removerTextarea(index){
        setFicha((fichaAtual) => ({...fichaAtual, informacoes: fichaAtual.informacoes.filter((barra, i) => i !== index)}))
    }

    // Cria ou deleta um atributo
    function novoAtributo() {
        const nomeDoAtributo = prompt("Nome do atributo:");
        const Abreviacao = prompt("Abreviação do nome (exemplo: abreviação de Força é For");
        const valor = prompt("Valor inicial do atributo");

        if (!nomeDoAtributo) return;

        setFicha({...ficha, atributos: [...ficha.atributos,{ nomeDoAtributo: nomeDoAtributo, valor: valor, Abreviacao: Abreviacao}]});
    }
    function removerAtributo(index){
        setFicha((fichaAtual) => ({...fichaAtual, atributos: fichaAtual.atributos.filter((atributo, i) => i !== index)}))
    }

    // Ficha em si
    return <Principal voltarPara="/minhasFichas">
        <main className="main_fichaDoPersonagem">

            {/* foto de perfil e botão de editar */}
            <div className="div_topo">
                <div>
                    <img src={defaultPfp} className="imagemPadrao"/>
                </div>
                <div className="div_titulo">
                    <div className="div_titulo_labelComInfo">
                        <p>Nome: </p>
                        <h2 contentEditable={modoEditando} onBlur={(e) => {const novoNome = e.currentTarget.textContent;
                            setFicha((fichaAtual) => ({...fichaAtual, nome: novoNome}));
                        }}>{ficha.nome}</h2>
                    </div>
                    <div className="div_titulo_labelComInfo">
                        <p>Idade:</p>
                        <h2 contentEditable={modoEditando} onBlur={(e) => {const novaIdade = e.currentTarget.textContent;
                            setFicha((fichaAtual) => ({...fichaAtual, idade: novaIdade}));
                        }}>{ficha.idade}</h2>
                    </div>
                </div>
                <div>
                    <BotaoCustomizado tipo="secundario" className="btn_editar" aoClicar={() => ativarEdicao()}>{modoEditando ? "Concluir edição" : "Editar"}</BotaoCustomizado>
                </div>
            </div>
            
            {/* Barras de status */}
            <div className="div_barras">
                {ficha.barras.map((barra, index) => {
                    return (
                        <div>
                            <label>{barra.nome}</label>
                            <BarraCustomizada key={index} valor={barra.valor} valorMax={barra.valorMax} cor={barra.cor}
                            alterarValor={(quantidade) => alterarValorBarra(index, quantidade)} />
                            {modoEditando ? (<FaTrashAlt onClick={() => removerBarra(index)} style={{color: "red"}}/>) : (null)}
                        </div>
                    )
                })}

                {modoEditando ? (<BotaoCustomizado aoClicar={() => novaBarra()} tipo="secundario">Nova barra de status</BotaoCustomizado>) : (null)}

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
                                            e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
                                        }}
                                        value={campo.conteudo} onChange={(e) => alterarInformacao(index, e.target.value)}
                                    />
                                    {modoEditando ? (<FaTrashAlt onClick={() => removerTextarea(index)} style={{color: "red"}}/>) : (null)}
                                </div>
                            );

                        })}
                        {modoEditando ? (<BotaoCustomizado aoClicar={() => novaInformacao()} tipo="secundario">Adicionar nova informação</BotaoCustomizado>) : (null)}
                    </div>
                </div>
            </div>

            {/* Atributos */}
            <div>
                <div className="div_informacoes_label">
                    <h2>Atributos</h2>
                    <button className={abertoAtributo ? "aberto" : "fechado"} onClick={() => setAbertoAtributo(!abertoAtributo)}>{"<"}</button>
                </div>
                <div className={`div_informacoes ${abertoAtributo ? "aberto" : "fechado"}`}>
                    <div className="div_atributos_campos">
                        {ficha.atributos.map((atributo, index) => {
                            return (
                                <div>
                                <div key={index} className="div_atributo">
                                    <div className="div_atributoLabel">
                                        <label>{atributo.nomeDoAtributo}</label>
                                        <p>{atributo.Abreviacao}</p>
                                    </div>
                                    <div className="div_atributoValor">
                                        <h4 value={atributo.valor} contentEditable={modoEditando} onBlur={(e) => alterarAtributo(index, e.currentTarget.textContent)}>{atributo.valor}</h4>
                                    </div>
                                    {modoEditando ? (<FaTrashAlt onClick={() => removerAtributo(index)} style={{color: "red"}}/>) : (null)}
                                </div>
                                </div>
                            )
                        })}
                        {modoEditando ? (<BotaoCustomizado aoClicar={() => novoAtributo()} tipo="secundario">Adicionar um novo atributo</BotaoCustomizado>) : (null)}
                    </div>
                </div>
            </div>


        </main>
        {modoEditando ? (<div className="modoEdicao">Voçê está no modo edição</div>) : (null)}
    </Principal>
}

export default PaginaFicha;