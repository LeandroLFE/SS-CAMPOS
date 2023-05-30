import { useState } from "react";
import logo from "../../assets/logo_horizontal.png";
import { Container } from "./style";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
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

const Header = () => {
  const isMobileView = window.innerWidth <= 768;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <Container>
      <div className="header">
        <img
          src={logo}
          alt="logo SS PASSEIOS EM CAMPOS DO JORDÃO"
          className="logo"
        />
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
        {isMobileView ? (
          <i
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={handleMenuToggle}
          >
            <AiOutlineMenu size={20} color="#FFFFFF" />
          </i>
        ) : (
          <>
            <a
              href="https://api.whatsapp.com/message/IJB2DRZOVPY5B1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="icon" size={29} />
            </a>
            <a
              href="https://www.instagram.com/sspasseiosemcampos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" size={28} />
            </a>
            <a
              href="mailto:SSpasseiosemcampos@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMail className="icon" size={32} />
            </a>
          </>
        )}

        {isMenuOpen && isMobileView && (
          <div className={`menu ${isMenuOpen ? "open" : ""}`}>
            {/* Menu content */}
            <div className="menu-item">
              <a
                href="https://api.whatsapp.com/message/IJB2DRZOVPY5B1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon" size={29} />
              </a>
            </div>
            <div className="menu-item">
              <a
                href="https://www.instagram.com/sspasseiosemcampos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" size={28} />
              </a>
            </div>
            <div className="menu-item">
              <a
                href="mailto:SSpasseiosemcampos@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoMail className="icon" size={32} />
              </a>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Header;
