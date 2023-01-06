import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:not(span)::selection {
    background-color: var(--green-300);
}

*:is(span)::selection {
    color: var(--green-500);
    background-color: var(--green-300);
}

:root {
    --white: #fff;
    --gray-100: #e1e1e6;
    --gray-300: #c4c4cc;
    --gary-400: #8d8d89;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #202024;
    --gray-900: #121214;

    --green-300: #00B37E;
    --green-500: #00875f;

    --facebook-blue: #4267B2;
    --google-red: #DB4437;
    --github-black: ##1B1F23;
}

@media (max-width: 768px){
    html {
        font-size: 87.5%;
    }
}

body {
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: "Poppins", sans-serif; 
}

a, button {
    cursor: pointer;
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    background-color: var(--gray-700);
}

::-webkit-scrollbar-thumb {
    background-color: var(--green-300);
    border-radius: 30px;
}
`;