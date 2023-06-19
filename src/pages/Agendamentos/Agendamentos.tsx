import { useRef } from 'react';
import Header from "../../Components/Header";
import campos_schedules from "../../assets/campus_schedules.png";
import rafaelBarbosa from "../../assets/rafaelBarbosa.png";
import erikaSeabra from "../../assets/erikaSeabra.png";
import juniorFydelles from "../../assets/juniorFydelles.png";
import mauricioFelix from "../../assets/mauricioFelix.png";
import danielabrito from "../../assets/danielabrito.png";
import { Container } from "./styled";
import { FiChevronRight } from "react-icons/fi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Footer from '../../Components/Footer';

export default function Agendamentos() {
  const sectionButtonRef = useRef<HTMLHeadingElement>(null);

  const handleButtonClick = () => {
    sectionButtonRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <Container>
        <img
          src={campos_schedules}
          alt="Entrada de Campos do Jordão"
          className="campos_schedules"
        />
        <h1 className="principal-text">
          Pronto para viver o charme e o <br />
          conforto de Campos do Jordão?
        </h1>
        <button className="more-information" onClick={handleButtonClick}>
          Leia Mais <FiChevronRight style={{ verticalAlign: "middle" }} />
        </button>
        {/* */}
        <h2 className="title-1" ref={sectionButtonRef}>
          AGENDE JÁ SEU PASSEIO!
        </h2>
        <br />
        <div className="paragraph-description">
          <p>
            Quer viver uma experiência única em Campos do Jordão? Então, agende
            já o seu passeio com a gente! É simples e rápido.
          </p>
          <br />
          <p>
            Para marcar sua visita, basta clicar no botão de agendamento abaixo
            e você será direcionado para o nosso Whatsapp. Lá, nossa equipe
            estará pronta para lhe atender, esclarecer todas as suas dúvidas
            sobre nossos roteiros, nossas fotos e valores.
          </p>
          <br />
          <p>
            Oferecemos uma grande variedade de passeios turísticos em Campos do
            Jordão, desde as mais belas paisagens naturais até os pontos
            turísticos mais famosos da cidade. Confira nosso catálogo de fotos e
            escolha o roteiro ideal para você. Além disso, podemos personalizar
            o seu passeio de acordo com as suas preferências e necessidades. É
            só entrar em contato conosco pelo Whatsapp e contar o que você
            deseja.{" "}
          </p>
          <br />
          <p>
            {" "}
            Não perca a chance de conhecer a cidade mais charmosa da Serra da
            Mantiqueira! Agende agora mesmo e tenha uma experiência incrível em
            Campos do Jordão!
          </p>
        </div>

        <div className="button-schedule">
          <a href="https://api.whatsapp.com/message/IJB2DRZOVPY5B1?autoload=1&app_absent=0" className="schedule" target="_blank">Agendar</a>
        </div>

        <h2 className="title-2">Depoimentos</h2>

        <div className="container">                             
          <div className="top-comments">
            <div className="comment-box">
              <div className="profile-info">
                <img src={rafaelBarbosa} className="profile-picture" />
                <p>
                  {" "}
                  Rafael Barbosa <br /> Rabelo Cruz{" "}
                </p>
                <br />
              </div>
              <ImQuotesLeft className="quote-icon-left" />
              <p className="comment">
                Valeu muito a pena contratar a empresa, atendimento excelente
                que superou todas as expectativas! Pretendo visitar a cidade
                novamente e irei contratar a empresa novamente. Guia Henrique
                explica tudo direitinho e tira fotos excelentes! Parabéns pelo
                trabalho.
              </p>
              <ImQuotesRight className="quote-icon-right" />
            </div>

            <div className="comment-box">
              <div className="profile-info">
                <img src={erikaSeabra} className="profile-picture" />
                <p>
                  {" "}
                  Erika <br /> Seabra{" "}
                </p>
                <br />
              </div>
              <ImQuotesLeft className="quote-icon-left" />
              <p className="comment">
                Desde o primeiro contato com o motorista (Henrique), uma pessoa
                maravilhosa, educado, simpático e atencioso fez o passeio ficar
                ainda mais agradável. Teve toda a paciência em esperar até os
                últimos minutos no passeio no santuário de aparecida.
              </p>
              <ImQuotesRight className="quote-icon-right" />
            </div>

            <div className="comment-box right-box" id="junior-comment" >
              <div className="profile-info">
                <img src={juniorFydelles} className="profile-picture" />
                <p>
                  {" "}
                  Junior <br /> Fydelles{" "}
                </p>
                <br />
              </div>
              <ImQuotesLeft className="quote-icon-left" />
              <p className="comment">
                Sabe aquele passeio que se torna mais agradável ainda pelo fato
                dos profissionais serem extremamente compromissados com o que
                fazem? Só temos elogios! Desde o primeiro contato com o Sr
                Henrique, até o nosso motorista e guia Álvaro. Que dia
                maravilhoso! Que energia contagiante! Sem dúvidas, tornou nosso
                momento ainda mais especial. Quero parabenizar e registrar o
                diferencial da empresa em proporcionar a seus clientes não só um
                passeio, mas uma experiência marcante. Gratidão! Já estou
                programando a próxima!
              </p>
              <ImQuotesRight className="quote-icon-right" />
            </div>
          </div>

          <div className="bottom-comments">
            <div className="comment-box">
              <div className="profile-info">
                <img src={mauricioFelix} className="profile-picture" />
                <p>
                  {" "}
                  Mauricio <br /> Felix{" "}
                </p>
                <br />
              </div>
              <ImQuotesLeft className="quote-icon-left" />
              <p className="comment">
                Compensou muito contratar o serviço do Henrique. Minha esposa e
                eu não conhecíamos Campos do Jordão, por isso estávamos sem
                saber pra onde ir. O nosso guia nos levou para os principais
                pontos turísticos, tirou belas fotos, foi muito atencioso nas
                explicações e conversou bastante com a gente. Tudo isso por um
                preço justo.
              </p>
              <ImQuotesRight className="quote-icon-right" />
            </div>

            <div className="comment-box">
              <div className="profile-info">
                <img src={danielabrito} className="profile-picture" />
                <p>
                  {" "}
                  Daniela <br /> Brito{" "}
                </p>
                <br />
              </div>
              <ImQuotesLeft className="quote-icon-left" />
              <p className="comment">
                O passeio com o Henrique foi maravilhoso. Eu e meu marido estamos em lua de mel e ele foi impecável com as fotos, com as informações dos locais e rendeu grandes risadas!
                Super indico! ☺️
              </p>
              <ImQuotesRight className="quote-icon-right" />
            </div>

            <div className="comment-box right-box right-box-none" >
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}