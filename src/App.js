import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Herosection/Hero'
import Albumcard from './components/Albums/Albumcard'
function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Albumcard img = {require("./assets/sample-img-card.png")} follows={123} category="New Bollywood" />
    </>
  );
}

export default App;
