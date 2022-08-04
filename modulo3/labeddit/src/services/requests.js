// import {useState, useEffect} from 'react';
import axios from "axios";
import { BASE_URL } from "./../constants/BASE_URL";
import { goToFeedPage } from "./../routes/coordinator.js";

// export const useRequestData = (url, token, estadoInicial) => {
//   const [posts, setPosts] = useState(estadoInicial)
//   function getPosts() {
//     axios
//       .get(url,
//         {
//           headers:
//           {
//             Authorization: token
//           }
//         })
//       .then(res => {
//         setPosts(res.data);
//       })
//       .catch(error => {
//         const errorCode = error.response.request.status;
//         if (errorCode >= 400 && errorCode < 500) {
//           alert("Ocorreu algum erro de preenchimento no formulário, revise suas informações");
//         } else if (errorCode >= 500 && errorCode < 600)
//           alert("Ocorreu um erro no servidor, tente novamente mais tarde");
//       })
//   }
//   useEffect(() => {
//     getPosts();
//   }, [url])
//   return [posts]
// }

export const onSubmitLogin = (body, cleanFields, navigate) => {
  axios
  .post(`${BASE_URL}/users/login`, body)
  .then( res => {
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('useremail', body.email);
    localStorage.setItem('page', 1);
    cleanFields();
    goToFeedPage(navigate);
  })
  .catch(error => {
    const errorCode = error.response.request.status;
    console.log(error.response.request.status);
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro de preenchimento no formulário de login, revise suas informações");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitSignUp = (body, cleanFields, navigate, setRightButtonText) => {
  axios
  .post(`${BASE_URL}/users/signup`, body)
  .then( res => {
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('useremail', body.email);
    localStorage.setItem('page', 1);
    alert("Cadastro realizado com sucesso!");
    cleanFields();
    setRightButtonText('Logout');
    goToFeedPage(navigate);
  })
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro de preenchimento no formulário de criar usuário, revise suas informações");
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
    // getPosts(token)
  })
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro de preenchimento no formulário de criar post, revise suas informações");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitCreateComment = (body, id, token, cleanFields, getPostComments, getPosts) => {
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
    getPostComments(token);
    getPosts();
  })
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro de preenchimento no formulário de criar comentário, revise suas informações");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitCreatePostVote = (id, token, getPosts) => {
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
  .then( res => getPosts(token))
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro ao tentar dar like na página de posts");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitChangePostVote = (id, token, getPosts) => {
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
  .then( res => getPosts(token))
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro ao tentar dar dislike na página de posts");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitCreateCommentVote = (id, token, getPostComments) => {
  axios
  .post(`${BASE_URL}/comments/${id}/votes`,
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
    getPostComments()
  })
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro ao tentar like na página de comentários");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitChangeCommentVote = (id, token, getPostComments) => {
  axios
  .put(`${BASE_URL}/comments/${id}/votes`,
  {
    "direction": -1
  },
  {
    headers:
    {
      Authorization: token
    }
  })
  .then( res => getPostComments())
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro ao tentar dar like na página de comentários");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitDeletePostVote = (id, token, getPosts) => {
  axios
  .delete(`${BASE_URL}/posts/${id}/votes`,
  {
    headers:
    {
      Authorization: token
    }
  })
  .then( res => getPosts(token))
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro ao tentar remover like/dislike na página de posts");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export const onSubmitDeleteCommentVote = (id, token, getPostComments) => {
  axios
  .delete(`${BASE_URL}/comments/${id}/votes`,
  {
    headers:
    {
      Authorization: token
    }
  })
  .then( res => getPostComments())
  .catch(error => {
    const errorCode = error.response.request.status;
    if(errorCode >= 400 && errorCode < 500) {
      alert("Ocorreu algum erro ao tentar remover like/dislike na página de comentários");
    } else if (errorCode >= 500 && errorCode < 600)
      alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}