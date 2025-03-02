import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user auth here 
    const HandleCreateUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile 
    const handleUpdateUser = (updateData) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, updateData);
    }

    // user log in 
    const handleUserLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google 
    const handleLoginWithGoogle =()=>{
        return signInWithPopup(auth, provider);
    }

    // user log out 
    const handleUserLogout = ()=>{
        return signOut(auth);
    }


    // logged in user 
    useEffect( ()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> {
            unSubscribe();
        }
    } ,[auth])


    const authInfo = {
        HandleCreateUser,
        handleUpdateUser,
        handleUserLogin,
        user,
        handleUserLogout,
        handleLoginWithGoogle,
        loading
    }
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider