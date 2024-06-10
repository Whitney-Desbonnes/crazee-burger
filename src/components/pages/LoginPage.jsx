import { useState } from "react";

export default function LoginPage() {
    
    // state (état, données)
    const [inputValue, setInputValue] = useState('');

  // comportements
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue('');
  }

  // render / rendu
  return <>
      <h1>Bienvenue chez nous</h1>
      <br>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} placeholder="Entrez votre prénom" required/>
        <input type="submit" value="Accedez à votre espace" />
      </form>
    </>
}