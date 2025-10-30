import React, { useState } from "react";
import '../styles/Home.css';
import avatar from '../assets/foto-home.jpg';

export default function Home() {

  const [videoUrl, setVideoUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projetos = [
    {
      titulo: "Dashboard de evoluçao de matriculas",
      descricao: "Sistema para uma escola de cursos profissionalizantes.",
      video: "/dashboard_matriculas.mp4", // arquivo local (public/videos)
    },
    {
      titulo: "Sistema de Gerenciamento Acadêmico",
      descricao: "Sistema para uma escola de cursos profissionalizantes.",
      video: "/video_andreasoft-v2.mp4", // arquivo local (public/videos)
    },
    {
      titulo: "App mobile",
      descricao: "Comparativo de preços em tempo real",
      video: "/video_app.mp4", // arquivo local (public/videos)
    },
  ];

  function openVideo(url) {
    setVideoUrl(url);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setVideoUrl(null);
  }  

  return (
    <section className="home-section">

      {/* Apresentação */}
      <section className="home-intro">
        <div className="home-content">
          <img src={avatar} alt="Thiago Alves" className="home-avatar" />
          <h1 className="home-title">Olá, eu sou Thiago Alves</h1>
          <p className="home-description">
            Sou desenvolvedor web e analista de dados. Aqui você pode conhecer meus projetos e meu trabalho.
          </p>
          <a href="/projetos" className="home-button">Ver Projetos</a>
        </div>
      </section>

      {/* Habilidades */}
      <section className="home-skills">
        <h2>Minhas Habilidades</h2>
        <div className="skills-card">
          <div className="skill">React / React Native</div>
          <div className="skill">JavaScript / TypeScript</div>
          <div className="skill">HTML / CSS / Tailwind</div>
          <div className="skill">SQL / Power BI / Excel / PostgreSQL</div>
          <div className="skill">Git / GitHub</div>
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="home-projects">
        <h2>Projetos em Destaque</h2>
        <div className="projects-grid">
          {projetos.map((proj, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => openVideo(proj.video)}
            >
              <h3>{proj.titulo}</h3>
              <p>{proj.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal de vídeo */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            {videoUrl && (
              <video width="100%" height="480" controls autoPlay preload="auto">
                <source src={videoUrl} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
