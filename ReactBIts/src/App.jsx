import FifthPage from "./components/FifthPage";
import FirstPage from "./components/FirstPage";
import FourthPage from "./components/FourthPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";



const App = () => {
  return (
    <div className="bg-black">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage/>
    </div>
  );
};

export default App;
