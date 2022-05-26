import Booking from "./Components/Booking";
import CategotrySection from "./Components/CategotrySection";
import Contact from "./Components/Contact";
import Emailing from "./Components/Emailing";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Modal from "./Components/Modal"
import Supporters from "./Components/Supporters";
import Testimonial from "./Components/Testimonial";
import TopSelling from "./Components/TopSelling";

function App() {
  return (
    <div className="overflow-hidden">
    <Modal/>
    <Header/>
    <Hero/>
    <CategotrySection/>
    <TopSelling/>
    <Booking/>
    <Testimonial/>
    <Supporters/>
    <Emailing/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
