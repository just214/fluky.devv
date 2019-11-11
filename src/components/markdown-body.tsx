import styled from "styled-components";

const MarkdownBody = styled.p.attrs<{ md: string }>(p => ({
  dangerouslySetInnerHTML: { __html: p.md },
}))`
  margin: 10px 0px;
  font-size: 0.9rem;
`;

export default MarkdownBody;
