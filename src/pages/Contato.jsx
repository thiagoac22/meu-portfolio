import React from "react";
import '../styles/Contato.css';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Contato() {
  return (
    <section className="contact-banner">
      <div className="contact-content">
        <h2 className="animate-slide">🚀 Vamos conversar?</h2>
        <p className="animate-fade">
          Bora trabalhar juntos ? Clique no botão do Whatsapp e fale comigo !
        </p>

        <p>Pode me encontrar nas redes sociais</p>

        {/* Ícones das redes sociais abaixo do texto */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/thiago-alves-da-cruz" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/thiagoalves.tech" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/thiagoac22" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Botão flutuante fixo do WhatsApp */}
      <a
        href="https://wa.me/5511913695791"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating animate-pulse"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </section>
  );
}
