import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: var(--gray-800);

    div {
        display: flex;
        height: 100%;
    }

    div.image {
        /* background-color: var(--gray-700); */
        width: 60%;
    } 

    div.login {
        /* background-color: var(--gray-800); */
        width: 40%;
        justify-content: center;
        align-items: center;

        div {
            flex-direction: column;
            justify-content: space-between;
            width: 350px;
            max-height: 400px;
            border-radius: 10px;
            background-color: var(--gray-700);
            padding: 10px 20px;

            h1 {
                font: normal bold 2.5rem "Poppins", "Inter", sans-serif;
                color: var(--green-300);
                letter-spacing: 0.005rem;
                text-align: center;
            }

            form {
                display: flex;
                flex-direction: column;
                width: 100%;

                label {
                    font: normal normal 0.9rem "Poppins", "Inter", sans-serif;
                    margin: 5px 0;
                    color: var(--green-300);
                }
                
                input {
                    width: 100%;
                    height: 35px;
                    background-color: var(--gray-600);
                    border: 0;
                    border-radius: 7px;
                    outline: none;
                    padding: 5px 10px;
                    color: var(--white);
                }
                
                a {
                    font: normal normal 0.8rem "Poppins", "Inter", sans-serif;
                    text-decoration: none;
                    color: var(--green-300);
                    text-align: right;
                    margin: 10px 0;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                button {
                    display: flex;
                    width: 100%;
                    height: 40px;
                    justify-content: center;
                    align-items: center;
                    border: 0;
                    border-radius: 7px;
                    background-color: var(--green-300);
                    color: var(--white);
                    font: normal bold 1.2rem "Poppins", "Inter", sans-serif;
                    
                }
            }

            span.noAccount {
                display: flex;
                font: normal normal 0.7rem "Poppins", "Inter", sans-serif;
                margin: 10px 0;
                align-self: flex-end;
                letter-spacing: 0.005rem;
                gap: 3px;
                p {
                    color: var(--white);
                }
                a {
                    text-decoration: none;
                    color: var(--green-300);

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            div.socialMedias {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                width: 100%;
                height: 60px;

                a {
                    height: 100%;
                    width: 40px;
                    color: var(--white);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                    border: 0;
                    border-radius: 50%;
                    cursor: pointer;
                    text-decoration: none;

                    &.facebook {
                        background-color: var(--facebook-blue);
                    }

                    &.google {
                        background-color: var(--google-red);
                    }

                    &.github {
                        background-color: var(--gray-600);
                    }
                }
            }
        }
    }
`;