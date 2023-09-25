import React from "react";

const FilterSearchBar = ({ query, setQuery }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Gems..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterSearchBar;
