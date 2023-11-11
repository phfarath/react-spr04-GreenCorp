import { } from 'react';
import styled from 'styled-components';
import intimidade from '../assets/plantas_+_humanos-removebg-preview.png'
import conhecimento from '../assets/[removal.ai]_f03ae3e1-3ae4-4dd4-bae3-c95b5cd6866f-conhecimento.png'
import producao from '../assets/[removal.ai]_70a88701-e453-488c-a3e2-8348dc786835-producao-de-alimentos.png'

const Container = styled.div`
width: 100%;
min-height: 80vh;
background-color: #e3f5e0;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
gap: 10%;
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
max-width: 350px;
min-height: 20vh;
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

const H2 = styled.h2`
font-size: 1.5rem;
color: #284703;
`;

const P=styled.p`
font-size: 1.4rem;
color:#284703;
padding-top: 1%;
padding-right: 15%;
padding-left: 15%;
`;

const IMG = styled.img`
width: auto;
height: 50%;
max-height: 100%;
object-fit: contain;
padding-bottom: 2%;
`;


function Objetivos() {


    return (
        <>
          <Container>
            <H1>Objetivos</H1>
            <P>Nossos Objetivos são simples:</P>
      <ContainerCards>
        <Item>
          <IMG src={intimidade}/>
          <P>Aumentar a intimidade entre plantas e humanos</P>
        </Item>
        <Item>
          <IMG src={conhecimento}/>
          <P>Conhecimento do que se planta e o que se colhe</P>
        </Item>
        <Item>
          <IMG src={producao}/>
          <P>Ajudar pessoas a produzirem os alimentos, independente de onde ou para que for</P>
        </Item>
        
        
      </ContainerCards>
    </Container>
        </>
    )

}
export default Objetivos;