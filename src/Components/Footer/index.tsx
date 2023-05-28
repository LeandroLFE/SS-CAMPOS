//import React from 'react';
import logo from '../../assets/logo_horizontal.png';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Container } from './style';

const Footer = () => {
  return (
    <Container>
    <div className="container">
        <div className="footer">
            <img src={logo} alt="logo SS PASSEIOS EM CAMPOS DO JORDÃO" className="logo" />
            <div className="paginas">
                <p className="title-paginas">PÁGINAS</p>
                <button
                    className={`button ${
                        location.pathname === "/inicio" ? "active" : ""
                    }`}
                    id="button-1"
                    onClick={() => (window.location.href = "./inicio")}>
                    Início
                </button>
                <button
                    className={`button ${
                        location.pathname === "/agendamentos" ? "active" : ""
                    }`}
                    id="button-2"
                    onClick={() => (window.location.href = "./agendamentos")}>
                    Agendamentos
                </button>
                <p className="devs">&copy; Desenvolvido por Daiene Batagioti e Sarah Batagioti</p>
            </div>
            <div className="contact">
                <div className="icons-warp">
                <a href="https://api.whatsapp.com/message/IJB2DRZOVPY5B1?autoload=1&app_absent=0" target="_blank">
                    <FaWhatsapp className="icon" size={29} />
                </a>
                <a href="https://www.instagram.com/sspasseiosemcampos/" target="_blank">
                    <FaInstagram className="icon" size={28} />
                </a>
                </div>
                <a href="mailto:SSpasseiosemcampos@gmail.com" target="_blank">
                    <p className="email">E-mail: SSpasseiosemcampos@gmail.com</p>
                </a>
            </div>
        </div>
        <div className="amarela"></div>
    </div>
    </Container>
  )
}

export default Footer;