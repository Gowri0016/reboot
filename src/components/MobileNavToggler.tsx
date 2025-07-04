import React from "react";

interface MobileNavTogglerProps {
  onClick: () => void;
}

const MobileNavToggler: React.FC<MobileNavTogglerProps> = ({ onClick }) => (
  <button className="mobile-nav-toggler" onClick={onClick} aria-label="Open menu">
    <span className="mobile-nav-bar"></span>
    <span className="mobile-nav-bar"></span>
    <span className="mobile-nav-bar"></span>
  </button>
);

export default MobileNavToggler;
