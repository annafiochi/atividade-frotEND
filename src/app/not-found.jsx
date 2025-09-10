"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #081c59ff 0%, #1d0fdc7a 100%)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      <div 
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(15px)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          textAlign: 'center',
          maxWidth: '500px',
          width: '100%'
        }}
      >
        {/* Emoji e número 404 */}
        <div style={{ 
          fontSize: '4rem', 
          marginBottom: '0.5rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          😢
        </div>
        
        <div style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          404
        </div>

        {/* Título principal */}
        <h1 style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Página não encontrada 😢
        </h1>

        {/* Mensagem explicativa */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '1rem',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '1.5rem'
        }}>
          <p style={{
            fontSize: '1rem',
            color: '#e0e0e0',
            lineHeight: '1.4',
            marginBottom: '0.5rem'
          }}>
            Oops! Parece que você se perdeu... 🧭
          </p>
          <p style={{
            fontSize: '0.9rem',
            color: '#d0d0d0',
            lineHeight: '1.4'
          }}>
            A página que você procura não existe ou foi movida.
          </p>
        </div>

        {/* Botões de navegação */}
        <div style={{
          display: 'flex',
          gap: '0.8rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link
            href="/"
            style={{
              background: 'linear-gradient(45deg, #60a5fa, #3b82f6)',
              color: 'white',
              textDecoration: 'none',
              padding: '0.7rem 1.5rem',
              borderRadius: '20px',
              fontWeight: 'bold',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(96, 165, 250, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(96, 165, 250, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(96, 165, 250, 0.4)';
            }}
          >
            🏠 Home
          </Link>

          <Link
            href="/filmes"
            style={{
              background: 'linear-gradient(45deg, #a78bfa, #8b5cf6)',
              color: 'white',
              textDecoration: 'none',
              padding: '0.7rem 1.5rem',
              borderRadius: '20px',
              fontWeight: 'bold',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(167, 139, 250, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(167, 139, 250, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(167, 139, 250, 0.4)';
            }}
          >
            🎬 Filmes
          </Link>
        </div>

        {/* Mensagem adicional */}
        <p style={{
          marginTop: '1rem',
          fontSize: '0.8rem',
          color: '#b0b0b0',
          fontStyle: 'italic'
        }}>
          Entre em contato se isso for um erro.
        </p>
      </div>
    </div>
  );
}
