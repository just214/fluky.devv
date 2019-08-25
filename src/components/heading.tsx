import React from "react";

type HeadingProps = {
  to?: string;
};

export const Heading: React.FC<HeadingProps> = ({ children, to }) => {
  if (to) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        css={`
          cursor: pointer;
          transition: color 0.3s;
          color: ${({ theme }) => theme.blue};
          :hover {
            text-decoration: underline;
          }
        `}
      >
        <h4
          css={`
            margin: 0px;
            padding: 0px;
            font-size: 1.5rem;
            font-weight: 700;
          `}
        >
          {children}
        </h4>
      </a>
    );
  } else {
    return (
      <h4
        css={`
          margin: 0px;
          padding: 0px;
          font-size: 1.5rem;
          font-weight: 700;
          color: ${({ theme }) => theme.blue};
        `}
      >
        <span>{children}</span>
      </h4>
    );
  }
};

export default Heading;
