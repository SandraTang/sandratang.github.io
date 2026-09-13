import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import CoinClickLayer from "./components/coinClickLayer";
import FigmaPosters from "./pages/figmaPosters";
import Home from "./pages/home";
import GameDevHistory from "./pages/gameDevHistory";
import GameDev from "./pages/gameDev";
import Yearbooks from "./pages/yearbooks";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
      <CoinClickLayer />
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/figma-posters" element={<FigmaPosters />} />
        <Route path="/game_dev_history" element={<GameDevHistory />} />
        <Route path="/gamedev" element={<GameDev />} />
        <Route path="/yearbooks" element={<Yearbooks />} />
      </Routes>
    </Router>
  );
}

export default App;
