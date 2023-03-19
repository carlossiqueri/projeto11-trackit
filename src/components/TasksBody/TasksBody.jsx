import { TasksContainer, CheckButton } from "./style";
import button from "../../images/button.png"

export default function TasksBody(){
return (
    <>
    <TasksContainer>
        <h2>Ler 1 capítulo de livro</h2>
        <span>Sequência Atual: 3 dias</span>
        <span>Seu recorde: 5 dias</span>
        <CheckButton><img src={button} alt="checkmark do botão"/> </CheckButton>
    </TasksContainer>


    </>
)
}

