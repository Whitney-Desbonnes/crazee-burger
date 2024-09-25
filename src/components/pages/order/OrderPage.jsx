import { useParams } from "react-router-dom";
import theme from "../../../theme";
import Main from "./Main";
import Navbar from "./Navbar";
import styled from 'styled-components';


export default function OrderPage() {
    // state (état, données)
    const { username } = useParams();

    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar username={username}/>
                <Main/>
            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
  padding: 25px 20px;
  background-color: ${theme.colors.primary};
  height: 100vh;

  .container {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    height: 95vh;
    display: flex;
    flex-direction: column;
  }
`;
