import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import passos from '../assets/passos.png';
import informacao from '../assets/informacao.png';
import grupo from '../assets/grupo.png';
import artigo from '../assets/artigo.png';
import controlejogo from '../assets/controlejogo.png';
import jogo from '../assets/jogo.png';

const Jogos = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Imagem de fundo em tela cheia */}
      <img 
        src={jogo} 
        alt="Jogo educativo" 
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Header com logo e menu */}
      <div className="flex justify-between items-center px-6 py-5 w-full z-50 relative">
        <img
          src={Logo}
          alt="Logo"
          className="w-[123px] h-[30px] cursor-pointer"
          onClick={() => navigate('/')}
        />
        <div className="flex items-center gap-3">
          <div
            className="flex flex-col gap-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
          </div>
          <div className="w-[33px] h-[33px] bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Menu suspenso */}
      {menuOpen && (
        <div
          className="absolute top-[60px] right-6 bg-[#1a2e45] rounded-[10px] z-40 flex flex-col justify-center px-3 py-4 space-y-3 w-[160px] h-[200px]"
        >
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/passos')}>
            <img src={passos} alt="Passos" className="w-[15px] h-[15px]" />
            <span className="text-white text-sm">Passo a passo</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/produtos')}>
            <img src={informacao} alt="Produtos" className="w-[15px] h-[15px]" />
            <span className="text-white text-sm">Produtos</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/equipe')}>
            <img src={grupo} alt="Equipe" className="w-[15px] h-[15px]" />
            <span className="text-white text-sm">Equipe</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/artigos')}>
            <img src={artigo} alt="Artigo" className="w-[15px] h-[15px]" />
            <span className="text-white text-sm">Artigo</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={controlejogo} alt="Jogo" className="w-[15px] h-[15px]" />
            <span className="text-white text-sm">Jogo</span>
          </div>
        </div>
      )}

      {/* Texto "Corra, Colete e Aprenda: Seu Futuro Começa com Cada Moedinha!" */}
      <div 
        className="absolute z-30"
        style={{
          width: '304px',
          height: '99px',
          left: '36px',
          top: '214px'
        }}
      >
        <h1 
          className="text-[#F5F0E1] font-extrabold text-[24px] leading-tight"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 800
          }}
        >
          Corra, Colete e Aprenda: Seu Futuro Começa com Cada Moedinha!
        </h1>
      </div>
    </div>
  );
};

export default Jogos;