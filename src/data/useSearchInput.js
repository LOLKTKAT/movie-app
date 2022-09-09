import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearchInput = () => {
  const [searchInputValue, setSearchInputValue] = useSearchParams();
  const [search, setSearch] = useState();

  function handleInputChange(e) {
    let text = e.target.value;
    if (text.length === 0) {
      searchInputValue.delete("search");
      setSearchInputValue(searchInputValue, {
        replace: true,
      });
    } else {
      searchInputValue.set("search", text);
      setSearchInputValue(searchInputValue, {
        replace: true,
      });
      text != undefined && setSearch(searchInputValue.get("search"));
    }
  }
  return { search, setSearch, handleInputChange };
};
