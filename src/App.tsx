import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";
import Shorterer from "./Components/Shorterer/Shorterer";
import Statistics from "./Components/Statistics/Statistics";
import Boost from "./Components/Boost/Boost";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Shorterer />
        <Statistics />
        <Boost />
      </main>
      <Footer />
    </>
  );
}

export default App;
