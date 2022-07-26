import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as s from './styled-SignUpPage';
import axios from "axios";
import useForm from "./../../hooks/useForm";
import img_logo from "./../../assets/img/reddit.png";
import { goToLoginPage } from "./../../routes/coordinator.js"


export default function SignUpPage() {
  const navigate = useNavigate();

  const onSubmitSignUp = (username, email, password) => {
    // console.log('entrei na onSubmitSignUp');
    // axios
    // .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evandro-folletto-alves/login`,
    // {
    //   "email": email,
    //   "password": password
    // })
    // .then( res => {
    //   localStorage.setItem('token', res.data.token);
    //   goToAdminHomePage(navigate)
    // })
    // .catch(error => {
    //   const errorCode = error.response.request.status;
    //   if(errorCode >= 400 && errorCode < 500) {
    //     alert("Ocorreu algum erro de preenchimento no formulário, revise suas informações");
    //   } else if (errorCode >= 500 && errorCode < 600)
    //     alert("Ocorreu um erro no servidor, tente novamente mais tarde");
    // })
  }

  const { form, onChange, cleanFields } = useForm({
    username: "",
    email: "",
    password: "",
    acept: false
  })

  const register = (event) => {
    event.preventDefault();
    console.log('cheguei dentro do register');
    console.log(form);
    cleanFields();
    onSubmitSignUp(
      form.username,
      form.email,
      form.password,
      form.acept
    );
  }

  return (
    <s.General>
      <s.Container>

        <s.Header>
          <s.Auxiliar></s.Auxiliar>
          <s.Logo src={img_logo} alt="Logo" />
          <s.Entrar onClick={()=>goToLoginPage(navigate)}>Entrar!</s.Entrar>
        </s.Header>

        <s.Main>
          <s.Apresentation>
            Olá, boas vindas ao LabEddit ;)
          </s.Apresentation>
          <s.Form onSubmit={register}>
            <s.Input
              name={"username"}
              value={form.username}
              onChange={onChange}
              placeholder="Nome de usuário"
              // required
              // type={"text"}
            />

            <s.Input
              name={"email"}
              value={form.email}
              onChange={onChange}
              placeholder="E-mail"
              // required
              // type={"email"}
            />

            <s.Input
              name={"password"}
              value={form.password}
              onChange={onChange}
              placeholder="Senha"
              // required
              // type={"password"}
            />

            <s.Aviso>
              Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade
            </s.Aviso>

            <s.AceptTerms>
              <s.MetInput 
                name={"acept"}
                value={form.acept}
                onChange={onChange}
                // required
                // type={"password"}

                // value="cartao-de-credito" 
                type='checkbox'
              />
              <label>Eu concordo em receber emails sobre coisas legais no Labeddit</label>
            </s.AceptTerms>

            <s.Buttons>
              <s.ButtonLogin>Cadastrar</s.ButtonLogin>
            </s.Buttons>
          </s.Form>
        </s.Main>

      </s.Container>
    </s.General>
  )
}