"use client"

import { useEffect, useState } from "react";
import Table from "../organism/Table";

function Body1({ selectedOption }) {
  const [data, setData] = useState('');

  // useEffect(() => {
  //   // Realiza una solicitud fetch en función de selectedOption (nombre de la ruta)
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:3000/api/${selectedOption}`); // Reemplaza URL_BASE con tu URL de la API
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   console.log({data})
  //   fetchData();
  // }, [selectedOption]);

 
    return (
      <div className="
      items-center
      bg-color-backgroudBody
      h-full
      w-full
      col-start-3
      col-end-13
      rounded-r-3xl
      rounded-l-3xl
      shadow
      shadow-color-trasparente
      "
      > 
         <div className="items-center bg-color- h-full w-full col-start-3 col-end-13 rounded-r-3xl rounded-l-3xl shadow shadow-color-trasparente">
      <h1>{selectedOption}</h1>
      <Table />
      </div>
      
      </div>
    )
  }
  export default Body1