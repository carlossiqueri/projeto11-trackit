import { AddHabits, AddHabitsButton } from "./style";
import NoHabbits from "./NoHabbits";
import AddSection from "./AddSection";
import { useContext, useState, useEffect } from "react";
import { HabitsContext } from "../contexts/HabitsContext";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { HABITS_URL } from "../../constants/urls";
import HabitsSection from "./HabitsSection";
export default function TodayBody() {
  const { habits, setHabits } = useContext(HabitsContext);
  const { token } = useContext(UserContext);
  const [add, setAdd] = useState(false);

  useEffect(() => {
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
  }, []);

  function toggleAdd() {
    setAdd(true);
  }
  return (
    <>
      <AddHabits data-test="habit-create-container">
        <h1>Meus hábitos</h1>
        <AddHabitsButton data-test="habit-create-btn" onClick={toggleAdd}>
          +
        </AddHabitsButton>
      </AddHabits>
      {!add ? "" : <AddSection setAdd={setAdd} />}
      {habits ? <HabitsSection /> : <NoHabbits />}
    </>
  );
}
