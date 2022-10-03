import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Contain = styled.div`
    display: flex;
    height: 52vh;
    width: 81vh;
    background: var(--white);
    border: 1px solid var(--whitesmoke);
    border-radius: 4px;

    h1 {
        font-family: 'Source Sans Pro';
        font-size: 24px;
        line-height: 28px;
        color: var(--grey);
    }
`

export const Simulation = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const Receive = styled.div`
    width: 35%;
    background: var(--light-gray);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    h2 {
        font-family: 'Source Sans Pro';
        font-style: italic;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        text-transform: uppercase;

        color: var(--dark-blue);
    }

    hr {
        mix-blend-mode: normal;
        opacity: 0.3;
        border: 1px solid var(--blue);
        width: 161px;
        height: 2px;
    }

    div{
        font-family: 'Source Sans Pro';
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        line-height: 46px;
        color: var(--blue);
    }
`

export const ContainerReceive = styled.div`
    width: 186px;
`

export const WillReceive = styled.div`
    display: flex;
    justify-content: space-between;
    width: 84%;
`

export const Inputs = styled.form`
    width: 62%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
        font-family: 'Source Sans Pro';
        font-size: 14px;
        line-height: 16px;

        color: var(--grey);
    }

    input {
        background: var(--white);
        border: 1px solid var(--light-grey);
        border-radius: 4px;
        width: 251px;
        height: 37px;
        font-family: 'Source Sans Pro';
        font-size: 14px;
        line-height: 16px;
        color: var(--black);
        padding-left: 10px;
        box-sizing: border-box;
    }

    p {
        font-family: 'Source Sans Pro';
        font-size: 11px;
        line-height: 13px;
        color: #CECECE;
    }

    button {
        background: var(--light-grey);
        border: 1px solid var(--dark-blue);
        border-radius: 4px;
        width: 251px;
        height: 37px;
        font-family: 'Source Sans Pro';
        font-size: 14px;
        line-height: 16px;
        color: var(--dark-blue);
        padding-left: 10px;
        box-sizing: border-box;
        margin-top: 10px;
        opacity: 0.7;
    }

    button:hover {
        opacity: 1;
        cursor: pointer;
    }
`