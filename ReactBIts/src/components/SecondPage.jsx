import { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollingText = () => {
  const textContainerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    text.innerHTML += text.innerHTML; // Duplicate text for seamless loop

    gsap.to(text, {
      x: "-50%",
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={textContainerRef}
      className="w-screen overflow-hidden bg-[crimson] text-[lightblue] flex items-center py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16"
    >
      <div
        ref={textRef}
        className="whitespace-nowrap flex font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl gap-4 sm:gap-6 md:gap-10"
      >
        ⚡ Smooth GSAP Animations • Creative Effects • Stunning UI Designs •
      </div>
    </div>
  );
};

export default ScrollingText;
