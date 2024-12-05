import { Canvas } from "@react-three/fiber";
import Logo from "./logo";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

interface CameraControllerProps {
  cameraRef: React.RefObject<THREE.PerspectiveCamera>;
  position: THREE.Vector3;
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
  const cameraPosition = new THREE.Vector3(0, 5, 10);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const ContactButton = (
    <button
      className="button-filled"
      onClick={() => setContactOpen(!contactOpen)}
    >
      Contact
    </button>
  );

  return (
    <div className="flex flex-col sm:flex-row mb-[25vh] text-var(--foreground)">
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <h1 className="text-4xl sm:text-6xl">Hi, I'm Sandra Tang</h1>
        <p>San Francisco based software engineer, MIT CS + Design</p>
        <div className="flex flex-row gap-4 mt-2">
          {contactOpen ? (
            <div
              className={`flex flex-row gap-2 items-center ${
                isDarkMode ? "bg-[#222]" : "bg-[#eee]"
              } rounded-md`}
            >
              {ContactButton}
              <div className="flex flex-row gap-4 mx-4">
                <span>
                  <a
                    href="https://www.linkedin.com/in/sandra-tang/"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </span>
                <span>|</span>
                <span>
                  <a
                    href="https://github.com/SandraTang"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </span>
              </div>
            </div>
          ) : (
            ContactButton
          )}

          <a href="/Sandra Tang Resume.pdf" download="Sandra Tang Resume.pdf">
            <button className="button-outlined">Resume</button>
          </a>
        </div>
      </div>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          transform: "translateX(-55%)",
          zIndex: -1,
          opacity: isDarkMode ? 0.03 : 0.3,
        }}
        className="top-[-165px] sm:top-[-115px]"
      >
        <CameraController cameraRef={cameraRef} position={cameraPosition} />
        <ambientLight intensity={5} />
        <Logo />
      </Canvas>
    </div>
  );
}

export default Landing;
