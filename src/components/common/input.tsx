import styled from "styled-components";

const Input = styled.input`
  display: block;
  height: 35px;
  min-width: 300px;
  border: 1px solid ${({ theme }) => theme.gray3};
  border-radius: 4px;
  outline: none;
  padding: 0px 10px;
  font-size: 16px;
  transition: border-color 0.4s;
  :focus {
    border-color: ${({ theme }) => theme.lightestblue};
  }
`;

export default Input;
