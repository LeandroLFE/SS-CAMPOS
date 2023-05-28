import { useState, useEffect } from "react";
import logo from "../../assets/logo_horizontal.png";
import { Container } from "./style";
import { useLocation } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiRoadMapLine } from 'react-icons/ri';

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
              <AiOutlineClose size={20} color="#FFFFFF" />
            ) : (
              <AiOutlineMenu size={20} color="#FFFFFF" />
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
            <img
              src={logo}
              alt="logo SS PASSEIOS EM CAMPOS DO JORDÃO"
              className="logo-menu"
            />
            <RiRoadMapLine size={32} color="red" />
            <h5>Roteiros</h5>

            <h5>Outros Atendimentos</h5>

            <h5>Serviços</h5>

            <h5>Diferencial do nosso trabalho</h5>

            <h5>Feedbacks</h5>


            <h5>Contato/Agendamento</h5>
            <div className="menu-item">
              <a
                href="https://api.whatsapp.com/message/IJB2DRZOVPY5B1?autoload=1&app_absent=0"
                target="_blank"
              >
                <FaWhatsapp className="icon" size={29} />
              </a>
            </div>
            <div className="menu-item">
              <a
                href="https://www.instagram.com/sspasseiosemcampos/"
                target="_blank"
              >
                <FaInstagram className="icon" size={28} />
              </a>
            </div>
            <div className="menu-item">
              <a href="mailto:SSpasseiosemcampos@gmail.com" target="_blank">
                <GoMail className="icon" size={32} />
              </a>
            </div>
            <button
              className="close-menu-button"
              onClick={handleMenuToggle}
            >
              <AiOutlineClose size={20} color="#FFFFFF" />
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Header;