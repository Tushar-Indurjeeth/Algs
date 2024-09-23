"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { allAlgs } from "@/utils/allAlgs";
import Modal from "./Modal";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pages = allAlgs; // Array of pages

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

      {/* Search icon on the right to open modal */}
      <div className="flex items-center">
        <button
          onClick={openModal}
          className="flex items-center relative pl-3 md:pl-0"
        >
          <input
            type="text"
            placeholder="Search..."
            readOnly
            className="bg-gray-900 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-2 md:px-3 py-2 md:pl-10  rounded-lg outline-none"
          />
          <MagnifyingGlassIcon className="h-5 w-5  absolute right-3 top-2.5" />
        </button>
      </div>

      {/* Modal with internal search bar */}
      <Modal isOpen={isModalOpen} onClose={closeModal} pages={pages} />
    </nav>
  );
};

export default Navbar;
