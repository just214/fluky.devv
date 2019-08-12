import React from "react";

interface EmojiProps {
  label: string;
  symbol: string;
  size?: number;
}
const Emoji: React.FC<EmojiProps> = props => (
  <span
    css={`
      font-size: ${props.size}px;
    `}
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);
export default Emoji;
