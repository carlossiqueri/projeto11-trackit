import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/contexts/UserContext";
import { HabitsContext } from "./components/contexts/HabitsContext";
function App() {
  const [token, setToken] = useState("");
  const [userIcon, setUserIcon] = useState("");
  const [habits, setHabits] = useState([]);

  const user = { token, setToken, userIcon, setUserIcon };
  const userHabits = { habits, setHabits };

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <HabitsContext.Provider value={userHabits}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<HabitsPage />} />

            <Route path={"/historico"} element={<HistoryPage />} />
            <Route path={"/hoje"} element={<TodayPage />} />
          </Routes>
        </HabitsContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
