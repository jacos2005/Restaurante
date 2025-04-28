import { Route, Routes } from "react-router-dom"

import { Integracion } from "../../componentes/menu/Integracion"
import { Inicio } from "../../componentes/contenedor/Inicio"
import { Ecuacionesdiferenciales } from "../../componentes/menu/Ecuacionesdiferenciales"
import { Metodosnumericos } from "../../componentes/menu/Metodosnumericos"
import { Interpolacion } from "../../componentes/menu/Interpolacion"
import { Derivacion } from "../../componentes/contenedor/Derivacion"
import { rutasAplicacion } from "../../../constants/rutas"
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado"

export const Ruteo = () => {
  return (
    <Routes>
      <Route path={rutasAplicacion.inicio} element={<Inicio />} />
      <Route path={rutasAplicacion.ecuacionesDiferenciales} element={<Ecuacionesdiferenciales />} />
      <Route path={rutasAplicacion.metodosNumericos} element={<Metodosnumericos />} />
      <Route path={rutasAplicacion.integracion} element={<Integracion />} />
      <Route path={rutasAplicacion.interpolacion} element={<Interpolacion />} />
      <Route path={rutasAplicacion.derivacion} element={<Derivacion />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  )
}
