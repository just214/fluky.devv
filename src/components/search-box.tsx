import React, { useState } from "react";

interface SearchBoxProps {
  onChange: (value: string) => void;
}
const SearchBox: React.FC<SearchBoxProps> = ({ onChange }) => {
  const [value, setValue] = useState("");
  const handleOnChange = e => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <input
      css={`
        height: 45px;
        width: 100%;
        max-width: 400px;
        border-radius: 20px;
        border: 1px solid #dadada;
        padding: 3px 10px;
        font-size: 18px;
        outline: none;
        -webkit-appearance: none;
      `}
      value={value}
      onChange={handleOnChange}
      type="search"
      placeholder="Search"
    />
  );
};

export default SearchBox;
