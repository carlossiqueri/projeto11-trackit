import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TasksBody from "../../components/TasksBody/TasksBody";
import { TasksBodyContainer } from "./style";

export default function TodayPage(){
return (
    <>
    <Header />
    <TasksBodyContainer>
            <h1>Segunda, 17/05</h1>
            <p>Nenhum hábito concluído ainda</p>
            <TasksBody />
    </TasksBodyContainer>
    <Footer />
    </>
)
}