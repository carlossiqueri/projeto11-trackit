import logo from "../../images/logo.png";
import Form from "../../components/LoginForm/Form";
import { LoginContainer } from "./style";

export default function LoginPage({setToken, setUserIcon}) {
  const login = ["email", "senha"];
  const buttonText = "Entrar";
  const linkText = "Não tem uma conta? Cadastre-se!";
  const path = "/cadastro";
  return (
    <LoginContainer>
      <img src={logo} alt="logo" />
      <Form
        inputs={login}
        buttonText={buttonText}
        linkText={linkText}
        path={path}
        setToken={setToken}
        setUserIcon={setUserIcon}
      />
    </LoginContainer>
  );
}
