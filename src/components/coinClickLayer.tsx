import { useEffect, useRef, useState } from "react";

type CoinEffect = {
  id: number;
  x: number;
  y: number;
  createdAt: number;
};

function shouldIgnoreCoinClick(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(
    target.closest(
      'a, button, input, textarea, select, option, summary, label, [role="button"], [contenteditable="true"], [data-no-coin]'
    )
  );
}

function CoinClickLayer() {
  const coinIdRef = useRef(0);
  const [coinEffects, setCoinEffects] = useState<CoinEffect[]>([]);

  useEffect(() => {
    let animationFrameId = 0;
    const coinDurationMs = 480;

    const tick = () => {
      const now = performance.now();

      setCoinEffects((currentEffects) =>
        currentEffects.filter(
          (effect) => now - effect.createdAt < coinDurationMs
        )
      );

      animationFrameId = window.requestAnimationFrame(tick);
    };

    animationFrameId = window.requestAnimationFrame(tick);

    const handleClick = (event: MouseEvent) => {
      if (shouldIgnoreCoinClick(event.target)) {
        return;
      }

      const id = coinIdRef.current++;
      const x = event.clientX - 16;
      const y = event.clientY - 28;

      setCoinEffects((currentEffects) => [
        ...currentEffects,
        { id, x, y, createdAt: performance.now() },
      ]);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {coinEffects.map((coinEffect) => {
        const elapsedMs = performance.now() - coinEffect.createdAt;
        const progress = Math.min(elapsedMs / 480, 1);
        const peakHeight = 30;
        const landingOffset = 10;
        const verticalOffset =
          peakHeight * (4 * Math.pow(progress - 0.5, 2) - 1) +
          landingOffset * progress;
        const opacity = progress < 0.55 ? 1 : 1 - (progress - 0.55) / 0.45;

        return (
          <img
            key={coinEffect.id}
            src="/video-game-art/coin.gif"
            alt="Pixel art coin"
            className="absolute h-[40px] w-[40px] object-contain"
            style={{
              left: coinEffect.x,
              top: coinEffect.y + verticalOffset,
              opacity: Math.max(0, opacity),
              imageRendering: "pixelated",
            }}
          />
        );
      })}
    </div>
  );
}

export default CoinClickLayer;
