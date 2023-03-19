import { AddHabits, AddHabitsButton } from "./style";
import NoHabbits from "./NoHabbits";
import AddSection from "./AddSection";
export default function TodayBody(){
    return (
        <>
        <AddHabits>
            <h1>Meus hábitos</h1>
        <AddHabitsButton>+</AddHabitsButton>
        </AddHabits>
        <AddSection />
        <NoHabbits />
        </>
    )
}