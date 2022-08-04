import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as s from './styled-SignUpPage';
import useForm from "./../../hooks/useForm";
import useUnprotectedPage from './../../hooks/useUnprotectedPage';
import Header from "./../../components/header/Header";
import { onSubmitSignUp } from "./../../services/requests";
import { GlobalContext } from "../../components/global/GlobalContext";

export default function SignUpPage() {
  useUnprotectedPage();
  const navigate = useNavigate();
  const { setRightButtonText } = useContext(GlobalContext);

  const { form, onChange, cleanFields } = useForm({
    username: "",
    email: "",
    password: "",
  })

  const register = (event) => {
    event.preventDefault();
    onSubmitSignUp(form, cleanFields, navigate, setRightButtonText);
  }

  return (
    <s.General>
      <s.Container>

        <Header a={'signUpPage'}/>

        <s.Main>
          <s.Apresentation>
            <s.Title>Olá, boas vindas ao</s.Title>
            <s.Title>LabEddit ;)</s.Title>
          </s.Apresentation>
          <s.Form onSubmit={register}>
            <s.Input
              name={"username"}
              value={form.username}
              onChange={onChange}
              placeholder="Nome de usuário"
              required
              type={"text"}
            />

            <s.Input
              name={"email"}
              value={form.email}
              onChange={onChange}
              placeholder="E-mail"
              required
              type={"email"}
            />

            <s.Input
              type={"password"}
              value={form.password}
              onChange={onChange}
              placeholder="Senha"
              name={"password"}
              required
              pattern={"^.{8,}"}
              title={"A senha deve ter no mínimo 8 e no máximo 30 caracters"}
            />

            <s.Alert>
              <s.Text>
                Ao continuar, você concorda com o nosso <s.BlueText>Contrato de usuário</s.BlueText> e nossa <s.BlueText>Política de Privacidade</s.BlueText>
              </s.Text>
            </s.Alert>

            <s.AceptTerms>
              <s.MetInput 
                name={"acept"}
                value={"acept"}
                required
                type='checkbox'
              />
              <s.Text>Eu concordo em receber emails sobre coisas legais no Labeddit</s.Text>
            </s.AceptTerms>

            <s.ButtonSignUp type={'submit'}>Cadastrar</s.ButtonSignUp>
          </s.Form>
        </s.Main>

      </s.Container>
    </s.General>
  )
}