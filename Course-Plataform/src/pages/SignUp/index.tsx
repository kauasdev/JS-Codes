import { Eye, EyeSlash, FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./style";

export function SignUpPage(){

    const navigate = useNavigate();
    
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [error, setError] = useState<string[]>([]);
    

    const [showPass, setShowPass] = useState<boolean>(false);
    const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);

    function handleNameChange(e: ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }
    function handleUsernameChange(e: ChangeEvent<HTMLInputElement>){
        setUsername(e.target.value);
    }
    function handleEmailChange(e: ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value);   
    }
    function handlePasswordChange(e: ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value);
    }
    function handleConfirmPasswordChange(e: ChangeEvent<HTMLInputElement>){
        setConfirmPassword(e.target.value);
    }

    function removeErrorMessage(){
        setError([]);
    }

    function changePasswordView(){
        setShowPass(!showPass);
    }
    function changeConfirmPasswordView(){
        setShowConfirmPass(!showConfirmPass);
    }

    const fields = [name, username, email, password, confirmPassword];
    const nameFields = ["name", "username", "email", "password", "confirm password"];

    async function handleSubmitForm(e: FormEvent){
        e.preventDefault();

        const errors: string[] = [];

        if(password !== confirmPassword){
            errors.push("Passwords dont match! Try again");
            return;
        }
            
        if(password.length < 8){
            errors.push("The password is too short. Min. 8 characters");
            return;
        }

        setError(errors);
        setTimeout(() => {
            setError([]);
        }, 6000);
        
        const data = {
            name,
            username,
            email,
            password,
        }
        const { status } = await api.post("/user/signup", data);

        if(status === 201){
            navigate("/login");
        }

    }

    return (
        <Container>
            <div className="signUp">
                {
                    error.length ? 
                        <div className="errorMessage">
                            <div className="errors">
                                {
                                    error.map(message => {
                                        return <p key={message.length}>{message}</p>
                                    })
                                }
                            </div>
                            <button onClick={removeErrorMessage}>OK</button>
                        </div>
                    :
                    null
                }
                <div>
                    <h1>Create an account</h1>
                    <form method="post" onSubmit={handleSubmitForm}>
                        <div className="input">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input
                                type={showPass ? "text" : "password"}
                                name="password"
                                id="password"
                                onChange={handlePasswordChange}
                            />
                            {
                                showPass 
                                ? 
                                <EyeSlash className="eyeIcon" size={20} onClick={changePasswordView}/> 
                                : 
                                <Eye className="eyeIcon" size={20} onClick={changePasswordView}/>
                            }
                        </div>
                        <div className="input">
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input
                                type={showConfirmPass ? "text" : "password"}
                                name="confirm_password"
                                id="confirm_password"
                                onChange={handleConfirmPasswordChange}
                            />
                            {
                                showConfirmPass 
                                ?
                                <EyeSlash className="eyeIcon" size={20} onClick={changeConfirmPasswordView}/>
                                :
                                <Eye className="eyeIcon" size={20} onClick={changeConfirmPasswordView}/>
                            }
                        </div>

                        <button type="submit">Sign Up</button>
                    </form>

                    <span className="noAccount">
                        <p>Already have an account?</p>
                        <a href="/login">Login</a>
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
            <div className="image"></div>
        </Container>
    )
}