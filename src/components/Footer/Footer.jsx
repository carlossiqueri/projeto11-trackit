import { HabitsFooter, TodayButton } from "./style";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();

  function historyRedirect() {
    navigate("/historico");
  }

  function habitsRedirect() {
    navigate("/habitos");
  }

  return (
    <HabitsFooter data-test="menu">
      <a data-test="habit-link" onClick={habitsRedirect}>
        Hábitos
      </a>
      <Button text={"hoje"} />
      <a data-test="history-link" onClick={historyRedirect}>
        Histórico
      </a>
    </HabitsFooter>
  );
}
