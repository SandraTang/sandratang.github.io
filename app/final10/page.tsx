"use client";

import React, { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Dynamically load p5.js and other game scripts from public directory
    const loadScript = (src: string) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    // Load p5.js from CDN
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js");

    // Load your game scripts from the new public folder
    loadScript("/game_dev_history/arcade.js");
    loadScript("/game_dev_history/points.js");
    loadScript("/game_dev_history/final10.js");

    return () => {
      const scripts = document.querySelectorAll(
        'script[src^="/game_dev_history/arcade.js"], script[src^="/game_dev_history/points.js"], script[src^="/game_dev_history/final10.js"]'
      );
      scripts.forEach((script) => document.body.removeChild(script));
    };
  }, []);

  return (
    <div>
      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
        }
        h1 {
          text-align: center;
          font-family: sans-serif;
        }
        p {
          text-align: center;
        }
      `}</style>
      {/* The canvas will be created and rendered by p5.js */}
    </div>
  );
}
