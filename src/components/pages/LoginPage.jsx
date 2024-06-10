import { useState } from "react";

function LoginPage() {
    
    // state (état, données)
    const [prenom, setPrenom] = useState('');

  // comportements
  const handleChange = (event) => {
    setPrenom(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Bonjour '+ prenom);
    setPrenom('');
  }

  // render / rendu
  return <>
    <h1>Bienvenue chez nous</h1>
    <h2>Connectez-vous</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={prenom} placeholder="Entrez votre prénom" required/>
      <input type="submit" value="Accedez à votre espace" />
    </form>
  </>
}

export default LoginPage;