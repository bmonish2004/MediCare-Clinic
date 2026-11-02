import { Header } from './components/Home/Header'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/public/Home';
import { About } from './pages/public/About';
import { Doctors } from './pages/public/Doctors';
import { Services } from './pages/public/Services';
import { Contact } from './pages/public/Contact';
import { DoctorDetails } from './pages/public/DoctorDetails';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from './components/Home/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:id' element={<DoctorDetails />} />

        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
