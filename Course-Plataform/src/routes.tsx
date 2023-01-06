import { ReactDOM } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { PrivateRoutes } from "./components/PrivateRoutes";
import { HomePage } from "./pages/Home";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";


export function AppRoutes(){
    return (
            <BrowserRouter>
                <Routes>
                    {/* <Route path="" element={}/> */}
                    <Route index element={<LandingPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/signup" element={<SignUpPage />}/>
                    <Route path="/home" element={
                        <PrivateRoutes>
                            <HomePage />
                        </PrivateRoutes>
                    } />
                </Routes>
            </BrowserRouter>
        )
}