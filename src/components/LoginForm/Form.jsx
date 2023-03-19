import { FormularyField } from "./style";
import Button from "./Button";
import { RedirectLink } from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LOGIN_URL
 } from "../../constants/urls";
 import axios from "axios";
 import Loader from "../Loader/Loader";

export default function Form({ buttonText, linkText, path, setToken, setUserIcon }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState(buttonText)
  const [disable, setDisable] = useState(false)
  const [opacity, setOpacity] = useState(false)

  const navigate = useNavigate();
  function changePanels() {
    navigate(path);
  }

  function login(e){
    e.preventDefault();
    setText(<Loader />)
    setDisable(true);
    setOpacity(true)
    const body = { email, password};
    axios.post(LOGIN_URL, body)
        .then(res => {
          setToken(res.data.token)
          setUserIcon(res.data.image)
          navigate("/habitos")
        })
        .catch(err => {
          console.log(err)
          setText(buttonText)
          setDisable(false)
        })
  }

  return (
    <>
      <FormularyField onSubmit={login}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disable ? "disabled" : ""}
          required
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disable ? "disabled" : ""}
          required
        />
        <Button text={text} opacity={opacity}/>
      </FormularyField>

      <RedirectLink onClick={changePanels}>{linkText}</RedirectLink>
    </>
  );
}
