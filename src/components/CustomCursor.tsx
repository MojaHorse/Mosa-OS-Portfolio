"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const pathname = usePathname();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    // Global listener for data-cursor attributes
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Traverse up to find if a parent has data-cursor
      const cursorElement = target.closest('[data-cursor]');
      if (cursorElement) {
        setCursorText(cursorElement.getAttribute("data-cursor") || "");
      } else {
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (pathname === "/cli") return null;
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono font-bold text-sm"
      animate={{
        x: mousePosition.x - (cursorText ? 40 : 12),
        y: mousePosition.y - (cursorText ? 16 : 12),
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    >
      {cursorText ? (
        <div className="bg-neo-yellow text-neo-black px-3 py-1 brutalist-border whitespace-nowrap">
          {cursorText}
        </div>
      ) : (
        <div className="text-neo-black text-2xl" style={{ textShadow: "0 0 2px white, 0 0 2px white, 0 0 2px white" }}>
          +
        </div>
      )}
    </motion.div>
  );
}
