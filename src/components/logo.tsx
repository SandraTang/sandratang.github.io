import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import React from "react";

function Logo() {
  const logoRef = useRef<THREE.Object3D>(null);
  const { scene } = useGLTF("/logo.glb");
  const scale = 0.025;
  const [x, setX] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setX((x) => x + 0.015);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <primitive
      ref={logoRef}
      object={scene.clone()}
      scale={[scale, scale, scale]}
      rotation={[0.3 * Math.cos(x), Math.PI + 0.3 * Math.sin(x), 0]}
    />
  );
}

export default Logo;
