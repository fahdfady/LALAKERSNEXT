import { useContext, createContext, useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../firebase"
import { setDoc, doc } from "firebase/firestore";

// Create an auth context to provide the user object and the loading state
const AuthContext = createContext();

const storeInDB = async (Data) => {
    if (Data) {
        try {
            await setDoc(doc(db, "users", Data?.uid), {
                id: Data?.uid,
                email: Data?.email,
                name: Data?.displayName,
                photo: Data?.photoURL,
                verified: Data?.emailVerified,
                isAnonymous: Data?.isAnonymous
            });

            console.log("Document written with ID: ", Data?.uid);
            console.log(Data)
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    else {
        return 0
    }
}

// Create an auth provider component that wraps the children components
export const AuthContextProvider = ({ children }) => {
    // Create a state variable to store the user object
    const [user, setUser] = useState(null);

    // Create a state variable to store the loading status
    const [loading, setLoading] = useState(true);

    const googleSignIn = async () => {
        // Create a Google auth provider instance
        const provider = new GoogleAuthProvider();

        // Sign in with popup and get the result
        const result = await signInWithPopup(auth, provider);

        // Set the user state with the result user
        setUser(result.user);
    }

    // Create a function to sign out
    const logOut = async () => {
        await signOut(auth);

        // Set the user state to null
        setUser(null);
    };

    // Use an effect hook to listen to the auth state changes
    useEffect(() => {
        // Subscribe to the onAuthStateChanged event and get the unsubscribe function
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // Set the user state with the result user
            setUser(currentUser);

            // store the user data in the firestore database (by passing the user state as a prameter to the storeInDB() function)
            storeInDB(user)

            // Set the loading state to false
            setLoading(false);
        });

        // Return the unsubscribe function to clean up
        return () => unsubscribe();

    }, [user]);

    // Return the auth context provider with the user and loading values
    return (
        <AuthContext.Provider value={{ user, loading, googleSignIn, logOut }}>
            {children}
        </AuthContext.Provider>)
}

// Export a custom hook to use the auth context
export const UserAuth = () => {
    return useContext(AuthContext)
}