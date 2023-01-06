import { useAuth } from "../../context/AuthProvider/useAuth";

export function HomePage(){

    const { isAuthenticated, user } = useAuth();

    return (
        <h1>Home, {`${isAuthenticated}, ${JSON.stringify(user)}`}</h1>
    )
}