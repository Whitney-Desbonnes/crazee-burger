import styled from "styled-components";
import theme from "../../theme/index";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {

  return (
    <TextInputStyled className="input-container">
        { Icon && Icon }
        <input 
            value={value} 
            onChange={onChange} 
            type="text" 
            {...extraProps}
        />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
    border-radius: ${theme.borderRadius.round};
    padding: 18px 24px;
    margin-top: 18px;
    width: 100%;
    max-width: 400px;
    font-size: ${theme.fonts.P0};
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 13px;

    input {
      font-family: Arial, Helvetica, sans-serif;
      color: #D3D3D3;
      width: 100%;
      border: none;
    }

    input:focus {
      outline: none;
    }
`;