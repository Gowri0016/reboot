import React, { useState } from "react";

const experts = [
  {
    name: "Militan Parker",
    title: "Co-Founder",
    image:
      "https://images.unsplash.com/photo-1511174511562-5f97f4f4eab6?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Renee Wilkinson",
    title: "Clinical Psychologist",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Wilbert Larkin",
    title: "Clinical Psychologist",
    image:
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=400&q=80",
  },
];




const ExpertsGrid: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? experts.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === experts.length - 1 ? 0 : c + 1));
  return (
    <section className="experts-section" data-aos="fade-up">
      <div className="experts-header-row">
        <div>
          <div className="experts-label">OUR TEAM</div>
          <h2 className="experts-title">
            TEAM OF COMPASSIONATE
            <br />
            EXPERTS
          </h2>
        </div>
        <a href="#" className="experts-explore-btn">
          EXPLORE
        </a>
      </div>
      <div className="experts-carousel">
        <div className="experts-cards-arrows-wrap">
          <div className="experts-cards">
            {experts.map((expert, idx) => {
              // Show all on desktop, only current on mobile (CSS only)
              return (
                <div
                  className={
                    "expert-card" +
                    (idx === current ? " active" : "") +
                    (Math.abs(idx - current) === 1 ? " adjacent" : "") +
                    (" expert-card-responsive")
                  }
                  key={expert.name}
                  data-index={idx}
                >
                  <img src={expert.image} alt={expert.name} />
                  <div className="expert-name">{expert.name}</div>
                  <div className="expert-speciality">{expert.title}</div>
                </div>
              );
            })}
          </div>
        </div>
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

export default ExpertsGrid;
