import styled from 'styled-components';
import Logo from "../../reusable-ui/Logo";
import { BsPersonCircle } from "react-icons/bs";
import theme from "../../../theme/index";
import { Link } from 'react-router-dom';

export default function Navbar({ username }) {
    const reloadPage = () => {
        window.location.reload(false);
    }

    // render / affichage
    return (
        <NavStyled>
            <Logo onClick={reloadPage} />
            <div className="login-logout">
                <div>
                    <h1>Hey, <span className="user-name">{ username }</span></h1>
                    <Link className='button' to="/">Se déconnecter</Link>
                </div>
                <BsPersonCircle/>
            </div>
        </NavStyled>
    )
}



const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
    background-color: #ffff;

    .logo {
        width: 100%;
        max-width: 240px;
        font-size: ${theme.fonts.P3};
        margin-bottom: 0;
        cursor: pointer;
    }

    .login-logout {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${theme.colors.greyBlue};
        gap: 10px;
        font-family: "Open Sans", sans-serif;
        font-style: normal;

        h1{
            font-weight: 400;
            font-size: ${theme.fonts.P0};
            .user-name {
                color: ${theme.colors.primary};
                font-weight: 700;
            }
        } 

        .button {
            border: none;
            background-color: transparent;
            color: ${theme.colors.greyBlue};
            font-size: ${theme.fonts.XS};
            cursor: pointer;
            text-decoration: none;

            &:hover {
                border-bottom: 1px solid ${theme.colors.greyBlue};
            }
        }

        svg {
            font-size: 36px;
        }
    }
`;