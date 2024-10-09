import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: grey;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:active {
    cursor: grabbing;
  }
`;

function Button(props) {
  return (
    <ButtonContainer onClick={props.onClick}>{props.children}</ButtonContainer>
  );
}

export default Button;
