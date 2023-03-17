import { FormularyField } from "./styled";
import Button from "./Button";
import { RedirectLink } from "./styled";
import { useNavigate } from "react-router-dom";
export default function Form({inputs}) {
  const navigate = useNavigate();
  function singUpRedirect() {
    navigate("/signUpPage")
  }
  return (
    <>
      <FormularyField>
        {inputs.map((i, index) => (
          <input key={index} id={i} placeholder={i} required />
        ))}
        <Button text={"entrar"}/>
      </FormularyField>

      <RedirectLink onClick={singUpRedirect}>
        Não tem uma conta? Cadastre-se!
      </RedirectLink>
    </>
  );
}
