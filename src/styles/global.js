import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323F;

        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343841;
        --color-grey-1: #868e96;
        --color-grey-0: #f8f9fa;

        --color-sucess: #3FE864;
        --color-negative: #e83f5b;

        --font-title: 16px;
        --font-headeline: 12px;

        --border-radius: 4px;

        --font-family: 'Inter';
    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: var(--font-family);
    }

    h1, h2, h3, h4, h5, h6, p, span, input, button, label{
        font-family: var(--font-family);
    }

    body,html{
        width: 100vw;
        height: 100vh;
    }

    body {
        background: var(--color-grey-4);
        color: var(--color-grey-0);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
`