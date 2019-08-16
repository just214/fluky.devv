import React, { useState } from "react";
import Button from "antd/es/button";

const useReadMore = (text, cutoff = 280) => {
  const [value, setValue] = useState(
    text.length > cutoff ? text.substring(0, cutoff) + "..." : text
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
