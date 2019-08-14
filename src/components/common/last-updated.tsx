import React from "react";
import { format } from "date-fns";

interface LastUpdatedProps {
  date: string | Date;
}
export const LastUpdated: React.FC<LastUpdatedProps> = ({ date }) => {
  return (
    <p
      css={`
        color: ${props => props.theme.gray4};
      `}
    >
      Last updated on {format(date, "MMMM DD, YYYY")}.
    </p>
  );
};

export default LastUpdated;
