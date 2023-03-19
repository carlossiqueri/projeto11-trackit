import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/contexts/UserContext";
function App() {
  const [token, setToken] = useState("");
  const [userIcon, setUserIcon] = useState("");

  const user = {token, setToken, userIcon, setUserIcon};

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage />
            }
          />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route
            path="/habitos"
            element={<HabitsPage />}
          />

          <Route path={"/historico"} element={<HistoryPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
