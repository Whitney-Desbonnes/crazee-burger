import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // state (état, données)
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  // comportements
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/order/${inputValue}`);
    setInputValue('');
  }

  // render / rendu
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br/>
      <h2>Connectez-vous</h2>
      <input type="text" onChange={handleChange} value={inputValue} placeholder="Entrez votre prénom" required/>
      <input type="submit" value="Accedez à votre espace" />
    </form>
  )
}