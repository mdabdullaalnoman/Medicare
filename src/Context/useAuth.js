import { useContext } from "react"
import { authContexts } from "./FirebaseProviders";

const useAuth = () =>{
    return useContext(authContexts)
}

export default useAuth;