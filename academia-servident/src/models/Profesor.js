const { Schema, model, models } = require("mongoose");

const ProfesorSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es requerido"],
      unique: true,
      trim: true,
    },
    especialidad: {
      type: String,
      required: [true, "La especialidad es requerida"],
      trim: true,
    }
  }
);

export default models.Profesor || model("Profesor", ProfesorSchema);
