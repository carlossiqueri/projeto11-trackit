import { FormularyField } from "./style";
import Button from "../LoginForm/Button";
import { RedirectLink } from "./style";
import { useNavigate } from "react-router-dom";
import { SIGNUP_URL } from "../../constants/urls";
import axios from "axios";
import { useState } from "react";
import Loader from "../Loader/Loader";
export default function Form({ buttonText, linkText, path }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState(buttonText)
  const [disable, setDisable] = useState(false)
  function singUp(e) {
    e.preventDefault();
    setText(<Loader />)
    setDisable(true);
    const body = { email, password, name, image };
    axios.post(SIGNUP_URL, body)
        .then(res => navigate(path))
        .catch(err => {
          alert(err.response.data.message)
          setText(buttonText)
          setDisable(false)
        })
    
  }

  const navigate = useNavigate();
  function changePanels() {
    navigate(path);
  }

  return (
    <>
      <FormularyField onSubmit={singUp}>
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
        <input
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disable ? "disabled" : ""}
          required
        />
        <input
          type="text"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={disable ? "disabled" : ""}
          required
        />
        <Button text={text} />
      </FormularyField>

      <RedirectLink onClick={changePanels}>{linkText}</RedirectLink>
    </>
  );
}
