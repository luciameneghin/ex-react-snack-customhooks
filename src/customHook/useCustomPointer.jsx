import { useEffect, useState } from "react";

export default function useCustomPointer() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  // const customPointer = useRef()

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPointer({ x: e.clientX, y: e.clientY });
    }
    document.addEventListener("mousemove", handleMouseMove);
    document.documentElement.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pointer.y,
        left: pointer.x,
        fontSize: "2rem",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      🔥
    </div>
  );
};