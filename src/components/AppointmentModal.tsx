import React, { useState } from "react";
import "../App.css";

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

const problems = [
  "Anxiety", "Depression", "Relationship Issues", "Stress", "Addiction", "Other"
];

const AppointmentModal: React.FC<AppointmentModalProps> = ({ open, onClose }) => {
  const [selectedProblem, setSelectedProblem] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  if (!open) return null;

  return (
    <div className="appointment-modal-overlay">
      <div className="appointment-modal-card">
        {/* Move close button next to submit button below */}
        <div className="custom-contact-form-title appointment-modal-title">LET’S BOOK YOUR APPOINTMENT</div>
        <form className="custom-contact-form-card appointment-modal-form-no-bg">
          <div className="appointment-modal-label">Please Choose The Challenge You Are Facing:</div>
          <select
            className="custom-contact-select appointment-modal-select"
            value={selectedProblem}
            onChange={e => setSelectedProblem(e.target.value)}
          >
            <option value="">---Select Problems---</option>
            {problems.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          <textarea
            className="custom-contact-input appointment-modal-textarea"
            placeholder="Explain Your Circumstances / Situation"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <div className="appointment-modal-row appointment-modal-row-narrow">
            <div style={{flex: 1}}>
              <div style={{fontWeight: 600, marginBottom: 4}}>Name</div>
              <input
                className="custom-contact-input"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
              />
            </div>
            <div style={{flex: 1}}>
              <div style={{fontWeight: 600, marginBottom: 4}}>Email</div>
              <input
                className="custom-contact-input"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
              />
            </div>
          </div>
          <div className="appointment-modal-row appointment-modal-row-wide">
            <div style={{flex: 1}}>
              <div style={{fontWeight: 600, marginBottom: 4}}>Phone</div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{background: '#1846a3', color: '#fff', borderRadius: 6, padding: '6px 8px', fontWeight: 600, fontSize: '0.98rem', marginRight: 6}}>+91</span>
                <input
                  className="custom-contact-input"
                  placeholder=""
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  type="tel"
                  style={{flex: 1}}
                />
              </div>
            </div>
            <div style={{flex: 1}}>
              <div style={{fontWeight: 600, marginBottom: 4}}>City</div>
              <input
                className="custom-contact-input"
                placeholder="City"
                value={city}
                onChange={e => setCity(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="appointment-modal-actions">
            <button type="submit" className="custom-contact-submit appointment-modal-submit">SUBMIT</button>
            <button className="appointment-modal-close-bottom custom-contact-submit" onClick={onClose} aria-label="Close" type="button">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
