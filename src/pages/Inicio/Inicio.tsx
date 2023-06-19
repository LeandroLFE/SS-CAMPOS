import { useRef, useEffect } from 'react';
import campos_home from '../../assets/campos_home.png';
import { Container } from './style';
import Carousel1 from '../../Components/Main/first-carrossel';
import Carousel2 from '../../Components/Main/second-carrossel';
import transfer from '../../assets/transfer.png';
import aparecida from '../../assets/Aparecida.png';
import vinicola from '../../assets/Vinicola.png';
import museu from '../../assets/Museu.png';
import fazenda from '../../assets/fazenda.png';
import iconCalendar from '../../assets/icon_calendar_.png';
import iconMap from '../../assets/icon_map_.png';
import iconTravelCar from '../../assets/icon_travelcar_.png';
import differential from '../../assets/diferencial.png';
import cameraProfissional from '../../assets/camera-profissional.png';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer';
import { FiChevronRight } from 'react-icons/fi';

export default function Inicio () {
  useEffect(() => {
    const handleAlertButtonClick = () => {
      window.open('https://www.instagram.com/sspasseiosemcampos/', '_blank');
    };

    const closeAlert = () => {
      const alertContainer = document.getElementById('custom-alert-container');
      if (alertContainer) {
        document.body.removeChild(alertContainer);
      }
    };

    const showAlert = () => {
      const alertContainer = document.createElement('div');
      alertContainer.id = 'custom-alert-container';
      alertContainer.style.position = 'fixed';
      alertContainer.style.bottom = '0';
      alertContainer.style.right = '0';
      alertContainer.style.width = '100%';
      alertContainer.style.zIndex = '9999';

      const alertContent = document.createElement('div');
      alertContent.style.background = 'linear-gradient(transparent, black)';
      alertContent.style.padding = '20px';
      alertContent.style.borderRadius = '5px';
      alertContent.style.color = 'white';
      alertContent.style.textAlign = 'center';

      const message = document.createElement('p');
      message.textContent = 'Visite nosso Instagram!';
      message.style.marginBottom = '10px';

      const closeButton = document.createElement('button');
      closeButton.innerHTML = 'X';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '10px';
      closeButton.style.right = '10px';
      closeButton.style.padding = '5px';
      closeButton.style.background = 'transparent';
      closeButton.style.color = 'white';
      closeButton.style.border = 'none';
      closeButton.style.borderRadius = '50%';
      closeButton.style.cursor = 'pointer';
      closeButton.style.fontWeight = 'bold';
      closeButton.style.fontSize = '16px';

      closeButton.addEventListener('click', closeAlert);

      const button = document.createElement('button');
      button.textContent = '@sspasseiosemcampos';
      button.style.padding = '10px 20px';
      button.style.background = 'linear-gradient(to right, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)';
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.fontWeight = 'bold';
      button.style.borderRadius = '50px';
      button.style.cursor = 'pointer';
      button.style.marginTop = '10px';

      button.addEventListener('click', handleAlertButtonClick);

      alertContent.appendChild(message);
      alertContent.appendChild(button);
      alertContent.appendChild(closeButton);
      alertContainer.appendChild(alertContent);

      document.body.appendChild(alertContainer);
    };

    showAlert();
  }, []);

  const sectionButtonRef = useRef<HTMLHeadingElement>(null);

  const handleButtonClick = () => {
    sectionButtonRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

    return (
      <div>
        <Header />
        <Container>
        <div className="top-main">
          <img src={campos_home} alt="Entrada de Campos do Jordão" className="campos_home"/>
          <h1 className="principal-text">Conheça o melhor de Campos do Jordão com a nossa equipe!</h1>
          <button className="more-information" onClick={handleButtonClick}>
          Leia Mais <FiChevronRight style={{ verticalAlign: "middle" }} />
          </button>
        </div>

        <div className="description">
          <h2 id="title-1" className="title-1" ref={sectionButtonRef}>O que oferecemos</h2>
          <div className="paragraph-description">
            <p>Oferecemos a vocês uma experiência única ao explorar os principais pontos turísticos de Campos do Jordão acompanhados por nossa equipe altamente qualificada. Nossos guias particulares irão proporcionar um passeio diferenciado, explicando detalhadamente sobre cada local visitado.</p>
            <br />
            <p>Além disso, oferecemos serviços de transfer para Campos do Jordão, incluindo translado de ida e volta dos aeroportos de Congonhas (São Paulo), Guarulhos, Viracopus (Campinas), Santos Dummont (Rio de Janeiro) e São José dos Campos. Com disponibilidade de 3 vans, carro de 4 lugares e carro de 7 lugares, temos opções para atender diferentes demandas.</p>
            <br />
            <p>Seja para casais em viagem romântica, famílias, amigos ou pequenos grupos, excursões e guias particulares estão à disposição. Além disso, contamos com carros e vans exclusivas para garantir ainda mais conforto e exclusividade durante o passeio.</p>
            <br />
            <p>Venha conhecer a cidade mais charmosa do Brasil conosco e desfrute de um passeio inesquecível em Campos do Jordão.</p>
          </div>      
        </div>

        <div id="first-road-map" className="first-road-map">
          <h2 className="title-2">Roteiro 1</h2>
          <p className="information-paragraph">Duração de 6h com parada para almoço.</p>
          <Carousel1/>
        </div>

        <div className="second-road-map">
          <h2 className="title-3">Roteiro 2</h2>
          <p className="information-paragraph">Duração de 3h.</p>
          <Carousel2/>
        </div>

        <div id="other-services" className="other-services">
          <h2 className="title-4">Outros Atendimentos</h2>
          <div className="services-images">
            <div className="image-wrapper">
              <img src={transfer} alt="Imagem de um transfer" className="transfer"/>
              <p>TRANSFER PARA AEROPORTO</p>
            </div>
            <div className="image-wrapper">
              <img src={aparecida} alt="Imagem de Aparecida" className="aparecida"/>
              <p>CIDADE DE APARECIDA</p>
            </div>
            <div className="image-wrapper">
              <img src={vinicola} alt="Imagem de uma Vinícola" className="vinicola"/>
              <p>VINÍCOLA SANTA MARIA</p>
            </div>
            <div className="image-wrapper">
              <img src={museu} alt="Imagem de um Museu" className="museu"/>
              <p>MUSEU FELÍCIA LEIRNER</p>
            </div>
            <div className="image-wrapper">
              <img src={fazenda} alt="Imagem de um palacio" className="palacio"/>
              <p>POR DO SOL NA FAZENDA PRANA</p>
            </div>
          </div>
        </div>

        <div id="services" className="services">
          <h2 className="title-5">Serviços</h2>
          <div className="services-group">
            <div className="icon-wrapper">
              <img src={iconTravelCar} alt="ícone carro"/>
              <p>Carro exclusivo</p>
            </div>
            <div className="icon-wrapper">
              <img src={iconMap} alt="ícone mapa"/>
              <p>Guia particular</p>
            </div>
            <div className="icon-wrapper">
              <img src={iconCalendar} alt="ícone calendario"/>
              <p>Vagas Limitadas</p>
            </div>
          </div>
          <div className="button-budget">
            <a href="https://api.whatsapp.com/message/IJB2DRZOVPY5B1?autoload=1&app_absent=0" className="budget" target="_blank">
              Fazer orçamento
            </a>
          </div>
        </div>

        <div id="differential" className="differential">
          <div className="differential-wrapper">
            <img src={differential} alt="Imagem de uma família em Campos do Jordão"/>
            <div className="differential-information">
              <h2 className="title-6">DIFERENCIAL DO NOSSO TRABALHO</h2>
              <p>1- Nossos passeios são exclusivos com um guia para no máximo 4 pessoas.</p>
              <p>2- Fazemos passeios nos nossos carros, assim da para dar a devida atenção para cada um (principalmente pelas fotos).</p>
              <p>3- PREZAMOS PELA QUALIDADE E NÃO QUANTIDADE. </p>
              <p>4- Queremos todos os clientes satisfeitos com o passeio e fotos. </p>
              <p>5- estando conosco vocês não pagam o estacionamento de R$(20,00) do PARQUE AMANTIKIR.</p>
              <p>6- Os guias são nativos da cidade e saberão explicar um pouco da história da mesma.</p>
              <p>7- Indicamos e liberamos troca de roupas (caso queiram).</p>
            </div>
          </div>
        </div>

        <div className="professional-camera">
          <div className="professional-camera-wrapper">
            <div className="professional-camera-information">
              <h2 className="title-7">AS FOTOS SÃO TIRADAS DE CÂMERA PROFISSIONAL?</h2>
              <p>NÃO. Todas as fotos são tiradas do celular do próprio cliente.</p>
              <br />
              <p className="paragraph-bold">Por que?</p>
              <p>Os parques do passeio cobram um valor a parte para estar fazendo ensaio fotográfico (câmera profissional) os valores ultrapassam 700 reais em cada local.</p>
              <br />
              <p>No entanto, se você deseja ter fotos tiradas com uma câmera profissional durante o passeio, é possível adquirir adicional diretamente com as empresas que oferecem esse serviço nos parques, dependendo exclusivamente da sua escolha e disponibilidade financeira. </p>
            </div>
            <img src={cameraProfissional} alt="Imagem de uma família em Campos do Jordão"/>
          </div>
        </div>

      
      </Container>
      <Footer />
      </div>
  );
}