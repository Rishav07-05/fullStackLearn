import FifthPage from "./components/FifthPage";
import FirstPage from "./components/FirstPage";
import FourthPage from "./components/FourthPage";
import SecondPage from "./components/SecondPage";
import TextScroller from "./components/TextScroller";
import ThirdPage from "./components/ThirdPage";



const App = () => {
  return (
    <div className="bg-black overflow-hidden">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <TextScroller />
      <FourthPage />
      <FifthPage/>
    </div>
  );
};

export default App;
