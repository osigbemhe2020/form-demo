import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  msg:string;
  desc:string;
};

const PopUp = ({ isOpen, onClose,msg,desc }: Props) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
  <div className="fixed inset-0 bg-[#0000003b] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-[450px] text-center shadow-lg">
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#006A05] flex items-center justify-center">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">{msg}</h2>
          <p className="text-sm text-gray-600 whitespace-pre-line  mb-4">
            {desc}
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            onClick={onClose}
          >
            Back
          </button>
        </div>
      </div>,
    document.body
  );
};

export default PopUp