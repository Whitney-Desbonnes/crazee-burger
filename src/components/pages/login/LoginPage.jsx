import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import theme from "../../../theme/index";

export default function LoginPage() {
  return (
    <LoginPageStyled>
          <Logo/>
          <LoginForm/>
    </LoginPageStyled>

  )
}

const LoginPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    height: 100vh;
    padding: 0 20px;
    background: url("/images/burger-background.jpg") rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: darken;

    /*
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background: url("../../../../public/images/burger-background.jpg") rgba(0,0,0,0.7);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-blend-mode: darken;
    }
    */
`;