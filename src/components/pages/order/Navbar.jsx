import styled from 'styled-components';
import Logo from '../../reusable-ui/Logo';
import theme from "../../../theme/index";
import Profile from './Profile';
import { refreshPage } from '../../../utils/window';

export default function Navbar({ username }) {
    // render / affichage
    return (
        <NavStyled>
            <Logo onClick={() => refreshPage()} className={"logo-navbar"} />
            <Profile username={username} />
        </NavStyled>
    )
}



const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
    background-color: #ffff;

    .logo-navbar {
        cursor: pointer;
    }
`;