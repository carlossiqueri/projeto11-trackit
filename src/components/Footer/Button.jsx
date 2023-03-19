import { TodayButton } from "./style"
import { useNavigate } from "react-router-dom"
export default  function Button({text}){
    const navigate = useNavigate()
    function todayRedirect(){
        navigate("/hoje")
    }
    return (
        <TodayButton onClick={todayRedirect}>{text}</TodayButton>
    )
}


