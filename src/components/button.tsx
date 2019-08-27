import styled from "styled-components";
type ButtonProps = {
  css?: React.CSSProperties;
  link?: boolean;
};
const Button = styled.button<ButtonProps>`
  border: 1px solid ${props => (props.link ? "transparent" : props.theme.blue)};
  background: ${props => (props.link ? "transparent" : props.theme.blue)};
  color: ${props => (props.link ? "#329bf0" : "white")};
  border-radius: 4px;
  text-align: ${props => (props.link ? "left" : "center")};
  font-size: 14px;
  min-width: ${props => (props.link ? "0px" : "100px")};
  padding: ${props => (props.link ? "0px" : "4px 8px")};
  cursor: pointer;
`;

export default Button;
