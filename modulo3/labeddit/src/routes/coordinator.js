export const goToSignUpPage = (navigate) => {
  navigate("/signup");
}

export const goToLoginPage = (navigate) => {
  navigate("/login");
}

export const goToPostPage = (navigate, id) => {
  navigate(`/post/${id}`);
}

export const goToFeedPage = (navigate) => {
  navigate("/");
}