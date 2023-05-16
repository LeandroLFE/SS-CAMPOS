import React, { useState } from 'react';

const ButtonColor: React.FC = () => {
  const [botao1CorDeFundo, setBotao1CorDeFundo] = useState("#FFCC29");
  const [botao2CorDeTexto, setBotao2CorDeTexto] = useState("white");

  const handleBotao1Click = () => {
    setBotao2CorDeTexto("white");
  };

  const handleBotao2Click = () => {
    const corAtual = botao2CorDeTexto;
    if (corAtual === "white") {
      setBotao2CorDeTexto("#FFCC29");
      setBotao1CorDeFundo("white");
    }
  };

  return (
    <>
      <button
        id="botao1"
        className="botao1"
        style={{ backgroundColor: botao1CorDeFundo }}
        onClick={handleBotao1Click}
      >
        Botão 1
      </button>
      <button
        id="botao2"
        className="botao2"
        style={{ color: botao2CorDeTexto }}
        onClick={handleBotao2Click}
      >
        Botão 2
      </button>
    </>
  );
};

export default ButtonColor;