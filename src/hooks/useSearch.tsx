import { useState, useEffect } from "react";

const useSearch = (data, whitelist) => {
  const [value, setValue] = useState(data);
  const [filter, setFilter] = useState("");

  function filterByWhiteList({ node }) {
    return whitelist.some(value => {
      const thisData =
        value === "Tags" ? node.data[value].join(",") : node.data[value];
      return thisData.toLowerCase().includes(filter.toLowerCase());
    });
  }

  useEffect(() => {
    if (!filter) {
      setValue(data);
    }
    const values = data.filter(filterByWhiteList);

    setValue(values);
  }, [filter]);

  return [value, setFilter];
};

export default useSearch;
