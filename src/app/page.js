import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Toolkit from "./pages/Toolkit";


export default function HomePage() {
  return (
  <div className="">
<Hero/>
<About/>
<Projects/>
<Toolkit/>
<Testimonials/>
<Contact/>
<Footer/>
   </div>

  );
}
