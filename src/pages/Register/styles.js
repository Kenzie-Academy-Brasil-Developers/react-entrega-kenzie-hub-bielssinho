import styled from "styled-components";

export const FormRegister = styled.form`
    background: var(--color-grey-3);
    padding: 10px;
    width: 95%;
    max-width: 550px;
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    gap: 15px;

    h3{
        text-align: center;
        font-size: var(--font-title);
        font-weight: 700;
    }

    label{
        font-size: var(--font-headeline);
        font-weight: 600;
    }

    input{
        height: 48px;
        border: 1px solid var(--color-grey-2);
        background: var(--color-grey-2);
        border-radius: var(--border-radius);
        padding: 5px;
        color: var(--color-grey-0);
    }

    button{
        height: 48px;
        border: 1px solid var(--color-primary);
        background: var(--color-primary);
        border-radius: var(--border-radius);
        color: var(--color-grey-0);
        font-weight: 700;
        cursor: pointer;
    }

    span{
        text-align: center;
        color: var(--color-grey-1);
        font-size: var(--font-headeline);
    }

    select{
        height: 48px;
        border: 1px solid var(--color-grey-2);
        background: var(--color-grey-2);
        border-radius: var(--border-radius);
        color: var(--color-grey-1);
        cursor: pointer;
    }

    a{
        text-decoration: none;
        background-color: var(--color-grey-1);
        text-align: center;
        padding: 12px;
        border-radius: var(--border-radius);
        font-weight: 700px;
        color: var(--color-grey-0);
        cursor: pointer;
    }
`