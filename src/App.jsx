import "./App.css";
import AboutCards from "./components/AboutCards/AboutCards";
import AboutUs from "./components/AboutUs/AboutUs";
import AccordionQuestions from "./components/AccordionQuestions/AccordionQuestions";
import Appointment from "./components/Appointment/Appointment";
import Contact from "./components/Contact/Contact";
import Departments from "./components/Departments/Departments";
import Doctors from "./components/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import HelpSection from "./components/HelpSection/HelpSection";
import Hero from "./components/Hero/Hero";
import HeroCards from "./components/HeroCards/HeroCards";
import Laboratory from "./components/Laboratory/Laboratory";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";

const App = () => {
  const logo = { img: "/assets/img/logo.png" };
  const items = [
    {
      id: "HOME",
      name: "HOME",
    },
    {
      id: "ABOUT",
      name: "ABOUT",
    },
    {
      id: "SERVICES",
      name: "SERVICES",
    },
    {
      id: "DEPARTMENTS",
      name: "DEPARTMENTS",
    },
    {
      id: "DOCTORS",
      name: "DOCTORS",
    },
    {
      id: "DROPDOWN",
      name: "DROPDOWN",
    },
    {
      id: "CONTACT",
      name: "CONTACT",
    },
  ];

  return (
    <>
      <NavBar logo={logo} items={items} btn="Make an Appointment" />
      <Hero />
      <HeroCards />
      <HelpSection />
      <AboutUs />
      <AboutCards />
      <Laboratory />
      <Services />
      <Appointment />
      <Departments />
      <Doctors />
      <Gallery />
      <Pricing />
      <AccordionQuestions />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
