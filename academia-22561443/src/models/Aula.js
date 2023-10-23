import { Schema, model, models } from "mongoose";

const AulaSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
    trim: true,
  },
  fecha: {
    type: String,
    required: [true, "La fecha es requerida"],
  },
  hora: {
    type: String,
    required: [true, "La hora es requerida"],
    trim: true,
  },
  tema: {
    type: String,
    required: [true, "El tema es requerido"],
    trim: true,
  },
  profesor: {
    type: Schema.Types.ObjectId,
    ref: "Profesor",
    required: [true, "El profesor es requerido"],
  },
  materia: {
    type: Schema.Types.ObjectId,
    ref: "Materia",
    required: [true, "La materia es requerida"],
  },
});

export default models.Aula || model("Aula", AulaSchema);
