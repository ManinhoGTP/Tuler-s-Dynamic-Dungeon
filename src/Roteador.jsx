import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";

import PaginaInicial from "./Paginas/PaginaInicial/PaginaInicial";
import PaginaFichas from "./Paginas/PaginaFichas/PaginaFichas";
import PaginaFicha from "./Paginas/PaginaFicha/PaginaFicha";
import Rodape from "./componentes/Rodape/Rodape";

function Layout() {
  return (
    <>
      <Outlet />

      <div className="container_rodape">
        <Rodape />
      </div>
    </>
  );
}


const roteador = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PaginaInicial />,
      },
      {
        path: "minhasFichas",
        element: <PaginaFichas />,
      },
      {
        path: "ficha/:id?",
        element: <PaginaFicha />,
      },
    ],
  },
]);

function Roteador() {
  return <RouterProvider router={roteador} />
}

export default Roteador;