import Materia from "@/models/Materia";  // Importa el modelo Materia
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    connectDB();
    const materiaFound = await Materia.findById(params.id);  // Usamos Materia en lugar de Profesor

    if (!materiaFound)
      return NextResponse.json(
        {
          message: "Materia not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(materiaFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const materiaUpdate = await Materia.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    return NextResponse.json(materiaUpdate);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const materiaDelete = await Materia.findByIdAndDelete(params.id);
    if (!materiaDelete)
      return NextResponse.json(
        {
          message: "Materia not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(materiaDelete);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
