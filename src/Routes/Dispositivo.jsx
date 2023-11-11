import { } from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
min-height: 80vh;
background-color: #e3f5e0;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
gap: 6%;
`;

const H1 = styled.h1`
  padding-top: 2%;
  font-size: 2.8rem;
  color: #284703;
`;

const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

const Item = styled.div`
  padding: 10px;
  width: 400px;
  height: 18vh;
  margin-bottom: 3%;
  text-align: center;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 15px;
  transition: 0.5s;

  transition: .4s ease-in-out;

  &:hover {
    transform: scale(1.1);

    img{
      transition:.4s;
      transform: scale(1.1);
    }
  }
`;

const ItemImage = styled.img`
  width: 60%;
  height: 300px;
  border-radius: 15px;
`;

const P2 = styled.p`
  font-size: 1.4rem;
  color: #284703;
  padding-top: 1%;
  padding-right: 15%;
  padding-left: 15%;
`;

const P = styled.p`
padding-top: 2%;
font-size: 1.4rem;
color:#284703;
`;

function MyComponent() {
  return (
    <Container>
      <H1>O dispositivo</H1>
      <P2>Nesse projeto ultilizamos um DHT11 e um foto-resistor. O DHT11, à esquerda, é um sensor que mede
        a umidade e a temperatura, já o Foto-resistor, à direita, mede a incidência de luz solar no ambiente.</P2>
      <ContainerCards>
        <Item>
          <ItemImage src="./src/assets/dht11.jpeg" alt="Imagem de um dht-11" />
          <P>Sensor DHT11</P>
        </Item>




        <Item>
          <ItemImage src="./src/assets/foto-resistor.jpeg" alt="Imagem de um foto-resistor" />
          <P>Foto-resistor</P>
        </Item>


      </ContainerCards>
    </Container>
  );
}

export default MyComponent;
