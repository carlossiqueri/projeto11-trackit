import styled from "styled-components";

export const FormularyField = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;

    input {
        width: 75%;
        max-width: 300px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 11px;
        margin-bottom: 6px;
    }
    input::placeholder{
        font-family: "Lexend Deca";
    }
`

export const FormButton = styled.button`
    width: 310px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
`

export const RedirectLink = styled.a`
    text-decoration: underline;
    font-family: "Lexend Deca";
    color: #52B6FF;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
`
