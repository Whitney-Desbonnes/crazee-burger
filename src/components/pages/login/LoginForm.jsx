import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme/index";
import logo from "../../../../public/assets/img/logo-orange.png"
import burgerBackground from "../../../../public/assets/img/burger-background.jpg"
import { PiUserCircleFill } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";


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
      <div className="logo">
        Crazee <img src={logo} alt="Logo" /> Burger
      </div>
      <h1>Bienvenue chez nous&nbsp;!</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div className="input-name">
        <PiUserCircleFill />
        <input type="text" onChange={handleChange} value={inputValue} placeholder="Entrez votre prénom" required/>
      </div>
      <button>
        Accéder à mon espace <FaAngleRight />
      </button>
    </LoginFormStyled>
  )
}


const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  height: 100vh;
  background-image: url(${burgerBackground});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 20px;

  .logo, 
  h1, 
  h2 {
  font-family: "Amatic SC", sans-serif;
  font-weight: 700;
  font-style: normal;
  text-align: center;
  }

  .logo {
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P6};
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  .logo img {
    width: 100%;
    max-width: 200px;
  }

  h1 {
    font-size: ${theme.fonts.P5};
  }


  hr {
    background-color: ${theme.colors.primary};
    height: 3px;
    width: 100%;
    max-width: 400px;
    border: none;
    margin: 40px 0;
  }

  h2 {
    font-size: ${theme.fonts.P4};
  }

  .input-name,
  button {
    border-radius: ${theme.borderRadius.round};
    padding: 18px 24px;
    margin-top: 18px;
    width: 100%;
    max-width: 400px;
    font-size: ${theme.fonts.P0};
  }

  .input-name {
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 13px;

    svg {
      color:${theme.colors.greyBlue};
      font-size: ${theme.fonts.P0};
    }

    input {
      font-family: Arial, Helvetica, sans-serif;
      color: #D3D3D3;
      width: 100%;
      border: none;
    }

    input:focus {
      outline: none;
    }
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