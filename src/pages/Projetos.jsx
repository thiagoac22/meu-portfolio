import React, { useState } from "react";
import "../styles/Projetos.css";

export default function Projetos() {
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

  const openVideo = (url) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl(null);
  };

  return (
    <div className="projetos-page">
      <main className="projetos-content">
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
      </main>

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
    </div>
  );
}
