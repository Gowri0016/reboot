import React from "react";
import "../App.css";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

const MobileNav: React.FC<MobileNavProps> = ({ open, onClose, navLinks }) => {
  return (
    <div className={`mobile-nav-overlay${open ? " open" : ""}`}>
      <div className={`mobile-nav-drawer${open ? " open" : ""}`}>
        <button className="mobile-nav-close" onClick={onClose} aria-label="Close menu">
          <span>&times;</span>
        </button>
        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="mobile-nav-link" onClick={onClose}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mobile-nav-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default MobileNav;
