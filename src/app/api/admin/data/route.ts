/**
 * route.ts (Admin Data)
 * Handles GET requests for the admin dashboard.
 * Fetches contacts and registrations data from the JSON store.
 */
import { NextResponse } from 'next/server';
import { getJSONData } from '@/lib/db';

export async function GET() {
    try {
        const contacts = getJSONData('contacts.json');
        const registrations = getJSONData('registrations.json');

        return NextResponse.json({
            contacts,
            registrations,
        });
    } catch {
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
