"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

interface SearchBoxProps {
  width?: string;
  onSearch: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  width = "w-full",
  onSearch,
  placeholder = "Search...",
  defaultValue = "",
}) => {
  const [searchQuery, setSearchQuery] = React.useState(defaultValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className={`flex ${width}`}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`flex-1 rounded-l-full px-8 border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:outline-none`}
      />
      <Button
        onClick={handleSearchClick}
        className={`rounded-r-full bg-purple-600 text-white -ml-0.5 hover:bg-purple-500`}
      >
        <Search size={20} className="mr-1" />
      </Button>
    </div>
  );
};

export default SearchBox;
