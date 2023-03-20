import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TasksBody from "../../components/TasksBody/TasksBody";
import { TasksBodyContainer, HabitsText } from "./style";
import { HabitsContext } from "../../components/contexts/HabitsContext";
import { useContext } from "react";
import { ProgressContext } from "../../components/contexts/ProgressContext";
export default function TodayPage() {
  const { todayHabits, doneHabit } = useContext(HabitsContext);
  const { progressCounter, setProgressCounter } = useContext(ProgressContext);
  const now = new Date();
  const month = now.getMonth();
  const date = now.getDate();
  const day = now.getDay();
  let weekDay = undefined;
  let monthConverted = month + 1;
  const amountDone = doneHabit.length;
  const amountToday = todayHabits.length;

  if (day === 0) {
    weekDay = "Domingo";
  } else if (day === 1) {
    weekDay = "Segunda";
  } else if (day === 2) {
    weekDay = "Terça";
  } else if (day === 3) {
    weekDay = "Quarta";
  } else if (day === 4) {
    weekDay = "Quinta";
  } else if (day === 5) {
    weekDay = "Sexta";
  } else if (day === 6) {
    weekDay = "Sábado";
  } else {
    return;
  }

  if (amountDone === 0) {
    setProgressCounter("Nenhum hábito concluído");
  } else {
    setProgressCounter(
      `${((amountDone / amountToday) * 100).toFixed()}% dos hábitos concluídos`
    );
  }

  return (
    <>
      <Header />
      <TasksBodyContainer>
        <h1 data-test="today">
          {weekDay}, {date + "/" + monthConverted}
        </h1>
        <HabitsText
          data-test="today-counter"
          color={amountDone === 0 ? "#BABABA" : "#8FC549"}
        >
          {progressCounter}
        </HabitsText>
        <TasksBody />
      </TasksBodyContainer>
      <Footer />
    </>
  );
}
