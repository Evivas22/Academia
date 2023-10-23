import Aula from "@/models/Aula";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    connectDB();
    const aulasFound = await Aula.findById(params.id);

    if (!aulasFound)
      return NextResponse.json(
        {
          message: "Aula not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(aulasFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const aulaUpdate = await Aula.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    return NextResponse.json(aulaUpdate);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const aulaDelete = await Aula.findByIdAndDelete(params.id);
    if (!aulaDelete)
      return NextResponse.json(
        {
          message: "Aula not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(aulaDelete);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
