import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from '../assets/logo2.png';
import Passo from '../assets/passos.png';
import Informacao from '../assets/informacao.png';
import Grupo from '../assets/grupo.png';
import Artigo from '../assets/artigo.png';
import Controle from '../assets/controlejogo.png';
import JogoMobile from '../assets/jogo.png';
import JogoDesktop from '../assets/jogo2.png';
import DarkMode from '../assets/dark-mode.png';

const Jogo = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full relative">
     
      {/* Mobile View */}
      <div className="md:hidden bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${JogoMobile})` }}>
        <div className="absolute top-[21px] left-[25px]">
          <img src={Logo2} alt="Logo" className="w-[123px] h-[30px] cursor-pointer" onClick={() => navigate('/')} />
        </div>
      
        <div className="absolute top-[21px] right-[25px] flex items-center gap-3 z-50">
          <div className="flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} >
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
          </div>

          <img src={DarkMode} alt="Dark Mode" className="w-[33px] h-[33px]" />
        </div>

        {menuOpen && (
          <div 
            className="absolute top-[60px] right-[25px] bg-[#1a2e45] rounded-[10px] z-40 flex flex-col justify-center px-3 py-4 space-y-3"
            style={{ width: '160px', height: '200px' }}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={Passo} alt="Passo" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Passo a passo</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/produtos')} >
              <img src={Informacao} alt="Produtos" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Produtos</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/equipe')}>
              <img src={Grupo} alt="Equipe" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Equipe</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/artigo')}>
              <img src={Artigo} alt="Artigo" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Artigo</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/jogo')}>
              <img src={Controle} alt="Jogo" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Jogo</span>
            </div>
          </div>
        )}

        <div className="pt-56 pb-10 px-6">
          {/* Texto "Corra, Colete e Aprenda" para mobile - mais para baixo */}
          <div className="w-[304px] h-[99px] mx-auto mb-12">
            <h2 className="text-[24px] font-nunito font-extrabold text-[#F5F0E1] text-center leading-tight">
              Corra, Colete e Aprenda: Seu Futuro Começa com Cada Moedinha!
            </h2>
          </div>
          
          {/* Texto descritivo do jogo para mobile - mais para baixo */}
          <div className="w-[311px] h-[154px] mx-auto mb-16">
            <p className="text-[16px] font-nunito font-bold text-[#F5F0E1] text-center leading-tight">
              Coin Running é um divertido jogo de corrida infinita estrelado pela criança-jogadora, que controla seu próprio porquinho-cofre! Enquanto avança por cenários coloridos, coleta moedas, evita gastos por impulse e aprende a economizar dinheiro.
            </p>
          </div>
          
          {/* Botão JOGAR */}
          <div className="flex justify-center">
            <button 
              className="bg-[#72B8C3] text-white w-[295px] h-[62px] rounded-[30px] font-palanquin-dark font-bold text-[24px]"
            >
              JOGAR
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View com menu hamburguer */}
      <div className="hidden md:block bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${JogoDesktop})` }}>
        {/* Logo centralizada no desktop */}
        <div className="absolute top-[21px] left-1/2 transform -translate-x-1/2">
          <img src={Logo2} alt="Logo" className="w-[123px] h-[30px] cursor-pointer" onClick={() => navigate('/')} />
        </div>
      
        <div className="absolute top-[21px] right-[25px] flex items-center gap-3 z-50">
          <div className="flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} >
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
          </div>

          <img src={DarkMode} alt="Dark Mode" className="w-[33px] h-[33px]" />
        </div>

        {menuOpen && (
          <div 
            className="absolute top-[60px] right-[25px] bg-[#1a2e45] rounded-[10px] z-40 flex flex-col justify-center px-3 py-4 space-y-3"
            style={{ width: '160px', height: '200px' }}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={Passo} alt="Passo" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Passo a passo</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/produtos')} >
              <img src={Informacao} alt="Produtos" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Produtos</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/equipe')}>
              <img src={Grupo} alt="Equipe" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Equipe</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/artigo')}>
              <img src={Artigo} alt="Artigo" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Artigo</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/jogo')}>
              <img src={Controle} alt="Jogo" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Jogo</span>
            </div>
          </div>
        )}

        <div className="pt-48 pb-10 px-6">
          {/* Texto "Corra, Colete e Aprenda" para desktop - mais para baixo */}
          <div className="w-[672px] h-[88px] mx-auto mb-8">
            <h2 className="text-[32px] font-nunito font-extrabold text-[#F5F0E1] text-center leading-tight">
              Corra, Colete e Aprenda: Seu Futuro Começa com Cada Moedinha!
            </h2>
          </div>
          
          {/* Texto descritivo do jogo para desktop - mais para cima */}
          <div className="w-[760px] h-[108px] mx-auto mb-8">
            <p className="text-[20px] font-nunito font-bold text-[#F5F0E1] text-center leading-tight">
              Coin Running é um divertido jogo de corrida infinita estrelado pela criança-jogadora, que controla seu próprio porquinho-cofre! Enquanto avança por cenários coloridos, coleta moedas, evita gastos por impulso e aprende a economizar dinheiro.
            </p>
          </div>
          
          {/* Botão JOGAR - mais para baixo */}
          <div className="flex justify-center mt-12">
            <button 
              className="bg-[#72B8C3] text-white w-[295px] h-[62px] rounded-[30px] font-palanquin-dark font-bold text-[24px]"
            >
              JOGAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jogo;