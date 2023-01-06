import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: var(--gray-800);

    div:not(.errorMessage) {
        display: flex;
        height: 100%;
    }

    div.errorMessage {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        min-height: 100px;
        background-color: var(--gray-700);
        padding: 10px;
        border-radius: 10px;
        gap: 10px;

        div {
            max-width: 100%;
            border-radius: 0;
            padding: 0;
        }

        p {
            font: normal normal 1.2rem "Poppins", "Inter", sans-serif;
            text-align: left;
            color: var(--green-300);

            &+p {
                margin-top: 10px;
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

    div.signUp {
        width: 40%;
        justify-content: center;
        align-items: center;
        
        div:not(.errorMessage), div:not(.input) {
            flex-direction: column;
            justify-content: space-between;
            width: 360px;
            max-height: 520px;
            border-radius: 10px;
            background-color: var(--gray-700);
            padding: 10px 15px;

            h1 {
                font: normal bold 2rem "Poppins", "Inter", sans-serif;
                color: var(--green-300);
                letter-spacing: 0.005rem;
                text-align: center;
                margin-bottom: -5px;
            }

            form {
                display: flex;
                flex-direction: column;
                width: 100%;

                div {
                    position: relative;
                    display: flex;
                    width: 100%;
                    height: 65px;
                    padding: 0;
                    border-radius: 0;

                    .eyeIcon {
                        position: absolute;
                        top: 60%;
                        right: 10px;
                        color: var(--white);
                    }

                    label {
                        font: normal normal 0.9rem "Poppins", "Inter", sans-serif;
                        margin: 6px 0 0 0;
                        color: var(--green-300);
                    }
                    
                    input {
                        width: 100%;
                        min-height: 32px;
                        background-color: var(--gray-600);
                        border: 0;
                        border-radius: 7px;
                        outline: none;
                        padding: 5px 10px;
                        color: var(--white);
                    }
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
                    min-height: 35px;
                    justify-content: center;
                    align-items: center;
                    border: 0;
                    border-radius: 7px;
                    background-color: var(--green-300);
                    color: var(--white);
                    font: normal bold 1.2rem "Poppins", "Inter", sans-serif;
                    margin: 20px 0 5px 0;
                }
            }

            span.noAccount {
                display: flex;
                font: normal normal 0.7rem "Poppins", "Inter", sans-serif;
                margin: 3px 0;
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
                height: 50px;

                a {
                    height: 100%;
                    width: 30px;
                    color: var(--white);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 3px;
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

    div.image {
        width: 60%;
    }
`;