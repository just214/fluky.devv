import styled from "styled-components";

const Input = styled.input`
  font-size: 16px;
  border: 1px solid ${props => props.theme.gray3};
  border-radius: 5px;
  width: 280px;
  max-width: 90%;
  padding: 4px 10px;
  margin: 5px 0px 10px 0px;
`;

export default Input;
