import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user auth here 
    const HandleCreateUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile 
    const handleUpdateUser = (updateData) =>{
        return updateProfile(auth.currentUser, updateData);
    }

    // user log in 
    const handleUserLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // user log out 
    const handleUserLogout = ()=>{
        return signOut(auth);
    }


    // logged in user 
    useEffect( ()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log(currentUser);
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
        handleUserLogout
    }
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider