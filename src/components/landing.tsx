import { Canvas } from "@react-three/fiber";
import Logo from "./logo";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

interface CameraControllerProps {
  cameraRef: React.RefObject<THREE.PerspectiveCamera>;
  position: THREE.Vector3;
}

interface LinkPillItem {
  imageUrl: string;
  title: string;
  href: string;
}

type CoinEffect = {
  id: number;
  x: number;
  y: number;
  createdAt: number;
};

function CameraController({ cameraRef, position }: CameraControllerProps) {
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(new THREE.Vector3(0, 0, 0));
    }
  }, [cameraRef, position]);

  return null; // This component doesn't render anything
}

function Landing({ isDarkMode }: { isDarkMode: boolean }) {
  const cameraPosition = new THREE.Vector3(0, 0, 0);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const coinIdRef = useRef(0);
  const [coinEffects, setCoinEffects] = useState<CoinEffect[]>([]);

  const socialLinks: LinkPillItem[] = [
    {
      imageUrl: "/logos-small/linkedin.png",
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/sandra-tang/",
    },
    {
      imageUrl: "/logos-small/behance.png",
      title: "Behance",
      href: "https://www.behance.net/sandra-tang",
    },
    {
      imageUrl: "/logos-small/github.png",
      title: "GitHub",
      href: "https://github.com/SandraTang",
    },
    {
      imageUrl: "/logos-small/itchio.png",
      title: "Itch.io",
      href: "https://stangs.itch.io/",
    },
  ];

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
      if (!landingRef.current) return;

      const bounds = landingRef.current.getBoundingClientRect();
      const withinLanding =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      if (!withinLanding) return;

      const id = coinIdRef.current++;
      const x = event.clientX - bounds.left - 16;
      const y = event.clientY - bounds.top - 28;

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
    <div
      ref={landingRef}
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-4 text-var(--foreground) sm:min-h-screen sm:flex-row sm:px-0"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        {coinEffects.map((coinEffect) => (
          (() => {
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
          })()
        ))}
      </div>
      <div className="z-10 flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-4xl sm:text-6xl">Hi, I'm Sandra Tang</h1>
        <div className="flex flex-col gap-0">
          <p>Lifelong indie game developer.</p>
          <p>Creating for the love of it.</p>
        </div>
        <div className="relative flex flex-col items-center gap-6">
          <div
            className="inline-flex w-fit items-center gap-4 self-center rounded-full"
            style={{ backgroundColor: "#EEEBE8", padding: 10 }}
          >
            {socialLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.title}
              >
                <img
                  src={item.imageUrl}
                  alt={`${item.title} logo`}
                  className="h-10 w-10"
                />
              </a>
            ))}
          </div>
          <img
            src="/video-game-art/priest-crane.gif"
            alt="Pixel art priest crane"
            className="h-20 w-auto object-contain sm:absolute sm:left-full sm:top-[calc(50%-4px)] sm:ml-10 sm:-translate-y-1/2"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
      </div>
      <Canvas
        style={{
          width: "100vw",
          height: "100svh",
          position: "absolute",
          zIndex: -1,
          opacity: isDarkMode ? 0.03 : 0.3,
        }}
        className="transform -translate-y-[150px] sm:translate-y-0 ml:translate-x-[-270px] ml:translate-y-[-25px]"
      >
        <CameraController cameraRef={cameraRef} position={cameraPosition} />
        <ambientLight intensity={5} />
        <Logo />
      </Canvas>
    </div>
  );
}

export default Landing;
