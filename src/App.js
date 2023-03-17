import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} /> */}
        <Route path="/" element={<HabitsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
