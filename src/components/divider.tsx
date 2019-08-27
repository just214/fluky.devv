import styled from "styled-components";

const Divider = styled.hr`
  height: 1px;
  border: 0;
  color: #333;
  background-color: ${({ theme }) => theme.gray2};
  margin: 10px 0px;
`;

export default Divider;
