"use client";
import React, { Children, useState } from "react";
import Input from "@/components/molecules/Input";
import TextH1 from "../atoms/TextH1";
import ButtonPrimary from "../molecules/ButtonPrimary";



const ModalCreate = ({closeModal,filteredData }) => {

  const [formData, setFormData] = useState({
    nombre: "",
    especialidad: ""
  });

  const [formFields, setFormFields] = useState({});
  
  const uniqueKeys = Array.from(new Set(filteredData.flatMap(item => Object.keys(item))));


  const handleInputChange = (e, key) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar o procesar los datos del formulario.
    // Accede a los valores en formData, como formData.nombre, formData.apellido, etc.
    console.log("Formulario enviado:", formData);
    // Cierra el modal después de enviar el formulario
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
            value={formFields[key] || ''}
            onChange={(e) => handleInputChange(e, key)}
          />
        </div>
      ))}
    </form>
          </div>

          <div className="flex p-2 gap-2 row-start-7">
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
