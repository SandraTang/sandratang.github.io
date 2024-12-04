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
    <div className="flex flex-col sm:flex-row lg:mx-[25vw]">
      <div>
        <p className="text-2xl sm:text-4xl">
          Hi, I'm <span className="font-bold text-orange-500">Sandra Tang</span>
        </p>
        <ul className="list-disc list-inside">
          <li>San Francisco, CA</li>
          <li>MIT CS and Design</li>
          <li>Software Engineer</li>
        </ul>
      </div>
      <Canvas
        style={{
          width: "50vw",
          height: "50vh",
          position: "absolute",
          top: 20,
          right: "5vw",
          zIndex: -1,
          opacity: 0.25,
        }}
      >
        <CameraController cameraRef={cameraRef} position={cameraPosition} />
        <ambientLight intensity={5} />
        <Logo />
      </Canvas>
    </div>
  );
}
