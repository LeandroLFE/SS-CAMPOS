import { useState } from "react";
import logo from "../../assets/logo_horizontal.png";
import { Container } from "./style";
import { GoMail } from "react-icons/go";
import { FaWhatsapp, FaInstagram, FaEllipsisV, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface LinkProps {
  isActive: boolean;
}

const CustomLink = styled(Link)<LinkProps>`
  color: ${(props) => (props.isActive ? "#FFCC29" : "white")};
  &:hover {
    color: #FFCC29;
  }
`;

interface ButtonProps {
  to: string;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ to, className, id, children, onClick, target }) => {
  const active = useLocation().pathname === to;

  const handleClick = () => {
    onClick?.();
  };

  return (
    <CustomLink to={to} className={className} id={id} isActive={active} target={target} onClick={handleClick}>
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

  const handleScrollToSobre = () => {
    const title1Element = document.getElementById('title-1');
    if (title1Element) {
      title1Element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleScrollToRoadMap = () => {
    const title1Element = document.getElementById('first-road-map');
    if (title1Element) {
      title1Element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleScrollToOtherServices = () => {
    const title1Element = document.getElementById('other-services');
    if (title1Element) {
      title1Element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleScrollToServices = () => {
    const title1Element = document.getElementById('services');
    if (title1Element) {
      title1Element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleScrollToDifferential = () => {
    const title1Element = document.getElementById('differential');
    if (title1Element) {
      title1Element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactButtonClick = () => {
    window.open("https://api.whatsapp.com/message/IJB2DRZOVPY5B1?autoload=1&app_absent=0", "_blank");
    setIsMenuOpen(false);
  };

  return (
    <Container>
      <div className="header">
        <img src={logo} alt="logo SS PASSEIOS EM CAMPOS DO JORDÃO" className="logo" />
        <Button
          to="/inicio"
          className={`button ${location.pathname === "/inicio" ? "active" : ""}`}
          id="button-1"
        >
          Início
        </Button>
        <Button
          to="/agendamentos"
          className={`button ${
            location.pathname === "/agendamentos" ? "active" : ""
          }`}
          id="button-2"
        >
          Agendamentos
        </Button>
        {isMobileView ? (
          <i className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={handleMenuToggle} style={{ marginTop: "14px" }}>
            {isMenuOpen ? (
              <FaTimes size={20} color="#FFFFFF" />
            ) : (
              <FaEllipsisV size={20} color="#FFFFFF" />
            )}
          </i>
        ) : (
          <>
            <a href="mailto:SSpasseiosemcampos@gmail.com" target="_blank" rel="noopener noreferrer">
              <GoMail className="icon" size={32} />
            </a>
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
          </>
        )}

        {isMenuOpen && isMobileView && (
          <div className={`menu ${isMenuOpen ? "open" : ""}`}>
            <div className="menu-item">
              <Button to="/inicio" className="item" onClick={handleScrollToSobre}>
                SOBRE
              </Button>
              <Button to="/inicio" className="item" onClick={handleScrollToRoadMap}>
                ROTEIROS
              </Button>
              <Button to="/inicio" className="item" onClick={handleScrollToOtherServices}>
                OUTROS ATENDIMENTOS
              </Button>
              <Button to="/inicio" className="item" onClick={handleScrollToServices}>
                SERVIÇOS
              </Button>
              <Button to="/inicio" className="item" onClick={handleScrollToDifferential}>
                DIFERENCIAL
              </Button>
              <Button to="/inicio" className="item" onClick={handleContactButtonClick}>
                CONTATO
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Header;
