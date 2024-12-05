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
    <div className="justify-items-center pb-20 gap-16 p-8 sm:p-20 sm:py-20 lg:px-48 font-[family-name:var(--font-circular-medium)]">
      <main className="flex flex-col w-full items-center mt-[20vh]">
        <Landing isDarkMode={isDarkMode} />
        <MasonryLayout isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;
