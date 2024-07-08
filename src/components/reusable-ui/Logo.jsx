import styled from "styled-components";
import theme from "../../theme/index";


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
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    margin-bottom: 40px;
    font-size: ${theme.fonts.P6};

    h1 {
    font-family: "Amatic SC", sans-serif;
    font-weight: ${theme.weights.bold};
    font-style: normal;
    text-align: center;
    color: ${theme.colors.primary};
    text-transform: uppercase;
    }

    img {
        width: 100%;
        max-width: 200px;
    }
`;