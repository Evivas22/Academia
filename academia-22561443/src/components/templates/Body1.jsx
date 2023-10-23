"use client"
{/* {JSON.stringify(filteredData, null, 2)} */}

import Modal from "react-modal"; 
import { useEffect, useState } from "react";
import Table from "../organism/Table";
import TextH1 from "../atoms/TextH1";
import ButtonPrimary from "../molecules/ButtonPrimary";
import ModalCreate from "../organism/ModalCreate";


const customModalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)"
  },
  content: {

    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
  },
};


function Body1({ selectedOption }) {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    fetchData(selectedOption);
  };

    
  const fetchData = async (param) => {
    try {
      const response = await fetch(`http://localhost:3000/api/${param}`); 
      const result = await response.json();
      setData(Array.isArray(result) ? result : [result]);
    } catch (error) {
      console.error(error);
    }
  };



  const filteredData = data.map(item => {
    const { _id, __v, ...filteredItem } = item;
    return filteredItem;
  });

  
  const filteredDataId = data.map(item => {
    const {  __v, ...filteredItem } = item;
    return filteredItem;
  });

  
// console.log(filteredData)
//   const ids = data.map(objeto => objeto._id);
  





  
  useEffect(() => {
    console.log(selectedOption)
    fetchData(selectedOption);
  }, [selectedOption]);


    return (

      <div className="grid grid-rows-6 gap-4 h-full ">
      <Modal
            isOpen={isModalOpen}
            contentLabel="Ejemplo Modal"
            style={customModalStyle}
          >
      <ModalCreate 
      filteredData={filteredData}
      closeModal={closeModal}
      contentLabel="Crear"
      selectedOption={selectedOption}
      />
        
       </Modal>


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
        {/* {data.map((item)=>(
          <div key={item._id}>
              <h3>{item._id}</h3>
              <h3>{item.nombre}</h3>
            </div>
        ))} */}
   
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


        <Table  data={data}  excludedKeys={["_id", "__v"]}/>    

        </div>


       

      
      </div>

    )
  }
  export default Body1