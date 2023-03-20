import logo from "../../images/logo.png";
import { SignUpContainer } from "./style";
import Form from "../../components/SignUpForm/Form";

export default function SignUpPage({ redirectButton }) {
  const signUp = ["email", "senha", "nome", "foto"];
  const buttonText = "Cadastrar";
  const linkText = "Já tem uma conta? Faça login!";
  const path = "/";

  return (
    <SignUpContainer>
      <img src={logo} alt="logo" />
      <Form buttonText={buttonText} linkText={linkText} path={path} />
    </SignUpContainer>
  );
}
