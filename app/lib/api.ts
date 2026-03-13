/**
 * API Service for Waitlist Integration
 * Handles POST requests to the waitlist endpoint
 */

const WAITLIST_API_URL = '/api/waitlist';

export interface WaitlistResponse {
    success: boolean;
    message?: string;
    error?: string;
}

/**
 * Joins the waitlist by sending an email to the API
 * @param email The user's email address
 * @returns A promise that resolves to the API response
 */
export async function joinWaitlist(email: string): Promise<WaitlistResponse> {
    try {
        const response = await fetch(WAITLIST_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        // Check if the request was successful
        if (response.ok && data.success) {
            return {
                success: true,
                message: data.data?.message || 'Successfully joined the waitlist!',
            };
        } else {
            // Handle logical errors from the API (e.g. email already exists)
            // Error structure might vary, but we'll check common fields
            const errorMessage = data.data?.message || data.message || data.error || 'Failed to join waitlist. Please try again.';
            return {
                success: false,
                error: errorMessage,
            };
        }
    } catch (error) {
        console.error('Waitlist API Error:', error);
        return {
            success: false,
            error: 'Network error. Please check your connection and try again.',
        };
    }
}
