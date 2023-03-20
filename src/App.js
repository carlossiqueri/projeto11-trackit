import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/contexts/UserContext";
import { HabitsContext } from "./components/contexts/HabitsContext";
import { ProgressContext } from "./components/contexts/ProgressContext";

function App() {
  const [token, setToken] = useState("");
  const [userIcon, setUserIcon] = useState("");
  const [habits, setHabits] = useState([]);
  const [todayHabits, setTodayHabits] = useState([]);
  const [doneHabit, setDoneHabit] = useState([]);
  const [progressCounter, setProgressCounter] = useState(null);
  const user = { token, setToken, userIcon, setUserIcon };
  const userHabits = {
    habits,
    setHabits,
    todayHabits,
    setTodayHabits,
    doneHabit,
    setDoneHabit,
  };

  const progress = {progressCounter, setProgressCounter}

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <HabitsContext.Provider value={userHabits}>
          <ProgressContext.Provider value={progress}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<HabitsPage />} />

            <Route path={"/historico"} element={<HistoryPage />} />
            <Route path={"/hoje"} element={<TodayPage />} />
          </Routes>
          </ProgressContext.Provider>
        </HabitsContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
