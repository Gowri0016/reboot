import React from "react";
import "../App.css";

interface CustomHeroProps {
  onBookAppointment: () => void;
}

const CustomHero: React.FC<CustomHeroProps> = ({ onBookAppointment }) => {
  return (
    <section className="custom-hero-section" data-aos="fade-up">
      <div className="custom-hero-bg"></div>
      <div className="custom-hero-content">
        <div className="custom-hero-left" data-aos="fade-right">
          <div className="custom-hero-label" data-aos="zoom-in" data-aos-delay="100">TRANSFORM YOUR LIFE WITH PSYCHOLOGY ZONE</div>
          <div className="custom-hero-title" data-aos="fade-up" data-aos-delay="200">
            "TRANSFORM YOUR MENTAL<br />WELL-BEING, ONE STEP AT A TIME"
          </div>
          <div className="custom-hero-desc" data-aos="fade-up" data-aos-delay="300">
            At Reboot, We Believe That Mental Wellness Is The Key To A Balanced And Fulfilling Life. Led By Experienced Psychologist Dr. [Name], We Provide A Safe, Supportive Space For You To Explore, Heal, And Grow.
          </div>
          <button
            className="custom-hero-cta book-appointment-button"
            data-aos="zoom-in"
            data-aos-delay="400"
            onClick={onBookAppointment}
            style={{ cursor: 'pointer' }}
          >
            BOOK APPOINTMENT
          </button>
        </div>
        <div className="custom-hero-right" data-aos="fade-left">
          <div className="custom-hero-img-placeholder" data-aos="zoom-in-up" data-aos-delay="200">MAIN IMAGE</div>
        </div>
      </div>
    </section>
  );
};

export default CustomHero;
