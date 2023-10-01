import { useEffect } from "react";
import { UserAuth } from "./AuthContext";
import { useRouter } from 'next/navigation'

// Create a custom hook to check the authentication status of the user
export function useProtectedRoute() {
    // Get the user and loading values from the auth context
    const { user, loading } = UserAuth();

    const router = useRouter()

    // Use an effect hook to redirect the user based on their authentication status
    useEffect(() => {
        // If the user is logged in and the auth status is not loading, redirect to the profile page
        if (user && !loading) {
            router.push(`/profile/${user?.uid}`);
        }

        // If the user is not logged in and the auth status is not loading, redirect to the join us page
        if (!user && !loading) {
            router.push('/join');
        }
    }, [user, loading]);
}