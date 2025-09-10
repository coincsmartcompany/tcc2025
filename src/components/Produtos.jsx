import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/imgporco.png';
import estrela from '../assets/estrela.png';
import esp32 from '../assets/ESP32.png';
import displaytouch from '../assets/DisplayTouch.png';
import displayoled from '../assets/DisplayOLED.png';
import mp3 from '../assets/ModuloMP3DFPlayer.png';
import altofalante from '../assets/MiniAltoFalante.png';
import cartao from '../assets/CartaodeMemoria.png';
import Logo from '../assets/Logo.png';
import passos from '../assets/passos.png';
import informacao from '../assets/informacao.png';
import grupo from '../assets/grupo.png';
import artigo from '../assets/artigo.png';
import controlejogo from '../assets/controlejogo.png';
import Logo2 from '../assets/logodomenu.png';
import DarkMode from '../assets/dark-mode.png';

const Produtos = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#F5F0E1] min-h-screen w-full relative">
     
      <div className="md:hidden">
        <div className="absolute top-[21px] left-[25px]">
          <img
            src={Logo} alt="Logo" className="w-[123px] h-[30px] cursor-pointer" onClick={() => navigate('/')}/>
        </div>

        <div className="absolute top-[21px] right-[25px] flex items-center gap-3 z-50">
          <div
            className="flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} >
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
          </div>
          <img src={DarkMode} alt="Dark Mode" className="w-[33px] h-[33px]" />
        </div>

        {menuOpen && (
          <div
            className="absolute top-[60px] right-[25px] bg-[#1a2e45] rounded-[10px] z-40 flex flex-col justify-center px-3 py-4 space-y-3" style={{ width: '160px', height: '200px' }} >
            <div
              className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/passos')} >
              <img src={passos} alt="Passos" className="w-[15px] h-[15px]" /><span className="text-white text-sm">Passo a passo</span>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/produtos')} >
              <img src={informacao} alt="Produtos" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Produtos</span>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/equipe')}
            >
              <img src={grupo} alt="Equipe" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Equipe</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/artigo')}>
              <img src={artigo} alt="Artigo" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Artigo</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/jogo')}>
              <img src={controlejogo} alt="Jogo" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Jogo</span>
            </div>
          </div>
        )}

        <div className="relative">
          <img
            src={img1} alt="Produto" className="w-full object-cover" style={{ height: '375px' }}/>
          <h1
            className="absolute top-6 left-1/2 -translate-x-1/2 text-[#1a2e45] font-bold" style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
            Produto
          </h1>
        </div>

        <div className="px-6 py-4">
          <p className="text-[#1a2e45] font-semibold text-lg">R$ 500,00</p>
          <p className="text-[#1a2e45] text-base font-medium">
            Smart Coinc - Porquinho Inteligente
          </p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, index) => (
              <img key={index} src={estrela} alt="Estrela" className="w-4 h-4" />
            ))}
          </div>
          <p className="text-[#1a2e45] text-sm mt-2 leading-snug">
            Encontre o botão lateral e pressione para ligar o dispositivo.
            Pronto, seu porquinho já está acordado e pronto para ajudar você a economizar!
          </p>
          <hr className="border-[#1a2e45] mt-3" />
        </div>

        <div className="px-6 py-4 grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
          <div className="flex flex-col items-center">
            <img src={esp32} alt="ESP32" className="w-[150px] h-[150px] object-cover" />
            <p className="font-nunito font-semibold mt-2 text-[#1a2e45]">ESP32</p>
            <p className="font-nunito font-bold mt-1 text-[#1a2e45]">R$38,00</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={displaytouch} alt="Display Touch" className="w-[150px] h-[150px] object-cover" />
            <p className="font-nunito font-semibold mt-2 text-[#1a2e45]">Display Touch</p>
            <p className="font-nunito font-bold mt-1 text-[#1a2e45]">R$214,90</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={displayoled} alt="Display OLED" className="w-[150px] h-[150px] object-cover" />
            <p className="font-nunito font-semibold mt-2 text-[#1a2e45]">Display OLED</p>
            <p className="font-nunito font-bold mt-1 text-[#1a2e45]">R$28,10</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={mp3} alt="Módulo MP3 DFPlayer" className="w-[150px] h-[150px] object-cover" />
            <p className="font-nunito font-semibold mt-2 text-[#1a2e45]">Módulo MP3 DFPlayer</p>
            <p className="font-nunito font-bold mt-1 text-[#1a2e45]">R$17,00</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={altofalante} alt="Mini Alto Falante" className="w-[150px] h-[150px] object-cover" />
            <p className="font-nunito font-semibold mt-2 text-[#1a2e45]">Mini Alto Falante</p>
            <p className="font-nunito font-bold mt-1 text-[#1a2e45]">R$29,90</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={cartao} alt="Cartão de Memória" className="w-[150px] h-[150px] object-cover" />
            <p className="font-nunito font-semibold mt-2 text-[#1a2e45]">Cartão de Memória</p>
            <p className="font-nunito font-bold mt-1 text-[#1a2e45]">R$15,96</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-[#F5F0E1] min-h-screen">
      
        <div className="fixed left-0 top-0 w-[350px] h-full bg-[#1A2E45] z-10 flex flex-col items-center pt-12">
          <img src={Logo2} alt="Logo" className="w-48 h-12 mb-6 cursor-pointer" onClick={() => navigate('/')}/>
   
          <div className="w-40 h-px bg-white opacity-30 mb-8"></div>
          
          <div className="w-full px-8 space-y-8">
            <div
              className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/passos')}
            >
              <img src={passos} alt="Passo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Passo a passo</span>
            </div>

            <div className="flex itemsCenter gap-4 cursor-pointer py-3 bg-[#2a4365] rounded-lg px-4">
              <img src={informacao} alt="Produtos" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Produtos</span>
            </div>

            <div
              className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/equipe')}
            >
              <img src={grupo} alt="Equipe" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Equipe</span>
            </div>

            <div
              className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors"
              onClick={() => navigate('/artigo')}
            >
              <img src={artigo} alt="Artigo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Artigo</span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/jogo')}>
              <img src={controlejogo} alt="Jogo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Jogo</span>
            </div>
          </div>
        </div>
        
        <div className="ml-[380px] py-10 px-10">
          
          <div className="flex gap-12 items-start">
            
            <img 
              src={img1} alt="Smart Coinc" className="w-[450px] h-[450px] object-cover" />
            
            <div className="max-w-md">
              <h2 className="text-[#1a2e45] text-3xl font-bold mb-6">Smart Coinc - Porquinho Inteligente</h2>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <img key={index} src={estrela} alt="Estrela" className="w-6 h-6" />
                ))}
              </div>
              <p className="text-[#1a2e45] font-semibold text-2xl mb-6">R$ 500,00</p>
              <p className="text-[#1a2e45] text-lg leading-relaxed">
                Encontre o botão lateral e pressione para ligar o dispositivo.
                Pronto, seu porquinho já está acordado e pronto para ajudar você a economizar!
              </p>
             
            </div>
          </div>
     
          <div className="mt-20">

            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col items-center bg-white p-6 shadow-md">
                <img src={esp32} alt="ESP32" className="w-[180px] h-[180px] object-contain mb-4" />
                <p className="font-semibold text-lg text-[#1a2e45] mb-2">ESP32</p>
                <p className="font-bold text-lg text-[#1a2e45]">R$38,00</p>
              </div>

              <div className="flex flex-col items-center bg-white p-6 shadow-md">
                <img src={displaytouch} alt="Display Touch" className="w-[180px] h-[180px] object-contain mb-4" />
                <p className="font-semibold text-lg text-[#1a2e45] mb-2">Display Touch</p>
                <p className="font-bold text-lg text-[#1a2e45]">R$214,90</p>
              </div>

              <div className="flex flex-col items-center bg-white p-6 shadow-md">
                <img src={displayoled} alt="Display OLED" className="w-[180px] h-[180px] object-contain mb-4" />
                <p className="font-semibold text-lg text-[#1a2e45] mb-2">Display OLED</p>
                <p className="font-bold text-lg text-[#1a2e45]">R$28,10</p>
              </div>

              <div className="flex flex-col items-center bg-white p-6 shadow-md">
                <img src={mp3} alt="Módulo MP3 DFPlayer" className="w-[180px] h-[180px] object-contain mb-4" />
                <p className="font-semibold text-lg text-[#1a2e45] mb-2">Módulo MP3 DFPlayer</p>
                <p className="font-bold text-lg text-[#1a2e45]">R$17,00</p>
              </div>

              <div className="flex flex-col items-center bg-white p-6 shadow-md">
                <img src={altofalante} alt="Mini Alto Falante" className="w-[180px] h-[180px] object-contain mb-4" />
                <p className="font-semibold text-lg text-[#1a2e45] mb-2">Mini Alto Falante</p>
                <p className="font-bold text-lg text-[#1a2e45]">R$29,90</p>
              </div>

              <div className="flex flex-col items-center bg-white p-6 shadow-md">
                <img src={cartao} alt="Cartão de Memória" className="w-[180px] h-[180px] object-contain mb-4" />
                <p className="font-semibold text-lg text-[#1a2e45] mb-2">Cartão de Memória</p>
                <p className="font-bold text-lg text-[#1a2e45]">R$15,96</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produtos;