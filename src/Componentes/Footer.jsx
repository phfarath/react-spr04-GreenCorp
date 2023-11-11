import {} from 'react';
import { FaFacebookSquare as Face, FaLinkedin as Linkedin, FaInstagramSquare as Insta } from 'react-icons/fa';
import { MdEmail as Email } from 'react-icons/md';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 12vh;
  background-color: #a7ebb1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 30px;
  list-style: none;
  padding-left: 10%;
`;

const IconLink = styled.a`
  svg {
    color: #000;
  }
  
  &:hover {
    svg{
      transition: .2s ease-in-out;
      color: #284703;
    }
    border-bottom: 1px solid #284703;
  }
`;

const H2= styled.h2`
font-size: 1.2rem;
font-weight: bold;
padding-right: 10%;
`;

function Footer() {
  return (
    <FooterContainer>
      <H2>2023 | GreenCorp</H2>
      <IconList>
        <li>
          <IconLink href="#"><Face /></IconLink>
        </li>
        <li>
          <IconLink href="#"><Linkedin /></IconLink>
        </li>
        <li>
          <IconLink href="#"><Insta /></IconLink>
        </li>
        <li>
          <IconLink href="#"><Email /></IconLink>
        </li>
      </IconList>
    </FooterContainer>
  );
}

export default Footer;
