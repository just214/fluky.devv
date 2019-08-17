import React from "react";
import Affix from "antd/es/affix";
import Input from "antd/es/input";
import { FaSearch } from "react-icons/fa";
// const { Search } = Input;

interface SearchBoxProps {
  onChange: (value: string) => void;
  placeholder?: string;
}
const SearchBox: React.FC<SearchBoxProps> = ({ onChange, placeholder }) => {
  const handleOnChange = e => {
    onChange(e.target.value || "");
  };

  return (
    <Affix>
      <Input
        allowClear
        size="large"
        prefix={<FaSearch color="#dadada" />}
        style={{
          maxWidth: "100%",
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
        }}
        onChange={handleOnChange}
        placeholder={placeholder || "Search..."}
      />
    </Affix>
  );
};

export default SearchBox;
