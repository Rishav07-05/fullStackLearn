import TextPressure from "./Effects/TextPressure";
import TiltedCard from "./Effects/TiltedCard";

const FourthPage = () => {
  return (
      <div className="h-screen w-full bg-black p-10 text-white overflow-hidden">
        <div><TextPressure text="Image Section" textColor="orange" /></div>
              <div className="p-10 bg-cover mt-18 flex justify-center gap-32">
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="500px"
          containerWidth="500px"
          imageHeight="500px"
          imageWidth="500px"
          overlayContent={
            <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
          }
        />
        <TiltedCard
          imageSrc="https://i.pinimg.com/474x/28/14/60/281460788fdf4d75da30e6cb73ea07f3.jpg"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="500px"
          containerWidth="500px"
          imageHeight="500px"
          imageWidth="500px"
          overlayContent={
            <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
          }
        />
        <TiltedCard
          imageSrc="https://i.pinimg.com/236x/e9/aa/42/e9aa42de5bb0da06ae9d6d8501846d68.jpg"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="500px"
          containerWidth="500px"
          imageHeight="500px"
          imageWidth="500px"
          overlayContent={
            <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
          }
        />
      </div>
    </div>
  );
};

export default FourthPage;
