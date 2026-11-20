import { useState } from "react";
import { buscarNoLocalStorage } from "../../servicos/localStorage.servico";
import "./BarraCustomizada.css"

function BarraCustomizada(props){
     
    return (
            <div className="div_barra" style={{ backgroundColor: props.cor }}>
                <button onClick={() => props.alterarValor(-5)}>{"<<"}</button>
                <button onClick={() => props.alterarValor(-1)}>{"<"}</button>

                <input type="text" value={`${props.valor} / ${props.valorMax}`} readOnly/>

                <button onClick={() => props.alterarValor(1)}>{">"}</button>
                <button onClick={() => props.alterarValor(5)}>{">>"}</button>
            </div>
    )
}

export default BarraCustomizada;