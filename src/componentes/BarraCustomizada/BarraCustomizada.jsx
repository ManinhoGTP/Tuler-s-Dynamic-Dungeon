import "./BarraCustomizada.css"

function BarraCustomizada(props){

    return (
        <div className="BarraCustomizada_root">
            <label>{props.titulo}</label>
            <input></input>
        </div>
    )
}

export default BarraCustomizada;