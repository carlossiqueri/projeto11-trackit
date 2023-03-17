import { FormularyField, RedirectLink } from "../LoginForm/styled"
import Button from "../LoginForm/Button"
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
            <Button text={"cadastrar"}/>
        </FormularyField>

        <RedirectLink onClick={loginRedirect}>Já tem uma conta? Faça login!</RedirectLink>
        </>
    )
}