import styled from "styled-components";
type ButtonProps = {
  type?: "link" | "submit";
  css?: any;
};
const Button = styled.button<ButtonProps>`
  border: 1px solid
    ${props => (props.type === "link" ? "transparent" : props.theme.blue)};
  color: #329bf0;
  border-radius: 4px;
  font-size: 14px;
  padding: ${props => (props.type === "link" ? "0px" : "4px 8px")};
  cursor: pointer;
  background: transparent;
`;

export default Button;
