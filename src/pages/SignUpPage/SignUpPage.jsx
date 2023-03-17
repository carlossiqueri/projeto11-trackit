import logo from "../../images/logo.png";
import { SignUpContainer } from "./styled";
import Form from "../../components/LoginForm/Form";

export default function SignUpPage() {
  const signUp = ["email", "password", "name", "picture"];
  const buttonText = "Cadastrar";
  const linkText = "Já tem uma conta? Faça login!";
  const path = "/";
  return (
    <SignUpContainer>
      <img src={logo} alt="logo" />
      <Form
        inputs={signUp}
        buttonText={buttonText}
        linkText={linkText}
        path={path}
      />
    </SignUpContainer>
  );
}
