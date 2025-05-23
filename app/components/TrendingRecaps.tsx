// components/TrendingRecaps.tsx
"use client";

import React, { useEffect, useState } from "react";
import { RecapCard } from "./RecapCard";

interface Recap {
  username: string;
  handle: string;
  avatar: string;
  content: string;
  likes: number;
  replies: number;
  recasts: number;
  timestamp: string;
}

export const TrendingRecaps: React.FC = () => {
  const [recaps, setRecaps] = useState<Recap[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecaps = async () => {
      try {
        const response = await fetch(
          "https://warpwrap-backend.onrender.com/api/trending-casts",
        );
        const data = await response.json();
        // console.log(data);
        // Log to inspect structure

        console.log("API response:", data);

        // Ensure data.casts exists

        if (Array.isArray(data.casts)) {
          setRecaps(data.casts);
        } else {
          console.error("Unexpected response structure:", data);
        }
      } catch (error) {
        console.error("Failed to fetch recaps:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecaps();
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;

  console.log("stored API response:", recaps);
  return (
    <div>
      {/* {console.log(recaps)} */}
      {recaps.map((recap, index) => (
        <RecapCard
          key={index}
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
  );
};
