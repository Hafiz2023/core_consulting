import { NextResponse } from "next/server";
import clientsData from "../../data/clients.json";

export async function GET() {
  try {
    return NextResponse.json(clientsData);
  } catch (error) {
    console.error("Failed to fetch clients data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
