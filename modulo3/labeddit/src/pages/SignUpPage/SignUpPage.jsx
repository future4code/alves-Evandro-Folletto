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
  const { rightButtonText, setRightButtonText } = useContext(GlobalContext);

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

        <Header/>

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
              name={"password"}
              value={form.password}
              onChange={onChange}
              placeholder="Senha"
              required
              type={"password"}
            />

            <s.Aviso>
              Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade
            </s.Aviso>

            <s.AceptTerms>
              <s.MetInput 
                name={"acept"}
                value={"acept"}
                required
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