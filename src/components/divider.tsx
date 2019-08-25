import styled from "styled-components";

const Divider = styled.hr`
  height: 1px;
  border: 0;
  color: #333;
  background-color: ${({ theme }) => theme.gray2};
  margin: 15px 0px;
`;

export default Divider;
