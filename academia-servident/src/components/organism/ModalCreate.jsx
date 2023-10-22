"use client";
import React, { Children, useState } from "react";
import Input from "@/components/molecules/Input";
import TextH1 from "../atoms/TextH1";
import ButtonPrimary from "../molecules/ButtonPrimary";



const ModalCreate = ({closeModal,filteredData,selectedOption }) => {

  const [formData, setFormData] = useState({

  });

  const [formFields, setFormFields] = useState({});
  
  const uniqueKeys = Array.from(new Set(filteredData.flatMap(item => Object.keys(item))));


  const handleInputChange = (e, key) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(formData),
    };
    fetch(`http://localhost:3000/api/${selectedOption}`, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La solicitud no se completó con éxito');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Solicitud exitosa:', data);
      setFormData({})
      closeModal();
    })
    .catch((error) => {
      console.error('Error al enviar la solicitud:', error);
    });


  };

  return (
    
 


    <div className="h-full w-full grid grid-rows-6">

          <div className="row-start-1">
            <TextH1 content={"Agregar Nuevo"}/>
          </div>

      <div className="row-start-2   row-span-full overflow-auto">
      <form className=" h-full w-full flex flex-col items-center ">
      {uniqueKeys.map(key => (
        <div className="px-10  flex flex-col w-full h-auto" key={key}>
          <label className=" text-color-neutral-700 text-sm font-normal capitalize " htmlFor={key}>{key}</label>
          <input
          className="
          shadow-inner 
          px-3  
          rounded-md 
          p-2 
          appearance-none 
          border-b
          border-color-trasparente 
          w-full
          py-3 
          text-color-title 
          leading-tight 
          focus:outline-none 
          focus:shadow-outline
          text-color-neutral-700
          "
            type="text"
            id={key}
            name={key}
            value={formData[key] || ''}
            onChange={(e) => handleInputChange(e, key)}
          />
        </div>
      ))}
    </form>
      </div>
          <div className="flex p-2 gap-2 ">
            <ButtonPrimary
            onClick={handleSubmit}
            content={"Crear"} 
            customStyle={"bg-color-success hover:bg-color-primary hover:text-color-backgroud  "}/>

            <ButtonPrimary 
            content={"Cancelar"}
            customStyle={"bg-color-error text-color-primary hover:bg-color-primary hover:text-color-backgroud"}
            onClick={closeModal}
            />
          </div>

        </div>

     
  

  );
};

export default ModalCreate;
