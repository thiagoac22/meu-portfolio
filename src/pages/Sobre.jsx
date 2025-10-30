import React from "react";
import '../styles/Sobre.css';
import avatar from '../assets/foto-home.jpg'; // mesma foto da home ou outra

export default function Sobre() {
  return (
    <section className="sobre-section">

      {/* Apresentação */}
      <div className="sobre-intro">
        <img src={avatar} alt="Thiago Alves" className="sobre-avatar" />
        <div className="sobre-text">
          <h1>Sobre Mim</h1>
          <p>
            Olá! Eu sou Thiago Alves, desenvolvedor web e analista de dados. Tenho paixão por tecnologia e adoro criar soluções que facilitem a vida das pessoas.
          </p>
        </div>
      </div>

      {/* Formação e experiência */}
      <div className="sobre-info">
        <h2>Formação e Experiência</h2>
        <ul>
          <li>Analista de Dados – Experiência com Power BI, SQL e Excel avançado.</li>
          <li>Desenvolvedor Web – React, React Native, JavaScript, HTML, CSS, Tailwind.</li>
          <li>Gestão de projetos e versionamento de código com Git/GitHub.</li>
        </ul>
      </div>

      {/* Competências adicionais */}
      <div className="sobre-skills">
        <h2>Competências Adicionais</h2>
        <div className="skills-list">
          <span>Trabalho em equipe</span>
          <span>Comunicação</span>
          <span>Resolução de problemas</span>
          <span>Aprendizado contínuo</span>
        </div>
      </div>

    </section>
  );
}
