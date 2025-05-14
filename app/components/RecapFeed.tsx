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
      avatar:
        "https://pbs.twimg.com/profile_images/1393339451869446144/r-lWDBM1_400x400.jpg",
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
      avatar:
        "https://pbs.twimg.com/profile_images/1115709157847220226/tPJBZ4Nc_400x400.png",
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
      avatar:
        "https://pbs.twimg.com/profile_images/1610796648364433409/_BzAaWci_400x400.jpg",
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
      avatar:
        "https://www.google.com/imgres?q=avatar&imgurl=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Ffree-avatar-icon-download-in-svg-png-gif-file-formats--user-hacker-avatars-flat-icons-pack-people-456327.png&imgrefurl=https%3A%2F%2Ficonscout.com%2Ffree-icon%2Favatar-375&docid=j8UZcoiElSuKGM&tbnid=X_ibrecyHs08qM&vet=12ahUKEwi0nYDGr6ONAxUlQjABHfjMBcEQM3oECC8QAA..i&w=256&h=256&hcb=2&ved=2ahUKEwi0nYDGr6ONAxUlQjABHfjMBcEQM3oECC8QAA",
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
      avatar:
        "https://www.google.com/imgres?q=avatar&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F027%2F951%2F137%2Fsmall_2x%2Fstylish-spectacles-guy-3d-avatar-character-illustrations-png.png&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Favatar&docid=U5CX6qAOZyUCUM&tbnid=TLxClQJgE0MeCM&vet=12ahUKEwi0nYDGr6ONAxUlQjABHfjMBcEQM3oECGEQAA..i&w=400&h=400&hcb=2&ved=2ahUKEwi0nYDGr6ONAxUlQjABHfjMBcEQM3oECGEQAA",
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
      avatar:
        "https://www.google.com/imgres?q=avatar&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20240910%2Fourmid%2Fpngtree-business-women-avatar-png-image_13805764.png&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fwomen-avatar&docid=8OAvtoLyNO9oSM&tbnid=e89yXM4tPUH7_M&vet=12ahUKEwi0nYDGr6ONAxUlQjABHfjMBcEQM3oECH0QAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi0nYDGr6ONAxUlQjABHfjMBcEQM3oECH0QAA",
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
