
import { a, useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";


export default function RobotScene() {

  return (
    <div className="absolute inset-0" data-scroll data-scroll-speed="0.3">

      <Canvas shadows camera={{ position: [0, 0, 7], fov: 50 }}>
        <Lights />
        <Mesh />
      </Canvas>
    </div>
  )
}

function Lights() {
  const { width, height } = useThree(s => s.viewport)
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[-width, height, 4]} intensity={3} color={'#fff'} castShadow />
      <directionalLight position={[-width/2, -height, 4]} intensity={3} color={'#fff'} castShadow />
      <directionalLight position={[width/2, height, -2]} intensity={3} color={'#fff'} castShadow />
      <directionalLight position={[1, 1, -2]} intensity={3} color={'#fff'} castShadow />

    </>
  )
}


function Mesh() {
  const { nodes, materials } = useGLTF('/models/Untitled.glb')
  const [spring, api] = useSpring(() => ({
    from: {
      rotation: [0, 0, 0]
    }
  }))
  const color = '#d4f534'
  const metalness = 1
  const roughness = 0.3
  const mouseHandler = (e: MouseEvent) => {
    const { clientX, clientY } = e
    const x = (clientX / window.innerWidth) - 0.5;
    const y = (clientY / window.innerHeight) - 0.5;
    api.start({ rotation: [y, x, 0] })
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseHandler)

    return () => {
      window.removeEventListener('mousemove', mouseHandler)
    }
  }, [])
  return (
    <group dispose={null} scale={1.7} position={[0, 0, -4]}>
      <group scale={0.01}>
        <group>
          <a.group
            // @ts-ignore
            rotation={spring.rotation}
            position={[-14.028, 55.318, 0]}>
            {/* EARS group */}
            <group position={[0, 6, -5.917]}>
              <mesh castShadow geometry={nodes.Cylinder.geometry} position={[60.266, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.416}>
                <meshStandardMaterial color={color}
                  roughness={roughness}
                  metalness={metalness} />
              </mesh>
              <mesh castShadow geometry={nodes.Cylinder_2.geometry} position={[-60.266, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.416} >
                <meshStandardMaterial color={color}
                  roughness={roughness}
                  metalness={metalness} />
              </mesh>
            </group>
            {/* eye group */}
            <group position={[0.309, -0.194, 0.541]} scale={[1.003, 1.005, 1]}>
              {/* HEAD BOX */}
              <mesh castShadow geometry={nodes.Boolean_2.geometry} position={[22.675, 10.242, 41.142]} >
                <meshStandardMaterial color={color}
                  roughness={roughness}
                  metalness={metalness} />
              </mesh>
              {/* EYES */}
              <mesh castShadow geometry={nodes.Sphere_2.geometry} position={[22.675, 10.242, 34.787]} >
                <meshStandardMaterial color={'white'} />
              </mesh>
              {/* EYES */}
              <mesh castShadow geometry={nodes.Sphere_3.geometry} position={[-22.325, 10.242, 33.726]} >
                <meshStandardMaterial color={'white'} />
              </mesh>
            </group>
            {/* OUTER HEAD */}
            <mesh castShadow geometry={nodes.Boolean.geometry} position={[0.115, 0, -3.575]}>
              <meshStandardMaterial color={color}
                roughness={roughness}
                metalness={metalness} />
            </mesh>
          </a.group>
          <group position={[-13.913, -28.187, -6]}>
            <mesh castShadow geometry={nodes.Cube.geometry} position={[0, 18.022, 0.004]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.223, 1, 0.786]}>
              <meshStandardMaterial color={color}
                roughness={roughness}
                metalness={metalness} />
            </mesh>
            <mesh castShadow geometry={nodes.Cube_2.geometry} position={[0, -11.722, -0.002]} rotation={[1.571, 0, 0]} scale={[1.217, 1, 0.306]}>
              <meshStandardMaterial color={color}
                roughness={roughness}
                metalness={metalness} />
            </mesh>
            <mesh castShadow geometry={nodes.Cube_3.geometry} position={[-13, -28.908, 0.004]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.336, 0.409, 0.396]}>
              <meshStandardMaterial color={color}
                roughness={roughness}
                metalness={metalness} />
            </mesh>
            <mesh castShadow geometry={nodes.Cube_4.geometry} position={[10.453, -28.908, 0.004]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.336, 0.409, 0.396]}>
              <meshStandardMaterial color={color}
                roughness={roughness}
                metalness={metalness} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Untitled.glb')