import { FormButton } from "./style";
function Button({ text }) {
  return <FormButton data-test="login-btn">{text}</FormButton>;
}

export default Button;
