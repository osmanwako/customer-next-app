import { NextResponse } from "next/server";
import prisma from "@/library/prisma";

export async function GET() {
  try {
    const customers = await prisma.customer.findMany();
    return NextResponse.json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function POST(request) {
  try {
    const params = await request.json();
    const customer = await prisma.customer.create({
      data: {...params},
    });

    return NextResponse.json({
      status: 1,
      customer,
      message: "Customer created successfully",
    });
  } catch (error) {
    const errorMessage = error.message || "Internal Server Error";

    return NextResponse.json(
      {
        status: 0,
        error: errorMessage,
        message: "Failed to create user",
      }
    );
  }
}

export async function PATCH(request) {
  try {
    const params = await request.json();
    const { name, email } = params;
    const id = parseInt(params.id, 10);

    if (isNaN(id)) {
      return NextResponse.json({
        status: 404,
        message: "Invalid or missing user ID",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return NextResponse.json({
        status: 404,
        message: "User either does not exist or was recently deleted.",
      });
    }

    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        email,
      },
    });

    return NextResponse.json({
      message: "User updated successfully.",
      user,
      status: 403,
    });
  } catch (error) {
    const errorMessage = error.message || "Internal Server Error";

    return NextResponse.json({
      status: 500,
      errorMessage,
      message:
        "An unexpected error occurred while processing your request. Please try again later.",
    });
  }
}

export async function DELETE(request) {
  try {
    const params = await request.json();
    const id = parseInt(params.id, 10);
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({
        status: 404,
        message:
          "The user either does not exist or was recently deleted just before your attempt",
      });
    }

    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({
      status: 200,
      user,
      message: "User deleted successfully",
    });
  } catch (error) {
    const errorMessage = error.message || "Internal Server Error";
    return NextResponse.json({
      status: 500,
      errorMessage,
      message:
        "An unexpected error occurred while processing your request. Please try again later.",
    });
  }
}
