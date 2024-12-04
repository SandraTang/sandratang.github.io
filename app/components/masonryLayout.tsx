"use client";

import { useEffect, useRef, useState } from "react";
import Card from "./card";
import { cardInfo } from "./cardInfo";
import { CardInfo } from "../types";

export default function MasonryLayout() {
  const [filter, setFilter] = useState("All");
  const uniqueLabels = Array.from(
    cardInfo.reduce((labelSet, card) => {
      if (card.labels) {
        card.labels.forEach((label) => labelSet.add(label));
      }
      return labelSet;
    }, new Set<string>())
  );
  uniqueLabels.unshift("All");

  const masonryRef = useRef<HTMLDivElement | null>(null);
  const [masonryWidth, setMasonryWidth] = useState<number>(0);
  // TODO: make responsive to window screen size changes
  useEffect(() => {
    if (masonryRef.current) {
      setMasonryWidth(masonryRef.current.offsetWidth);
    }
  }, []);

  const [filteredCards, setFilteredCards] = useState(cardInfo);

  function filterCardsByLabel(label: string): CardInfo[] {
    if (label === "All") {
      return cardInfo;
    }
    return cardInfo.filter(
      (card) => card.labels && card.labels.includes(label)
    );
  }

  return (
    <div>
      {masonryWidth !== 0 && (
        <div style={{ width: masonryWidth }}>
          <div
            className="flex overflow-x-auto scrollbar-hide whitespace-nowrap space-x-2 w-full"
            style={{ scrollbarWidth: "none" }} // Firefox-specific
          >
            {uniqueLabels.map((label) => (
              <button
                key={label}
                onClick={() => {
                  setFilter(label);
                  setFilteredCards(filterCardsByLabel(label));
                }}
                className={`${
                  filter === label ? "bg-primary font-semibold" : "bg-secondary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
      <div
        ref={masonryRef}
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 mt-4"
      >
        {filteredCards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}
