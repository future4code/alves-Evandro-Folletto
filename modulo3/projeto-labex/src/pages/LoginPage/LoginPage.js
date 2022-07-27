import axios from "axios";
import { useNavigate } from "react-router-dom";
import {goToAdminHomePage, goToIndex} from "./../../routes/coordinator.js"
import * as s from './styled-LoginPage'
import useForm from "./../../hooks/useForm";

export default function LoginPage() {
  const navigate = useNavigate();

  const onSubmitLogin = (email, password) => {
    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evandro-folletto-alves/login`,
    {
      "email": email,
      "password": password
    })
    .then( res => {
      localStorage.setItem('token', res.data.token);
      goToAdminHomePage(navigate)
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
        <s.RegistrationTitle>Login</s.RegistrationTitle>

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
            <s.ButtonBack onClick={() => goToIndex(navigate)}>Voltar</s.ButtonBack>
            <s.ButtonLogin>Enviar</s.ButtonLogin>
          </s.Buttons>
        </s.Form>

      </s.Container>
    </s.General>
  );
};