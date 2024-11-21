import { useState } from "react";
import { Plato } from "../../modelos/Plato";
import { ARREGLO_PLATO } from "../../mocks/Plato-mocks";
import { ARREGLO_PLATOS_REGION } from "../../utilidades/dominios/DomRegion";



export const MenuListar = () => {
  const [arrPlatos] = useState<Plato []>(ARREGLO_PLATO);



  const obtenerNombre = (valor:string)=>{
    for (const obRegion of ARREGLO_PLATOS_REGION){
      if(obRegion.codRegion== valor)
        return obRegion.nombreRegion
    }
  }
  return (
    <>
    <div className="pt-5 d-flex justify-content-center">
    <div className="col-md-6">
      <table className="table table-strip">
        <thead>
          <tr>
            <th  style= {{width: "5%"}} >No</th>
            <th style= {{width: "30%"}}>Nombre plato</th>
            <th style= {{width: "10%"}} className="text-center">Precio</th>
            <th style= {{width: "15%"}}>Region</th>
            <th style= {{width: "15%"}}>imagen</th>
            
            
          </tr>
        </thead>
        <tbody>

          {arrPlatos.map((miPla: Plato)=>(
             <tr key={miPla.codPlato} className="align-middle">
             <td>{miPla.codPlato}</td>
             <td>{miPla.nombrePlato}</td>
             <td>{miPla.precioPlato}</td>
             <td >{obtenerNombre(miPla.regionPlato)}</td>
             <td>
              <img src={miPla.imagenPlatobase64} alt={miPla.nombrePlato} className="imagenListado" />
              <br/>
              {miPla.imagenPlato}


             </td>
             
           </tr>
          ))}
          <tr>
          </tr>
          
          
        </tbody>
      </table>
      </div>
      </div>
    </>
    
  );
};