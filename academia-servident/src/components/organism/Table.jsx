"use client";
import { useState } from "react";
import Modal from "react-modal";
import ButtonMini from "../molecules/ButtonMini";

function Table({ data, excludedKeys}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  function ModalContent({ closeModal }) {
    return (
      <div>
        <h2>Este es un modal</h2>
        <button onClick={closeModal}>Cerrar Modal</button>
      </div>
    );
  }

  const columnHeaders = data[0]
    ? Object.keys(data[0]).filter((key) => !excludedKeys.includes(key))
    : [];

  return data && data.length > 0 ? (
    <div className="h-full w-full p-4 gap-4 border grid grid-cols-10 grid-rows-6">
      <div className="border flex flex-col items-center justify-center  row-start-1 col-start-1 col-span-full">
        <div className="flex w-full items-center justify-center border border-color-warning">
          <div className="w-[250px] px-4">Indice</div>
          {columnHeaders.map((header, index) => (
            <div className="border w-full text-center" key={index}>
              {header}
            </div>
          ))}
          <div className="w-[300px] px-4"></div>
        </div>
      </div>

      <div className="border w-full flex flex-col items-center justify-start row-start-2 row-span-full col-start-1 col-span-full">
        {data.map((row, rowIndex) => (
          <div
            className="flex w-full items-center justify-around border border-color-warning"
            key={rowIndex}
          >
            <div className="w-[250px] px-4">{rowIndex + 1}</div>
            {columnHeaders.map((header, index) => (
              <div className="border w-full" key={index}>
                {row[header]}
              </div>
            ))}
            <div className="flex w-[300px] px-4">
              <ButtonMini onClick={openModal} icon={"BiEdit"} />
              <ButtonMini icon={"BiTrash"} />
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ejemplo Modal"
      >
        <ModalContent closeModal={closeModal} />
      </Modal>
    </div>
  ) : (
    <h1>no hay datos</h1>
  );
}

export default Table;
