import {
  AddHabitInput,
  ContainerButtons,
  ContainerSave,
  WeekButtons,
} from "./style";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import axios from "axios";
import { HABITS_URL } from "../../constants/urls";
import { HabitsContext } from "../contexts/HabitsContext";
import Loader from "../Loader/Loader";
// import HabitsButton from "./HabitsButton";

export default function TodayForm({ setAdd, saveButton }) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { habits, setHabits } = useContext(HabitsContext);
  const { token } = useContext(UserContext);
  const [days, setDays] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState(saveButton);
  const [disable, setDisable] = useState(false);
  function toggleAddOff() {
    setAdd(false);
  }

  function saveDay(w) {
    if (days.includes(w)) {
      const filtro = days.filter((f) => f !== w);
      setDays(filtro);
    } else {
      setDays([...days, w]);
    }
  }

  function submit(e) {
    e.preventDefault();
    setText(<Loader />);
    setDisable(true);
    const body = { name, days };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(HABITS_URL, body, config)
      .then((res) => {
        setText(saveButton);
        setDisable(false);
        setName("");
        setDays([]);
        {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          axios
            .get(HABITS_URL, config)
            .then((res) => {
              console.log(res.data);
              setHabits(res.data);
            })
            .catch((err) => console.log(err.response.data));
        }
      })
      .catch((err) => alert(err.response.data.message));
  }

  return (
    <>
      <AddHabitInput
        disabled={disable ? "disabled" : ""}
        id="habit"
        placeholder="nome do hábito"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <ContainerButtons>
        {week.map((w, index) => (
          <WeekButtons
            disabled={disable ? "disabled" : ""}
            color={days.includes(index) ? "#FFFFFF" : "#CFCFCF"}
            background={!days.includes(index) ? "#FFFFFF" : "#CFCFCF"}
            onClick={() => saveDay(index)}
            key={index}
          >
            {w}
          </WeekButtons>
        ))}
      </ContainerButtons>

      <ContainerSave>
        <span onClick={toggleAddOff}>Cancelar</span>
        <button onClick={submit}>{text}</button>
      </ContainerSave>
    </>
  );
}
