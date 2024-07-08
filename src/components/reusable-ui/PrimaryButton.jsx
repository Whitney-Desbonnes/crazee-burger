import styled from 'styled-components';
import theme from "../../theme/index";

export default function PrimaryButton({ Icon, label }) {
  return (
    <PrimaryButtonStyled>
          <span>{label}</span>
          { Icon && Icon }
    </PrimaryButtonStyled>
  )
}



const PrimaryButtonStyled = styled.button`
    &,
    &:focus {
        border-radius: ${theme.borderRadius.round};
        padding: 18px 24px;
        margin-top: 18px;
        width: 100%;
        max-width: 400px;
        font-size: ${theme.fonts.P0};
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background-color: ${theme.colors.primary_burger};
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary_burger};
        cursor: pointer;
    }

    &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary_burger};
    }
`;
