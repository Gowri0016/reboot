import React from "react";

const Legacy: React.FC = () => (
  <section className="legacy-section" data-aos="fade-up">
    <div className="legacy-title" data-aos="fade-up" data-aos-delay="100">OUR LEGACY</div>
    <div className="legacy-grid">
      <div className="legacy-card" data-aos="fade-up" data-aos-delay="200">
        <div className="legacy-number">70+</div>
        <div className="legacy-label">Psychologists</div>
      </div>
      <div className="legacy-card" data-aos="fade-up" data-aos-delay="300">
        <div className="legacy-number">100+</div>
        <div className="legacy-label">Lives Impacted</div>
      </div>
      <div className="legacy-card" data-aos="fade-up" data-aos-delay="400">
        <div className="legacy-number">40+</div>
        <div className="legacy-label">Hours in Counselling</div>
      </div>
      <div className="legacy-card" data-aos="fade-up" data-aos-delay="500">
        <div className="legacy-number">200+</div>
        <div className="legacy-label">Community Members</div>
      </div>
    </div>
    <div className="legacy-quote" data-aos="fade-up" data-aos-delay="600">
      "The greatest discovery of my generation is that a human being can change his life by changing his thoughts." — William James
    </div>
  </section>
);

export default Legacy;
