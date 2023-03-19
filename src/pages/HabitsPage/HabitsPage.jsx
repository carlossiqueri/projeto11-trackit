import {HabitsBody} from "./style"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import TodayBody from "../../components/TodayBody/TodayBody"

export default function HabitsPage (){
    return (
        <>
        <Header />
        <HabitsBody>
            <TodayBody />
        </HabitsBody>
        <Footer />
        </>
    )
}