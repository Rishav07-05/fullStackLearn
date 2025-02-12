import { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollingText = () => {
  const textContainerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // const container = textContainerRef.current;
    const text = textRef.current;

    // Duplicate text to ensure seamless looping
    text.innerHTML += text.innerHTML;

    gsap.to(text, {
      x: "-50%", // Moves half the duplicated text width
      duration: 10, // Adjust speed
      ease: "linear",
      repeat: -1, // Infinite loop
    });
  }, []);

  return (
    <div ref={textContainerRef} className="w-full overflow-hidden bg-[crimson] text-[lightblue] rounded-4xl flex items-center py-16">
      <div ref={textRef} className="whitespace-nowrap flex text-4xl font-bold gap-10">
        {/* Single text duplicated inside useEffect */}
        ⚡ Smooth GSAP Animations • Creative Effects • Stunning UI Designs •
      </div>
    </div>
  );
};

export default ScrollingText;
