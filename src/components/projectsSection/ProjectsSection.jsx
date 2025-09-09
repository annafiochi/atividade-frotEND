export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "Frontend Livros",
      description: "Sistema de gerenciamento de livros com interface moderna",
      technologies: ["React", "JavaScript", "CSS"],
      githubUrl: "https://github.com/annafiochi/frontEnd-livros.git",
      category: "Frontend"
    },
    {
      id: 2,
      name: "API Jogos Retro",
      description: "API para catálogo de jogos retrô com dados completos",
      technologies: ["Node.js", "API", "JavaScript"],
      githubUrl: "https://github.com/annafiochi/api-jogos-retro.git",
      category: "Backend"
    },
    {
      id: 3,
      name: "Projeto Geografia",
      description: "Aplicação educacional sobre geografia mundial",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/sosogomess/Projeto-Geografia.git",
      category: "Educacional"
    }
  ];

  return (
    <section className="py-20" style={{
      background: "linear-gradient(135deg, #081c59ff 0%, #1d0fdc7a 100%)",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-white/10 backdrop-blur-lg rounded-full mb-6">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">Meus Projetos</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi usando diferentes tecnologias
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform"
            >
              {/* Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  {project.category}
                </span>
                <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>

              {/* Project Name */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-white/80 mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/30 text-white text-xs rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver no GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-white/80 mb-6">
            Interessado em mais projetos? Confira meu perfil completo no GitHub
          </p>
          
          {/* Botões lado a lado */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Botão GitHub */}
            <a
              href="https://github.com/annafiochi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg text-center inline-block"
            >
              Ver Perfil Completo
            </a>
      
            <a
              href="/"
              className="border-2 border-violet-300 text-violet-300 hover:bg-violet-300 hover:text-white font-bold py-3 px-8 rounded-full transition-colors text-center inline-block"
            >
              Voltar para Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}