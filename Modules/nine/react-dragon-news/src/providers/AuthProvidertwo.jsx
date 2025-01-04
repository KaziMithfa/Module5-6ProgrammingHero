// creating the AuthProvider for practice

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContexttwo = createContext(null);
// getting the firebase auth because we need this

const auth = getAuth(app);

const AuthProvidertwo = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // creating the user function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // creating the sign in function

  const LoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state changed ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribed();
    };
  }, []);

  const authInfotwo = { user, loading, createUser, LoginUser, logout };

  return (
    <AuthContexttwo.Provider value={authInfotwo}>
      {children}
    </AuthContexttwo.Provider>
  );
};

export default AuthProvidertwo;
