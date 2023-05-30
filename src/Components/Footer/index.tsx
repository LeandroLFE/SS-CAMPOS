//import React from 'react';
import logo from '../../assets/logo_horizontal.png';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Container } from './style';
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

interface LinkProps {
  isActive: boolean;
}

const CustomLink = styled(Link)<LinkProps>`
  color: ${(props) => props.isActive ? '#FFCC29' : 'white'};
  &:hover {
    color: #FFCC29;
  }
`;

interface ButtonProps {
  to: string;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ to, className, id, children }) => {
  const active = useLocation().pathname === to;

  return (
    <CustomLink
      to={to}
      className={className}
      id={id}
      isActive={active}
    >
      {children}
    </CustomLink>
  );
};

const Footer = () => {
  return (
    <Container>
    <div className="container">
        <div className="footer">
            <img src={logo} alt="logo SS PASSEIOS EM CAMPOS DO JORDÃO" className="logo" />
            <div className="paginas">
                <p className="title-paginas">PÁGINAS</p>
                <Button
                to="/inicio"
                className={`button ${location.pathname === "/inicio" ? "active" : ""}`}
                id="button-1"
                >
                Início
                </Button>
                <Button
                to="/agendamentos"
                className={`button ${location.pathname === "/agendamentos" ? "active" : ""}`}
                id="button-2"
                >
                Agendamentos
                </Button>
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