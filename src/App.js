import Nav from "./components/Nav";
import Trending from "./components/Trending";
import Loved from "./components/Loved";
import Kannada from "./components/Kannada";
import Hindi from "./components/Hindi";
import Ultimate from "./components/Ultimate";
import Bollywood from "./components/Bollywood";
import Top10 from "./components/Top10";
import Language from "./components/Language";
import Scrolling from "./components/Scrolling";
import Slideshow from "./components/Slideshow";
import Footer from "./components/Footer";

function App() {
  return (
  <div>
    <Nav/>
    {/* <Scrolling/> */}
    <Slideshow/>
    <Trending/>
    <Loved/>
    <Kannada/>
    <Hindi/>
    <Ultimate/>
    <Bollywood/>
    <Top10/>
    <Language/>
    <Footer/>
  </div>
  );
}

export default App;
