//import React from 'react';
import logo from '../../assets/logo_horizontal.png';
import iconWpp from '../../assets/whatsapp-white-png.png';
import iconInsta from '../../assets/insta.png';
import { Container } from './style';

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <img src={logo} alt="logo SS PASSEIOS EM CAMPOS DO JORDÃO" className="logo" />
        <div className="paginas">
            <p>PÁGINAS</p>
            <button className="button-footer" id='button-1'>Início</button>
            <button className="button-footer" id='button-2'>Agendamentos</button>
            <p>&copy; Desenvolvido por Daiene Batagioti e Sarah Batagioti</p>
        </div>
        <img src={iconWpp} alt="Icone do WhatsApp" className="icon" id='wpp'/>
        <img src={iconInsta} alt="Icone do Instagram" className="icon" id='insta'/>
        <p>E-mail: SSpasseiosemcampos@gmail.com</p>
      </div>
      <div className="amarela"></div>
    </Container>
  )
}

export default Footer;