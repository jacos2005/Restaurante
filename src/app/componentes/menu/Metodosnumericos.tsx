export const MenuListar = () => {
  return (
    <>
    <div className="pt-5 d-flex justify-content-center">
    <div className="col-md-6">
      <table className="table table-strip">
        <thead>
          <tr>
            <th  style= {{width: "5%"}} >No</th>
            <th style= {{width: "30%"}}>Nombre plato</th>
            <th style= {{width: "25%"}} >Acompañamiento</th>
            <th style= {{width: "20%"}} className="text-center">Precio</th>
            <th style= {{width: "20%"}}>Region</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Banadeja paisa</td>
            <td>Con aguacate</td>
            <td className="text-center">35.000</td>
            <td>Paisa</td>
          </tr>
          <tr>
          <td>2</td>
            <td>Asados</td>
            <td>Con papitas a la francesa</td>
            <td className="text-center">25.000</td>
            <td>Paisa</td>
          </tr>
          <tr>
          <td>3</td>
            <td>Ajiaco</td>
            <td>Con arroz</td>
            <td className="text-center">15.000</td>
            <td>Andina</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    </>
    
  );
};