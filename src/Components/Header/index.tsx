//import React from 'react';
import logo from '../../assets/logo_horizontal.png';
import iconWpp from '../../assets/whatsapp-white-png.png';
import iconInsta from '../../assets/insta.png';
import iconGmail from '../../assets/gmail.png';
import { Container } from './style';

const Header = () => {
  return (
    <Container>
      <div className="header">
        <img src={logo} alt="logo SS PASSEIOS EM CAMPOS DO JORDÃO" className="logo" />
        <button className="button-header" id='button-1' onClick={() => window.location.href='./inicio'}>Início</button>
        <button className="button-header" id='button-2' onClick={() => window.location.href='./agendamentos'}>Agendamentos</button>
        <img src={iconWpp} alt="Icone do WhatsApp" className="icon" id='wpp'/>
        <img src={iconInsta} alt="Icone do Instagram" className="icon" id='insta'/>
        <img src={iconGmail} alt="Icone do Gmail" className="icon" id='gmail'/>
      </div>
    </Container>
  )
}

export default Header;
