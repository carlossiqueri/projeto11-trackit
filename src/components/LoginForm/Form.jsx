import { FormularyField } from "./styled";
import Button from "./Button";
import { RedirectLink } from "./styled";
import { useNavigate } from "react-router-dom";
export default function Form({inputs, buttonText, linkText,path}) {
  const navigate = useNavigate();
  function changePanels() {
    navigate(path)
  }
  return (
    <>
      <FormularyField>
        {inputs.map((i, index) => (
          <input key={index} id={i} placeholder={i} required />
        ))}
        <Button text={buttonText}/>
      </FormularyField>

      <RedirectLink onClick={changePanels}>
        {linkText}
      </RedirectLink>
    </>
  );
}
