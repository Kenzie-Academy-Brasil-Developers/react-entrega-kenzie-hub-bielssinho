import styled from "styled-components";

export const ContainerLogin = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        padding: 10px;
    }

    img{
        width: 150px;
    }

`

export const ContainerRegister = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    

    div{
        width: 100%;
        max-width: 560px;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    a{
        text-decoration: none;
        background: var(--color-grey-2);
        text-align: center;
        padding: 5px;
        border-radius: var(--border-radius);
        color: var(--color-grey-0);
        font-weight: 700px;
    }

    img{
        width: 150px;
    }

`