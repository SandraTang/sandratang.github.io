# Coin Click Layer Porting

This site's "coin functionality" is a global click effect mounted once at the app root.

## What to copy

1. Copy the asset:

`public/video-game-art/coin.gif`

2. Add this component as `src/components/CoinClickLayer.tsx`:

```tsx
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
```

3. Mount it once near the top of the app shell, for example:

```tsx
import CoinClickLayer from "./components/CoinClickLayer";

function App() {
  return (
    <>
      <CoinClickLayer />
      {/* rest of app */}
    </>
  );
}
```

## Notes

- This version assumes Tailwind is available because it uses utility classes.
- If the other site does not use Tailwind, replace `className` values with equivalent CSS:
  - wrapper: `pointer-events: none; position: fixed; inset: 0; z-index: 40; overflow: hidden;`
  - coin: `position: absolute; width: 40px; height: 40px; object-fit: contain;`
- To disable the effect for any custom element, add `data-no-coin`.
- Links, buttons, form controls, and editable elements are already excluded.

## Prompt For The Other Codex Chat

```text
Port the coin click effect from my other site into this project.

Requirements:
- Add a global click effect that spawns a pixel-art coin at the mouse position.
- Animate the coin in a short upward arc and fade it out over about 480ms.
- Do not trigger the effect on interactive elements like links, buttons, inputs, labels, selects, summaries, contenteditable elements, or anything with [data-no-coin].
- Mount it once at the app shell/root so it works across the whole site.
- Use this exact React component logic unless you need small adjustments for this codebase:

<paste the CoinClickLayer.tsx component here>

- Also add the asset at /video-game-art/coin.gif or adjust the asset path to match this project.
- If this project does not use Tailwind, convert the utility classes to local CSS instead of adding Tailwind just for this.
- After wiring it in, run the project's validation command and report any follow-up changes needed.
```
