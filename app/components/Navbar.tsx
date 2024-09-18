import React, { useState } from "react";
import Link from "next/link";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search query:", searchQuery);
  };

  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">
      {/* Home button on the left */}
      <div>
        <Link
          href="/"
          className="text-2xl font-bold hover:text-gray-400"
          passHref
        >
          <HomeIcon className="h-7 w-7 text-white" />
        </Link>
      </div>

      {/* Search box on the right */}
      <div className="flex items-center">
        <form onSubmit={handleSearch} className="flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 pl-10 text-black rounded-lg outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Magnifying glass icon inside the input field */}
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute right-3 top-2.5" />
          {/* Hidden submit button */}
          <button type="submit" className="hidden">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
