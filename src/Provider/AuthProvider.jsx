import { getAuth } from "firebase/auth";
import { createContext } from "react"
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const name = "Samriddha Dewan"
  
    const authInfo = {
        name
    }
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider