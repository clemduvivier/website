import { NextResponse } from "next/server";

export async function GET() {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}