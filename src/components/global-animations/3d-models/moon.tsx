"use client";
import { useDeviceType } from "@/hooks/use-device-type";
import { a, useSpring } from "@react-spring/three";
import { Html, useProgress, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRouter } from "next/router";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

export default function SmoothMoonScroll() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="">
      {/* <ambientLight intensity={0.51} /> */}
      <directionalLight position={[4, 0, 0]} intensity={5} />
      {/* <OrbitControls /> */}
      <Suspense fallback={<Loader />}>
        <Moon />
      </Suspense>
    </Canvas>
  );
}
function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
function Moon() {
  const texture = useTexture("/texture/moon-texture.png");
  const earthRef = useRef<THREE.Mesh>(null);
  const [spring, api] = useSpring(() => ({
    from: { rotation: [0, 0, 0] },
  }));
  const prevScrollY = useRef(0);
  const direction = useRef(1);
  const deviceType = useDeviceType();

  useEffect(() => {

    function handleScroll() {
      const viewportHeight = window.innerHeight || 1;
      // How many viewport-heights have been scrolled
      const normalizedProgress = window.scrollY / viewportHeight;

      direction.current = window.scrollY > prevScrollY.current ? 1 : -1;
      prevScrollY.current = window.scrollY;

      api.start({
        rotation: [0, normalizedProgress * Math.PI * 0.3, 0],
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [api]);

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * direction.current * 0.1;
    }
  });
  const { height } = useThree((s) => s.viewport);

  return (
    <group
      rotation={[0, 3.4, 0]}
      ref={earthRef}
      position={deviceType === "mobile" ? [0, -height / 2, 0] : [0, 0, 0]}
    >
      <a.group
        // @ts-ignore
        rotation={spring.rotation}
      >
        <mesh scale={deviceType === "mobile" ? 1 : 1.3}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial bumpMap={texture} bumpScale={5} map={texture} />
        </mesh>
      </a.group>
    </group>
  );
}
