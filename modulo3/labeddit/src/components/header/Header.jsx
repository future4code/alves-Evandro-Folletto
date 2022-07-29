import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as s from './styled-Header';
import img_logo from "./../../assets/img/reddit.png";
import img_buttonBack from "./../../assets/img/buttonBack.png";
import { GlobalContext } from "../../components/global/GlobalContext";
import { goToFeedPage, goToLoginPage } from "./../../routes/coordinator.js"

export default function Header(props) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const tokenUserEmail = localStorage.getItem('useremail');

  const { rightButtonText, setRightButtonText } = useContext(GlobalContext);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("useremail");
    localStorage.removeItem("pagina");
  }

  const rightButtonAction = () => {
    if(rightButtonText === "Login") {
      goToLoginPage(navigate);
    } else {
      logout();
      setRightButtonText("Login");
      goToLoginPage(navigate);
    }
  }
  
  const pgnOrigin = Object.values(props)[0];

  return (
    <s.Header>
      {
        pgnOrigin === 'signUpPage' ?
          null
        :
          <s.Line1>
            {
              tokenUserEmail !== null ? 
                <s.Hello>Olá, {tokenUserEmail}</s.Hello>
              :
                null
            }
          </s.Line1>
      }
      <s.Line2>
        <s.Auxiliar>
          {
            pgnOrigin === 'postPage' ? 
              <s.ButtonBack src={img_buttonBack} onClick={()=>goToFeedPage(navigate)} />
            :
              null
          }
        </s.Auxiliar>
        <s.Logo src={img_logo} alt="Logo" />
        <s.RightButton onClick={rightButtonAction}>{rightButtonText}</s.RightButton>
      </s.Line2>
    </s.Header>
  )
}