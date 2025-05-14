import React from "react";
import { TrendingUpIcon } from "lucide-react";
interface TrendingTopicsProps {
  timeframe: "day" | "week";
}
export const TrendingTopics: React.FC<TrendingTopicsProps> = ({
  timeframe,
}) => {
  // Mock data for trending topics
  const dayTopics = [
    {
      id: 1,
      name: "ethereum",
      count: 1243,
    },
    {
      id: 2,
      name: "farcaster",
      count: 876,
    },
    {
      id: 3,
      name: "base",
      count: 654,
    },
    {
      id: 4,
      name: "degen",
      count: 432,
    },
  ];
  const weekTopics = [
    {
      id: 1,
      name: "onchain",
      count: 3254,
    },
    {
      id: 2,
      name: "frames",
      count: 2876,
    },
    {
      id: 3,
      name: "optimism",
      count: 1987,
    },
    {
      id: 4,
      name: "zora",
      count: 1432,
    },
  ];
  const topics = timeframe === "day" ? dayTopics : weekTopics;
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <TrendingUpIcon className="h-5 w-5 mr-2 text-purple-400" />
        <h2 className="text-lg font-semibold">Trending Topics</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-gray-800 rounded-full px-3 py-1 text-sm flex items-center"
          >
            <span className="text-purple-400">#</span>
            <span className="ml-1">{topic.name}</span>
            <span className="ml-2 text-xs text-gray-400">{topic.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
