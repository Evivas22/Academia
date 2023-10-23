import Profesor from "@/models/Profesor";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  connectDB();
  const profesores = await Profesor.find();
  return NextResponse.json(profesores);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newProfesor = new Profesor(data);
    const savedProfesor = await newProfesor.save();
    return NextResponse.json(savedProfesor, {
      message: "creado profesor",
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
