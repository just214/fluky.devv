import styled from "styled-components";

const Title = styled.h1`
  /* font-family: "Barriecito"; */
  font-size: 2.6rem;
  margin: 0;
  padding: 0;
  font-weight: 800;
  line-height: 3rem;
  color: ${props => props.theme.gray5};

  @media (max-width: 500px) {
    font-size: 2.3rem;
  }
`;

export default Title;
