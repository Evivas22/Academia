import React from "react";

function Table({ data }) {
  if (!data || data.length === 0) {
    return <p>No hay datos disponibles.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Columna 1</th>
          <th>Columna 2</th>
          {/* Agrega más encabezados de columnas según tus datos */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.valor1}</td> {/* Reemplaza "valor1" con el nombre real de la propiedad */}
            <td>{item.valor2}</td> {/* Reemplaza "valor2" con el nombre real de la propiedad */}
            {/* Agrega más celdas según tus datos */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
