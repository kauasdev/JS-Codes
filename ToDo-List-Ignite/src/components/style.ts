import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-width: 100%;
    height: 60px;
    background-color: var(--gray-500);
    padding: 5px 10px;
    align-items: center;

    input {
        border: 1px solid var(--blue);
        background: none;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border-radius: 50%;
    }

    p {
        font-family: "Inter", sans-serif;
        color: var(--gray-100);
    }

    .finished {
        text-decoration: line-through;
    }

    img {
        position: absolute;
        right: 10px;
    }

    & + & {
        margin-top: 10px;
    }
`;