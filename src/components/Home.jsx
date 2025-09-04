import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Propaganda from '../assets/Propaganda1.png';
import Imagem2 from '../assets/moneybox.png';
import Money from '../assets/money.png';
import Carteira from '../assets/carteira.png';
import Certificado from '../assets/kidsafe.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#F5F0E1] w-full min-h-screen">

      <div className="flex justify-between items-center px-6 pt-5">
        <img src={Logo} alt="Logo" className="w-32 h-8" />
        <button
          onClick={() => navigate('/jogo')}
          className="px-4 py-2 bg-[#ec5c8f] rounded-2xl text-[#f5f0e1] text-sm font-bold"
        >
          JOGUE AGORA!
        </button>
      </div>

      <div className="mt-6 px-4 relative">
        <img src={Propaganda} alt="Propaganda" className="w-full h-auto rounded-xl" />
        <button onClick={() => navigate('/passos')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-14 bg-[#f5c2c2] rounded-full text-white font-bold text-lg">
          CONHEÇA AGORA!
        </button>
      </div>

      <div className="mt-12 px-6 text-center">
        <h2 className="text-[#1a2e45] text-2xl font-bold mb-4">Diferencial do Projeto</h2>
        <p className="text-[#1a2e45] text-sm">
          Une design lúdico com funcionalidades educativas, como desafios semanais e feedbacks personalizados, 
          promovendo o engajamento contínuo da criança no aprendizado financeiro de maneira prática e atrativa.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <img src={Imagem2} alt="Imagem 2" className="w-52 h-52" />
      </div>

      <div className="mt-12 bg-[#f4d9d1] rounded-xl p-6 text-center">
        <h2 className="text-[#1a2e45] text-2xl font-bold mb-4">Público alvo</h2>
        <p className="text-[#1a2e45] text-sm mb-6 max-w-xs mx-auto">
          Crianças entre 5 e 10 anos em fase de alfabetização financeira, além de pais e responsáveis que desejam introduzir noções de valor do dinheiro, metas e responsabilidade financeira de forma acessível, segura e divertida.
        </p>
        <img src={Money} alt="Money" className="w-52 h-52 mx-auto" />
      </div>

      <div className="mt-12 px-6 text-center">
        <h2 className="text-[#1a2e45] text-2xl font-bold mb-4">Objetivo</h2>
        <p className="text-[#1a2e45] text-sm max-w-xs mx-auto">
          Estimular hábitos financeiros saudáveis desde a infância por meio de um cofre inteligente que utiliza recursos tecnológicos para incentivar o planejamento, a economia e o consumo consciente.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <img src={Carteira} alt="Carteira" className="w-52 h-52" />
      </div>

      <div className="mt-12 flex justify-center">
        <img src={Logo} alt="Logo" className="w-32 h-8" />
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4 px-4">
        <div className="w-40 h-40 bg-[#f5c2c2] rounded-xl flex items-center justify-center text-center p-2">
          <span className="text-[#f5f0e1] text-base font-bold">Ambiente seguro</span>
        </div>
        <div className="w-40 h-40 bg-[#EC5C8F] rounded-xl flex items-center justify-center text-center p-2">
          <span className="text-[#f5f0e1] text-base font-bold">Conteúdo personalizado</span>
        </div>
        <div className="w-40 h-40 bg-[#f5c2c2] rounded-xl flex items-center justify-center text-center p-2">
          <span className="text-[#f5f0e1] text-base font-bold">Interação 100% gratuita</span>
        </div>
        <div className="w-40 h-40 bg-[#EC5C8F] rounded-xl flex items-center justify-center text-center p-2">
          <span className="text-[#f5f0e1] text-base font-bold">Proximidade familiar</span>
        </div>
      </div>

      <div className="mt-12 bg-[#f4d9d1] rounded-t-xl w-full p-6 pb-36 text-center">
        <h2 className="text-[#1a2e45] text-2xl font-bold mb-4">Tudo bem, é<br />SmartCoinc!</h2>
        <p className="text-[#1a2e45] text-lg mb-6">As crianças amam. As famílias confiam.</p>

        <div className="mt-6 mx-4 bg-white rounded-lg p-4 text-center">
          <img src={Certificado} alt="Certificado" className="w-40 h-14 mx-auto mb-3" />
          <p className="text-[#1a2e45] text-sm">
            O programa kidSAFE Seal certifica a segurança de sites, aplicativos e produtos interativos voltados para crianças, garantindo que atendam a padrões independentes de segurança infantil.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6">
        <button
          onClick={() => navigate('/passos')}
          className="w-full max-w-xs h-16 bg-[#EC5C8F] rounded-2xl text-white font-bold text-lg"
        >
          NOSSOS ARTIGOS
        </button>
        <button className="w-full max-w-xs h-16 bg-white rounded-2xl text-[#1CB0F6] font-bold text-lg border border-[#1CB0F6]">
          NOSSA EQUIPE
        </button>
      </div>

      </div>
    </div>
  );
};

export default Home;
