import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { getUserLocalStorage } from "../../context/AuthProvider";
import { useAuth } from "../../context/AuthProvider/useAuth";


export function PrivateRoutes({ children }: { children: JSX.Element }){
    
    const user = getUserLocalStorage();
    
    if(!user){
        return <Navigate to="/login" replace={true}/>
    }

    return children;
}