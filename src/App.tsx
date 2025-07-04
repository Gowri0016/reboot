import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CustomHero from "./components/CustomHero";
import Statistics from "./components/Statistics";
import Approach from "./components/Approach";
import HealingPictures from "./components/HealingPictures";
import Therapies from "./components/Therapies";
import ExpertsGrid from "./components/ExpertsGrid";
import ExpertsHelpSection from "./components/ExpertsHelpSection";
import ExpertsCarousel from "./components/ExpertsCarousel";
import Legacy from "./components/Legacy";
import Testimonials from "./components/Testimonials";
import ContactSection from './components/ContactSection';
import Footer from "./components/Footer";
import AppointmentModal from "./components/AppointmentModal";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
      offset: 60,
    });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onBookAppointment={openModal} />
      <div className="main-content">
        <div id="home">
          <CustomHero onBookAppointment={openModal} />
        </div>
        <div id="about">
          <HealingPictures />
        </div>
        <div id="therapies">
          <Therapies />
        </div>
        <div id="experts">
          <ExpertsCarousel />
          <ExpertsHelpSection />
          <ExpertsGrid />
        </div>
        <div id="legacy">
          <Legacy />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="approach">
          <Approach />
        </div>
        <div id="statistics">
          <Statistics />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
      <AppointmentModal open={modalOpen} onClose={closeModal} />
    </>
  );
};

export default App;
