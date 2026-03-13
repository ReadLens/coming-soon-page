import { NextResponse } from 'next/server';

const EXTERNAL_API_URL = 'https://main-api-latest.onrender.com/api/v1/waitlist';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const response = await fetch(EXTERNAL_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error('API Proxy Error:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
