import React from "react";
interface TabNavigationProps {
  activeTab: "day" | "week";
  setActiveTab: (tab: "day" | "week") => void;
}
export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex border-b border-gray-700 mb-6">
      <button
        onClick={() => setActiveTab("day")}
        className={`px-4 py-2 text-sm font-medium ${activeTab === "day" ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400 hover:text-gray-200"}`}
      >
        Today
      </button>
      <button
        onClick={() => setActiveTab("week")}
        className={`px-4 py-2 text-sm font-medium ${activeTab === "week" ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400 hover:text-gray-200"}`}
      >
        This Week
      </button>
    </div>
  );
};
