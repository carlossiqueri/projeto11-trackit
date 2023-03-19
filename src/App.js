import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [token, setToken] = useState("");
  const [userIcon, setUserIcon] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken} setUserIcon={setUserIcon}/>} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/habitos" element={<HabitsPage token={token} userIcon={userIcon}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
