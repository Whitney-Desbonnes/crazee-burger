import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import theme from "../../../theme/index";

export default function LoginPage() {
  return (
    <LoginPageStyled>
          <Logo className={"logo-login-page"}/>
          <LoginForm/>
    </LoginPageStyled>

  )
}

const LoginPageStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    padding: 0 20px;
    background: url("/images/burger-background.jpg") rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: darken;

    .logo-login-page {
      transform: translateY(-100%) scale(2.5);
    }

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