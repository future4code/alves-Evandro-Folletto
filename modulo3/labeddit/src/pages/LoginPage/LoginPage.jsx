import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as s from './styled-LoginPage';
import useForm from "./../../hooks/useForm";
import img_apresentacao from "./../../assets/img/reddit.png";
import { goToSignUpPage, goToPostPage } from "./../../routes/coordinator.js"
import { BASE_URL } from "./../../constants/BASE_URL";

export default function LoginPage() {
  const navigate = useNavigate();

  const onSubmitLogin = (email, password) => {
    axios
    .post(`${BASE_URL}/users/login`,
    {
      "email": email,
      "password": password
    })
    .then( res => {
      localStorage.setItem('token', res.data.token);
      goToPostPage(navigate)
    })
    .catch(error => {
      const errorCode = error.response.request.status;
      if(errorCode >= 400 && errorCode < 500) {
        alert("Ocorreu algum erro de preenchimento no formulário, revise suas informações");
      } else if (errorCode >= 500 && errorCode < 600)
        alert("Ocorreu um erro no servidor, tente novamente mais tarde");
    })
  }

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  })

  const register = (event) => {
    event.preventDefault();
    cleanFields();
    onSubmitLogin(
      form.email,
      form.password,
    );
  }

  return (
    <s.General>
      <s.Container>

        <s.Apresentation>
          <s.Imagem src={img_apresentacao} alt="Logo Apresentação"/>
          <s.Titulo>LabEddit</s.Titulo>
          <s.Subtitulo>O projeto de rede social da Labenu</s.Subtitulo>
        </s.Apresentation>

        <s.Form onSubmit={register}>

          <s.Input
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder="E-mail"
            required
            type={"email"}
          />

          <s.Input
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            required
            type={"password"}
          />

          <s.Buttons>
            {/* <s.ButtonBack onClick={() => goToIndex(navigate)}>Voltar</s.ButtonBack> */}
            <s.ButtonLogin>Continuar</s.ButtonLogin>
            <s.ButtonSignUp onClick={()=>goToSignUpPage(navigate)}>Crie uma conta!</s.ButtonSignUp>
          </s.Buttons>
        </s.Form>
      </s.Container>
    </s.General>
  )
}