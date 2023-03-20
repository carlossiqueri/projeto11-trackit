import { HabitsFooter, TodayButton } from "./style"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
export default function Footer(){
    const navigate = useNavigate();
    
    function historyRedirect(){
        navigate("/historico")
    }

    function habitsRedirect(){
        navigate("/habitos")
    }


    return (
        <HabitsFooter>
            <a onClick={habitsRedirect}>Hábitos</a>
        <Button  text={"hoje"} />
            <a onClick={historyRedirect}>Histórico</a>
        </HabitsFooter>
    )
}