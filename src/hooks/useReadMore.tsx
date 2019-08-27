import React, { useState } from "react";
import Button from "../components/button";
import useMedia from "./useMedia";

const useReadMore = text => {
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
        link
        onClick={() => setValue(text)}
        style={{
          margin: 0,
          padding: 0,
          display: text === value ? "none" : "block",
        }}
      >
        Read more
      </Button>
    );
  };

  return [value, ReadMoreButton];
};

export default useReadMore;
