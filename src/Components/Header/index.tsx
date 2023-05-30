import { useState } from "react";
import logo from "../../assets/logo_horizontal.png";
import { Container } from "./style";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const isMobileView = window.innerWidth <= 768;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInicioActive, setIsInicioActive] = useState(true);
  const [isAgendamentosActive, setIsAgendamentosActive] = useState(false);

  const handleInicioClick = () => {
    setIsInicioActive(true);
    setIsAgendamentosActive(false);
  };

  const handleAgendamentosClick = () => {
    setIsInicioActive(false);
    setIsAgendamentosActive(true);
  };

  return (
    <Container>
      <div className="header">
        <img
          src={logo}
          alt="logo SS PASSEIOS EM CAMPOS DO JORDÃO"
          className="logo"
        />
        <Link
          to="/inicio"
          className={`button ${isInicioActive ? "active" : ""}`}
          id="button-1"
          onClick={handleInicioClick}
        >
          Início
        </Link>
        <Link
          to="/agendamentos"
          className={`button ${isAgendamentosActive ? "active" : ""}`}
          id="button-2"
          onClick={handleAgendamentosClick}
        >
          Agendamentos
        </Link>
        {isMobileView ? (
          <i
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
