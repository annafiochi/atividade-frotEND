import Image from "next/image";
import Header from "../components/header/Header";
import ProjectsSection from "../components/projectsSection/ProjectsSection";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(135deg, #081c59ff 0%, #1d0fdc7a 100%)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <main className="flex-grow">
        <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div
                  style={{
                    position: "relative",
                    width: "150px",
                    height: "150px",
                  }}
                  className="rounded-full shadow-2xl border-4 border-white dark:border-gray-600 overflow-hidden"
                >
                  <Image
                    src="/images/avatar.jpg"
                    alt="Foto do aluno"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                    priority
                  />
                </div>

                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full w-8 h-8 border-4 border-white dark:border-gray-600"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Anna Clara Fiochi
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 text-white mb-8">
              Desenvolvedora de sistemas
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
                <div className="text-3xl mb-3">🏫</div>
                <h2 className="text-xl font-semibold text-white mb-2">Senai</h2>
                <p className="text-white/80 font-medium">
                  Escola profissionalisante
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
                <div className="text-3xl mb-3">📚</div>
                <h2 className="text-xl font-semibold text-white mb-2">Turma</h2>
                <p className="text-white/80 font-medium">2TDS2-2025</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
              <div className="text-4xl mb-4">💭</div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Frase Inspiradora
              </h2>
              <blockquote className="text-xl md:text-2xl italic text-white leading-relaxed mb-4">
                &ldquo; É justo que muito custe, aquilo que muito vale.&rdquo;
              </blockquote>
              <cite className="text-white/80 font-medium">
                - Santa Teresa de Jesus
              </cite>
            </div>
            <div className="mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/projetos"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg text-center inline-block"
                >
                  Ver Projetos
                </a>
                <button className="border-2 border-violet-300 text-violet-300 dark:text-violet-300 hover:bg-violet-300 hover:text-white font-bold py-3 px-8 rounded-full transition-colors">
                  Entre em Contato
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">
              Tecnologias & Habilidades
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Git",
                "HTML/CSS",
                "Tailwind",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300 shadow-lg"
                >
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
