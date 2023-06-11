import React from "react";

interface popup {
  show: boolean;
  message: string;
}

interface ShowPopupProps {
  setShowPopup: (showPopup: popup) => void;
  message: string;
}

export const ShowPopup: React.FC<ShowPopupProps> = ({
  setShowPopup,
  message,
}) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
        <div className="bg-gray-200 flex flex-col gap-4 justify-center items-center border border-gray-300 p-4 rounded-lg shadow-md w-[30%] h-[30%] min-h-[200px] max-h-[400px]">
          <p className="text-gray-600 text-2xl">{message}</p>
          <button
            className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-md"
            onClick={() => setShowPopup({ show: false, message: "" })}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
