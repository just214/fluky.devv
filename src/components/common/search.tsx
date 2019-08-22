import React from "react";
import Input from "./Input";

interface SearchProps {
  onChange: (value: string) => void;
  placeholder?: string;
}
const Search: React.FC<SearchProps> = ({ onChange, placeholder }) => {
  const handleOnChange = e => {
    onChange(e.target.value || "");
  };

  return (
    <Input
      type="search"
      style={{
        width: "100%",
        borderRadius: "10px",
        height: "40px",
        position: "sticky",
        top: 0,
        zIndex: 200,
      }}
      onChange={handleOnChange}
      placeholder={placeholder || "Search"}
    />
  );
};

export default Search;
