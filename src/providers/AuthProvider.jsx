import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // signUp user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign Out
    const logOut = () => {
        return signOut(auth);
    }
    // signIn user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // onAuth State
    useEffect(() => {
       const unSubscribe= onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth changed user ', currentUser);
           setUser(currentUser);
           setLoading(false);
       })
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
         logOut,
        signInUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
