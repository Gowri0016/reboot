import React, { useState } from "react";


const experts = [
  {
    name: "Dr. Name",
    speciality: "Speciality",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Name",
    speciality: "Speciality",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Name",
    speciality: "Speciality",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];




const ExpertsCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? experts.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === experts.length - 1 ? 0 : c + 1));
  return (
    <section className="experts-section" data-aos="fade-up">
      <div className="experts-header-centered">
        <div className="experts-title-psycho">MEET OUR EXPERT PSYCHOLOGISTS</div>
        <div className="experts-subtitle-psycho">50+ THERAPISTS IN THE PANEL</div>
        <div className="experts-desc">
          Experience Unparalleled Medical Expertise With Our Team Of Best-In-Class Doctors.<br />
          At Health Clinics, We Take Pride In Offering You The Highest Standard Of Care, Delivered By Dedicated Professionals Committed To Your Well-Being.
        </div>
      </div>
      <div className="experts-carousel">
        <div className="experts-cards-arrows-wrap">
          <div className="experts-cards">
            {experts.map((expert, idx) => {
              // Show all on desktop, only current on mobile (CSS only)
              return (
                <div
                  className={
                    "expert-card expert-card-responsive" +
                    (idx === current ? " active" : "") +
                    (Math.abs(idx - current) === 1 ? " adjacent" : "")
                  }
                  key={idx}
                  data-index={idx}
                >
                  <img
                    src={expert.img}
                    alt={expert.name}
                    className="expert-img"
                  />
                  <div className="expert-name">{expert.name}</div>
                  <div className="expert-speciality">{expert.speciality}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Controls below cards on mobile/tablet, inline with cards on desktop */}
        <div className="experts-carousel-controls">
          <button className="carousel-arrow left" onClick={prev} aria-label="Previous">&#8592;</button>
          <div className="carousel-dots">
            {experts.map((_, idx) => (
              <span
                key={idx}
                className={"dot" + (idx === current ? " active" : "")}
                onClick={() => setCurrent(idx)}
              ></span>
            ))}
          </div>
          <button className="carousel-arrow right" onClick={next} aria-label="Next">&#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default ExpertsCarousel;
