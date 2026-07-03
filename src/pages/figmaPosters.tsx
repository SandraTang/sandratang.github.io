import { useEffect, useState } from "react";
import ExperiencePageTemplate from "../components/experiencePageTemplate";

const posters = [
  {
    src: "/figma-posters/go_for_a_drive.png",
    alt: "Let's Go for a Drive poster",
  },
  {
    src: "/figma-posters/jellyfish.png",
    alt: "Jellyfish poster",
  },
  {
    src: "/figma-posters/life_is_good.png",
    alt: "Life is Good poster",
  },
  {
    src: "/figma-posters/san_francisco.png",
    alt: "San Francisco poster",
  },
  {
    src: "/figma-posters/summer_internship_friends.png",
    alt: "Summer Internship Friends poster",
  },
  {
    src: "/figma-posters/toronto.png",
    alt: "Toronto poster",
  },
];

function wrapIndex(index: number) {
  return (index + posters.length) % posters.length;
}

const carouselOffsets = [-2, -1, 0, 1, 2] as const;

function getPosterStyle(offset: (typeof carouselOffsets)[number]) {
  if (offset === 0) {
    return {
      transform: "translate(-50%, -50%) translateX(0px) scale(1)",
      zIndex: 5,
    };
  }

  if (offset === -1) {
    return {
      transform: "translate(-50%, -50%) translateX(-220px) scale(0.88)",
      zIndex: 4,
    };
  }

  if (offset === 1) {
    return {
      transform: "translate(-50%, -50%) translateX(220px) scale(0.88)",
      zIndex: 4,
    };
  }

  if (offset === -2) {
    return {
      transform: "translate(-50%, -50%) translateX(-380px) scale(0.74)",
      zIndex: 3,
    };
  }

  return {
    transform: "translate(-50%, -50%) translateX(380px) scale(0.74)",
    zIndex: 3,
  };
}

function getPosterImageOpacity(offset: (typeof carouselOffsets)[number]) {
  if (offset === 0) return 1;
  if (Math.abs(offset) === 1) return 0.55;
  return 0.22;
}

function FigmaPosters() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (isLightboxOpen) {
        return;
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((currentIndex) => wrapIndex(currentIndex - 1));
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((currentIndex) => wrapIndex(currentIndex + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <ExperiencePageTemplate
      title="Figma Posters"
      media={
        <section className="flex flex-col items-center gap-6">
          <div className="flex w-full items-center justify-center gap-3 sm:gap-8">
            <button
              type="button"
              aria-label="Previous poster"
              onClick={() =>
                setActiveIndex((currentIndex) => wrapIndex(currentIndex - 1))
              }
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition-colors hover:border-black/20"
            >
              <img
                src="/left-arrow.png"
                alt=""
                aria-hidden="true"
                className="h-4 w-4 object-contain opacity-70"
              />
            </button>

            <div className="relative h-[760px] flex-1 overflow-visible">
              {carouselOffsets.map((offset) => {
                const posterIndex = wrapIndex(activeIndex + offset);
                const poster = posters[posterIndex];
                const isCenter = offset === 0;

                return (
                  <button
                    key={poster.src}
                    type="button"
                    aria-label={
                      isCenter ? `Open ${poster.alt}` : `Show ${poster.alt}`
                    }
                    onClick={() =>
                      isCenter
                        ? setIsLightboxOpen(true)
                        : setActiveIndex(posterIndex)
                    }
                    className="absolute left-1/2 top-1/2 transition-all duration-500 ease-out"
                    style={getPosterStyle(offset)}
                  >
                    <div
                      className={`inline-flex items-center justify-center bg-white drop-shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition-all duration-500 ease-out ${
                        isCenter
                          ? "max-h-[620px] max-w-[400px]"
                          : "max-h-[500px] max-w-[320px]"
                      }`}
                    >
                      <img
                        src={poster.src}
                        alt={poster.alt}
                        className={`h-auto w-auto transition-opacity duration-500 ease-out ${
                          isCenter
                            ? "max-h-[620px] max-w-[400px]"
                            : "max-h-[500px] max-w-[320px]"
                        }`}
                        style={{ opacity: getPosterImageOpacity(offset) }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              aria-label="Next poster"
              onClick={() =>
                setActiveIndex((currentIndex) => wrapIndex(currentIndex + 1))
              }
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition-colors hover:border-black/20"
            >
              <img
                src="/right-arrow.png"
                alt=""
                aria-hidden="true"
                className="h-4 w-4 object-contain opacity-70"
              />
            </button>
          </div>
        </section>
      }
    >
      <div className="flex flex-col gap-6">
        <p>
          Creating posters is my way of preserving a moment into wall-art and
          celebrating life lived.
        </p>
      </div>
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6 py-10"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            aria-label="Close poster view"
            className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl text-black transition-colors hover:bg-white"
            onClick={() => setIsLightboxOpen(false)}
          >
            ×
          </button>
          <img
            src={posters[activeIndex].src}
            alt={posters[activeIndex].alt}
            className="max-h-full max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </ExperiencePageTemplate>
  );
}

export default FigmaPosters;
