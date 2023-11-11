import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import {} from '../Routes/styles/estilo.module.css';

const HomeContainer = styled.section`
`;

const CardSlide = styled.div`
  position: relative;
  border: 2px solid #ccc;
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CardText = styled.p`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 48%;
  left: 50%;
  font-size: 80px;
  color: #fff;

  transition: .3s ease-in-out;

  &:hover {
    color: #000;
    cursor: pointer;

    &:before {
      content: ""; 
      position: absolute;
      width: 100%;
      height: 2px; 
      background: linear-gradient(to right, #010, #000); 
      bottom: 0;
      left: 0;
    }
  }
`;

const Container = styled.div`
  padding-top: 3%;
  padding-bottom: 4%;
  text-align: center;
  gap: 10%;
  min-height: 70vh;
`;

const Heading = styled.h2`
  color: #284703;
  font-size: 2.8rem;
  font-weight: 900;
  padding-bottom: 1%;
`;

const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CardItem = styled.div`
  padding: 20px 0;
  max-width: 400px;
  margin: 30px 0;
  text-align: center;
  min-height: 35  0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 15px;
  transition: 0.5s;

  img {
    width: 80%;
    border-radius: 15px;
  }

  transition: .4s ease-in-out;

  &:hover {
    transform: scale(1.1);

    img{
      transition: .4s ease-in-out;
      transform: scale(1.1);
    }
  }
`;

const P = styled.p`
font-size: 1.2rem;
color:#284703;
padding-right: 10%;
padding-left: 10%;
`;

const ImageTitle = styled.p`
font-size: 1.4rem;
color: #284703;
padding-top: 2%;
`;

const Subtitle = styled.p`
font-size: 1.4rem;
color: #284703;
font-weight: bold;
`;

const Aviso = styled.p`
font-size: .7rem;
color: #920;
padding-top: 8px;
`;


const imagens = [
  { id: '1', image: './src/assets/pexels-kelly-17506666.jpg', desc: 'Pequenas Plantações' },
  { id: '2', image: './src/assets/indoor.jpeg', desc: 'Hortas Indoor' },
  { id: '3', image: './src/assets/Agricultura-Vertical (1).jpg', desc: 'Plantações Verticais' }
];

function Home() {
  const [slidePreview, setSlidePreview] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePreview(1);
      } else {
        setSlidePreview(2);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HomeContainer>
      <Swiper
        slidePreview={slidePreview}
        pagination={{ clickable: true }}
        navigation
      >
        {imagens.map((item) => (
          <SwiperSlide key={item.id}>
            <CardSlide>
              <CardImage src={item.image} alt={item.desc} />
              <CardText>{item.desc}</CardText>
            </CardSlide>
          </SwiperSlide>
        ))}
      </Swiper>
      <Container>
        <Heading>O Projeto</Heading>
        <P>Desenvolvemos este projeto para mudar a forma com que interagimos com a flora, e trazê-la o mais perto possível.</P>
        <P>Nossa missão é criar soluções sustentáveis e otimizadoras para o desenvolvimento rural, indoor e caseiro.</P>
        <br></br>
        <Subtitle>Como Funciona?</Subtitle>
        <P>O funcionamento é simples. Capta a umidade, temperatura e índice de luz,e exibe em um dashboard atualizado em tempo real.</P>
        <Aviso>(Imagens meramente ilustrativas)</Aviso>
        <ContainerCards>
          <CardItem>
            <h1></h1>
            <img src="./src/assets/dispositivo em casa.jpeg.jpeg" alt="Dispositivo em aplicações em casa" />
            <ImageTitle>Dispositivo aplicado em casa</ImageTitle>

          </CardItem>
          <CardItem>
            <h1></h1>
            <img src="./src/assets/aplicacao em hortas indoor.jpeg.jpeg" alt="Dispositivo aplicado em hortas indoor" />
            <ImageTitle>Dispositivo aplicado em hortas indoor</ImageTitle>

          </CardItem>
          <CardItem>
            <h1></h1>
            <img src="./src/assets/aplicacao em shopping.jpeg.jpeg" alt="Dispositivo aplicado em hortas de shopping" />
            <ImageTitle>Dashboard display em hortas de shopping</ImageTitle>

          </CardItem>
        </ContainerCards>
      </Container>
    </HomeContainer>
  );
}

export default Home;
