import { useState } from "react";
import logo from "../../assets/logo_horizontal.png";
import { Container } from "./style";
import { useLocation } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const location = useLocation();
  const isMobileView = window.innerWidth <= 768;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <div className="header">
        <img
          src={logo}
          alt="logo SS PASSEIOS EM CAMPOS DO JORDÃO"
          className="logo"
        />
        <button
          className={`button ${
            location.pathname === "/inicio" ? "active" : ""
          }`}
          id="button-1"
          onClick={() => (window.location.href = "./inicio")}
        >
          Início
        </button>
        <button
          className={`button ${
            location.pathname === "/agendamentos" ? "active" : ""
          }`}
          id="button-2"
          onClick={() => (window.location.href = "./agendamentos")}
        >
          Agendamentos
        </button>
        {isMobileView ? (
          <i className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <AiOutlineMenu size={20} color="#FFFFFF" />
          </i>
        ) : (
          <>
            <a href="https://api.whatsapp.com/message/IJB2DRZOVPY5B1?autoload=1&app_absent=0" target="_blank">
              <FaWhatsapp className="icon" size={29} />
            </a>
            <a href="https://www.instagram.com/sspasseiosemcampos/" target="_blank">
              <FaInstagram className="icon" size={28} />
            </a>
            <a href="mailto:SSpasseiosemcampos@gmail.com" target="_blank">
              <GoMail className="icon" size={32} />
            </a>
          </>
        )}

        {isMenuOpen && isMobileView && (
          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            {/* Menu content */}
            <div className="menu-item">
              <a href="https://api.whatsapp.com/message/IJB2DRZOVPY5B1?autoload=1&app_absent=0" target="_blank">
                <FaWhatsapp className="icon" size={29} />
              </a>
            </div>
            <div className="menu-item">
              <a href="https://www.instagram.com/sspasseiosemcampos/" target="_blank">
                <FaInstagram className="icon" size={28} />
              </a>
            </div>
            <div className="menu-item">
              <a href="mailto:SSpasseiosemcampos@gmail.com" target="_blank">
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