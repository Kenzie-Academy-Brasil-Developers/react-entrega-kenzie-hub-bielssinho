import styled from 'styled-components';

export const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0,0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        background-color: var(--color-grey-3);
        width: 95%;
        max-width: 500px;
        border-radius: var(--border-radius);
    }

`

export const HeaderModal = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--color-grey-2);
        border-radius: 4px 4px 0px 0px;
        height: 44px;
        padding: 20px;
    

    h5{
        font-weight: 700;
        font-family: var(--font-family);
    }

    button{
        background-color: transparent;
        border: none;
        color: var(--color-grey-1);
        font-family: var(--font-family);
        font-weight: 700;
        cursor: pointer;
    }
`

export const BodyModal = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;

    label{
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-weight: 600;
        font-family: var(--font-family);
        font-size: var(--font-headeline);
    }

    input{
        height: 48px;
        border-radius: var(--border-radius);
        border: 1px solid var(--color-grey-2);
        background-color: var(--color-grey-2);
        color: var(--color-grey-0);
        padding: 5px;
    }

    select{
        height: 48px;
        border-radius: var(--border-radius);
        border: 1px solid var(--color-grey-2);
        background-color: var(--color-grey-2);
        color: var(--color-grey-0);
        cursor: pointer;
    }

    button{
        height: 48px;
        border-radius: var(--border-radius);
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--color-grey-0);
        cursor: pointer;
    }
`