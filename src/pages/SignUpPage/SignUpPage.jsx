import logo from "../../images/logo.png";
import Form from "../../components/SignUpForm/Form";
import { SignUpContainer } from "./styled";

export default function SignUpPage() {
  const signUp = ["email", "password", "name", "picture"];
  return (
    <SignUpContainer>
      <img src={logo} alt="logo" />
      <Form inputs={signUp}/>
    </SignUpContainer>
  );
}
