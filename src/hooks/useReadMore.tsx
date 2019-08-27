import React, { useState } from "react";
import Button from "../components/button";
import useMedia from "./useMedia";

const useReadMore = (text, cutoff = 280) => {
  const { isMobile } = useMedia();
  const cutoffValue = isMobile ? 280 : 500;
  const [value, setValue] = useState(
    text.length > cutoffValue
      ? text.substring(0, isMobile ? 280 : 500) + "..."
      : text
  );

  const ReadMoreButton = () => {
    return (
      <Button
        style={{
          margin: 0,
          padding: 0,
          display: text === value ? "none" : "block",
        }}
        type="link"
        onClick={() => setValue(text)}
      >
        Read more
      </Button>
    );
  };

  return [value, ReadMoreButton];
};

export default useReadMore;
