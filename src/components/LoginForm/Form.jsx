import { FormularyField } from "./styled";
import Button from "./Button";
import { RedirectLink } from "./styled";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const navigate = useNavigate();
  function singUpRedirect() {
    navigate("/signUpPage")
  }
  return (
    <>
      <FormularyField>
        <input id="email" placeholder="email" required />
        <input id="password" placeholder="senha" required />
        <Button />
      </FormularyField>

      <RedirectLink onClick={singUpRedirect}>
        Não tem uma conta? Cadastre-se!
      </RedirectLink>
    </>
  );
}
