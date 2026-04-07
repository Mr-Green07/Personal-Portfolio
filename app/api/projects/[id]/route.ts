import { NextResponse } from "next/server";
import { projects } from "@/lib/data";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true, data: project });
}
