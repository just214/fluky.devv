import styled from "styled-components";

const Title = styled.h1`
  font-family: "Lalezar";
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  line-height: 3rem;
  color: ${props => props.theme.gray5};

  /* @media (max-width: 500px) {
    font-size: 2.7rem;
  } */
`;

export default Title;
