import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function Logo() {
  const logoRef = useRef<THREE.Object3D>(null);
  const { scene } = useGLTF("/logo.glb");
  const scale = 0.025;
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const normalizedX = event.clientX / window.innerWidth - 0.5;
      const normalizedY = event.clientY / window.innerHeight - 0.5;

      setMousePosition({ x: normalizedX, y: normalizedY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollRotationX = 1.5 * (1 - Math.cos(scrollY * 0.005));
  const scrollRotationY = Math.PI + Math.sin(scrollY * 0.005);
  const mouseRotationX = mousePosition.y * 1.2;
  const mouseRotationY = mousePosition.x * 1.2;
  const rotationX = scrollRotationX + mouseRotationX;
  const rotationY = scrollRotationY + mouseRotationY;

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
