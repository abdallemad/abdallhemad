'use client'
import { useDeviceType } from '@/hooks/use-device-type';
import { a, useSpring } from '@react-spring/three';
import { Html, useProgress, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Suspense, useEffect, useRef } from "react";
import * as THREE from 'three';


export default function SmoothEearthScroll() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="">
      {/* <ambientLight intensity={0.51} /> */}
      <directionalLight position={[4, 0, 0]} intensity={5} />
      {/* <OrbitControls /> */}
      <Suspense fallback={<Loader />}>
        <Eearth />
      </Suspense>
    </Canvas>
  )
}
function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
function Eearth() {


  const texture = useTexture('/texture/earth-gray.png')
  const earthRef = useRef<THREE.Mesh>(null)
  const [spring, api] = useSpring(() => ({
    from: { rotation: [0, 0, 0] }
  }))
  const scrollProgress = useRef(0);
  const prevScrollProgress = useRef(0);
  const direction = useRef(1);
  const deviceType = useDeviceType()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: ".earth-scroll-base",
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const currentProgress = self.progress;
        direction.current = currentProgress > prevScrollProgress.current ? 1 : -1;
        prevScrollProgress.current = currentProgress;
        scrollProgress.current = self.progress
      },
    })

    function handleScroll() {
      api.start({
        rotation: [0, scrollProgress.current * Math.PI * 2, 0]
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * direction.current * 0.1
    }
  })
  const { height } = useThree(s => s.viewport)

  return (
    <group rotation={[0, 3.4, 0]} ref={earthRef} position={deviceType === 'mobile' ? [0, -height / 2, 0] : [0, 0, 0]}>
      <a.group
        // @ts-ignore
        rotation={spring.rotation} >
        <mesh scale={deviceType === 'mobile' ? 1 : 1.3}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial bumpMap={texture} bumpScale={10} map={texture} />
        </mesh>
      </a.group>
    </group>
  )
}