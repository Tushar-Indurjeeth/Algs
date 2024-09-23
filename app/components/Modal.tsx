import React, { useEffect, useRef, useState } from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { splitCamelCase } from "@/utils/splitCamelCase";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  pages: string[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, pages }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close modal when clicking outside or pressing Escape
  const closeModal = (e: MouseEvent | KeyboardEvent) => {
    if (e instanceof KeyboardEvent && e.key === "Escape") {
      onClose();
    } else if (
      e instanceof MouseEvent &&
      modalRef.current &&
      !modalRef.current.contains(e.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeModal);
    document.addEventListener("mousedown", closeModal);

    return () => {
      document.removeEventListener("keydown", closeModal);
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  // Focus the search input when the modal is opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus(); // Auto-focus on the input
    }
  }, [isOpen]);

  // Filter pages based on search query
  const filteredPages = searchQuery
    ? pages.filter((page) =>
        page.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : pages;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-start pt-10">
      <div
        ref={modalRef}
        className="bg-gray-800 text-gray-100 w-full max-w-2xl p-6 rounded-lg shadow-lg relative"
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Search Bar inside Modal */}
        <div className="relative mt-6">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-12 pr-4 py-2 rounded-lg bg-gray-700 border border-gray-600 transition-all shadow-sm outline-none text-sm text-gray-100 placeholder-gray-400"
            ref={searchInputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Search Results */}
        <div className="mt-6 max-h-60 overflow-y-auto">
          {filteredPages.length > 0 ? (
            <ul>
              {filteredPages.map((page) => (
                <li key={page} className="py-2 border-b border-gray-600">
                  <a
                    href={page}
                    className="block px-2 hover:bg-gray-700 rounded-lg"
                  >
                    {splitCamelCase(page)}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">
              {`No results found for "${searchQuery}"`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
