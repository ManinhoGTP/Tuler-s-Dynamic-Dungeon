import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import "./Rodape.css"

import { FaHome } from "react-icons/fa";

function Rodape(){
    return <footer className="Rodape_root">
        <div className="iconeComTexto">
            <FaHome className="casa"/>
            <h5>HOME</h5>
        </div>
    </footer>
}

export default Rodape;