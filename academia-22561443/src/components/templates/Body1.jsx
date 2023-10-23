
{/* {JSON.stringify(filteredData, null, 2)} */}

import Modal from "react-modal"; 
import { useEffect, useState } from "react";
import Table from "../organism/Table";
import TextH1 from "../atoms/TextH1";
import ButtonPrimary from "../molecules/ButtonPrimary";
import ModalCreate from "../organism/ModalCreate";
import fetchData from "../organism/fetchData";
import SearchBar from "../molecules/SearchBar";



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
    loadAndUseData(selectedOption);
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
  



const loadAndUseData = async (param) => {
  try {
    const data = await fetchData(param);
    console.log("Datos obtenidos:", data);
    setData(data)

  
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

  
  useEffect(() => {
    loadAndUseData(selectedOption)
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


        <div
        name="div Bodyhead"
        className="
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
            <div name="Titulo"
            
              className=""
              >
              <TextH1 content={selectedOption}/>
            </div>
            <div name="Barra buscadora"
            className="flex justify-center items-center h-screen">
                <SearchBar placeholder={`buscar ${selectedOption}`} />
            </div>
            <div name="Boton agregar"
               className="">
              <ButtonPrimary 
              onClick={openModal}
              customStyle={" px-4 w-auto bg-color-backgroud text-color-primary hover:bg-color-secondary hover:text-color-backgroud"} 
              content={`Agregar a ${selectedOption}`}
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


        <Table selectedOption={selectedOption} setData={setData}  data={data}  excludedKeys={["_id", "__v"]}/>    

        </div>


       

      
      </div>

    )
  }
  export default Body1