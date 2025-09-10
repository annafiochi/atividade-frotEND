"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FilmeDetalhePage = () => {
  const params = useParams();
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.id) {
      const fetchFilme = async () => {
        try {
          console.log('Buscando filme com ID:', params.id);
          
          // Toast de loading
          const loadingToast = toast.loading('Carregando detalhes do filme...');
          
          const response = await fetch(`https://ghibliapi.vercel.app/films/${params.id}`);
          
          if (!response.ok) {
            throw new Error(`Filme não encontrado (${response.status})`);
          }
          
          const data = await response.json();
          console.log('Filme encontrado:', data);
          
          setFilme(data);
          setLoading(false);
          
          // Remove loading toast e mostra sucesso
          toast.dismiss(loadingToast);
          toast.success('Filme carregado com sucesso!');
          
        } catch (err) {
          console.error('Erro ao carregar filme:', err);
          setError(`Erro ao carregar filme: ${err.message}`);
          setLoading(false);
          
          // Toast de erro
          toast.error(`Erro ao carregar filme: ${err.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      };

      fetchFilme();
    }
  }, [params.id]);

  if (loading) return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #081c59ff 0%, #1d0fdc7a 100%)',
      padding: '2rem', 
      textAlign: 'center',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      Carregando detalhes do filme...
    </div>
  );
  
  if (error) return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #081c59ff 0%, #1d0fdc7a 100%)',
      padding: '2rem', 
      textAlign: 'center', 
      color: '#ff6b6b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {error}
    </div>
  );
  
  if (!filme) return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #081c59ff 0%, #1d0fdc7a 100%)',
      padding: '2rem', 
      textAlign: 'center',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      Filme não encontrado
    </div>
  );

  return (
    <div 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #081c59ff 0%, #1d0fdc7a 100%)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Navegação */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem', 
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link 
              href="/"
              style={{ 
                color: '#60a5fa', 
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '0.7rem 1.2rem',
                borderRadius: '25px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(96, 165, 250, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              🏠 Voltar para Home
            </Link>
            
            <Link 
              href="/filmes" 
              style={{ 
                color: '#a78bfa', 
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '0.7rem 1.2rem',
                borderRadius: '25px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(167, 139, 250, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              📋 Lista de Filmes
            </Link>
          </div>
        </div>
        {/* Card Detalhado */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '3rem', 
            flexWrap: 'wrap',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(15px)',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          {/* Imagem Maior */}
          <div style={{ flex: '1', minWidth: '320px', textAlign: 'center' }}>
            <img 
              src={filme.image || filme.movie_banner || 'https://via.placeholder.com/500x750?text=Filme+Ghibli'} 
              alt={filme.title} 
              style={{ 
                width: '100%', 
                maxWidth: '500px', 
                height: 'auto',
                borderRadius: '20px', 
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s ease'
              }} 
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x750?text=Filme+Ghibli';
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            />
          </div>
          
          {/* Informações Completas */}
          <div style={{ flex: '2', minWidth: '400px' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '1rem', 
              color: 'white', 
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              {filme.title}
            </h1>
            
            {filme.original_title && (
              <h2 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '1.5rem', 
                color: '#d0d0d0', 
                fontStyle: 'italic',
                opacity: '0.9'
              }}>
                {filme.original_title}
              </h2>
            )}
            
            {/* Grid de Informações */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                padding: '1rem', 
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ color: '#60a5fa', fontWeight: 'bold', marginBottom: '0.5rem' }}>🎬 Diretor</div>
                <div style={{ color: 'white', fontSize: '1.1rem' }}>{filme.director}</div>
              </div>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                padding: '1rem', 
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ color: '#a78bfa', fontWeight: 'bold', marginBottom: '0.5rem' }}>🎭 Produtor</div>
                <div style={{ color: 'white', fontSize: '1.1rem' }}>{filme.producer}</div>
              </div>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                padding: '1rem', 
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ color: '#34d399', fontWeight: 'bold', marginBottom: '0.5rem' }}>📅 Ano</div>
                <div style={{ color: 'white', fontSize: '1.1rem' }}>{filme.release_date}</div>
              </div>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                padding: '1rem', 
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ color: '#fbbf24', fontWeight: 'bold', marginBottom: '0.5rem' }}>⏱️ Duração</div>
                <div style={{ color: 'white', fontSize: '1.1rem' }}>{filme.running_time} minutos</div>
              </div>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                padding: '1rem', 
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ color: '#f87171', fontWeight: 'bold', marginBottom: '0.5rem' }}>🍅 RT Score</div>
                <div style={{ color: 'white', fontSize: '1.1rem' }}>{filme.rt_score}/100</div>
              </div>
              
              {filme.people && filme.people.length > 0 && (
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  padding: '1rem', 
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ color: '#c084fc', fontWeight: 'bold', marginBottom: '0.5rem' }}>👥 Personagens</div>
                  <div style={{ color: 'white', fontSize: '1.1rem' }}>{filme.people.length} principais</div>
                </div>
              )}
            </div>
            
            {/* Descrição Completa */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.08)', 
              padding: '2rem', 
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{ 
                fontSize: '2rem', 
                marginBottom: '1.5rem', 
                color: 'white', 
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                📖 Sinopse Completa
              </h3>
              <p style={{ 
                lineHeight: '1.8', 
                color: '#e0e0e0', 
                fontSize: '1.2rem',
                textAlign: 'justify',
                textIndent: '2rem'
              }}>
                {filme.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{ zIndex: 9999 }}
        />
      </div>
    </div>
  );
};

export default FilmeDetalhePage;
