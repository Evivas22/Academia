"use client"

import { useEffect, useState } from "react";
import Table from "../organism/Table";
import TextH1 from "../atoms/TextH1";
import ButtonPrimary from "../molecules/ButtonPrimary";
import Modal from "react-modal";
import ButtonMini from "../molecules/ButtonMini";


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

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  function ModalCreate({ closeModal }) {
    return (
      <div className=" 
      grid 
      grid-cols-12
      grid-rows-6
      bg-color-primary
      w-full
      h-full">
        <div className="
        rounded-xl
        shadow-xl
        bg-color-backgroudBody 
        row-start-1 row-end-7 
        col-start-5 col-end-9
        p-4
        ">
          <div className="
          grid 
          h-full 
          gap-3 
          grid-flow-row
          ">
            <div className=" row-start-1 flex justify-end items-center  " >
            <ButtonMini 
            icon={"BiXCircle"} 
            onClick={closeModal}
            />
            </div>
            <div className="row-start-2">
              <TextH1 content={"Agregar Nuevo"}/>
            </div>
            <div className="row-start-3">
              contenido modal
            </div>
            <div className="flex p-2 gap-2 row-start-7">
              <ButtonPrimary
               content={"Crear"} 
               customStyle={"bg-color-success hover:bg-color-primary hover:text-color-backgroud  "}/>

              <ButtonPrimary 
              content={"Cancelar"}
              customStyle={"bg-color-error text-color-primary hover:bg-color-primary hover:text-color-backgroud"}
              />
            </div>
          </div>
        </div>
         
      </div>
    );
  }
  
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
        <div className="">
        <TextH1 content={selectedOption}/>
        </div>
        <div className="">
        <ButtonPrimary 
        onClick={openModal}
        customStyle={"w-[300px] bg-color-backgroud text-color-primary hover:bg-color-secondary hover:text-color-backgroud"} 
        content={"Agregar nuevo"}
        />
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
          

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Crear"
       >
        <ModalCreate closeModal={closeModal} />
        </Modal>
       
        <Table data={data} excludedKeys={["_id", "__v"]}/>    

        </div>
      </div>
    )
  }
  export default Body1