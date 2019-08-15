import styled from "styled-components";

const Title = styled.h1`
  font-family: "Lalezar";
  font-size: 3rem;
  margin: 0;
  padding: 0;
  line-height: 3rem;
  color: ${props => props.theme.blue};
  @media (max-width: 500px) {
    font-size: 2.6rem;
  }
`;

export default Title;
