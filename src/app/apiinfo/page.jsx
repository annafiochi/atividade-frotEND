export default function ApiInfo() {
  const attributes = [
    { name: "id", desc: "ID único do filme", color: "bg-red-500" },
    { name: "title", desc: "Título do filme", color: "bg-blue-500" },
    { name: "director", desc: "Nome do diretor", color: "bg-green-500" },
    { name: "year", desc: "Ano de lançamento", color: "bg-yellow-500" },
    { name: "genre", desc: "Gênero do filme", color: "bg-purple-500" },
    { name: "rating", desc: "Avaliação/Nota", color: "bg-pink-500" },
    { name: "poster", desc: "URL do poster", color: "bg-indigo-500" },
    { name: "description", desc: "Sinopse do filme", color: "bg-teal-500" },
  ];

  return (
    <div
      className="min-h-screen py-12"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-white/20 backdrop-blur-lg rounded-full mb-6">
            <svg
              className="w-16 h-16 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v10a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1h8z"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🎬 Filme API
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Informações detalhadas sobre a API de filmes utilizada neste projeto
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Nome da API */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Nome da API</h2>
            </div>
            <p className="text-2xl font-semibold text-yellow-300">Film API</p>
          </div>

          {/* Documentação */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Documentação</h2>
            </div>
            <a
              href="https://filmapi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-100 font-medium transition-colors group"
            >
              Ver documentação oficial
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* URL Base */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">URL Base</h2>
            </div>
            <code className="block bg-black/30 text-yellow-300 px-4 py-2 rounded-lg font-mono text-sm break-all">
              https://filmapi.vercel.app/api
            </code>
          </div>

          {/* Endpoint */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Endpoint</h2>
            </div>
            <code className="block bg-black/30 text-yellow-300 px-4 py-2 rounded-lg font-mono text-lg">
              /films
            </code>
          </div>

          {/* Sobre a API */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:transform hover:scale-105 transition-all duration-300 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Sobre a API</h2>
            </div>
            <div className="text-white/90 space-y-3 leading-relaxed">
              <p>
                A <strong>Film API</strong> é uma API RESTful gratuita que
                fornece informações completas sobre filmes, incluindo títulos,
                diretores, anos de lançamento e muito mais.
              </p>
              <p>
                Ideal para desenvolvedores que querem praticar consumo de APIs
                com dados de entretenimento bem estruturados e organizados, sem
                necessidade de autenticação.
              </p>
            </div>
          </div>
        </div>

        {/* Atributos da Resposta */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Atributos da Resposta
            </h2>
            <p className="text-white/80">
              Dados retornados pela API para cada filme
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {attributes.map((attr, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div
                  className={`inline-block px-3 py-1 ${attr.color} rounded-full text-white text-sm font-mono font-bold mb-2`}
                >
                  {attr.name}
                </div>
                <p className="text-white/80 text-sm">{attr.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operações - Apenas GET */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Operação de Consulta
            </h2>
            <p className="text-white/80">
              Como consultar os dados de filmes através da API
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* READ */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">READ</h3>
                  <p className="text-blue-300 font-mono text-sm">GET /films</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Consulta todos os filmes ou um filme específico por ID
              </p>
              <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">// Todos os filmes:</div>
                <div className="text-white">
                  <span className="text-purple-400">GET</span>
                  <span className="text-yellow-300"> /api/films</span>
                </div>
                <div className="text-green-400 mt-2 mb-2">// Filme por ID:</div>
                <div className="text-white">
                  <span className="text-purple-400">GET</span>
                  <span className="text-yellow-300"> /api/films/1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exemplo de Requisição */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Exemplo de Requisição
            </h2>
            <p className="text-white/80">Como fazer uma chamada para a API</p>
          </div>

          <div className="bg-black/30 rounded-lg p-6 font-mono text-sm">
            <div className="text-green-400 mb-2">// JavaScript / Fetch</div>
            <div className="text-white">
              <span className="text-purple-400">fetch</span>
              <span className="text-white">(</span>
              <span className="text-yellow-300">
                'https://filmapi.vercel.app/api/films'
              </span>
              <span className="text-white">)</span>
            </div>
            <div className="text-white ml-4">
              <span className="text-purple-400">.then</span>
              <span className="text-white">(</span>
              <span className="text-blue-400">response</span>
              <span className="text-white"> =&gt; response.json())</span>
            </div>
            <div className="text-white ml-4">
              <span className="text-purple-400">.then</span>
              <span className="text-white">(</span>
              <span className="text-blue-400">data</span>
              <span className="text-white"> =&gt; console.log(data));</span>
            </div>
          </div>
        </div>

        {/* Botão Voltar */}
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-white font-bold text-lg hover:bg-white/30 hover:transform hover:scale-105 transition-all duration-300 shadow-2xl group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Voltar para Home
          </a>
        </div>
      </div>
    </div>
  );
}