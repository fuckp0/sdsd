import "./App.css";
import Homepage from "./components/pages/home/home";
import AboutUs from "./components/pages/home/aboutus";
import Recordings from "./components/pages/home/recordings";
import WhyChooseUs from "./components/pages/home/whychoose";
import Features from "./components/pages/home/features";
import Footer from "./components/pages/home/footer";

function App() {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      {/* Pass scrollToSection to Homepage for navbar links */}
      <Homepage scrollToSection={scrollToSection} />
      <section id="aboutus">
        <AboutUs />
      </section>
      <section id="recordings">
        <Recordings />
      </section>
      <section id="whychooseus">
        <WhyChooseUs />
      </section>
      <section id="features">
        <Features />
      </section>
      <Footer />
    </div>
  );
}

export default App;