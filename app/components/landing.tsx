"use client";

import { Canvas } from "@react-three/fiber";
import Logo from "./logo";
import * as THREE from "three";
import { useEffect, useRef } from "react";

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

export default function Landing() {
  const cameraPosition = new THREE.Vector3(0, 5, 10);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  return (
    <div className="flex flex-col sm:flex-row lg:mx-[25vw] mb-[25vh] text-white">
      <div>
        <p className="text-2xl sm:text-4xl mb-4">Hi, I'm Sandra Tang</p>
        <p>I'm a San Francisco based maker and software engineer.</p>
        <p>
          <i>MIT Computer Science and Design</i>
        </p>
      </div>
      <Canvas
        style={{
          width: "50vw",
          height: "50vh",
          position: "absolute",
          top: "10vh",
          transform: "translateX(-55%)",
          zIndex: -1,
          opacity: 0.03,
        }}
      >
        <CameraController cameraRef={cameraRef} position={cameraPosition} />
        <ambientLight intensity={5} />
        <Logo />
      </Canvas>
    </div>
  );
}
