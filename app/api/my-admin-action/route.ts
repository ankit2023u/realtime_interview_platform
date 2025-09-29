import { NextResponse } from 'next/server';
import admin from 'firebase-admin';

// Initialize firebase-admin if you haven't already
if (!admin.apps.length) {
  admin.initializeApp({
    // Your credentials
  });
}

export async function POST(request: Request) {
  try {
    // Perform your admin tasks here
    const users = await admin.auth().listUsers();
    return NextResponse.json({ success: true, userCount: users.users.length });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'An error occurred.' }, { status: 500 });
  }
}