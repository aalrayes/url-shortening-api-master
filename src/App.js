import "./App.css";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LinkShortener from "./components/LinkShortener";
import Nav from "./components/Nav";
import Statistics from "./components/Statistics";
function App() {
  return (
    <>
      <main className=" max-w-desktop w-4/5 mx-auto font-poppins  ">
        <Nav />
        <Hero />
        <LinkShortener />
      </main>
      <Statistics />
      <BoostLinks />
      <Footer />
    </>
  );
}

export default App;
