import { tabOptions } from "../types";

export default function Tabs({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: tabOptions;
  setSelectedTab: (tab: tabOptions) => void;
}) {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => setSelectedTab("resume")}
        className={`underline ${
          selectedTab === "resume" ? "font-bold text-orange-500" : ""
        }`}
      >
        Resume
      </button>
      <button
        onClick={() => setSelectedTab("projects")}
        className={`underline ${
          selectedTab === "projects" ? "font-bold text-orange-500" : ""
        }`}
      >
        Projects
      </button>
    </div>
  );
}
