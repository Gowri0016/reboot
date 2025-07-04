import React from "react";
import "../App.css";


const experts = [
  {
    title: "Depression",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    desc: "Depression is treatable. With professional therapy, self-care, and support, recovery is possible. Seeking help is a strong and positive first step toward healing."
  },
  {
    title: "Anxiety",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    desc: "With the right support, therapy, and coping tools, anxiety can be understood and managed. You don’t have to face it alone – help is available, and healing is ."
  },
  {
    title: "Relationship Issues",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    desc: "Through counseling and guided conversations, you can learn to listen, rebuild trust, and strengthen your bond. Relationship therapy creates a safe space to express."
  },
  {
    title: "Stress Management",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    desc: "Depression is treatable. With professional therapy, self-care, and support, recovery is possible. Seeking help is a strong and positive first step toward healing."
  },
];


const ExpertsHelpSection: React.FC = () => (
  <section className="experts-help-section">
    <h2 className="experts-help-title">
      OUR EXPERTS ARE HERE TO HELP YOU
    </h2>
    <div className="experts-help-cards">
      {experts.map((exp) => (
        <div className="experts-help-card experts-help-card-screenshot" key={exp.title}>
          <div className="experts-help-img-wrap screenshot-img-wrap">
            <img src={exp.img} alt={exp.title} className="experts-help-img screenshot-img" />
            <div className="experts-help-card-content">
              <div className="experts-help-card-title">{exp.title}</div>
              <div className="experts-help-card-desc">{exp.desc}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExpertsHelpSection;
