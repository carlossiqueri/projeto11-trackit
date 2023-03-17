import { FormularyField } from "./styled"
import Button from "./Button"
import { RedirectLink } from "./styled"
import { useNavigate } from "react-router-dom"
export default function Form(){
    const navigate = useNavigate();
function loginRedirect(){
    navigate("/");
}
    return (
        <>
        <FormularyField>
            <input 
            id="email"
            placeholder="email"
            required
            />
            <input 
            id="password"
            placeholder="senha"
            required
            />
            <input 
            id="name"
            placeholder="nome"
            required
            />
            <input 
            id="picture"
            placeholder="foto"
            required
            />
            <Button />
        </FormularyField>

        <RedirectLink onClick={loginRedirect}>Já tem uma conta? Faça login!</RedirectLink>
        </>
    )
}