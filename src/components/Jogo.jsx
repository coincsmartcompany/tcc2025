import React from 'react';

const Jogos = () => {
  console.log('Componente Jogos SIMPLES carregando...');

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>Cora, Colete e Aprenda</h1>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>Seu Futuro Começa com</h1>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '32px' }}>Cada Moedinha!</h1>
      
      <p style={{ fontSize: '16px', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
        Coin Running é um divertido jogo de corrida infinita estrelado pela criança-jogadora!
      </p>
      
      <button style={{ backgroundColor: 'pink', color: 'white', padding: '12px 24px', borderRadius: '9999px' }}>
        JOGAR
      </button>
    </div>
  );
};

export default Jogos;