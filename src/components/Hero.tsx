import React from "react";

const Hero: React.FC = () => (
  <section className="hero-section">
    <div className="hero-title-full">
      <div className="hero-label">ABOUT US</div>
      <h1 className="hero-title">HELPING YOU ‘BE THE BEST VERSION OF YOURSELF!'</h1>
    </div>
    <div className="hero-container">
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=400&q=80"
          alt="Doctor at desk"
        />
      </div>
      <div className="hero-content">
        <div className="hero-desc">
          <b>🌿 A Space for Healing and Growth</b>
          <br />
          Welcome to [Your Clinic Name], a place where emotional well-being, empathy, and expert psychological care come together. We are dedicated to helping individuals, couples, and families navigate life’s challenges with compassion, clarity, and confidence.
          <br />
          <br />
          Led by Dr. [Your Name], a licensed clinical psychologist with [X+] years of experience, our practice focuses on creating a safe, non-judgmental environment for people to share, heal, and grow.
        </div>
        <a href="#" className="hero-explore">EXPLORE</a>
      </div>
    </div>
  </section>
);

export default Hero;
