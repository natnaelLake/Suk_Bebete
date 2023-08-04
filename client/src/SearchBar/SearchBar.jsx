// import React from "react";

export const SearchBar = () => {
  return (
    <div>
      <div className="relative">
        <input
          className="border p-2 pl-10 rounded-l-md"
          type="text"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.853 12.146a7.5 7.5 0 111.414-1.414l3.792 3.792a1 1 0 11-1.414 1.414l-3.792-3.792zm-5.5-1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
