import { TodayButton } from "./style";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProgressContext } from "../contexts/ProgressContext";
import { HabitsContext } from "../contexts/HabitsContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Button({ text }) {
  const navigate = useNavigate();
  const { todayHabits, doneHabit } = useContext(HabitsContext);
  let progressBar = null;
  if (doneHabit === 0) {
    progressBar = 0;
  } else {
    progressBar = (doneHabit.length / todayHabits.length) * 100;
  }
  function todayRedirect() {
    navigate("/hoje");
  }
  return (
    <TodayButton data-test="today-link" onClick={todayRedirect}>
      <CircularProgressbar
        value={progressBar}
        text={"Hoje"}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#ffffff",
          pathColor: "#ffffff",
          trailColor: "transparent",
        })}
      />
    </TodayButton>
  );
}
