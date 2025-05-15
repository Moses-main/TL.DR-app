import React, { useState } from "react";
import Image from "next/image";
import { MessageSquareIcon, HeartIcon, RepeatIcon } from "lucide-react";
import { CommentModal } from "./CommentModal";
interface RecapCardProps {
  username: string;
  handle: string;
  avatar: string;
  content: string;
  likes: number;
  replies: number;
  recasts: number;
  timestamp: string;
}
export const RecapCard: React.FC<RecapCardProps> = ({
  username,
  handle,
  avatar,
  content,
  likes: initialLikes,
  replies: initialReplies,
  recasts: initialRecasts,
  timestamp,
}) => {
  // Initialize state
  const [isLiked, setIsLiked] = useState(false);
  const [isRecast, setIsRecast] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [recasts, setRecasts] = useState(initialRecasts);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  // Event handlers
  const handleLike = () => {
    console.log("Like clicked"); // Add this for debugging
    setIsLiked((prev) => !prev);
    setLikes((current) => (isLiked ? current - 1 : current + 1));
  };
  const handleRecast = () => {
    console.log("Recast clicked"); // Add this for debugging
    setIsRecast((prev) => !prev);
    setRecasts((current) => (isRecast ? current - 1 : current + 1));
  };
  const handleCommentClick = () => {
    console.log("Comment clicked"); // Add this for debugging
    setIsCommentModalOpen(true);
  };
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-4">
      <div className="flex items-start mb-3">
        {/* <img
          src={avatar}
          alt={username}
          className="h-10 w-10 rounded-full mr-3"
        /> */}
        <Image
          src={avatar}
          alt={username}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />

        <div>
          <div className="flex items-center">
            <span className="font-semibold">{username}</span>
            <span className="text-gray-400 text-sm ml-2">@{handle}</span>
          </div>
          <span className="text-xs text-gray-400">{timestamp}</span>
        </div>
      </div>
      <p className="mb-4">{content}</p>
      <div className="flex space-x-6 text-gray-400">
        <button
          type="button"
          onClick={handleCommentClick}
          // onClick={() => setIsCommentModalOpen(true)}
          className="flex items-center hover:text-purple-400 transition-colors"
        >
          <MessageSquareIcon className="h-4 w-4 mr-1" />
          <span className="text-xs">{initialReplies}</span>
        </button>
        <button
          type="button"
          onClick={handleRecast}
          className={`flex items-center hover:text-green-400 transition-colors ${isRecast ? "text-green-400" : ""}`}
        >
          <RepeatIcon className="h-4 w-4 mr-1" />
          <span className="text-xs">{recasts}</span>
        </button>
        <button
          type="button"
          onClick={handleLike}
          className={`flex items-center hover:text-red-400 transition-colors ${isLiked ? "text-red-400" : ""}`}
        >
          <HeartIcon
            className={`h-4 w-4 mr-1 ${isLiked ? "fill-current" : ""}`}
          />
          <span className="text-xs">{likes}</span>
        </button>
      </div>
      <CommentModal
        isOpen={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
        username={username}
        content={content}
      />
    </div>
  );
};
