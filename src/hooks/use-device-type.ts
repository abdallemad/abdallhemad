import { useState, useEffect } from "react";

// Custom hook
export function useDeviceType() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );

  useEffect(() => {
    // Tailwind default breakpoints
    const sm = 640; // mobile upper limit
    const md = 768; // tablet upper limit
    const lg = 1024; // desktop start

    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < sm) {
        setDevice("mobile");
      } else if (width >= sm && width < lg) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return device;
}
