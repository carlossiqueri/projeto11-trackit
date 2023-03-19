import {HabitsHeader} from "./style";

export default function Header({userIcon}){
    return (
        <HabitsHeader>
        <p>TrackIt</p>
        <img src={userIcon} alt="userIcon"/>
        {console.log(userIcon)}
        </HabitsHeader>
    )
}