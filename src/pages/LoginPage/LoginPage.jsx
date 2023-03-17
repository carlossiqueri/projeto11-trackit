import logo from "../../images/logo.png";
import Form from "../../components/LoginForm/Form";
import { LoginContainer } from "./styled";

export default function LoginPage() {
  const login =  ["email", "password"];
  return (
    <LoginContainer>
      <img src={logo} alt="logo" />
      <Form inputs={login} />
    </LoginContainer>
  );
}
