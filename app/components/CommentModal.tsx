import React, { useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import { createPortal } from "react-dom";
interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  content: string;
}
export const CommentModal: React.FC<CommentModalProps> = ({
  isOpen,
  onClose,
  username,
  content,
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  if (!isOpen || !mounted) return null;
  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-lg relative">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-lg text-white font-semibold">
            Reply to {username}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
            type="button"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 border-b border-gray-700">
          <p className="text-gray-400">{content}</p>
        </div>
        <div className="p-4">
          <textarea
            className="w-full bg-gray-900 text-white rounded-lg p-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Write your reply..."
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
              type="button"
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
