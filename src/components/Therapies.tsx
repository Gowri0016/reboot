
import React, { useState } from "react";


const therapies = [
  {
    number: 1,
    title: "LIFESTYLE WELLNESS",
    desc:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Neque Pretium Habitant Laoreet Cursus Vitae Pellentesque Elit. Id Consectetur Bibendum Auctor Velit Sit Tortor Volutpat At Aliquam. Vivamus Amet Auctor Euismod Sed Ut Accumsan Gravida Tempus. In Ligula At Eget Laoreet Lectus Tempus Quisque Vestibulum.",
  },
  {
    number: 2,
    title: "FACE WELLNESS",
    desc:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Neque Pretium Habitant Laoreet Cursus Vitae Pellentesque Elit. Id Consectetur Bibendum Auctor Velit Sit Tortor Volutpat At Aliquam. Vivamus Amet Auctor Euismod Sed Ut Accumsan Gravida Tempus. In Ligula At Eget Laoreet Lectus Tempus Quisque Vestibulum.",
  },
  {
    number: 3,
    title: "ANTI-AGING",
    desc:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Neque Pretium Habitant Laoreet Cursus Vitae Pellentesque Elit. Id Consectetur Bibendum Auctor Velit Sit Tortor Volutpat At Aliquam. Vivamus Amet Auctor Euismod Sed Ut Accumsan Gravida Tempus. In Ligula At Eget Laoreet Lectus Tempus Quisque Vestibulum.",
  },
  {
    number: 4,
    title: "YOGA",
    desc:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Neque Pretium Habitant Laoreet Cursus Vitae Pellentesque Elit. Id Consectetur Bibendum Auctor Velit Sit Tortor Volutpat At Aliquam. Vivamus Amet Auctor Euismod Sed Ut Accumsan Gravida Tempus. In Ligula At Eget Laoreet Lectus Tempus Quisque Vestibulum.",
  },
  {
    number: 5,
    title: "MEDITATION",
    desc:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Neque Pretium Habitant Laoreet Cursus Vitae Pellentesque Elit. Id Consectetur Bibendum Auctor Velit Sit Tortor Volutpat At Aliquam. Vivamus Amet Auctor Euismod Sed Ut Accumsan Gravida Tempus. In Ligula At Eget Laoreet Lectus Tempus Quisque Vestibulum.",
  },
  {
    number: 6,
    title: "LIFESTYLE WELLNESS",
    desc:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Neque Pretium Habitant Laoreet Cursus Vitae Pellentesque Elit. Id Consectetur Bibendum Auctor Velit Sit Tortor Volutpat At Aliquam. Vivamus Amet Auctor Euismod Sed Ut Accumsan Gravida Tempus. In Ligula At Eget Laoreet Lectus Tempus Quisque Vestibulum.",
  },
];


const Therapies: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const goTo = (idx: number) => {
    if (idx === current) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setTransitioning(false);
    }, 400);
  };
  const prev = () => goTo(current === 0 ? therapies.length - 1 : current - 1);
  const next = () => goTo(current === therapies.length - 1 ? 0 : current + 1);

  return (
    <section className="therapies-section" data-aos="fade-up">
      <div className="therapies-content">
        <div className="therapies-left">
          <div className="therapies-label">THERAPIES</div>
          <div className="therapies-title">
            <span className="blue">LIVE STRONGER,</span>
            <br />
            <span className="black">HEALTHIER, LONGER</span>
          </div>
          <div className={`therapies-card therapies-transition${transitioning ? ' transitioning' : ''}`}> 
            <div className="therapies-number">{therapies[current].number}</div>
            <div className="therapies-card-title">{therapies[current].title}</div>
            <div className="therapies-card-desc">{therapies[current].desc}</div>
            <a href="#" className="therapies-explore">EXPLORE</a>
          </div>
        </div>
        <div className="therapies-right">
          <img
            src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=400&q=80"
            alt="Doctors"
            className={`therapies-img main therapies-transition${transitioning ? ' transitioning' : ''}`}
          />
          <img
            src="https://images.unsplash.com/photo-1512070679279-c2f999098c01?auto=format&fit=crop&w=400&q=80"
            alt="Therapy"
            className={`therapies-img side therapies-transition${transitioning ? ' transitioning' : ''}`}
          />
        </div>
      </div>
      <div className="therapies-dots" data-aos="fade-up" data-aos-delay="400">
        <button aria-label="Previous" className="therapies-nav-btn" onClick={prev} disabled={transitioning}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="url(#prevGradient)"/>
            <path d="M14.5 8L10.5 12L14.5 16" stroke="#2256a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="prevGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#eaf3fc"/>
                <stop offset="1" stopColor="#b3d6f6"/>
              </linearGradient>
            </defs>
          </svg>
        </button>
        <span className="therapies-dots-inner">
          {therapies.map((_, idx) => (
            <span
              key={idx}
              className={"dot" + (idx === current ? " active" : "")}
              onClick={() => goTo(idx)}
              style={{ cursor: 'pointer' }}
            ></span>
          ))}
        </span>
        <button aria-label="Next" className="therapies-nav-btn" onClick={next} disabled={transitioning}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="url(#nextGradient)"/>
            <path d="M9.5 8L13.5 12L9.5 16" stroke="#2256a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="nextGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#eaf3fc"/>
                <stop offset="1" stopColor="#b3d6f6"/>
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Therapies;
