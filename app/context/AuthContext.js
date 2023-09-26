import { useContext, createContext, useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../firebase"
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

const storeInDB = async (Data) => {
    if (Data) {
        try {
            await setDoc(doc(db, "users", Data?.email), {
                id: Data?.uid,
                email: Data?.email,
                name: Data?.displayName,
                photo: Data?.photoURL,
                verified: Data?.emailVerified,
                isAnonymous: Data?.isAnonymous
            });

            console.log("Document written with ID: ", Data?.email);
            console.log(Data)
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    else {
        return 0
    }
}

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider);
        
    }

    const logOut = () => {
        signOut(auth)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            storeInDB(user)
        });
        return () => unsubscribe();

    }, [user]);


    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
            {children}
        </AuthContext.Provider>)
}

export const UserAuth = () => {
    return useContext(AuthContext)
}