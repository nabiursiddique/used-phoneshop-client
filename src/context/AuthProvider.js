import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // creating user with email
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user with email
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google sign in
    const googleSignIn = (googleAuthProvider) => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    // logout
    const logout = () => {
        return signOut(auth);
    }

    // Getting user's information
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }

    // For observing the user if logged in or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])


    const authInfo = {
        createUser,
        signIn,
        googleSignIn,
        logout,
        user,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;