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
    <div className="h-full w-full p-8 gap-4  grid grid-cols-10 grid-rows-6">
      <div className=" capitalize text-color-trasparente text-base font-semibold flex flex-col items-center justify-center  row-start-1 col-start-1 col-span-full">
        <div className="flex w-full  ">

          <div className=" rounded-sm border-l w-[250px] px-4">Nº</div>

          {columnHeaders.map((header, index) => (
            <div className=" border-l rounded-sm w-full pl-3" key={index}>
              {header}
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
