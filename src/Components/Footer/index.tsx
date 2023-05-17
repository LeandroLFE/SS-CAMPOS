//import React from 'react';
import logo from '../../assets/logo_horizontal.png';
import iconWpp from '../../assets/whatsapp-white-png.png';
import iconInsta from '../../assets/insta.png';
import { Container } from './style';

const Footer = () => {
  return (
    <Container>
    <div className="container">
        <div className="footer">
            <img src={logo} alt="logo SS PASSEIOS EM CAMPOS DO JORDÃO" className="logo" />
            <div className="paginas">
                <p className="title-paginas">PÁGINAS</p>
                <button className="button-footer" id='button-1'>Início</button>
                <button className="button-footer" id='button-2'>Agendamentos</button>
                <p className="devs">&copy; Desenvolvido por Daiene Batagioti e Sarah Batagioti</p>
            </div>
            <div className="contact">
                <div>
                    <img src={iconWpp} alt="Icone do WhatsApp" id='wpp'/>
                    <img src={iconInsta} alt="Icone do Instagram" id='insta'/>
                </div>
                <p className="email">E-mail: SSpasseiosemcampos@gmail.com</p>
            </div>
        </div>
        <div className="amarela"></div>
    </div>
    </Container>
  )
}

export default Footer;