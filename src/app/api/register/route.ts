/**
 * route.ts (Registration API)
 * Handles POST requests for course/event registrations.
 * Validates the required fields and saves the registration data.
 */
import { NextResponse } from 'next/server';
import { saveJSONData } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, trainingName } = body;

        // Validate required fields
        if (!name || !email || !phone || !trainingName) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Save to database
        saveJSONData('registrations.json', body);

        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: 'Registration successful! We will contact you shortly.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
