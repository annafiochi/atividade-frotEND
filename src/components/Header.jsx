import Image from "next/image";

export default function Header() {
  return (
    <header 
      className="shadow-lg"
      style={{ backgroundColor: '#081c59' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Image
              src="/next.svg"
              alt="Logo"
              width={40}
              height={8}
              className="invert"
            />
            <h1 className="text-xl font-bold text-white">
            Home
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
        
            <a
              href="#sobre"
              className="text-gray-200 hover:text-white font-medium transition-colors"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              className="text-gray-200 hover:text-white font-medium transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="text-gray-200 hover:text-white font-medium transition-colors"
            >
              Contato
            </a>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-200 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
