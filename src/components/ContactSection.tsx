import React from "react";
import "../App.css";


const ContactSection: React.FC = () => {
  return (
    <section className="contact-section custom-contact-section" data-aos="fade-up">
      <div className="contact-header custom-contact-header">
        <h2 className="contact-title custom-contact-title" data-aos="fade-up" data-aos-delay="100">CONTACT US</h2>
        <div className="contact-subtitle custom-contact-subtitle" data-aos="fade-up" data-aos-delay="200">GET IN TOUCH WITH OUR WELLNESS EXPERTS</div>
      </div>
      <div className="custom-contact-main">
        <div className="custom-contact-form-wrap">
          <div className="custom-contact-form-card" data-aos="fade-right" data-aos-delay="200">
            <div className="custom-contact-form-title" data-aos="fade-up" data-aos-delay="250">
              START YOUR WELLNESS <span className="custom-contact-form-title-highlight">JOURNEY TODAY</span>
            </div>
            <div className="custom-contact-form-desc" data-aos="fade-up" data-aos-delay="300">
              Please fill out the form with your symptoms, and our Experts will be in touch with you soon.
            </div>
            <form className="custom-contact-form">
              <label className="custom-contact-label" data-aos="fade-up" data-aos-delay="350">Please Choose The Challenge You Are Facing</label>
              <select className="custom-contact-select" data-aos="fade-up" data-aos-delay="400">
                <option value="">-- Select Problem --</option>
                <option value="anxiety">Anxiety</option>
                <option value="depression">Depression</option>
                <option value="relationship">Relationship</option>
                <option value="stress">Stress</option>
                <option value="other">Other</option>
              </select>
              <input className="custom-contact-input" type="text" placeholder="Name" data-aos="fade-up" data-aos-delay="450" />
              <input className="custom-contact-input" type="email" placeholder="Email" data-aos="fade-up" data-aos-delay="500" />
              <input className="custom-contact-input" type="tel" placeholder="Phone" data-aos="fade-up" data-aos-delay="550" />
              <input className="custom-contact-input" type="text" placeholder="City" data-aos="fade-up" data-aos-delay="600" />
              <button className="custom-contact-submit" type="submit" data-aos="zoom-in" data-aos-delay="650">SUBMIT</button>
            </form>
          </div>
        </div>
        <div className="custom-contact-images-col">
          <img className="custom-contact-img" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="consultation" data-aos="zoom-in" data-aos-delay="200" />
          <img className="custom-contact-img" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="therapy" data-aos="zoom-in" data-aos-delay="300" />
          <img className="custom-contact-img" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="wellness" data-aos="zoom-in" data-aos-delay="400" />
        </div>
      </div>
      <div className="custom-contact-info-row">
        <div className="custom-contact-info-card" data-aos="fade-up" data-aos-delay="200">
          <div className="custom-contact-info-title">Call our Wellness Expert at</div>
          <div className="custom-contact-info-value">+91-00000-00000</div>
        </div>
        <div className="custom-contact-info-card" data-aos="fade-up" data-aos-delay="300">
          <div className="custom-contact-info-title">Shoot us an E-Mail</div>
          <div className="custom-contact-info-value"><a href="mailto:hello@zentool.in">hello@zentool.in</a></div>
        </div>
        <div className="custom-contact-info-card" data-aos="fade-up" data-aos-delay="400">
          <div className="custom-contact-info-title">Visit Your Nearest Location</div>
          <div className="custom-contact-info-value">Monday to Sunday: 10:30AM – 7:30PM</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
