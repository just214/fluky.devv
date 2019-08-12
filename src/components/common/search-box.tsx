import React, { useState } from "react";

interface SearchBoxProps {
  onChange: (value: string) => void;
  placeholder?: string;
}
const SearchBox: React.FC<SearchBoxProps> = ({ onChange, placeholder }) => {
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
        border-radius: 10px;
        border: 1px solid #dadada;
        padding: 3px 10px;
        font-size: 16px;
        outline: none;
        -webkit-appearance: none;
      `}
      value={value}
      onChange={handleOnChange}
      type="search"
      placeholder={placeholder || "Search"}
    />
  );
};

export default SearchBox;
