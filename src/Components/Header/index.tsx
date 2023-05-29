import { useState, useEffect } from "react";
import logo from "../../assets/logo_horizontal.png";
import { Container } from "./style";
import { useLocation } from "react-router-dom";
import { FaEllipsisV, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
          <button
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <FaEllipsisV size={16} color="#FFFFFF" />
            ) : (
              <FaEllipsisV size={16} color="#FFFFFF" />
            )}
          </button>
        ) : (
          <>
            <a
              href="https://api.whatsapp.com/message/IJB2DRZOVPY5B1?autoload=1&app_absent=0"
              target="_blank"
            >
              <FaWhatsapp className="icon" size={29} />
            </a>
            <a
              href="https://www.instagram.com/sspasseiosemcampos/"
              target="_blank"
            >
              <FaInstagram className="icon" size={28} />
            </a>
            <a href="mailto:SSpasseiosemcampos@gmail.com" target="_blank">
              <GoMail className="icon" size={32} />
            </a>
          </>
        )}

        {isMenuOpen && isMobileView && (
          <div className={`menu ${isMenuOpen ? "open" : ""}`}>
            <div className="menu-options">
              <button className="button-menu-option">Roteiros</button>
              <button className="button-menu-option">Outros Atendimentos</button>
              <button className="button-menu-option">Serviços</button>
              <button className="button-menu-option">Diferencial do nosso trabalho</button>
              <button className="button-menu-option">Feedbacks</button>
            </div>
          
            <div className="contact-icons">
              <h5>Contato/Agendamento</h5>
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
          </div> 
        )}
      </div>
    </Container>
  );
};

export default Header;