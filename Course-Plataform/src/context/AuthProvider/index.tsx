import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IAuthContext, ILoginRequest, IUser } from "./types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function setUserLocalStorage(user: IUser){
    localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage(){
    const json = localStorage.getItem("u");

    if(json){
        const user = JSON.parse(json);

        return user ? user : null;
    }
}

export function AuthProvider({ children }: { children: ReactNode }){

    const [user, setUser] = useState<IUser | null>(null);
    
    useEffect(() => {
        const data = getUserLocalStorage();
        
        if(data){
            setUser(data);
        }
    }, []);
    
    const isAuthenticated = !!user;

    function logout(){
        localStorage.removeItem("u")
    }

    async function login({ username, email, password }: ILoginRequest){

        const data = email ?
        { email, password } :
        { username, password};

        try {
            const { data: dataUser } = await api.post("/user/auth", data);

            const { token, user } = dataUser;
            const { email, username } = user;

            setUser({
                email,
                username,
                token,
            });

            setUserLocalStorage({
                email,
                username,
                token,
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}