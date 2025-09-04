import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import passos from '../assets/passos.png';
import informacao from '../assets/informacao.png';
import grupo from '../assets/grupo.png';
import artigo from '../assets/artigo.png';
import controlejogo from '../assets/controlejogo.png';
import alex from '../assets/alex.png';
import duda from '../assets/duda.png';
import gi from '../assets/gi.png';
import lara from '../assets/lara.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';

const Equipe = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const membros = [
    { img: alex, nome: 'Alexandre Henrique', nomeW: 96, nomeH: 54, cargo: 'líder de design', cargoW: 80, cargoH: 16 },
    { img: duda, nome: 'Eduarda Moraes', nomeW: 77, nomeH: 54, cargo: 'game developer', cargoW: 92, cargoH: 16 },
    { img: gi, nome: 'Giovanna Scalzone', nomeW: 87, nomeH: 54, cargo: 'líder de design', cargoW: 80, cargoH: 16 },
    { img: lara, nome: 'Lara Beatriz', nomeW: 66, nomeH: 54, cargo: 'web developer', cargoW: 81, cargoH: 16 },
  ];

  return (
    <div className="bg-[#F5F0E1] min-h-screen w-full relative">

      {/* Header com logo e menu */}
      <div className="flex justify-between items-center px-6 py-5 absolute top-0 left-0 w-full z-50">
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
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={artigo} alt="Artigo" className="w-[15px] h-[15px]" />
            <span className="text-white text-sm">Artigo</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={controlejogo} alt="Jogo" className="w-[15px] h-[15px]" />
            <span className="text-white text-sm">Jogo</span>
          </div>
        </div>
      )}

      {/* Quadrados 2x2 com círculos, nomes, cargos e texto */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-20 pt-36 px-6 justify-center">
        {membros.map((membro, i) => (
          <div
            key={i}
            className="bg-white rounded-md shadow-md relative flex flex-col items-center"
            style={{ width: '174px', height: '295px' }}
          >
            {/* Círculo branco com stroke, sombra e imagem dentro */}
            <div className="absolute -top-[50px] rounded-full border-4 border-[#EC5C8F] shadow-lg flex justify-center items-center"
                 style={{ width: '100px', height: '100px', backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.25)' }}>
              <img src={membro.img} alt="Membro" className="w-[75px] h-[75px] rounded-full" />
            </div>

            {/* Nome abaixo do círculo */}
            <div
              className="text-center font-nunito font-bold mt-[60px]"
              style={{ width: `${membro.nomeW}px`, height: `${membro.nomeH}px`, fontSize: '20px' }}
            >
              {membro.nome}
            </div>

            {/* Cargo abaixo do nome */}
            <div
              className="text-center font-nunito font-normal mt-1 text-[#EC5C8F]"
              style={{ width: `${membro.cargoW}px`, height: `${membro.cargoH}px`, fontSize: '12px' }}
            >
              {membro.cargo}
            </div>

            {/* Texto extra abaixo do cargo */}
            <div
             className="text-center font-nunito font-normal mt-2"
             style={{ width: '155px', height: '56px', fontSize: '10px' }}
            >
              Estudante do Ensino Médio no UNASP-SP, uma instituição reconhecida pela excelência no ensino.
            </div>

            {/* Ícones de redes sociais abaixo do texto */}
            <div className="flex gap-2 mt-4">
                <img src={linkedin} alt="LinkedIn" className="w-[30px] h-[30px] cursor-pointer" />
                <img src={github} alt="GitHub" className="w-[30px] h-[30px] cursor-pointer" />
                <img src={instagram} alt="Instagram" className="w-[30px] h-[30px] cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipe;