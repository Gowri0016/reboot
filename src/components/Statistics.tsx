import React from "react";
import "../App.css";

const Statistics: React.FC = () => (
  <section className="statistics-section" data-aos="fade-up">
    <div className="statistics-container">
      <div className="statistics-image-wrap" data-aos="fade-right">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Stethoscope on medical chart"
          className="statistics-image"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        />
      </div>
      <div className="statistics-content" data-aos="fade-left">
        <div className="statistics-label" data-aos="zoom-in" data-aos-delay="100">STATISTIC</div>
        <h2 className="statistics-title" data-aos="fade-up" data-aos-delay="200">MENTAL HEALTH<br />BY THE NUMBERS</h2>
        <div className="statistics-desc" data-aos="fade-up" data-aos-delay="300">
          Vulputate Bibendum Erat Morbi Interdum Diam Sit, Eu Sit Dolor Vel Sodales Sed Nibh Ut. Ac Fringilla Frames Eget A Aliquet. Gravida Placerat Viverra Purus Sed Ac Ultricies Sem Nulla.
        </div>
        <div className="statistics-grid">
          <div className="statistics-item" data-aos="fade-up" data-aos-delay="100">
            <div className="statistics-number">1500+</div>
            <div className="statistics-text">SATISFIED CLIENTS</div>
          </div>
          <div className="statistics-item" data-aos="fade-up" data-aos-delay="200">
            <div className="statistics-number">1200+</div>
            <div className="statistics-text">POSITIVE REVIEWS</div>
          </div>
          <div className="statistics-item" data-aos="fade-up" data-aos-delay="300">
            <div className="statistics-number">200+</div>
            <div className="statistics-text">WORKSHOPS HELD</div>
          </div>
          <div className="statistics-item" data-aos="fade-up" data-aos-delay="400">
            <div className="statistics-number">1800+</div>
            <div className="statistics-text">THERAPY SESSIONS</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Statistics;
