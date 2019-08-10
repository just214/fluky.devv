import styled from "styled-components";

const Button = styled.button`
  height: 30px;
  width: 100px;
  font-size: 15px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  background: ${props => props.theme.blue};
  border: none;
  cursor: pointer;
`;

export default Button;
