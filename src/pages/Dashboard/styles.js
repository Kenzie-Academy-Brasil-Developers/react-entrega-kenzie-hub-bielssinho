import styled from "styled-components";


export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    padding: 10px;
    border-bottom: 1px solid var(--color-grey-0);

    div{
        width: 100%;
        max-width: 780px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button{
        width: 50px;
        padding: 5px;
        border: 1px solid var(--color-grey-3);
        background: var(--color-grey-3);
        border-radius: var(--border-radius);
        color: var(--color-grey-0);
        cursor: pointer;
    }

    button:hover{
        background-color: var(--color-grey-0);
        color: var(--color-grey-4);
    }
`

export const StyledInfo = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--color-grey-0);

    div{
        width: 100%;
        max-width: 780px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    h2{
        font-weight: 700px;
        font-family: var(--font-family);
    }

    @media(min-width: 750px){
        div{
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    span{
        color: var(--color-grey-1);
    }
`

export const StyledTec = styled.div`
    width: 100%;
    max-width: 780px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .add{
        width: 30px;
        height: 30px;
        color: var(--color-grey-2);;
        cursor: pointer;
    }

    .add:hover{
        color: var(--color-grey-0);
    }

    ul{
        list-style: none;
        background-color: var(--color-grey-2);
        border-radius: var(--border-radius);
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-grey-4);
        padding: 10px;
        height: 49px;
        border-radius: var(--border-radius);
    }

    h4{
        font-weight: 700px;
        font-family: var(--font-family);
    }

    div{
        display: flex;
        justify-content: space-between;
        gap: 50px;
        font-weight: 400px;
        font-family: var(--font-family);
    }

    .delete{
        cursor: pointer;
    }

    .delete:hover{
        color: red;
    }
`
