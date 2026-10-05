import { NextResponse } from "next/server";
import { galleryItems } from "@/data";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: galleryItems,
    total: galleryItems.length,
  });
}
