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
    .catch(erro => {
      if(erro.statusCode >= 400 && erro.statusCode < 500) {
        alert("Ocorreu algum erro no formulário, revise suas informações");
      } else if (erro.statusCode >= 500 && erro.statusCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
    })
  }

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  })

  const cadastrar = (event) => {
    event.preventDefault();
    cleanFields();
    onSubmitLogin(
      form.email,
      form.password,
    );
  }

  return (
    <s.Geral>
      <s.Container>
        <s.TituloCadastro>Login</s.TituloCadastro>

        <s.Formulario onSubmit={cadastrar}>

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
            <s.ButtonCreate>Enviar</s.ButtonCreate>
          </s.Buttons>
        </s.Formulario>

      </s.Container>
    </s.Geral>
  );
};