import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme/index";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";


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
        <TextInput 
          value={inputValue} 
          onChange={handleChange} 
          placeholder="Entrez votre prénom" 
          required
          Icon={<BsPersonCircle className="input-text-icon"/>}
        />
        <PrimaryButton
        Icon={<IoChevronForward/>}
        label="Accéder à mon espace"
        />
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

  .input-text-icon {
    color:${theme.colors.greyBlue};
      font-size: ${theme.fonts.P0};
  }
`