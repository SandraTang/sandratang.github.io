import { useEffect, useRef, useState } from "react";
import Card from "./card";
import { cardInfo } from "./cardInfo";
import { CardInfo } from "../types";

function MasonryLayout({ isDarkMode }: { isDarkMode: boolean }) {
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
    if (!masonryRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setMasonryWidth(width);
      }
      handleScroll();
    });

    resizeObserver.observe(masonryRef.current);
    return () => resizeObserver.disconnect();
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

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsScrolledToEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    }
  };

  useEffect(() => {
    let scrollContainer = scrollContainerRef.current;

    setTimeout(() => {
      scrollContainer = scrollContainerRef.current;
      scrollContainer?.addEventListener("scroll", handleScroll);
      handleScroll();
    }, 10);

    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {masonryWidth !== 0 && (
        <div style={{ width: masonryWidth }}>
          <div
            className="flex overflow-x-auto scrollbar-hide whitespace-nowrap space-x-8 w-full"
            style={{ scrollbarWidth: "none" }} // Firefox-specific
            ref={scrollContainerRef}
          >
            {uniqueLabels.map((label) => (
              <div
                key={label}
                onClick={() => {
                  setFilter(label);
                  setFilteredCards(filterCardsByLabel(label));
                }}
                className={`${
                  filter === label
                    ? "font-semibold underline underline-offset-4 decoration-2"
                    : "text-light"
                }`}
              >
                {label}
              </div>
            ))}
            {!isScrolledToEnd && (
              <div
                className={`absolute right-[32px] sm:right-[80px] rounded-full w-6 h-6`}
                style={{
                  boxShadow: `0 0 10px 10px var(--background)`,
                  backgroundColor: `var(--background)`,
                }}
              >
                {isDarkMode ? (
                  <img src="/arrow-right.png" />
                ) : (
                  <img src="/arrow-right-black.png" />
                )}
              </div>
            )}
          </div>
        </div>
      )}
      <div
        ref={masonryRef}
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 my-8"
      >
        {filteredCards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}

export default MasonryLayout;
