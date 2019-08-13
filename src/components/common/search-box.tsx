import React from "react";
import Input from "antd/es/input";
const { Search } = Input;

interface SearchBoxProps {
  onChange: (value: string) => void;
  placeholder?: string;
}
const SearchBox: React.FC<SearchBoxProps> = ({ onChange, placeholder }) => {
  const handleOnChange = e => {
    onChange(e.target.value || "");
  };

  return (
    <Search
      allowClear
      size="large"
      style={{ maxWidth: "100%" }}
      onChange={handleOnChange}
      placeholder={placeholder || "Search"}
    />
  );
};

export default SearchBox;
