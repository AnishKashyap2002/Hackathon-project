import { NextResponse } from "next/server";
import Connection from "@/lib/connectDB";
import Subject from "@/lib/subject";

export async function POST(request: Request) {
    Connection();
    const body = await request.json();

    const { image, info, name, semester, code } = body;
    console.log(body);

    const subject = await Subject.create({
        image,
        info,
        name,
        semester,
        code,
    });

    subject.save();
    return NextResponse.json(subject);
}
