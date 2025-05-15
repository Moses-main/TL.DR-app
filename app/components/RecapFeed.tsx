import React from "react";
import { RecapCard } from "./RecapCard";
interface RecapFeedProps {
  timeframe: "day" | "week";
}
export const RecapFeed: React.FC<RecapFeedProps> = ({ timeframe }) => {
  // Mock data for day recap
  const dayRecaps = [
    {
      id: 1,
      username: "Dan Romero",
      handle: "dwr",
      avatar: "/logo.png",
      content:
        "Frames are the most exciting thing to happen to the web in years. They bring interactivity to social media in a way we haven't seen before.",
      likes: 423,
      replies: 89,
      recasts: 112,
      timestamp: "6h ago",
    },
    {
      id: 2,
      username: "Varun Srinivasan",
      handle: "varunsrin",
      avatar: "/DP.jpg",
      content:
        "Just shipped a major update to the Farcaster protocol. Check out the new features and let me know what you think!",
      likes: 387,
      replies: 56,
      recasts: 93,
      timestamp: "10h ago",
    },
    {
      id: 3,
      username: "Jesse Pollak",
      handle: "jessepollak",
      avatar: "/DP.jpg",
      content:
        "Base is growing faster than expected. The ecosystem is thriving with new dapps launching every day.",
      likes: 356,
      replies: 42,
      recasts: 78,
      timestamp: "12h ago",
    },
  ];
  // Mock data for week recap
  const weekRecaps = [
    {
      id: 1,
      username: "Vitalik Buterin",
      handle: "vitalik",
      avatar: "/logo.png",
      content:
        "The future of Ethereum L2s is bright. We're seeing unprecedented adoption and innovation in the space.",
      likes: 1243,
      replies: 287,
      recasts: 432,
      timestamp: "3d ago",
    },
    {
      id: 2,
      username: "Balaji Srinivasan",
      handle: "balajis",
      avatar: "/DP.jpg",
      content:
        "Decentralized social media is the next frontier. Protocols like Farcaster are showing what's possible when you rebuild social from first principles.",
      likes: 987,
      replies: 134,
      recasts: 267,
      timestamp: "5d ago",
    },
    {
      id: 3,
      username: "Dwr.eth",
      handle: "dwr",
      avatar: "/logo.png",
      content:
        "Announcing our new funding round! Excited to build the future of decentralized social media with this amazing team.",
      likes: 876,
      replies: 123,
      recasts: 234,
      timestamp: "6d ago",
    },
  ];
  const recaps = timeframe === "day" ? dayRecaps : weekRecaps;
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        {timeframe === "day" ? "Today's" : "This Week's"} Top Casts
      </h2>
      <div>
        {recaps.map((recap) => (
          <RecapCard
            key={recap.id}
            username={recap.username}
            handle={recap.handle}
            avatar={recap.avatar}
            content={recap.content}
            likes={recap.likes}
            replies={recap.replies}
            recasts={recap.recasts}
            timestamp={recap.timestamp}
          />
        ))}
      </div>
    </div>
  );
};
