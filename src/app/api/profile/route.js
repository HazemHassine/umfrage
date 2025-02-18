import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Participant, Creator } from "@/models/User";

export async function GET(req) {
  try {
    console.log("[DEBUG] Connecting to database...");
    await dbConnect();
    console.log("[DEBUG] Database connected successfully.");

    const { searchParams } = new URL(req.url);
    const uid = searchParams.get('uid');

    console.log("[DEBUG] Received UID:", uid);

    if (!uid) {
      console.error("[ERROR] Missing UID");
      return NextResponse.json({ error: "Missing UID" }, { status: 400 });
    }

    console.log("[DEBUG] Searching for user with UID:", uid);
    let user = await Participant.findOne({ uid });

    if (!user) {
      console.log("[DEBUG] User not found in Participant, checking Creator...");
      user = await Creator.findOne({ uid });
    }

    if (!user) {
      console.error("[ERROR] User not found for UID:", uid);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log("[DEBUG] User found:", user);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("[ERROR] An error occurred:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}