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
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding-left: 11px;
    margin-bottom: 6px;
  }
  input::placeholder {
    font-family: "Lexend Deca";
  }
`;

export const FormButton = styled.button`
  width: 310px;
  height: 45px;
  background: #52b6ff;
  opacity: ${(props) => (!props.opacity ? "" : "0.7")};
  border-radius: 4.63636px;
  border: none;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RedirectLink = styled.a`
  text-decoration: underline;
  font-family: "Lexend Deca";
  color: #52b6ff;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`;
