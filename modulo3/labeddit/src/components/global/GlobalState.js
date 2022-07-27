import React, { useState } from "react";
import { GlobalContext } from "../global/GlobalContext";

export default function GlobalState(props) {
  const token = localStorage.getItem('token');
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login");

  const values = {
    rightButtonText, 
    setRightButtonText,
  }

  const Provider = GlobalContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
}