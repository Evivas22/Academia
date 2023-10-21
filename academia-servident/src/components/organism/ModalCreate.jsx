"use client";
import React, { useState } from "react";
import Modal from "react-modal"; // Importa react-modal
import Input from "@/components/molecules/Input";

const HomePage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    especialidad: ""
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar si el modal está abierto

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar o procesar los datos del formulario.
    // Accede a los valores en formData, como formData.nombre, formData.apellido, etc.
    console.log("Formulario enviado:", formData);
    closeModal(); // Cierra el modal después de enviar el formulario
  };

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Ejemplo Modal"
      >
        <form onSubmit={handleSubmit}>
          <Input
            label={"Nombre"}
            placeHolder="Nombre"
            onChange={(value) => handleInputChange("nombre", value)}
            value={formData.nombre}
          />
          <Input
            label={"Especialidad"}
            placeHolder="Apellido"
            onChange={(value) => handleInputChange("apellido", value)}
            value={formData.apellido}
          />
          <button type="submit">Enviar</button>
        </form>
        <button onClick={closeModal}>Cerrar Modal</button>
      </Modal>
    </div>
  );
};

export default HomePage;
