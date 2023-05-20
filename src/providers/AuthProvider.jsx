import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'; 
import app from '../firebase/firebase.config';

export const AuthContext = createContext(); 
const auth = getAuth(app); 

const AuthProvider = ({ children }) => {
  const  [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password); 
  }

  const signIn = (email, password) => {
    setLoading(true); 
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateDisplayName = (displayName) => {
    setLoading(true);
    return auth.currentUser.updateProfile({ displayName });
  };

  const updatePhotoUrl = (photoUrl) => {
    setLoading(true);
    return auth.currentUser.updateProfile({ photoURL: photoUrl });
  };


  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in
        console.log(currentUser);
        const { displayName, photoURL } = currentUser;
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: displayName || '',
          photoURL: photoURL || '',
        });
      } else {
        // User is signed out
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user, 
    loading,
    createUser,
    signIn,
    updateDisplayName,
    updatePhotoUrl,
    logOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;