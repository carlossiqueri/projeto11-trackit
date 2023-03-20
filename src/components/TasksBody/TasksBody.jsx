import { TasksContainer, CheckButton, Sequence, Record } from "./style";
import button from "../../images/button.png";
import { HabitsContext } from "../contexts/HabitsContext";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { TODAY_URL } from "../../constants/urls";
import axios from "axios";
export default function TasksBody() {
  const { todayHabits, setTodayHabits, doneHabit, setDoneHabit } =
    useContext(HabitsContext);
  const { token } = useContext(UserContext);

  function checkHabit(i, done) {
    const CHECK_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i}/check`;
    const UNCHECK_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i}/uncheck`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (!done) {
      axios
        .post(CHECK_URL, {}, config)
        .then((res) => {
          setDoneHabit([...doneHabit, i]);
          axios
            .get(TODAY_URL, config)
            .then((res) => {
              setTodayHabits(res.data);
            })
            .catch((err) => console.log(err.response.data.message));
        })
        .catch((err) => console.log(err.response.data.message));
    } else {
      axios
        .post(UNCHECK_URL, {}, config)
        .then((res) => {
          const newChecked = doneHabit.filter((f) => f !== i);
          setDoneHabit(newChecked);
          axios
            .get(TODAY_URL, config)
            .then((res) => {
              setTodayHabits(res.data);
            })
            .catch((err) => console.log(err.response.data.message));
        })
        .catch((err) => console.log(err.response.data.message));
    }
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(TODAY_URL, config)
      .then((res) => {
        setTodayHabits(res.data);
      })
      .catch((err) => alert(err.response.data.message));
  }, []);

  return (
    <>
      {todayHabits.map((h) => (
        <TasksContainer data-test="today-habit-container" key={h.id}>
          <h2 data-test="today-habit-name">{h.name}</h2>
          <Sequence
            data-test="today-habit-sequence"
            color={
              h.currentSequence >= h.highestSequence && h.currentSequence > 0
                ? "#8FC549"
                : "#666666"
            }
          >
            Sequência Atual: {h.currentSequence} dias
          </Sequence>
          <Record data-test="today-habit-record">
            Seu recorde: {h.highestSequence} dias
          </Record>
          <CheckButton
            data-test="today-habit-check-btn"
            color={h.done ? "#8FC549" : "#ebebeb"}
            onClick={() => checkHabit(h.id, h.done, h)}
          >
            <img src={button} alt="checkmark do botão" />{" "}
          </CheckButton>
        </TasksContainer>
      ))}
    </>
  );
}
