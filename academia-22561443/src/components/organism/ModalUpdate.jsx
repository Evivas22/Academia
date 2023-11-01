import React, { useState } from "react";
import TextH1 from "../atoms/TextH1";
import ButtonPrimary from "../molecules/ButtonPrimary";

function ModalUpdate({ closeModal, data }) {
  const [formData, setFormData] = useState(data);

  const handleUpdate = () => {};

  return (
    <div className="h-full w-full grid grid-rows-6">
      <div
        className="row-start-1"
        customStyle={"text-color-neutral-700 text-base"}
      >
        <TextH1 content={`Editar`} />
      </div>
      <form className=" row-start-2 border row-span-full flex items-center justify-center">
        <input type="text" />
      </form>
      <div className="row-start-7 flex gap-3">
        <ButtonPrimary
          onClick={handleUpdate}
          content={"Editar"}
          customStyle={
            "bg-color-warning hover:bg-color-primary hover:border hover:text-color-backgroud  "
          }
        />

        <ButtonPrimary
          content={"Cancelar"}
          customStyle={
            "bg-color-neutral text-color-neutral-700 border borde-color- hover:bg-color-primary hover:text-color-backgroud"
          }
          onClick={closeModal}
        />
      </div>
    </div>
  );
}

export default ModalUpdate;
