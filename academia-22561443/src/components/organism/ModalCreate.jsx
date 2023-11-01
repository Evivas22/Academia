"use client";
import { useState } from "react";
import TextH1 from "../atoms/TextH1";
import ButtonPrimary from "../molecules/ButtonPrimary";
import { addData } from "@/utils/httpRequests";
const ModalCreate = ({ filteredData, selectedOption, closeModal, theme }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    especialidad: "",
    descripcion: "",
    fecha: "",
    hora: "",
    tema: "",
    profesor: "",
    materia: "",
  });

  const handleInputChange = (e, key) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(selectedOption, formData)
      .then((data) => {
        console.log("Solicitud exitosa:", data);
        setFormData({});
        closeModal();
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  };

  return (
    <div className=" h-full w-full grid grid-rows-6">
      <div className="row-start-1">
        <TextH1 content={`Agregar Nuevo ${selectedOption}`} />
      </div>

      <div className="row-start-2   row-span-full overflow-auto">
        <form className=" h-full w-full flex flex-col items-center ">
          {selectedOption === "profesores" && (
            <>
              <div className="px-10 flex flex-col w-full h-auto">
                <label
                  className="text-color-neutral-700 text-sm font-normal capitalize"
                  htmlFor="nombre"
                >
                  Nombre
                </label>

                <input
                  className="input input-bordered text-neutral w-full max-w-xs"
                  type="text"
                  id="nombre_profesor"
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange(e, "nombre")}
                />
              </div>

              <div className="px-10 flex flex-col w-full h-auto ">
                <label
                  className="text-color-neutral-700 text-sm font-normal capitalize"
                  htmlFor="especialidad"
                >
                  Especialidad
                </label>
                <input
                  className="input input-bordered text-neutral  w-full max-w-xs"
                  type="text"
                  id="especialidad_profesor"
                  name="especialidad"
                  value={formData.especialidad}
                  onChange={(e) => handleInputChange(e, "especialidad")}
                />
              </div>
            </>
          )}

          {selectedOption === "materias" && (
            <>
              <div className="px-10 flex flex-col w-full h-auto">
                <label
                  className="text-color-neutral-700 text-sm font-normal capitalize"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  className="input input-bordered bg-neutral w-full max-w-xs"
                  type="text"
                  id="nombre_materia"
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange(e, "nombre")}
                />
              </div>
              <div className="px-10 flex flex-col w-full h-auto">
                <label
                  className="text-color-neutral-700 text-sm font-normal capitalize"
                  htmlFor="descripcion"
                >
                  Descripción
                </label>
                <input
                  className="input input-bordered text-neutral w-full max-w-xs"
                  type="text"
                  id="descripcion_materia"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={(e) => handleInputChange(e, "descripcion")}
                />
              </div>
            </>
          )}

          {selectedOption === "aulas" && (
            <>
              <div className="px-10 flex flex-col w-full h-auto">
                <label
                  className="text-color-neutral-700 text-sm font-normal capitalize"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  id="nombre_aulas"
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange(e, "nombre")}
                />
              </div>
              <div className="px-10 flex flex-col w-full h-auto">
                <label
                  className="text-color-neutral-700 text-sm font-normal capitalize"
                  htmlFor="fecha"
                >
                  Fecha
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="date"
                  id="fecha_aulas"
                  name="fecha"
                  value={formData.fecha}
                  onChange={(e) => handleInputChange(e, "fecha")}
                />
              </div>
              <div className="px-10 flex flex-col w-full h-auto">
                <label
                  className="text-color-neutral-700 text-sm font-normal capitalize"
                  htmlFor="hora"
                >
                  Hora
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="time"
                  id="hora_aulas"
                  name="hora"
                  value={formData.hora}
                  onChange={(e) => handleInputChange(e, "hora")}
                />
              </div>
              <div className="px-10 flex flex-col w-full h-auto">
                <label
                  className="text-color-neutral-700 text-sm font-normal capitalize"
                  htmlFor="tema"
                >
                  Tema
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  id="tema_aulas"
                  name="tema"
                  value={formData.tema}
                  onChange={(e) => handleInputChange(e, "tema")}
                />
              </div>
              <div className="px-10 flex flex-col w-full h-auto">
                <label
                  className="text-color-neutral-700 text-sm font-normal capitalize"
                  htmlFor="profesor"
                >
                  Profesor
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  id="profesor_aula"
                  name="profesor"
                  value={formData.profesor}
                  onChange={(e) => handleInputChange(e, "profesor")}
                />
              </div>
              <div className="px-10 flex flex-col w-full h-auto">
                <label
                  className="text-color-neutral-700 text-sm font-normal capitalize"
                  htmlFor="materia"
                >
                  Materia
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  id="materia_aula"
                  name="materia"
                  value={formData.materia}
                  onChange={(e) => handleInputChange(e, "materia")}
                />
              </div>
            </>
          )}
        </form>
      </div>
      <div className=" flex p-2 gap-2 ">
        <ButtonPrimary
          onClick={handleSubmit}
          content={"Crear"}
          customStyle={"border border-success  "}
        />

        <ButtonPrimary
          content={"Cancelar"}
          customStyle={
            " border border-error hover:bg-color-primary hover:text-color-backgroud"
          }
          onClick={closeModal}
        />
      </div>
    </div>
  );
};

export default ModalCreate;
