import "./Principal.css"

import { Link } from "react-router-dom";
import "./Principal.css";
import { IoArrowBackCircle } from "react-icons/io5";


function Principal(props){
    return (<main className="Principal_root">
        <div className="Principal_titulo">
            {props.voltarPara && (
                <Link to={props.voltarPara}>
                    <IoArrowBackCircle size={24} />
                </Link>
            )}
            <h1>{props.titulo}</h1>
        </div>

            {props.children}
            
    </main>)
}

export default Principal;