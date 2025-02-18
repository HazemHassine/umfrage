import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Participant, Creator } from "@/models/User";

export async function POST(req) {
  try {
    console.log("[DEBUG] Connecting to database...");
    await dbConnect();
    console.log("[DEBUG] Database connected successfully.");
    
    const userData = await req.json();
    console.log("[DEBUG] Received user data:", userData);

    if (!userData || !userData.role) {
      console.error("[ERROR] Missing user data or role");
      return NextResponse.json({ error: "Missing user data or role" }, { status: 400 });
    }

    let user;
    if (userData.role === "participant") {
      console.log("[DEBUG] Creating a Participant...");
      user = new Participant(userData);
    } else if (userData.role === "creator") {
      console.log("[DEBUG] Creating a Creator...");
      user = new Creator(userData);
    } else {
      console.error("[ERROR] Invalid user role:", userData.role);
      return NextResponse.json({ error: "Invalid user role" }, { status: 400 });
    }

    console.log("[DEBUG] Saving user to database...");
    await user.save();
    console.log("[DEBUG] User saved successfully.");

    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.error("[ERROR] An error occurred:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}