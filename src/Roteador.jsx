import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PaginaInicial from "./Paginas/PaginaInicial/PaginaInicial";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;