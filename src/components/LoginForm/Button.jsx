import { FormButton } from "./style"
function Button({text, test}){
    return (
        <FormButton data-test={test}>{text}</FormButton>
    )
}

export default Button;
