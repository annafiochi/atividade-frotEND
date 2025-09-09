import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProjectsSection from '../../components/projectsSection/ProjectsSection';

export default function Projetos() {
  return (
    <div className="min-h-screen flex flex-col" style={{
      background: "linear-gradient(135deg, #081c59ff 0%, #1d0fdc7a 100%)",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    }}>
      <Header />
      <main className="flex-grow">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}