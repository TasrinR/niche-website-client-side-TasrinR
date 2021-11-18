import React, { useEffect, useState } from 'react';
import axios from 'axios';
import initializeFirebase from '../Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword , updateProfile } from "firebase/auth";

const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [admin , setAdmin] = useState([])
    
    initializeFirebase();
    
    const auth = getAuth();

    const handlePasswordSignup = (email, password , name , history) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError('');
            const newUser = { email, displayName: name };
            console.log(newUser)
            setUser(newUser);
            // save user to the database
            axios.post('http://localhost:5000/users', newUser)
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
        })
        .catch((error) => {
            setError(error.message);
            console.log(error);
        })
        .finally(() => setIsLoading(false));
    };
    const handlePasswordSignin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("Sign-out successful")
          }).catch((error) => {
            setError(error.message)
            console.log(error.message);
          });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
                console.log(user);
            }else{
                setUser(null)
            }
        })

        return unsubscribed;
    }, [])

    return {
        handlePasswordSignup,
        handlePasswordSignin,
        handleSignOut,
        user,
        error,
        auth,
        setIsLoading,
        setError
    };
};

export default useFirebase;