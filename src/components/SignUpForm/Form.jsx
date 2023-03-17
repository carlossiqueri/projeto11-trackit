import { FormularyField, RedirectLink } from "../LoginForm/styled";
import Button from "../LoginForm/Button";
import { useNavigate } from "react-router-dom";
export default function Form({ inputs }) {
  const navigate = useNavigate();
  function loginRedirect() {
    navigate("/");
  }
  return (
    <>
      <FormularyField>
        {inputs.map((i, index) => (
          <input key={index} id={i} placeholder={i} required />
        ))}

        <Button text={"cadastrar"} />
      </FormularyField>

      <RedirectLink onClick={loginRedirect}>
        Já tem uma conta? Faça login!
      </RedirectLink>
    </>
  );
}
