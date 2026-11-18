import { Link } from "react-router-dom";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import "./Rodape.css"

import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

function Rodape(){


    return <footer className="Rodape_root">
        <div>
            <Link to="/" className="iconeComTexto">
                <FaHome />
                <h5>HOME</h5>
            </Link>
        </div>

        <div>
            <Link to="/minhasFichas" className="iconeComTexto">
                <FaClipboardList />
                <h5 >Fichas</h5>
            </Link>
        </div>
    </footer>
}

export default Rodape;