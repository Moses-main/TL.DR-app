import React from "react";
import { SparklesIcon } from "lucide-react";
export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <SparklesIcon className="h-6 w-6 mr-2 text-purple-400" />
        <h1 className="text-xl font-bold">WarpWrap</h1>
      </div>
      <div className="bg-purple-500 rounded-full h-8 w-8 flex items-center justify-center">
        <span className="font-medium text-sm">Ww</span>
      </div>
    </header>
  );
};
