import React from 'react';
import logo from '../../assets/logo_horizontal.png';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Container } from './style';
import { Link } from "react-router-dom";
import styled from 'styled-components';

interface LinkProps {
  isActive: boolean;
}

const CustomLink = styled(Link) <LinkProps>`
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
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <CustomLink
      to={to}
      className={className}
      id={id}
      onClick={handleClick}
      isActive={false}
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
              className="button"
              id="button-1"
            >
              Início
            </Button>
            <Button
              to="/agendamentos"
              className="button"
              id="button-2"
            >
              Agendamentos
            </Button>
          </div>
          <div className="contact">
            <div className="icons-warp">
              <a href="https://api.whatsapp.com/message/IJB2DRZOVPY5B1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="icon"/>
              </a>
              <a href="https://www.instagram.com/sspasseiosemcampos/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon"/>
              </a>
            </div>
            <a href="mailto:SSpasseiosemcampos@gmail.com" target="_blank" rel="noopener noreferrer">
              <p className="email">E-mail: SSpasseiosemcampos@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="amarela">
          <p className="devs">&copy; Desenvolvido por Daiene Batagioti e Sarah Batagioti</p>
        </div>
      </div>
    </Container>
  )
}

export default Footer;
