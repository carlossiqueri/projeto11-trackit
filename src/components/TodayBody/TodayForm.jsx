import {
  AddHabitInput,
  ContainerButtons,
  ContainerSave,
  WeekButtons,
} from "./style";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { HABITS_URL } from "../../constants/urls";
import { HabitsContext } from "../contexts/HabitsContext";

export default function TodayForm({ setAdd }) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const {habits, setHabits} = useContext(HabitsContext)
  const [days, setDays] = useState([]);
  const [name, setName] = useState("");
  const { token } = useContext(UserContext);
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
    const body = { name, days };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    axios
      .post(HABITS_URL, body, config)
      .then((res) => {
        setName("")
        setDays([])
        {
          const config = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
  
          axios.get(HABITS_URL, config)
            .then(res => {
              console.log(res.data)
              setHabits(res.data)
          })
            .catch(err => console.log(err.response.data))
  
    }
      })
      .catch((err) => alert(err.response.data.message))
  }

  return (
    <>
      <AddHabitInput
        id="habit"
        placeholder="nome do hábito"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <ContainerButtons>
        {week.map((w, index) => (
          <WeekButtons
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
        <button onClick={submit}>Salvar</button>
      </ContainerSave>
    </>
  );
}
