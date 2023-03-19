import {HabitsBody} from "./style"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import TodayBody from "../../components/TodayBody/TodayBody"

export default function HabitsPage ({userIcon}){
    return (
        <>
        <Header userIcon={userIcon}/>
        <HabitsBody>
            <TodayBody />
        </HabitsBody>
        <Footer />
        </>
    )
}