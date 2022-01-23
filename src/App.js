import "./App.css";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LinkShortner from "./components/LinkShortner";
import Nav from "./components/Nav";
import Statistics from "./components/Statistics";
function App() {
  return (
    <>
      <main className=" w-desktop mx-auto font-poppins  ">
        <Nav />
        <Hero />
        <LinkShortner />
      </main>
      <Statistics />
      <BoostLinks />
      <Footer />
    </>
  );
}

export default App;
