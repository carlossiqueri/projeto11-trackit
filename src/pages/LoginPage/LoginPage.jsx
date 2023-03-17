import logo from "../../images/logo.png";
import Form from "../../components/LoginForm/Form";
import { LoginContainer } from "./styled";

export default function LoginPage() {
  return (
    <LoginContainer>
      <img src={logo} alt="logo" />
      <Form />
    </LoginContainer>
  );
}
