import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Propaganda from '../assets/Propaganda1.png';
import Imagem2 from '../assets/moneybox.png';
import Money from '../assets/money.png';
import Carteira from '../assets/carteira.png';
import Certificado from '../assets/kidsafe.png';
import Propaganda2 from '../assets/PROPAGANDA2';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#F5F0E1] w-full min-h-screen">
      
      {/* ===== VERSÃO MOBILE ===== */}
      <div className="md:hidden bg-[#F5F0E1]">
        {/* ... (código mobile mantido igual) ... */}
      </div>

      {/* ===== VERSÃO DESKTOP ===== */}
      <div className="hidden md:block bg-[#F5F0E1] min-h-screen">
        {/* Header Desktop */}
        <div className="flex justify-between items-center px-12 py-6 bg-[#F5F0E1]">
          <img src={Logo} alt="Logo" className="w-40 h-10 cursor-pointer" />
          
          <div className="flex items-center gap-8">
            <nav className="flex gap-8">
              <span className="text-[#1A2E45] cursor-pointer hover:text-[#EC5C8F] transition-colors font-semibold">Início</span>
              <span className="text-[#1A2E45] cursor-pointer hover:text-[#EC5C8F] transition-colors font-semibold" onClick={() => navigate('/produtos')}>Produtos</span>
              <span className="text-[#1A2E45] cursor-pointer hover:text-[#EC5C8F] transition-colors font-semibold" onClick={() => navigate('/artigos')}>Artigos</span>
              <span className="text-[#1A2E45] cursor-pointer hover:text-[#EC5C8F] transition-colors font-semibold" onClick={() => navigate('/equipe')}>Equipe</span>
              <span className="text-[#1A2E45] cursor-pointer hover:text-[#EC5C8F] transition-colors font-semibold" onClick={() => navigate('/jogos')}>Jogos</span>
            </nav>
            
            <button
              onClick={() => navigate('/jogo')}
              className="px-6 py-3 bg-[#ec5c8f] rounded-2xl text-[#f5f0e1] font-bold hover:bg-[#D94A7C] transition-colors"
            >
              JOGUE AGORA!
            </button>
          </div>
        </div>

        {/* Imagem Principal Desktop - Posicionada conforme especificado */}
        <div 
          className="absolute"
          style={{
            width: '1305px',
            height: '400px',
            left: '70px',
            top: '185px'
          }}
        >
          <img 
            src={Propaganda} 
            alt="Propaganda" 
            className="w-full h-full object-cover rounded-xl" 
          />
        </div>

        {/* Diferencial Section Desktop */}
        <div className="bg-[#F5F0E1] py-20 px-12 mt-[500px]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#1A2E45] text-4xl font-bold text-center mb-16">
              Diferencial do Projeto
            </h2>
            
            <div className="grid grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#1A2E45] text-lg leading-relaxed">
                  Une design lúdico com funcionalidades educativas, como desafios semanais e feedbacks personalizados, 
                  promovendo o engajamento contínuo da criança no aprendizado financeiro de maneira prática e atrativa.
                </p>
              </div>
              
              <div className="flex justify-center">
                <img src={Imagem2} alt="Imagem 2" className="w-72 h-72" />
              </div>
            </div>
          </div>
        </div>

        {/* Público Alvo Section Desktop */}
        <div className="bg-[#f4d9d1] py-20 px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#1A2E45] text-4xl font-bold text-center mb-16">
              Público alvo
            </h2>
            
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img src={Money} alt="Money" className="w-72 h-72" />
              </div>
              
              <div>
                <p className="text-[#1A2E45] text-lg leading-relaxed">
                  Crianças entre 5 e 10 anos em fase de alfabetização financeira, além de pais e responsáveis que desejam introduzir noções de valor do dinheiro, metas and responsabilidade financeira de forma acessível, segura e divertida.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo Section Desktop */}
        <div className="bg-[#F5F0E1] py-20 px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#1A2E45] text-4xl font-bold text-center mb-16">
              Objetivo
            </h2>
            
            <div className="grid grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#1A2E45] text-lg leading-relaxed">
                  Estimular hábitos financeiros saudáveis desde a infância por meio de um cofre inteligente que utiliza recursos tecnológicos para incentivar o planejamento, a economia e o consumo consciente.
                </p>
              </div>
              
              <div className="flex justify-center">
                <img src={Carteira} alt="Carteira" className="w-72 h-72" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid Desktop */}
        <div className="py-20 px-12 bg-[#F5F0E1]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-4 gap-6">
              <div className="w-full h-48 bg-[#f5c2c2] rounded-xl flex items-center justify-center text-center p-6">
                <span className="text-[#f5f0e1] text-xl font-bold">Ambiente seguro</span>
              </div>
              <div className="w-full h-48 bg-[#EC5C8F] rounded-xl flex items-center justify-center text-center p-6">
                <span className="text-[#f5f0e1] text-xl font-bold">Conteúdo personalizado</span>
              </div>
              <div className="w-full h-48 bg-[#f5c2c2] rounded-xl flex items-center justify-center text-center p-6">
                <span className="text-[#f5f0e1] text-xl font-bold">Interação 100% gratuita</span>
              </div>
              <div className="w-full h-48 bg-[#EC5C8F] rounded-xl flex items-center justify-center text-center p-6">
                <span className="text-[#f5f0e1] text-xl font-bold">Proximidade familiar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section Desktop */}
        <div className="bg-[#f4d9d1] rounded-t-3xl py-20 px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-[#1A2E45] text-4xl font-bold mb-8">
              Tudo bem, é<br />SmartCoinc!
            </h2>
            <p className="text-[#1A2E45] text-2xl mb-12">As crianças amam. As famílias confiam.</p>

            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto mb-12">
              <img src={Certificado} alt="Certificado" className="w-52 h-20 mx-auto mb-6" />
              <p className="text-[#1A2E45] text-lg">
                O programa kidSAFE Seal certifica a segurança de sites, aplicativos e produtos interativos voltados para crianças, garantindo que atendam a padrões independentes de segurança infantil.
              </p>
            </div>

            <div className="flex justify-center gap-6">
              <button
                onClick={() => navigate('/passos')}
                className="px-12 py-4 bg-[#EC5C8F] rounded-2xl text-white font-bold text-lg hover:bg-[#D94A7C] transition-colors"
              >
                NOSSOS ARTIGOS
              </button>
              <button className="px-12 py-4 bg-white rounded-2xl text-[#1CB0F6] font-bold text-lg border-2 border-[#1CB0F6] hover:bg-blue-50 transition-colors">
                NOSSA EQUIPE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;