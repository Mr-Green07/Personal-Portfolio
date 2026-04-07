import { NextResponse } from "next/server";
import { skills } from "@/lib/data";

export async function GET() {
  const allSkills = [
    ...skills.programming.map((s) => ({ ...s, category: "programming" })),
    ...skills.aiml.map((s) => ({ ...s, category: "aiml" })),
    ...skills.libraries.map((s) => ({ ...s, category: "libraries" })),
    ...skills.concepts.map((name) => ({ name, category: "concepts" })),
  ];
  return NextResponse.json({ success: true, data: allSkills, categories: Object.keys(skills) });
}
