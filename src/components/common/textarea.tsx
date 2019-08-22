import styled from "styled-components";

const TextArea = styled.textarea`
  display: block;
  min-width: 300px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.gray3};
  border-radius: 4px;
  outline: none;
  padding: 5px 10px;
  font-size: 16px;
  transition: border-color 0.4s;
  :focus {
    border-color: ${({ theme }) => theme.lightestblue};
  }
  :disabled {
    background-color: ${({ theme }) => theme.gray2};
  }
`;

export default TextArea;
