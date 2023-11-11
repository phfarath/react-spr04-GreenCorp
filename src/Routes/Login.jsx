import { useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MiniPerfil from './Miniperfil.jsx';

const LoginContainer = styled.section`
  width: 100%;
  min-height: 80vh;
  background-color: #e3f5e0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const LoginTitle = styled.h1`
  font-size: 2.5rem; 
  color: #000;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;

const LoginButton = styled.input`
  padding: 10px;
  background-color: #284703;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
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


function Login() {
  const getUser = sessionStorage.getItem('userData');
  const getSenha = sessionStorage.getItem('senhaData');
  const user = useRef();
  const password = useRef();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.current.value === 'usuario' && password.current.value === '123') {
      let token =
      Math.random().toString(16).substring(2) +
      Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'usuario');
      sessionStorage.setItem('senhaData', token);
      navigate('/');
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };
  const handleLogout = async () => {
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("saindo da sessão");
    navigate('/');
  };

  return (
    <LoginContainer>
      {getUser && getSenha ? (
        <>
        <MiniPerfil username={getUser} />
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </>
      ) : (
        <>
          <LoginTitle>Login</LoginTitle>
          <LoginForm onSubmit={handleSubmit}>
            <p>
              USUÁRIO:
              <LoginInput type="text" ref={user} />
            </p>
            <p>
              SENHA:
              <LoginInput type="password" ref={password} />
            </p>
            <LoginButton type="submit" value="Login" />
          </LoginForm>
        </>
      )}
    </LoginContainer>
  );
}

export default Login;
