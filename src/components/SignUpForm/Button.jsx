import { FormButton } from "./style"
function Button({text}){
    return (
        <FormButton data-test="signup-btn">{text}</FormButton>
    )
}

export default Button;
