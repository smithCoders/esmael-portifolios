import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./Components/About/About";
import Hero from "../src/Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import PageNotFound from "./Components/PageNotFound";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer";
import Love from "./Components//Ilove/Love";
// import Contact from "./Components/Hero/Contacts/Contact";
import NavBar from "./Components/NavBar/NavBar";
import Testimonials from "./Components/Testimonials/Testimonials";
import Skills from "./Skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Hero />
      <Love />
      <About />
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <Form />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
