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

export async function PUT(req) {
  try {
    console.log("[DEBUG] Connecting to database...");
    await dbConnect();
    console.log("[DEBUG] Database connected successfully.");
    
    const { uid, role, ...updateData } = await req.json();
    console.log("[DEBUG] Received update data:", { uid, role, updateData });

    if (!uid || !role) {
      console.error("[ERROR] Missing user ID or role");
      return NextResponse.json({ error: "Missing user ID or role" }, { status: 400 });
    }

    let Model;
    if (role === "participant") {
      Model = Participant;
    } else if (role === "creator") {
      Model = Creator;
    } else {
      console.error("[ERROR] Invalid user role:", role);
      return NextResponse.json({ error: "Invalid user role" }, { status: 400 });
    }

    const updatedUser = await Model.findOneAndUpdate({ uid: uid }, updateData, { new: true });

    if (!updatedUser) {
      console.error("[ERROR] User not found with ID:", uid);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log("[DEBUG] User updated successfully:", updatedUser);
    return NextResponse.json({ message: "User updated successfully", user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error("[ERROR] An error occurred:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
