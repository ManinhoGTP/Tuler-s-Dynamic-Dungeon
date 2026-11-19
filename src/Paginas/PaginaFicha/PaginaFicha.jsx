import { useParams } from "react-router-dom";
import Principal from "../../componentes/Principal/Principal";
import { useEffect, useState } from "react";
import { buscarNoLocalStorage, salvarNoLocalStorage} from "../../servicos/localStorage.servico"
import BarraCustomizada from "../../componentes/BarraCustomizada/BarraCustomizada";



function PaginaFicha(){

    const [ficha, setFicha] = useState({
        id: 0,
        nome: "",
        idade: 0,
        barra1Nome: "",
        barra1: 0,
        barra1Max: 20,
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
        <main className="main_fichaDoPersonagem">
            <div>
                <h2>{ficha.nome}</h2>
                <h2>{ficha.idade}</h2>
            </div>
            <BarraCustomizada titulo="teste"/>
        </main>
    </Principal>
}

export default PaginaFicha;