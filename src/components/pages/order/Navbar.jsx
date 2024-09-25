import styled from 'styled-components';
import Logo from "../../reusable-ui/Logo";
import theme from "../../../theme/index";
import Profile from './Profile';

export default function Navbar({ username }) {
    const reloadPage = () => {
        window.location.reload(false);
    }

    // render / affichage
    return (
        <NavStyled>
            <Logo onClick={reloadPage} />
            <Profile username={username} />
        </NavStyled>
    )
}



const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
    background-color: #ffff;
    height: 10vh;
`;