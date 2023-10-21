import Profesor from "@/models/Profesor";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    connectDB();
    const profesorFound = await Profesor.findById(params.id);

    if (!profesorFound)
      return NextResponse.json(
        {
          message: "Profesor not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(profesorFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const profesorUpdate = await Profesor.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    return NextResponse.json(profesorUpdate);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const profesorDelete = await Profesor.findByIdAndDelete(params.id);
    if (!profesorDelete)
      return NextResponse.json(
        {
          message: "Profesor not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(profesorDelete);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
