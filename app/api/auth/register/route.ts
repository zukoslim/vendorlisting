import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Insert into database
    const { rows } =
      await sql`INSERT INTO users (email, password) VALUES (${email}, ${hashedPassword}) RETURNING *`;

    return NextResponse.json(
      { message: "User registered successfully", user: rows[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in register route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
