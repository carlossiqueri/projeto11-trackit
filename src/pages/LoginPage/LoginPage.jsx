import logo from "../../images/logo.png";
import Form from "../../components/LoginForm/Form";
import { LoginContainer } from "./styled";

export default function LoginPage() {
  const login = ["email", "password"];
  const buttonText = "Entrar";
  const linkText = "Não tem uma conta? Cadastre-se!";
  const path = "/signUpPage";
  return (
    <LoginContainer>
      <img src={logo} alt="logo" />
      <Form
        inputs={login}
        buttonText={buttonText}
        linkText={linkText}
        path={path}
      />
    </LoginContainer>
  );
}
