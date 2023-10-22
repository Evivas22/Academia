"use client"

import { useEffect, useState } from "react";
import Table from "../organism/Table";
import TextH1 from "../atoms/TextH1";



function Body1({ selectedOption }) {
  const [data, setData] = useState({});
  
  const fetchData = async (param) => {
    try {
      const response = await fetch(`http://localhost:3000/api/${param}`); 
      const result = await response.json();
      setData(result);
      console.log(result)
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    console.log(selectedOption)
    fetchData(selectedOption);
  }, [selectedOption]);

  
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
      <div className="flex flex-col justify-center items-center bg-color- h-full w-full col-start-3 col-end-13 rounded-r-3xl rounded-l-3xl shadow shadow-color-trasparente">
      
      <TextH1 content={selectedOption}/>
      <Table data={data} excludedKeys={["_id", "__v"]}/>
      </div>
      
      </div>
    )
  }
  export default Body1