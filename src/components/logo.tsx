import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function Logo() {
  const logoRef = useRef<THREE.Object3D>(null);
  const { scene } = useGLTF("/logo.glb");
  const scale = 0.025;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Map scrollY to a rotation range, e.g., 0 to 2 * Math.PI
  const rotationX = 1 - Math.cos(scrollY * 0.005);
  const rotationY = Math.PI + Math.sin(scrollY * 0.005);

  return (
    <primitive
      ref={logoRef}
      object={scene.clone()}
      scale={[scale, scale, scale]}
      rotation={[rotationX, rotationY, 0]}
    />
  );
}

export default Logo;
