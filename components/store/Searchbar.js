import React from "react";
import { Search } from "lucide-react";

const Searchbar = ({
  placeholder = "Search for product, brand or categories",
}) => {
  return (
    <div class="relative w-full">
      <button class="absolute left-0 top-0  bottom-0 px-3">
        <Search size={20} color="#0000004A" />
      </button>
      <input
        type="text"
        placeholder={placeholder}
        class="py-2 px-4 border border-[#0000004A] rounded-full focus:outline-none focus:border-[#9A0BB4] transition duration-300 pl-10 w-full bg-[#FCF5FC]"
      />
    </div>
  );
};

export default Searchbar;
