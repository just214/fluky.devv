import styled from "styled-components";

const TextArea = styled.textarea`
  display: block;
  width: 95%;
  border: 1px solid ${({ theme }) => theme.gray3};
  border-radius: 4px;
  font-family: "Muli";
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
  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

export default TextArea;
