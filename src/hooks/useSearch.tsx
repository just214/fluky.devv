import { useState, useEffect } from "react";

const useSearch = (data, whitelist) => {
  const [value, setValue] = useState(data);
  const [filter, setFilter] = useState("");

  function filterByWhiteList({ node }): any[] {
    return whitelist.some(v => {
      const thisData = v === "Tags" ? node.data[v].join(",") : node.data[v];
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
