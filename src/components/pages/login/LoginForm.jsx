import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme/index";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import Input from "./Input";


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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous&nbsp;!</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <Input 
          value={inputValue} 
          onChange={handleChange} 
          placeholder="Entrez votre prénom" 
          required
          Icon={<BsPersonCircle/>}
        />
        <button>
          <span>Accéder à mon espace</span>
          <IoChevronForward />
        </button>
      </div>
    </LoginFormStyled>
  )
}


const LoginFormStyled = styled.form`
  width: 100%;
  max-width: 400px;

  h1, 
  h2 {
  font-family: "Amatic SC", sans-serif;
  font-weight: 700;
  font-style: normal;
  text-align: center;
  }
  
  h1 {
    font-size: ${theme.fonts.P5};
  }


  hr {
    background-color: #F56A2C;
    height: 3px;
    width: 100%;
    max-width: 400px;
    border: none;
    margin: 40px 0;
  }

  h2 {
    font-size: ${theme.fonts.P4};
  }

  button {
    border-radius: ${theme.borderRadius.round};
    padding: 18px 24px;
    margin-top: 18px;
    width: 100%;
    max-width: 400px;
    font-size: ${theme.fonts.P0};
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  button,
  button:focus {
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary_burger};
    cursor: pointer;
  }

  button:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
  }
`