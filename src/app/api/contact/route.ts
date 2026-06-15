/**
 * route.ts (Contact Form API)
 * Handles POST requests from the contact form.
 * Validates the input and saves the message to the JSON store.
 */
import { NextResponse } from 'next/server';
import { saveJSONData } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, mobile, address, idCardNumber, message } = body;

        // TODO: Connect to a real email service or database
        console.log('Contact form submission:', { name, email, message });

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Save to database
        saveJSONData('contacts.json', { name, email, mobile, address, idCardNumber, message });

        // Simulate success
        return NextResponse.json(
            { message: 'Message sent successfully!' },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
