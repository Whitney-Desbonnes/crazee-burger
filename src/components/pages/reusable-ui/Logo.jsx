import styled from "styled-components";
import theme from "../../../theme/index";


export default function Logo() {
    return(
        <LogoStyled className="logo">
            <h1>Crazee</h1>
            <img src="/images/logo-orange.png" alt="Logo" /> 
            <h1>Burger</h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    font-family: "Amatic SC", sans-serif;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P6};
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    text-transform: uppercase;
    margin-bottom: 40px;

    img {
        width: 100%;
        max-width: 200px;
    }
`;