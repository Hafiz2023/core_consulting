/**
 * route.ts (Auth Register)
 * Handles POST requests to register a new user.
 * Saves the user's name, email, and password to the JSON store.
 */
import { NextResponse } from 'next/server';
import { getJSONData, saveJSONData } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        // Basic validation
        if (!name || !email || !password) {
            return NextResponse.json(
                { message: 'Name, email, and password are required.' },
                { status: 400 }
            );
        }

        const users = getJSONData('users.json');

        // Check if user already exists
        const userExists = users.some((user: { email?: string; [key: string]: unknown }) => user.email === email);
        if (userExists) {
            return NextResponse.json(
                { message: 'User already registered.' },
                { status: 409 }
            );
        }

        // Save new user (In a real app, hash the password!)
        saveJSONData('users.json', { name, email, password });

        return NextResponse.json({ message: 'Registration successful!' }, { status: 201 });
    } catch {
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
