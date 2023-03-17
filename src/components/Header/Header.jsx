import {HabitsHeader} from "./style";
import userIcon from "../../images/userIcon.png"
export default function Header(){
    return (
        <HabitsHeader>
        <p>TrackIt</p>
        <img src={userIcon} alt="userIcon"/>
        </HabitsHeader>
    )
}