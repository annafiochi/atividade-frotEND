"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const FilmesPage = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        console.log('Iniciando fetch...');
        const response = await fetch('https://ghibliapi.vercel.app/films');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Dados recebidos:', data);
        
        setFilmes(data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar filmes:', err);
        setError(`Erro ao carregar filmes: ${err.message}`);
        setLoading(false);
      }
    };

    fetchFilmes();
  }, []);

  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Carregando filmes...</div>;
  if (error) return <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>{error}</div>;

  return (
    <div 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #081c59ff 0%, #1d0fdc7a 100%)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      <div style={{ padding: '2rem' }}>
        <h1 style={{ color: 'white', textAlign: 'center', fontSize: '3rem', marginBottom: '1rem' }}>
          Filmes do Studio Ghibli
        </h1>
        <p style={{ marginBottom: '2rem', color: '#e0e0e0', textAlign: 'center', fontSize: '1.2rem' }}>
          Catálogo dos filmes do Studio Ghibli
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {filmes.map((filme) => (
            <div 
              key={filme.id} 
              style={{ 
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '16px', 
                width: '300px', 
                padding: '1.5rem', 
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img 
                src={filme.image || filme.movie_banner || 'https://via.placeholder.com/300x200?text=Sem+Imagem'} 
                alt={filme.title} 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover', 
                  borderRadius: '12px',
                  marginBottom: '1rem'
                }} 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=Filme+Ghibli';
                }}
              />
              <h2 style={{ fontSize: '1.3rem', margin: '0 0 0.5rem 0', color: 'white', fontWeight: 'bold' }}>
                {filme.title}
              </h2>
              <p style={{ color: '#e0e0e0', marginBottom: '0.5rem' }}>
                <strong>Diretor:</strong> {filme.director}
              </p>
              <p style={{ color: '#e0e0e0', marginBottom: '0.5rem' }}>
                <strong>Ano:</strong> {filme.release_date}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#d0d0d0', marginBottom: '1rem', lineHeight: '1.4' }}>
                {filme.description.slice(0, 100)}...
              </p>
              <Link 
                href={`/filmes/${filme.id}`} 
                style={{ 
                  color: '#60a5fa', 
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  padding: '0.5rem 1rem',
                  background: 'rgba(96, 165, 250, 0.2)',
                  borderRadius: '20px',
                  border: '1px solid #60a5fa',
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#60a5fa';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(96, 165, 250, 0.2)';
                  e.target.style.color = '#60a5fa';
                }}
              >
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmesPage;
