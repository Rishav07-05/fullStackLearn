import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollText = () => {
  const textRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const page = pageRef.current;

    gsap.to(text, {
      x: () => {
        return page.clientWidth - text.offsetWidth - 10;
      },
      ease: "none",
      scrollTrigger: {
        trigger: page,
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        // markers: true, // Remove in production
      },
    });

    // Refresh ScrollTrigger on window resize to recalc measurements.
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={pageRef}
      className="h-[400px] w-full bg-[lightblue] flex items-center justify-center text-orange-500 overflow-x-hidden relative"
    >
      <h1 ref={textRef} className="text-9xl font-bold absolute left-10">
        MAKES THE DEFINED WORK 
      </h1>
    </div>
  );
};

export default ScrollText;
