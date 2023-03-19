import { AddContainer } from "./style"
import TodayForm from "./TodayForm"
export default function AddSection({setAdd}){
 
    return (
        <AddContainer>
            <TodayForm setAdd={setAdd}/>
        </AddContainer>
    )
}