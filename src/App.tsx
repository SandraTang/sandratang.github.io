import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Landing from "./components/landing";
import MasonryLayout from "./components/masonryLayout";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const checkTheme = () => {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      setIsDarkMode(darkModeMediaQuery.matches);
    };

    checkTheme();

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", checkTheme);

    return () => {
      darkModeMediaQuery.removeEventListener("change", checkTheme);
    };
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-circular-medium)]">
      <main className="flex flex-col w-full items-center mt-[20vh]">
        <Landing isDarkMode={isDarkMode} />
        <MasonryLayout isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;
