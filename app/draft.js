// Create a custom hook to check the authentication status of the user
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/auth"; // Assuming you have an auth context that provides the user object and a loading state

export function useProtectedRoute() {
    const router = useRouter();
    const { user, loading } = useAuth();

    useEffect(() => {
        // If the user is not logged in and the auth status is not loading, redirect to the join-us page
        if (!user && !loading) {
            router.push("/join-us");
        }
    }, [user, loading, router]);
}

// Use the custom hook in your profile page component
import { useProtectedRoute } from "../hooks/useProtectedRoute";

export default function ProfilePage() {
    // This will redirect the user to the join-us page if they are not logged in
    useProtectedRoute();

    return (
        <div>
            <h1>Profile Page</h1>
            {/* Your profile page content here */}
        </div>
    );
}






// ! dasdasdasd

// Import React and Firebase
import React, { createContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase app
const firebaseConfig = {
    // Your Firebase configuration object here
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Create an auth context to provide the user object and the loading state
export const AuthContext = createContext();

// Create an auth provider component that wraps the children components
export const AuthProvider = ({ children }) => {
    // Create a state variable to store the user object
    const [user, setUser] = useState(null);

    // Create a state variable to store the loading status
    const [loading, setLoading] = useState(true);

    // Create a function to sign in with Google
    const googleSignIn = async () => {
        // Create a Google auth provider instance
        const provider = new firebase.auth.GoogleAuthProvider();

        // Sign in with popup and get the result
        const result = await firebase.auth().signInWithPopup(provider);

        // Set the user state with the result user
        setUser(result.user);
    };

    // Create a function to sign out
    const logOut = async () => {
        // Sign out from Firebase auth
        await firebase.auth().signOut();

        // Set the user state to null
        setUser(null);
    };

    // Use an effect hook to listen to the auth state changes
    useEffect(() => {
        // Subscribe to the onAuthStateChanged event and get the unsubscribe function
        const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
            // Set the user state with the current user or null
            setUser(currentUser);

            // Set the loading state to false
            setLoading(false);
        });

        // Return the unsubscribe function to clean up
        return () => unsubscribe();
    }, []);

    // Return the auth context provider with the user and loading values
    return (
        <AuthContext.Provider value={{ user, loading, googleSignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

// Export a custom hook to use the auth context
export const useAuth = () => {
    return React.useContext(AuthContext);
};








//ddddsdasdas

// // Import React and the custom hook to use the auth context
// import React from "react";
// import { useAuth } from "../contexts/auth";

// // Create a custom hook to check the authentication status of the user
// export function useProtectedRoute() {
//     // Get the user and loading values from the auth context
//     const { user, loading } = useAuth();

//     // Use an effect hook to redirect the user based on their authentication status
//     React.useEffect(() => {
//         // If the user is logged in and the auth status is not loading, redirect to the profile page
//         if (user && !loading) {
//             window.location.href = "/profile";
//         }

//         // If the user is not logged in and the auth status is not loading, redirect to the sign up page
//         if (!user && !loading) {
//             window.location.href = "/sign-up";
//         }
//     }, [user, loading]);
// }

// // Use the custom hook in your sign up and profile page components
// export default function SignUpPage() {
//     // This will redirect the user to the profile page if they are logged in
//     useProtectedRoute();

//     return (
//         <div>
//             <h1>Sign Up Page</h1>
//             {/* Your sign up page content here */}
//         </div>
//     );
// }

// export default function ProfilePage() {
//     // This will redirect the user to the sign up page if they are not logged in
//     useProtectedRoute();

//     return (
//         <div>
//             <h1>Profile Page</h1>
//             {/* Your profile page content here */}
//         </div>
//     );
// }
