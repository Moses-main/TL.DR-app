import React from "react";
import { MessageSquareIcon, HeartIcon, RepeatIcon } from "lucide-react";
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
  likes,
  replies,
  recasts,
  timestamp,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-4">
      <div className="flex items-start mb-3">
        <img
          src={avatar}
          alt={username}
          className="h-10 w-10 rounded-full mr-3"
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
        <div className="flex items-center">
          <MessageSquareIcon className="h-4 w-4 mr-1" />
          <span className="text-xs">{replies}</span>
        </div>
        <div className="flex items-center">
          <RepeatIcon className="h-4 w-4 mr-1" />
          <span className="text-xs">{recasts}</span>
        </div>
        <div className="flex items-center">
          <HeartIcon className="h-4 w-4 mr-1" />
          <span className="text-xs">{likes}</span>
        </div>
      </div>
    </div>
  );
};
