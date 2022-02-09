import styled from "styled-components"

const ButtonBasic = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 116px;
  height: 30px;
  color: ${props => props.inputColor || "#FFFFFF"};
  font-size: 10px;
  background: #FF9F00;
  border-radius: 7px;
  border: none;
`;

function Button ({ content, icon, textColor }) {
  return(
    <ButtonBasic color={textColor}>
      {content}
      {icon}
    </ButtonBasic>
  )
}
export default Button