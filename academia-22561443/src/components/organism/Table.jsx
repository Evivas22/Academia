"use client";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import ButtonMini from "../molecules/ButtonMini";
import ModalUpdate from "./ModalUpdate";
import ModalDelete from "./ModalDelete";
import TextH1 from "../atoms/TextH1";
import ButtonPrimary from "../molecules/ButtonPrimary";
import TextH2 from "../atoms/TextH2";
import { deleteDataById, getData } from "../../utils/httpRequests";

const customModalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
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

function Table({ data, setData, excludedKeys, selectedOption }) {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setCurrentIndex] = useState([!null]);

  const openModalDelete = (id, nombre) => {
    setCurrentIndex(id, nombre);
    setIsModalOpen(true);
  };
  const closeModalDelete = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
    loadAndUseData(selectedOption);
  };

  const openUpdateModal = (id) => {
    console.log("esto se va actualizar" + id);
    setCurrentIndex(id);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setCurrentIndex(null);
  };

  const columnHeaders = data[0] ? Object.keys(data[0]) : [];

  const loadAndUseData = async (param) => {
    try {
      const data = await getData(param);
      console.log("Datos obtenidos:", data);
      setData(data);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };

  const handleDelete = async (id, url) => {
    if (id !== null){
      try {
        const response = await deleteDataById(id, url);
        closeModalDelete();
        loadAndUseData(url);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    }else{
      alert("el elemento no existe")
    }
  };

  return data.length > 0 ? (
    <div className="h-full w-full p-8 gap-4  grid grid-cols-10 grid-rows-6">
      <div className=" capitalize text-color-trasparente text-base font-semibold flex flex-col items-center justify-center  row-start-1 col-start-1 col-span-full">
        <div className="flex w-full  ">
          <div className=" rounded-sm border-l w-[250px] px-4">Nº</div>

          {columnHeaders.map((header, index) => (
            <div className=" border-l rounded-sm w-full pl-3" key={index}>
              {excludedKeys.includes(header) ? null : header}
            </div>
          ))}

          <div className="w-[300px] px-4"></div>
        </div>
      </div>

      <div className=" w-full flex flex-col items-center justify-start row-start-2 row-span-full col-start-1 col-span-full overflow-auto">
        {data.map((row, rowIndex) => (
          <div
            className=" text-color-neutral-700 capitalize font-light flex w-full items-center justify-around border-b py-4 "
            key={rowIndex}
          >
            <div className=" border-l w-[250px] pl-4 ">{rowIndex + 1}</div>

            {columnHeaders.map((header, index) => (
              <div className="  w-full pl-4" key={index}>
                {excludedKeys.includes(header) ? null : row[header]}
              </div>
            ))}

            <div className="flex w-[300px] px-4">
              <ButtonMini
                onClick={() => openUpdateModal(row._id)}
                icon={"BiEdit"}
              />
              <ButtonMini
                onClick={() => openModalDelete([row._id, row.nombre])}
                icon={"BiTrash"}
              />
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isUpdateModalOpen}
        onRequestClose={closeUpdateModal}
        contentLabel="Modal Update"
        style={customModalStyle}
      >
        <ModalUpdate closeModal={closeUpdateModal} />
      </Modal>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModalDelete}
        style={customModalStyle}
      >
        <ModalDelete
        onSumit={() => handleDelete(index[0], selectedOption)}
        onCancel={closeModalDelete}
        index={index}
        />
      </Modal>
    </div>
  ) : (
    <div className="h-full w-full flex items-center justify-center text-base text-color-neutral-700 ">
      <h1>No hay datos</h1>
    </div>
  );
}

export default Table;
