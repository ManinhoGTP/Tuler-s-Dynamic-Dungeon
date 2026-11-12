import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PaginaInicial from "./Paginas/PaginaInicial/PaginaInicial";
import PaginaFichas from "./Paginas/PaginaFichas/PaginaFichas";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaFichas />,
  },
  {
    path: "inicial",
    element: <PaginaInicial />,
  },
  
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;