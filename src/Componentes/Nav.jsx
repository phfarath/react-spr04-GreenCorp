import {} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {

    // styled-components 
    const HeaderContainer = styled.header`
        background-color: #88b257;
        width: 100%;
        height: 12vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 5%;
        gap: 15%;
    `;

    const NavList = styled.ul`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 20px;
        list-style: none;
    `;

    const NavItem = styled.li`
        text-decoration: none;
    `;

    const NavLinkStyled = styled(Link)`
        color: #000;
        text-decoration: none;
        cursor: pointer;
        font-size: 1.3rem;

        transition: .2s ease-in-out;

        &:hover {
            color: #284703;
            border-bottom: 1px solid #284703;
        }
    `;

    const LogoutButton = styled.button`
        background-color: #88b257;
        color: #fff;
        padding: 8px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s ease-in-out;

        &:hover {
            background-color: #1a2f00;
        }
    `;

    return (
        <HeaderContainer>
            <NavList>
                <NavItem>
                    <NavLinkStyled to="/">Home</NavLinkStyled>
                </NavItem>
                <NavItem>
                    <NavLinkStyled to="/dispositivo">O Dispositivo</NavLinkStyled>
                </NavItem>
                <NavItem>
                    <NavLinkStyled to="/sobre">Sobre</NavLinkStyled>
                </NavItem>
                <NavItem>
                    <NavLinkStyled to="/login">Login</NavLinkStyled>
                </NavItem>
            </NavList>
        </HeaderContainer>
    )
}

export default Nav;