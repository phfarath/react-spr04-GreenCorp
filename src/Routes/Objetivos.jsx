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
max-width: 350px;
min-height: 20vh;
text-align: center;
height: 450px;
margin-bottom: 3%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid #000;
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
padding-top: 1%;
padding-right: 15%;
padding-left: 15%;
`;


function Objetivos() {


    return (
        <>
          <Container>
            <H1>Objetivos</H1>
      <ContainerCards>
        <Item>
          
        </Item>
        <Item>
          
        </Item>
        <Item>
          
        </Item>
        
        
      </ContainerCards>
    </Container>
        </>
    )

}
export default Objetivos;