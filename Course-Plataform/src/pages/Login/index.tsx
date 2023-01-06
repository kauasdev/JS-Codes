import { FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react"
import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { api } from "../../services/api";
import { Container } from "./style"

export function LoginPage(){

    const navigate = useNavigate();

    const [emailOrUsername, setEmailOrUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { login } = useContext(AuthContext);

    function changeEmailOrUsername(e: ChangeEvent<HTMLInputElement>){
        setEmailOrUsername(e.target.value);
    }

    function changePassword(e: ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value);
    }

    const redirect = () => {
        navigate("/home");
    }

    async function submitForm(e: FormEvent) {
        e.preventDefault();

        const isEmail = emailOrUsername.includes("@");


        try {
            if(!isEmail){
                login({
                    username: emailOrUsername,
                    password,
                });

            }
            
            if(isEmail){
                login({
                    email: emailOrUsername,
                    password,
                });
            }
            
            redirect()
        } catch (error) {
           return <Navigate to="/login" /> 
        }
    }

    return (
        <Container>
            <div className="image">

            </div>
            <div className="login">
                <div>
                    <h1>Login</h1>

                    <form method="post" onSubmit={submitForm}>
                        <label htmlFor="nameUsername">Email or Username</label>
                        <input
                            type="text"
                            name="emailUsername"
                            id="emailUsername"
                            onChange={changeEmailOrUsername}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={changePassword}
                        />
                        <a href="/forgot-password">Forgot Password?</a>

                        <button type="submit">Login</button>
                    </form>

                    <span className="noAccount">
                        <p>Dont have an account?</p>
                        <a href="/signup">Create Account</a>
                    </span>

                    <div className="socialMedias">
                        <a href="#" className="facebook">
                            <FacebookLogo size={30} />
                        </a>
                        <a href="#" className="google">
                            <GoogleLogo size={30} />
                        </a>
                        <a href="#" className="github">
                            <GithubLogo size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    )
}