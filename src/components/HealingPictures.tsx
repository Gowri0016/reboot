import React from "react";

const HealingPictures: React.FC = () => (
  <section className="healing-pictures-section" data-aos="fade-up">
    <h2 className="healing-pictures-title" data-aos="fade-up" data-aos-delay="100">HEALING IN PICTURES</h2>
    <div className="healing-pictures-desc" data-aos="fade-up" data-aos-delay="200">
      Take A Glimpse Into Our Calm And Comforting Space – Designed To Help You Relax, Open Up, And Heal. From Warm Therapy Rooms To Peaceful Ambiance, Every Corner Is Created With Your Wellness In Mind.
    </div>
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
      alt="Clinic Reception"
      className="healing-pictures-img"
      data-aos="zoom-in-up"
      data-aos-delay="300"
    />
  </section>
);

export default HealingPictures;
