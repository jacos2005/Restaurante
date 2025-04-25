import { Route, Routes } from "react-router-dom"

import { MenuAdmin } from "../../componentes/menu/Integracion"
import { Inicio } from "../../componentes/contenedor/Inicio"
import { MenuCrear } from "../../componentes/menu/Ecuacionesdiferenciales"
import { MenuListar } from "../../componentes/menu/Metodosnumericos"
import { MenuActualizar } from "../../componentes/menu/Interpolacion"
import { NoEncontrado } from "../../componentes/contenedor/Derivacion"

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/mencre" element={<MenuCrear />} />
      <Route path="/menlis" element={<MenuListar />} />
      <Route path="/menadmin" element={<MenuAdmin />} />
      <Route path="/menactu/:codigo" element={<MenuActualizar />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  )
}
