import React from "react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

const Footer: React.FC = () => (
  <footer
    style={{
      padding: "1.5rem 0",
      background: "#f5f5f5",
      textAlign: "center",
      borderTop: "1px solid #eaeaea",
    }}
  >
    <div style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Vokab</div>
    <nav style={{ marginBottom: "0.5rem" }}>
      {footerLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          style={{ margin: "0 0.75rem", color: "#333", textDecoration: "none" }}
        >
          {link.label}
        </a>
      ))}
    </nav>
    <div style={{ fontSize: "0.9rem", color: "#888" }}>
      &copy; {new Date().getFullYear()} Vokab. All rights reserved.
    </div>
  </footer>
);

export default Footer;
