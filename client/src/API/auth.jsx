
const CLIENT_URL = 'http://localhost:8080';

// This function makes an API call to sign up a user
export async function signUpUser(user) {
    // Make request to sign up endpoint on backend
    try {
        const response = await fetch(`${CLIENT_URL}/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to sign up user');
        }

        // Process response data if needed
        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.error('Error signing up user:', error);
        throw error; // Propagate the error further
    }
}