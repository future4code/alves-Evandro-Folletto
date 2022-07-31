import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as s from './styled-LoginPage';
import useForm from "./../../hooks/useForm";
import img_apresentacao from "./../../assets/img/reddit.png";
import img_info from "./../../assets/img/info.png";
import { goToSignUpPage, goToAboutPage } from "./../../routes/coordinator.js";
import { onSubmitLogin } from "./../../services/requests";
import useUnprotectedPage from './../../hooks/useUnprotectedPage';
import { GlobalContext } from "../../components/global/GlobalContext";

export default function LoginPage() {
  useUnprotectedPage();
  const navigate = useNavigate();

  const { rightButtonText, setRightButtonText } = useContext(GlobalContext);

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  })

  const register = (event) => {
    event.preventDefault();
    rightButtonText === "Login" ? setRightButtonText("Logout") : setRightButtonText("Login");
    onSubmitLogin(form, cleanFields, navigate);
  }

  return (
    <s.General>
      <s.Container>

        <s.Up>
          <s.Info>
            <s.ImageInfo src={img_info} onClick={()=>goToAboutPage(navigate)} alt="Informações"/>            
          </s.Info>
          <s.Apresentation>
            <s.Image src={img_apresentacao} alt="Logo Apresentação"/>
            <s.Title>
              <s.Title1>Lab</s.Title1>
              <s.Title2><u>Eddit</u></s.Title2>
            </s.Title>
            <s.Subtitle>O projeto de rede social da Labenu</s.Subtitle>
          </s.Apresentation>
        </s.Up>

        <s.Down>
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
              <s.ButtonLogin type={'submit'}>Continuar</s.ButtonLogin>
              <s.ButtonSignUp onClick={()=>goToSignUpPage(navigate)}>Crie uma conta!</s.ButtonSignUp>
            </s.Buttons>
          </s.Form>
        </s.Down>

      </s.Container>
    </s.General>
  )
}