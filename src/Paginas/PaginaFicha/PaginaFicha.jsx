import { useParams } from "react-router-dom";
import Principal from "../../componentes/Principal/Principal";
import { useEffect, useState } from "react";
import { buscarNoLocalStorage, salvarNoLocalStorage} from "../../servicos/localStorage.servico"



function PaginaFicha(){

    const [ficha, setFicha] = useState({
        nome: "",
        id: 0,
    })


    const params = useParams();
    useEffect(() => {
        if(params.id) {
            const fichas = buscarNoLocalStorage("fichas");
            const fichaParaEditar = fichas.find((item) => item.id === +params.id,);
            
            if (fichaParaEditar) {
                setFicha(fichaParaEditar);
            }
        }
    }, [params.id]);

    return <Principal voltarPara="/minhasFichas">
        <h1>{ficha.nome}</h1>
        <h1>teste</h1>
    </Principal>
}

export default PaginaFicha;