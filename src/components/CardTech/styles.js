import styled from "styled-components";

export const StyledCardTech = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-4);
    padding: 10px;
    height: 49px;
    border-radius: var(--border-radius);

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