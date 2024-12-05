import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import GameDevHistory from "./pages/gameDevHistory";

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
    <Router>
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/game_dev_history" element={<GameDevHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
