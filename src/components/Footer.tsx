import React from "react";

const Footer: React.FC = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className="footer-left-block">
        <div className="footer-menu-title">MENU</div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Our Therapies</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-connect-title">CONNECT WITH US</div>
        <div className="footer-socials">
          <a className="footer-social" href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#3b5998"/><path d="M15.117 8.667h-1.367V7.667c0-.333.333-.333.667-.333h.667V5.333h-1.333c-1.333 0-2 .667-2 2v1.334H9.117v2h1.334V18h2.333v-7.333h1.333l.333-2z" fill="#fff"/></svg>
          </a>
          <a className="footer-social" href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#E1306C"/><path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.2-7.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" fill="#fff"/></svg>
          </a>
          <a className="footer-social" href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
            <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1da1f2"/><path d="M19.633 7.997c-.508.225-1.054.377-1.626.446a2.825 2.825 0 0 0 1.24-1.555 5.633 5.633 0 0 1-1.793.685 2.818 2.818 0 0 0-4.803 2.57A8.004 8.004 0 0 1 5.09 7.13a2.818 2.818 0 0 0 .872 3.76 2.8 2.8 0 0 1-1.277-.353v.036a2.82 2.82 0 0 0 2.26 2.762 2.8 2.8 0 0 1-1.274.048 2.82 2.82 0 0 0 2.633 1.957A5.654 5.654 0 0 1 4 17.13a7.978 7.978 0 0 0 4.29 1.257c5.148 0 7.967-4.267 7.967-7.967 0-.121-.003-.242-.009-.362a5.7 5.7 0 0 0 1.385-1.46z" fill="#fff"/></svg>
          </a>
          <a className="footer-social" href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#0077b5"/><path d="M17 17h-2.5v-3.5c0-.8-.3-1.3-1-1.3-.6 0-.9.4-1 1.1V17H10V10h2.5v1c.3-.5 1-1.2 2.1-1.2 1.5 0 2.4 1 2.4 2.9V17zM7.5 8.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM8.8 17H6.2V10h2.6v7z" fill="#fff"/></svg>
          </a>
          <a className="footer-social" href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
            <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#ff0000"/><path d="M16.5 12l-6 3.5v-7z" fill="#fff"/></svg>
          </a>
        </div>
      </div>
      <div className="footer-logo-block">
        <div className="footer-logo">
          <span className="footer-logo-icon">⏁</span>
          <span className="footer-logo-text">AS KIDS</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
