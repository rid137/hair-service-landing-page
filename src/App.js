import Abouts from './components/about/Abouts';
import Bookings from './components/bookings/Bookings';
import Contact from './components/contact/Contact';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Store from './components/store/Store';
import WhyUs from './components/whyus/WhyUs';

function App() {
  return (
    <div>
      {/* <div className="text-4xl">hello</div> */}
      <Navbar />
      <HeroSection />
      <Services />     
      <Bookings />
      <Abouts />
      <WhyUs />
      <Store />
      <Contact /> 
    </div>
  );
}

export default App;