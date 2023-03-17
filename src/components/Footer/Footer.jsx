import { HabitsFooter, TodayButton } from "./style"
import Button from "./Button"
export default function Footer(){
    return (
        <HabitsFooter>
            <a>Hábitos</a>
        <Button text={"hoje"}/>
            <a>Histórico</a>
        </HabitsFooter>
    )
}