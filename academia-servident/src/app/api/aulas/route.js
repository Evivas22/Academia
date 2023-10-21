import Aula from "@/models/Aula";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  connectDB();
  const aulas = await Aula.find();
  return NextResponse.json({
    aulas:aulas
  });
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newAula = new Aula(data);
    const savedAula = await newAula.save();
    return NextResponse.json(savedAula, {
      message: "creando aula",
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
