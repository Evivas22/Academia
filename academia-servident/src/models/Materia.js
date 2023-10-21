const { Schema, model, models } = require("mongoose");

const MateriaSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
    trim: true,
  },
  descripcion: {
    type: String,
    required: [true, "La descripción es requerida"],
    trim: true,
  },
});

export default models.Materia || model('Materia', MateriaSchema);
