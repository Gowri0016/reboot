import React from "react";

const Testimonials: React.FC = () => (
  <section className="testimonials-section" data-aos="fade-up">
    <div className="testimonials-title" data-aos="fade-up" data-aos-delay="100">TESTIMONIALS</div>
    <div className="testimonials-cards">
      <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
        <img className="testimonial-img" src="" alt="User 1" data-aos="zoom-in" data-aos-delay="250" />
        <div className="testimonial-stars" data-aos="zoom-in" data-aos-delay="300">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <div className="testimonial-text" data-aos="fade-up" data-aos-delay="350">
          I had an outstanding experience with The Company Name, and I can't praise the service enough. Tabu, one of their staff members, provided exceptional assistance. The level of care and attention to detail was truly impressive. I highly recommend their services – the professionalism and genuine commitment to wellness make them stand out. Five stars without a doubt!
        </div>
        <div className="testimonial-name" data-aos="fade-up" data-aos-delay="400">DEV KUMAR</div>
      </div>
      <div className="testimonial-card" data-aos="fade-up" data-aos-delay="300">
        <img className="testimonial-img" src="" alt="User 2" data-aos="zoom-in" data-aos-delay="350" />
        <div className="testimonial-stars" data-aos="zoom-in" data-aos-delay="400">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <div className="testimonial-text" data-aos="fade-up" data-aos-delay="450">
          I had an outstanding experience with The Company Name, and I can't praise the service enough. Tabu, one of their staff members, provided exceptional assistance. The level of care and attention to detail was truly impressive. I highly recommend their services – the professionalism and genuine commitment to wellness make them stand out. Five stars without a doubt!
        </div>
        <div className="testimonial-name" data-aos="fade-up" data-aos-delay="500">DEV KUMAR</div>
      </div>
    </div>
  </section>
);

export default Testimonials;
