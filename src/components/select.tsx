import styled from "styled-components";

const Select = styled.select`
  display: inline-block;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px !important;
  border: 1px solid ${({ theme }) => theme.gray3};
  font-size: 16px !important;
  height: 35px;
  background-color: white;
  border-radius: 4px;

  background-color: white;
`;

export default Select;
