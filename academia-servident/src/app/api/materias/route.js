import Materia from "@/models/Materia";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  connectDB();
  const materias = await Materia.find();
  return NextResponse.json({
    message: `consultando materias `,
    materias: materias,
  });
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newMateria = new Materia(data);
    const savedMateria = await newMateria.save();
    return NextResponse.json(savedMateria, {
      message: "creando materia",
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
