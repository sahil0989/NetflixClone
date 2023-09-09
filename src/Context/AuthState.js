import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { auth, googleProvider, db } from "../Firebase";
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

export default function AuthState(props) {
    const [user, setUser] = useState({})

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
        });

        return () => {
            unSubscribe();
        }
    }, [])

    const signIn = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            return result;
        } catch (err) {
            return false;
        }
    }

    const signUp = async (email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "Users", email), {
                savedMovies: []
              });
            return result;
        } catch (err) {
            console.log(err.message);
            return false;
        }
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.log(err.message);
        }
    }

    const logout = () => {
        try {
            signOut(auth)
        } catch (err) {
            console.log(err.message);
        }
    }


    return (
        <AuthContext.Provider value={{ user, signIn, logout, signInWithGoogle, signUp }}>
            {props.children}
        </AuthContext.Provider>
    )

}