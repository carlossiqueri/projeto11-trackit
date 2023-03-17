import logo from "../../images/logo.png";
import Form from "../../components/SignUpForm/Form";
import { SignUpContainer } from "./styled";

export default function LoginPage() {
  return (
    <SignUpContainer>
      <img src={logo} alt="logo" />
      <Form />
    </SignUpContainer>
  );
}
