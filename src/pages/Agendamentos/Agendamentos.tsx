import Header from '../../Components/Header'
import campos_schedules from '../../assets/campus_schedules.png';
import { Container } from './styled';

export default function Agendamentos () {
  return (
    <>
      <Header />
      <Container>
      <div className="top-main">
          <img src={campos_schedules} alt="Entrada de Campos do Jordão" className="campos_schedules"/>
          <h1 className="principal-text">Pronto para viver o charme e o <br/>conforto de Campos do Jordão?</h1>
          <button className="more-information" id='button-3'>Leia Mais &gt;</button>
      </div>

      <div className="description">
          <h2 className="title-1">AGENDE JÁ SEU PASSEIO!</h2>
          <br />
          <div className="paragraph-description">
            <p>Quer viver uma experiência única em Campos do Jordão? Então, agende já o seu passeio com a gente! É simples e rápido.</p>
            <br />
            <p>Para marcar sua visita, basta clicar no botão de agendamento abaixo e você será direcionado para o nosso Whatsapp. Lá, nossa equipe estará pronta para lhe atender, esclarecer todas as suas dúvidas sobre nossos roteiros, nossas fotos e valores.</p>
            <br />
            <p>Oferecemos uma grande variedade de passeios turísticos em Campos do Jordão, desde as mais belas paisagens naturais até os pontos turísticos mais famosos da cidade. Confira nosso catálogo de fotos e escolha o roteiro ideal para você. Além disso, podemos personalizar o seu passeio de acordo com as suas preferências e necessidades. É só entrar em contato conosco pelo Whatsapp e contar o que você deseja. </p>
            <br />
            <p>
Não perca a chance de conhecer a cidade mais charmosa da Serra da Mantiqueira! Agende agora mesmo e tenha uma experiência incrível em Campos do Jordão!</p>
          </div>      
        </div>
      </Container>
    </>
  );
}
