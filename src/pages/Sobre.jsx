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

        <h2>Formação Acâdemica</h2>

        <ul>
          <li>Formado em Análise e Desenvolvimento de Sistemas</li>
          <li>Instituição: Universidade Braz Cubas</li>
          <li>Ano de Conclusão: 2025</li>
          <li>Cidade: Mogi das Cruzes</li>
          <li>Estado: São Paulo</li>
        </ul>

      </div>

      {/* Soft Skills*/}
      <div className="sobre-skills">
        <h2>Soft Skills</h2>
        <div className="skills-list">
          <span>Trabalho em equipe</span>
          <span>Comunicação</span>
          <span>Resolução de problemas</span>
          <span>Aprendizado contínuo</span>
        </div>
      </div>

      {/* Hard Skills*/}
      <div className="sobre-skills">
        <h2>Hard Skills</h2>
        <div className="skills-list">
          <span>HTML, CSS, JavaScript</span>
          <span>React, React Native, Vite</span>
          <span>Node.js, Express</span>
          <span>Python</span>
          <span>Git e GitHub</span>
          <span>SQL, PostgreSQL</span>
          <span>APIs RESTful</span>
          <span>Desenvolvimento Mobile</span>
          <span>Electron (para apps desktop)</span>
        </div>
      </div>

    </section>
  );
}
