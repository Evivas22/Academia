"use client"

import { useEffect, useState } from "react";
import Table from "../organism/Table";
import TextH1 from "../atoms/TextH1";
import ButtonPrimary from "../molecules/ButtonPrimary";



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
      <div className="grid grid-rows-6 gap-4 h-full ">
        <div className="
        bg-color-backgroudBody
        rounded-3xl
        shadow
        shadow-color-trasparente
        flex
        items-center
        w-full
        justify-between
        px-4
        "
        >
        <div className="border">
        <TextH1 content={selectedOption}/>
        </div>
        <div className="border">
        <ButtonPrimary customStyle={"w-[250px]"}/>
        </div>
        
        </div>
        <div className="
        row-start-2
        row-span-full
        bg-color-backgroudBody
        rounded-r-3xl
        rounded-l-3xl
        shadow
        shadow-color-trasparente
        "
        > 
        <div className="flex items-center justify-center">
        
        <Table data={data} excludedKeys={["_id", "__v"]}/>
        </div>
        
        </div>
      </div>
    )
  }
  export default Body1