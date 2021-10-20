import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/firebaseInit";

firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [message, setMessage] = useState('');
    const auth = getAuth();

    //firebase google sign in---------------------------------------------------------------
    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)      
    }

    // current sign in user store in user state ----------------------------------------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [user , auth])

    // signOut-----------------------------------------------------------------------------
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({})
            setMessage('log out success full')
        })
            .catch((error) => {
                setMessage(error.message)
                console.log(error.message);
            });
    }


    return {
        user,
        message,
        setUser,
        handleGoogleSignIn,
        handleSignOut
    }
}

export default useFirebase;