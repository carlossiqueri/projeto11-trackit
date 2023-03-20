import { FormularyField } from "./style";
import Button from "./Button";
import { RedirectLink } from "./style";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LOGIN_URL } from "../../constants/urls";
import axios from "axios";
import Loader from "../Loader/Loader";
import { UserContext } from "../contexts/UserContext";

export default function Form({ buttonText, linkText, path, teste }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState(buttonText);
  const [disable, setDisable] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const { setToken, setUserIcon } = useContext(UserContext);
  const navigate = useNavigate();
  function changePanels() {
    navigate(path);
  }

  function login(e) {
    e.preventDefault();
    setText(<Loader />);
    setDisable(true);
    setOpacity(true);
    const body = { email, password };
    axios
      .post(LOGIN_URL, body)
      .then((res) => {
        setToken(res.data.token);
        setUserIcon(res.data.image);
        navigate("/hoje");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setText(buttonText);
        setDisable(false);
      });
  }

  return (
    <>
      <FormularyField onSubmit={login}>
        <input
          data-test="email-input"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disable ? "disabled" : ""}
          required
        />
        <input
          data-test="password-input"
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disable ? "disabled" : ""}
          required
        />
        <Button disabled={disable ? "disabled" : ""} text={text} opacity={opacity} />
      </FormularyField>

      <RedirectLink data-test="signup-link" onClick={changePanels}>
        {linkText}
      </RedirectLink>
    </>
  );
}
