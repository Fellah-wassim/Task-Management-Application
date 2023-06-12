import React from "react";

interface BurgerButtonProps {
  isOpen: boolean;
  onBurgerClick: () => void;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({
  isOpen,
  onBurgerClick,
}) => {
  return (
    <button
      className={`md:hidden z-10  ${
        isOpen ? "text-gray-800" : "text-gray-200"
      }  p-1 rounded-md`}
      onClick={onBurgerClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        {isOpen ? (
          <path d="M18 6L6 18M6 6l12 12" />
        ) : (
          <path d="M3 12h18M3 6h18M3 18h18" />
        )}
      </svg>
    </button>
  );
};
