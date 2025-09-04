import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Imagem1 from '../assets/img1.png';
import Imagem2 from '../assets/img2.png';
import Imagem3 from '../assets/img3.png';
import Imagem4 from '../assets/img4.png';
import Passo from '../assets/passos.png';
import Informacao from '../assets/informacao.png';
import Grupo from  '../assets/grupo.png';
import Artigo from '../assets/artigo.png';
import Controle from '../assets/controlejogo.png';

const Passos = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#F5F0E1] min-h-screen w-full px-4 pt-6 relative">

      <div className="absolute top-[21px] left-[25px]">
        <img 
          src={Logo} 
          alt="Logo" 
          className="w-[123px] h-[30px] cursor-pointer"
          onClick={() => navigate('/')} 
        />
      </div>
     
      <div className="absolute top-[21px] right-[25px] flex items-center gap-3 z-50">
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

          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Grupo} alt="Equipe" className="w-[15px] h-[15px]" />
            <span className="text-white text-sm">Equipe</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Artigo} alt="Artigo" className="w-[15px] h-[15px]" />
            <span className="text-white text-sm">Artigo</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Controle} alt="Jogo" className="w-[15px] h-[15px]" />
            <span className="text-white text-sm">Jogo</span>
          </div>

        </div>
      )}

      <div className="pt-28 pb-10 px-6">
   
        <div className="mb-20">
          <div className="relative flex justify-center mb-8">
            <div className="absolute w-[200px] h-[200px] bg-[#EC5C8F] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] left-[43px] top-[10px]"></div>
            <img 
              src={Imagem1} 
              alt="Passo 1" 
              className="w-[200px] h-[200px] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] relative z-10 mt-[-15px] ml-[25px]" 
            />
          </div>
          <div className="text-center mx-4 mt-8">
            <h3 className="text-[#EC5C8F] text-lg mb-3 font-bold">PASSO 1</h3>
            <h4 className="text-[#1a2e45] text-base mb-3">Ligue seu porquinho!</h4>
            <p className="text-[#1a2e45] text-[12px] font-normal max-w-[280px] mx-auto">
              Encontre o botão lateral e pressione para ligar o dispositivo. Pronto, seu porquinho já está acordado e pronto para ajudar você a economizar!
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="relative flex justify-center mb-8">
            <div className="absolute w-[200px] h-[200px] bg-[#EC5C8F] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] left-[43px] top-[10px]"></div>
            <img 
              src={Imagem2} 
              alt="Passo 2" 
              className="w-[200px] h-[200px] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] relative z-10 mt-[-15px] ml-[25px]" 
            />
          </div>
          <div className="text-center mx-4 mt-8">
            <h3 className="text-[#EC5C8F] text-lg mb-3 font-bold">PASSO 2</h3>
            <h4 className="text-[#1a2e45] text-base mb-3">Conecte e cadastra-se</h4>
            <p className="text-[#1a2e45] text-[12px] font-normal max-w-[280px] mx-auto">
              Ative o Bluetooth do seu celular, conecte ao porquinho e faça o cadastro no aplicativo. Em poucos toques, você já pode começar a usar.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="relative flex justify-center mb-8">
            <div className="absolute w-[200px] h-[200px] bg-[#EC5C8F] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] left-[43px] top-[10px]"></div>
            <img 
              src={Imagem3} 
              alt="Passo 3" 
              className="w-[200px] h-[200px] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] relative z-10 mt-[-15px] ml-[25px]" 
            />
          </div>
          <div className="text-center mx-4 mt-8">
            <h3 className="text-[#EC5C8F] text-lg mb-3 font-bold">PASSO 3</h3>
            <h4 className="text-[#1a2e45] text-base mb-3">Deposite seu dinheiro</h4>
            <p className="text-[#1a2e45] text-[12px] font-normal max-w-[280px] mx-auto">
              Coloque o dinheiro na abertura superior do porquinho. Elle vai guardar tudinho com segurança!
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="relative flex justify-center mb-8">
            <div className="absolute w-[200px] h-[200px] bg-[#EC5C8F] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] left-[43px] top-[10px]"></div>
            <img 
              src={Imagem4} 
              alt="Passo 4" 
              className="w-[200px] h-[200px] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] relative z-10 mt-[-15px] ml-[25px]" 
            />
          </div>
          <div className="text-center mx-4 mt-8">
            <h3 className="text-[#EC5C8F] text-lg mb-3 font-bold">PASSO 4</h3>
            <h4 className="text-[#1a2e45] text-base mb-3">Quer retirar o dinheiro?</h4>
            <p className="text-[#1a2e45] text-[12px] font-normal max-w-[280px] mx-auto">
              É só abrir o compartimento que fica na parte de baixo. Mas lembre-se: economizar também é um superpoder!
            </p>
          </div>
        </div>

        <div className="mt-12 mb-8 flex justify-center">
          <div className="w-[320px] h-[180px] bg-gray-400 rounded-lg flex items-center justify-center">
            <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-gray-600 ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passos;
