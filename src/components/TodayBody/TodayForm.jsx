import { AddHabitInput, ContainerButtons, ContainerSave } from "./style"
export default function TodayForm(){
    const week = ["D", "S", "T", "Q", "Q", "S", "S"]
    return (
        <>
        <AddHabitInput 
        id="habbit"
        placeholder="nome do hábito"
        required
        />
        <ContainerButtons>
        {week.map((w, index) => (
            <button key={index}>{w}</button>
        ))}
        </ContainerButtons>
        
        <ContainerSave>
        <span>Cancelar</span>
        <button>Salvar</button>
        </ContainerSave>
        </>
    )
}