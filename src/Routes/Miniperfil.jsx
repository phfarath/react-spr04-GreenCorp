import React from 'react';
import styled from 'styled-components';

const PerfilContainer = styled.div`
  background-color: #fff;
  border: 2px solid #284703;
  border-radius: 10px;
  margin-bottom: 2%;
  padding: 1%;
`;

const PerfilText = styled.p`
  font-size: 1.2rem;
  color: #284703;
`;

const MiniPerfil = ({ username }) => {
  return (
    <PerfilContainer>
      <PerfilText>Bem-vindo, {username}!</PerfilText>
    </PerfilContainer>
  );
};

export default MiniPerfil;