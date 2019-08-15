import React from "react";
import { format } from "date-fns";

interface LastUpdatedProps {
  date: string;
}
export const LastUpdated: React.FC<LastUpdatedProps> = ({ date }) => {
  return (
    <small
      css={`
        color: ${props => props.theme.gray4};
        font-size: 0.9em;
        display: block;
        margin-bottom: 8px;
      `}
    >
      Last updated on{" "}
      <time
        dateTime={format(date, "YYYY-MM-DD")}
        css={`
          font-family: Helvetica;
        `}
      >
        {format(date, "MMM.DD, YYYY")}
      </time>
      .
    </small>
  );
};

export default LastUpdated;
