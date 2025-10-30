import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h1>Meu Portfólio</h1>

      {/* Ícone do menu hambúrguer */}
      <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links do menu */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
        <Link to="/projetos" onClick={closeMenu}>Projetos</Link>
        <Link to="/contato" onClick={closeMenu}>Contato</Link>
      </div>
    </nav>
  );
}
