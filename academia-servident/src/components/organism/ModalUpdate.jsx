import React, { useState } from "react";

function ModalUpdate({ closeModal, data }) {
  const [formData, setFormData] = useState(data); // Inicializa el estado con los datos actuales

  const handleUpdate = () => {
    // Realiza una solicitud PUT o PATCH a la API para actualizar los datos
    // Utiliza formData para enviar los datos actualizados
    // Cierra el modal después de una actualización exitosa
  };

  return (
    <div className="h-full w-full grid grid-rows-6">
          <div className="row-start-1">
            <TextH1 content={"Agregar Nuevo"}/>
          </div>
      <form>
        {/* Renderiza campos de formulario para la edición de datos */}
        <input
          type="text"
          value={formData.nombre} // Muestra el valor actual
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} // Actualiza el estado en cada cambio
        />
        {/* Otros campos de formulario */}
        <button onClick={handleUpdate}>Guardar</button>
        <button onClick={closeModal}>Cancelar</button>
      </form>
    </div>
  );
}

export default ModalUpdate;
