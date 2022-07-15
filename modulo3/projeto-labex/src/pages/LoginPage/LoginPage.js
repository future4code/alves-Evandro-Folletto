import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {goToAdminHomePage, goToIndex} from "./../../routes/coordinator.js"
import { Geral, Container, TituloCadastro, Titulo, Input, Buttons, ButtonBack, ButtonCreate } from './styled-LoginPage'

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onSubmitLogin = () => {
    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evandro-folletto-alves/login`,
    {
      "email": email,
      "password": password
    })
    .then( res => {
      localStorage.setItem('token', res.data.token);
      goToAdminHomePage(navigate)
      console.log('Deu certo', res);
    })
    .catch( erro => {
      console.log('Deu errado', erro);
    });
  }

  return (
    <Geral>
      <Container>
        <TituloCadastro>Login</TituloCadastro>

        <Titulo>E-mail:</Titulo>
        <Input
          type='e-mail'
          value={email}
          onChange={onChangeEmail}
        >
        </Input>

        <Titulo>Senha:</Titulo>
        <Input
          type='password'
          value={password}
          onChange={onChangePassword}
        >
        </Input>

        <Buttons>
          <ButtonBack onClick={()=>goToIndex(navigate)}>Voltar</ButtonBack>
          <ButtonCreate onClick={onSubmitLogin}>Entrar</ButtonCreate>
        </Buttons>

      </Container>
    </Geral>
  );
};