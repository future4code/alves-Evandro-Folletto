import axios from "axios";
import { BASE_URL } from "./../constants/BASE_URL";
import { goToFeedPage } from "./../routes/coordinator.js"

export const onSubmitLogin = (body, cleanFields, navigate) => {
  axios
  .post(`${BASE_URL}/users/login`, body)
  .then( res => {
    localStorage.setItem('token', res.data.token);
    cleanFields();
    goToFeedPage(navigate);
  })
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro de preenchimento no formulário, revise suas informações");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitSignUp = (body, cleanFields, navigate) => {
  axios
  .post(`${BASE_URL}/users/signup`, body)
  .then( res => {
    localStorage.setItem('token', res.data.token);
    alert("Cadastro realizado com sucesso!");
    cleanFields();
    goToFeedPage(navigate);
  })
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro de preenchimento no formulário, revise suas informações");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitCreatePost = (body, token, cleanFields, getPosts) => {
  axios
  .post(`${BASE_URL}/posts`,
  body,
  {
    headers:
    {
      Authorization: token
    }
  })
  .then( res => {
    alert("Post enviado com sucesso!");
    cleanFields();
    getPosts(token)
  })
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro de preenchimento no formulário, revise suas informações");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitCreateComment = (body, id, token, cleanFields, getPostComments) => {
  axios
  .post(`${BASE_URL}/posts/${id}/comments`,
  body,
  {
    headers:
    {
      Authorization: token
    }
  })
  .then( res => {
    alert("Comentário enviado com sucesso!");
    cleanFields();
    getPostComments(token)
  })
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro de preenchimento no formulário, revise suas informações");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitCreatePostVote = (value, id, token) => {
  axios
  .post(`${BASE_URL}/posts/${id}/votes`,
  {
    "direction": 1
  },
  {
    headers:
    {
      Authorization: token
    }
  })
  .then( res => {
    alert("Like realizado com sucesso!");
    // getPostComments(token)
  })
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro de preenchimento no formulário, revise suas informações");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitChangePostVote = (value, id, token) => {
  axios
  .put(`${BASE_URL}/posts/${id}/votes`,
  {
    "direction": -1
  },
  {
    headers:
    {
      Authorization: token
    }
  })
  .then( res => {
    alert("Dislike realizado com sucesso!");
    // getPostComments(token)
  })
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro de preenchimento no formulário, revise suas informações");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}