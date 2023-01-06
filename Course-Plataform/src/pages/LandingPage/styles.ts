import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    width: 100%;
    background-color: var(--gray-800);
    padding-top: 60px;
`;

export const Header = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: var(--gray-700);
    color: var(--white);
    z-index: 10000;

    div {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .logoDiv {
        gap: 8px;
        
        span {
            background-color: var(--green-300);
            padding: 5px;
            border-radius: 50%;
            font-size: 1.1rem;
        }
    }

    .menuDiv {
        font-size: 1rem;
        gap: 10px;
        a {
            cursor: pointer;
            text-decoration: none;
            color: var(--black);
            padding: 3px 5px;
            
            &:hover {
                color: var(--green-300);
            }
        }
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2px;
            padding: 3px;
            position: relative;
            background: none;
            border: 0;
            color: var(--white);
            font-size: 1rem;
            cursor: pointer;

            &:hover {
                color: var(--green-300);
            }
        }
    }

    .actionsDiv {
        gap: 15px;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3px 15px;
            border: 1px solid var(--green-300);
            border-radius: 20px;
            text-decoration: none;
            cursor: pointer;
        }

        .login {
                background: none;
                color: var(--green-300);
            }
            
        .signup {
            background-color: var(--green-300);
            color: var(--white);
        }
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-family: "Inter", "Poppins", sans-serif;
    color: var(--white);

    section {
        display: flex;
        width: 100%;
        height: 100%;
        min-height: 32rem;
        padding: 20px 15px;
        gap: 10px;
    }

    .getStarted {
        div.introduction, div.image {
            /* position: relative; */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100%;
            width: 50%;
 
            &.introduction {
                z-index: 5;
                gap: 25px;
                h1 {
                    text-align: left;
                    font: normal bold 3.6rem "Inter";
                    letter-spacing: 0.005rem;
                    text-align: center;
                    z-index: 1;

                    span {
                        color: var(--green-300);
                    }
                }

                p {
                    font-size: 1.6rem;
                    text-align: center;
                    z-index: 1;
                }

                div.back {
                    position: absolute;
                    z-index: -1;
                    top: 15%;
                    left: 5%;
                    width: 90%;
                    height: 70%;
                    border-radius: 40px 40px 40px 0;
                    opacity: 0.03;
                    filter: blur(20px);
                    background-image: linear-gradient(var(--green-300), var(--green-500));
                }
            }

            &.image {
                img {
                    width: 100%;
                    height: 90%;
                    max-height: 30rem;
                }
            }
        }
    }

    .why {
        background-color: var(--gray-700);
        gap: 40px;
        justify-content: center;
        align-items: center;
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;

            &.text {
                width: 40%;
                flex-direction: column;
                gap: 20px;

                h1 {
                    font: normal bold 3.6rem "Poppins", "Inter", sans-serif;
                    text-align: center;
                    letter-spacing: 0.005rem;

                    span {
                        color: var(--green-300);
                    }
                }

                p {
                    font: normal normal 1.2rem "Inter", sans-serif;
                    text-align: left;
                }
            }

            &.reasons {
                width: 60%;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;

                gap: 3.5rem;
                div {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 80px;
                    
                    div {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 15px;
                        width: 48%;
                        height: 100%;
                        margin: 0 auto;
                        
                        p {
                            font: normal normal 0.9rem "Poppins", "Inter", sans-serif;
                            letter-spacing: 0.005rem;
                            text-align: center;
                            max-width: 80%;
                            margin: 0 auto;
                        }

                        .icon {
                            color: var(--green-300);
                            opacity: 0.8;
                        }
                    }
                }
            }

        }
    }

    .plans {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;
        background-color: var(--gray-800);
        padding: 10px 0;

        div:not(.planBox) {
            display: flex;
            width: 100%;
            justify-content: space-evenly;

            h1.title {
                font: normal bold 3rem "Poppins", sans-serif;
                color: var(--green-300);
            }

            &.planList {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    background-color: var(--green-300);
    z-index: 2;

    p {
        font: normal normal 1rem "Poppins", "Inter", sans-serif;
        color: var(--white);

        a {
            text-decoration: none;
            color: var(--white);

            &:hover {
                text-decoration: underline;
                color: var(--green-500);
            }
        }
    }
`;