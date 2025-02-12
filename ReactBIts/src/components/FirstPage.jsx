import Aurora from "./Effects/Aurora";
import BlurText from "./Effects/BlurText";
import Ribbons from "./Effects/Ribbons";
import SpotlightCard from "./Effects/SpotLightCard";
import TextPressure from "./Effects/TextPressure";


const FirstPage = () => {
    return (
        <div className="firstPage">
            <div className="h-screen w-full overflow-hidden relative bg-black text-white flex flex-row gap-10 items-center justify-center">
      {/* Squares Background (Lowest Layer) */}
      <div className="absolute top-0 left-0 w-full h-full z-[-2px]">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} speed={1.5} />
      </div>

      {/* Ribbons Effect (Above Squares but Behind Content) */}
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <Ribbons colors={["#add8e6"]} />
      </div>

      {/* Foreground Content (Above All Effects) */}
      {[1, 2, 3].map((_, index) => (
        <div key={index} className="flex flex-col items-center gap-10">
          <TextPressure text="Animation" textColor="orange" />
          <SpotlightCard className="w-96 h-96 z-10">
            <h1 className="font-bold mb-5">Elevate Your Experience</h1>
            <BlurText text="Discover a world of smooth animations and interactive elements that bring your ideas to life. Experience seamless design with captivating effects that make every interaction feel magical. ✨" />
          </SpotlightCard>
        </div>
      ))}
    </div>
        </div>
    );
};

export default FirstPage;