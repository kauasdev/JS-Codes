import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    background-color: var(--gray-700);
    width: 260px;
    min-height: 330px;
    height: 50%;
    max-height: 450px;
    border-radius: 10px;
    gap: 15px;
    margin: auto;

    .planName {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    h1 {
        font: normal bold 2rem "Poppins", "Inter", sans-serif;
        text-align: center;
        color: var(--green-300);

        &::after {
            content: "";
            position: absolute;
            top: 55px;
            left: 25px;
            width: 80%;
            height: 3px;
            border-radius: 10px;
            background-color: var(--green-500);
            opacity: 0.8;
        }
    }

    p:not(.price) {
        font: normal normal 0.9rem "Inter", sans-serif;
        text-align: center;
        letter-spacing: 0.005rem;
    }

    p.price {
        font: normal bold 2.5rem "Poppins", sans-serif;
        text-align: center;
        color: var(--green-300);
    }

    ul {
        list-style: none;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 5px;
            width: 100%;

            .icon {
                color: var(--green-500);
            }

            p {
                font: normal normal 1rem "Inter", sans-serif;
                text-align: center;
                margin: 0 auto;

                span {
                    color: var(--green-300);
                }
            }

            p::first-letter {
                text-transform: capitalize;
            }
        }

        li + li {
            margin-top: 5px;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        background-color: var(--green-300);
        color: var(--white);
        font: normal bold 1.4rem "Poppins", sans-serif;
        border: 0;
        border-radius: 7px;
    }
`;