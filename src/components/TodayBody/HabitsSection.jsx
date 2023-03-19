import { HabitsContainer, HabitsWeekButton, ContainerHabitsWeekButton } from "./style";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { HabitsContext } from "../contexts/HabitsContext";
import { TrashOutline } from "react-ionicons";
import axios from "axios";
import { HABITS_URL } from "../../constants/urls";

export default function HabitsSection() {
const { habits, setHabits } = useContext(HabitsContext);
const {token, setToken} = useContext(UserContext)
const week = ["D", "S", "T", "Q", "Q", "S", "S"];


  function deleteConfirmation(i){
    if(window.confirm("Você tem certeza que deseja apagar esta tarefa? (Você não vai conseguir desfazer esta ação)")){
        const DELETE_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i}`
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
              }
        }
        axios.delete(DELETE_URL, config)
            .then(res => {
                console.log("deleted")
                axios.get(HABITS_URL, config)
                .then(res => {
              console.log(res.data)
              setHabits(res.data)
          })
            .catch(err => console.log(err.response.data))
            })
            .catch(err => console.log(err.response.data))
    }else{
        console.log("ok")
    }
  }


  return (
    <>
      {habits.map((h, index) => (
        <HabitsContainer key={index}>
          <h2>{h.name}</h2>
          <ContainerHabitsWeekButton>
          {week.map((d, index) => {  
            if(h.days.includes(index)){
                return <HabitsWeekButton background={"#CFCFCF"} color={"#ffffff"}>{d}</HabitsWeekButton>
            }else{
                return <HabitsWeekButton background={"#ffffff"} color={"#CFCFCF"}>{d}</HabitsWeekButton>
            }
           
          })}
          <TrashOutline
            onClick={() => deleteConfirmation(h.id)}
            color={"#00000"}
            height="20px"
            width="20px"
            style={{ position: "absolute", top: 11, right: 10 }}
          />
          </ContainerHabitsWeekButton>
        </HabitsContainer>
      ))}
    </>
  );
}
