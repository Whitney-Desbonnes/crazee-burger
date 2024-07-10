import styled from 'styled-components';
import theme from '../../../theme';

export default function Main() {
  return (
    <MainStyled>
      
    </MainStyled>
  )
}


const MainStyled = styled.div`
  box-shadow: inset 0px 8px 20px ${theme.colors.greyMedium};
  /* box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ; */
  height: 835px;
  background-color: ${theme.colors.background_white};
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
`;