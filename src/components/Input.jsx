import styled from "styled-components";

const InputContainer = styled.input`
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  width: 97%;
  border-radius: 5px;
  border: none;
  background-color: #cec8c4;

  &:focus {
    outline: 4px solid #94a3b8;
  }
`;

function Input(props) {
  return <InputContainer {...props} />;
}

export default Input;
