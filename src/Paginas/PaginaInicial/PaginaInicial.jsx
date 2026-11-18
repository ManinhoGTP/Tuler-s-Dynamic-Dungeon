import { useNavigate } from "react-router-dom";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaInicial.css"


function PaginaInicial(){

    

    return <Principal>
        <div className="titulo_PaginaInicial">
            <h2>Bem vindo ao <br/> Tuler's Dynamic Dungeon</h2>
            <p>Fique avontade para dar uma olhada nas paginas de criação e visualização de ficha com os botões abaixo </p>
        </div>
    </Principal>
}

export default PaginaInicial;