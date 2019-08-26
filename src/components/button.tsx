import styled from "styled-components";
type ButtonProps = {
  type?: "link" | "submit";
  css?: any;
};
const Button = styled.button<ButtonProps>`
  border: 1px solid
    ${props => (props.type === "link" ? "transparent" : props.theme.blue)};
  background: ${props =>
    props.type === "link" ? "transparent" : props.theme.blue};
  color: ${props => (props.type === "link" ? "#329bf0" : "white")};
  border-radius: 4px;
  text-align: ${props => (props.type === "link" ? "left" : "center")};
  font-size: 14px;
  min-width: ${props => (props.type === "link" ? "0px" : "100px")};
  padding: ${props => (props.type === "link" ? "0px" : "4px 8px")};
  cursor: pointer;
`;

export default Button;
