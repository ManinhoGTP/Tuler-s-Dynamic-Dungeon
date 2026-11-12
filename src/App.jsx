import "./App.css";

import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape/Rodape';
import Roteador from './Roteador';


function App() {
  return <>
    <Roteador/>
    <Rodape />
  </>;
}

export default App;
