import React, { useState, useEffect } from "react";
import "../App.css";
import MobileNav from "./MobileNav";
import MobileNavToggler from "./MobileNavToggler";

interface HeaderProps {
  onBookAppointment: () => void;
}

const mainLinks = [
  { label: "HOME", href: "home" },
  { label: "ABOUT US", href: "about" },
  { label: "OUR THERAPIES", href: "therapies" },
  { label: "CONTACT US", href: "contact" },
];
const dropdownLinks = [
  { label: "EXPERTS", href: "experts" },
  { label: "TESTIMONIALS", href: "testimonials" },
];

const Header: React.FC<HeaderProps> = ({ onBookAppointment }) => {
  const [active, setActive] = useState("HOME");
  const [dropdown, setDropdown] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Scroll to section by id
  const handleNavClick = (label: string, id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(label);
    }
  };

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offsets = mainLinks.map((link) => {
        const el = document.getElementById(link.href);
        if (!el) return { label: link.label, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { label: link.label, top: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.label);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="custom-header">
      <div className="custom-header-container">
        <div className="custom-header-left">
          <MobileNavToggler onClick={() => setMobileNavOpen(true)} />
          <MobileNav
            open={mobileNavOpen}
            onClose={() => setMobileNavOpen(false)}
            navLinks={[
              ...mainLinks,
              ...dropdownLinks,
            ].map((l) => ({ label: l.label, href: `#${l.href}` }))}
          />
          <div className="custom-header-logo" aria-label="REBOOT logo">
            <span className="custom-header-logo-icon">⏁</span>
            <span className="custom-header-brand">AS KIDS</span>
          </div>
        </div>
        <nav className="custom-header-nav">
          {mainLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.href}`}
              className={`custom-header-link${active === link.label ? " active" : ""}`}
              onClick={handleNavClick(link.label, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div
            className="custom-header-link custom-header-dropdown"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            tabIndex={0}
          >
            MORE
            <span className="custom-header-dropdown-arrow">▼</span>
            {dropdown && (
              <div className="custom-header-dropdown-menu">
                {dropdownLinks.map((link) => (
                  <a
                    key={link.label}
                    href={`#${link.href}`}
                    className="custom-header-link custom-header-link-dropdown"
                    onClick={handleNavClick(link.label, link.href)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
        <button
          className="custom-header-cta book-appointment-button"
          onClick={onBookAppointment}
          style={{ cursor: 'pointer' }}
        >
          <span>BOOK APPOINTMENT</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
