import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function Logo() {
  const logoRef = useRef<THREE.Object3D>(null);
  const { scene } = useGLTF("/logo.glb");
  const scale = 0.025;
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const initialScrollYRef = useRef(0);

  useEffect(() => {
    initialScrollYRef.current = window.scrollY;
    setIsMobile(window.innerWidth < 640);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const normalizedX = event.clientX / window.innerWidth - 0.5;
      const normalizedY = event.clientY / window.innerHeight - 0.5;

      setMousePosition({ x: normalizedX, y: normalizedY });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const effectiveScrollY = Math.max(scrollY - initialScrollYRef.current, 0);
  const scrollRotationX = 1.5 * (1 - Math.cos(effectiveScrollY * 0.005));
  const scrollRotationY = Math.PI + Math.sin(effectiveScrollY * 0.005);
  const mouseRotationX = isMobile ? 0 : mousePosition.y * 1.2;
  const mouseRotationY = isMobile ? 0 : mousePosition.x * 1.2;
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
