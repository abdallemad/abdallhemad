import ReactLenis from "lenis/react";



export default function SmoothScroll({ children }: { children: React.ReactNode }) {

  return (
    <ReactLenis
      root
      options={{
        // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
        lerp: 0.05,
        //   infinite: true,
        //   syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}