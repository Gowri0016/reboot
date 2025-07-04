import React from "react";
import "../App.css";

const steps = [
  {
    label: "STEP 1",
    title: "Consultation and Assessment",
  },
  {
    label: "STEP 2",
    title: "Personalized Treatment Plan",
  },
  {
    label: "STEP 3",
    title: "Therapeutic Interventions",
  },
  {
    label: "STEP 4",
    title: "Ongoing Support and Progress",
  },
];


const Approach: React.FC = () => (
  <section className="approach-section" data-aos="fade-up">
    <div className="approach-container">
      <div className="approach-content" data-aos="fade-right">
        <div className="approach-label" data-aos="zoom-in" data-aos-delay="100">HOW IT WORKS</div>
        <h2 className="approach-title" data-aos="fade-up" data-aos-delay="200">UNDERSTANDING<br />OUR APPROACH</h2>
        <div className="approach-desc" data-aos="fade-up" data-aos-delay="300">
          Vulputate Bibendum Erat Morbi Interdum Diam Sit, Eu Sit Dolor Vel Sodales Sed Nibh Ut. Ac Fringilla Frames Eget A Aliquet. Gravida Placerat Viverra Purus Sed Ac Ultricies Sem Nulla.
        </div>
      </div>
      <div className="approach-image-wrap" data-aos="fade-left">
        <img
          src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=600&q=80"
          alt="Doctor consulting patient"
          className="approach-image"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        />
      </div>
    </div>
    <div className="approach-steps-row">
      <div className="approach-steps">
        {steps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <div className="approach-step" data-aos="fade-up" data-aos-delay={100 + idx * 100}>
              <div className="approach-step-icon" data-aos="zoom-in" data-aos-delay={150 + idx * 100}>
                <span className="approach-step-star">★</span>
              </div>
              <div className="approach-step-label">{step.label}</div>
              <div className="approach-step-title">{step.title}</div>
            </div>
            {/* Render blue arrow except after the last step */}
            {idx < steps.length - 1 && (
              <div className="approach-step-arrow" data-aos="fade-right" data-aos-delay={200 + idx * 100}>
                <svg>
                  <path d="M2 12H30M30 12L23 5M30 12L23 19" stroke="#2256a7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default Approach;
