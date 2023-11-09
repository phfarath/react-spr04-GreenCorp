import { } from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 80vh;
background-color: #e3f5e0;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
gap: 10%;
`;

const H1 = styled.h1`
font-size: 2.8rem;
color: #284703;
padding-top: 2%;
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
height: 20vh;
text-align: center;
height: 450px;
margin-bottom: 3%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 15px;
border-radius: 15px;
transition: 0.5s;
`;

const ItemImage = styled.img`
width: 60%;
height: 300px;
border-radius: 15px;
`;

const H2 = styled.h2`
font-size: 1.5rem;
color: #284703;
`;

const P=styled.p`
font-size: 1.4rem;
color:#284703;
`;


function Sobre() {


    return (
        <>
          <Container>
      <H1>Desenvolvedores</H1>
      <P>É com alegria que apresentamos nossa solução inovadora, desenvolvida ao longo do ano para a faculdade FIAP.</P>
      <ContainerCards>
        <Item>
          <ItemImage src="./src/assets/foto de perfil.jpg" alt="foto de um dos desenvolvedores" />
          <H2>Lucca Vilaça Okubo</H2>
        </Item>
        <Item>
          <ItemImage src="./src/assets/fot do ph.jpeg" alt="foto de um dos desenvolvedores" />
          <H2>Pedro Henrique Pontes Farath</H2>
        </Item>
        <Item>
          <ItemImage src="./src/assets/foto do PL.jpeg" alt="foto de um dos desenvolvedores" />
          <H2>Pedro Lucas de Andrade Nunes</H2>
        </Item>
        <Item>
          <ItemImage src="./src/assets/foto do yan.jpeg" alt="foto de um dos desenvolvedores" />
          <H2>Ian Cancian Nachtergaele</H2>
        </Item>
        
      </ContainerCards>
    </Container>
        </>
    )

}
export default Sobre;