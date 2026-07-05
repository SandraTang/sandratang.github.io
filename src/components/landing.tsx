import { Canvas } from "@react-three/fiber";
import Logo from "./logo";
import * as THREE from "three";
import { useEffect, useRef } from "react";

interface CameraControllerProps {
  cameraRef: React.RefObject<THREE.PerspectiveCamera>;
  position: THREE.Vector3;
}

interface LinkPillItem {
  imageUrl: string;
  title: string;
  href: string;
}

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

  return (
    <div className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-4 text-var(--foreground) sm:min-h-screen sm:flex-row sm:px-0">
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
