import React from "react";
import { format, parseISO } from "date-fns";

interface LastUpdatedProps {
  date: string;
}
export const LastUpdated: React.FC<LastUpdatedProps> = ({ date }) => {
  return (
    <small
      css={`
        color: ${props => props.theme.gray4};
        font-size: 0.8em;
        display: block;
        margin-bottom: 8px;
      `}
    >
      Last updated on{" "}
      <time
        dateTime={format(parseISO(date), "yyyy-mm-dd")}
        css={`
          font-family: Helvetica;
        `}
      >
        {format(parseISO(date), "MMMM dd, yyyy")}
      </time>
    </small>
  );
};

export default LastUpdated;
