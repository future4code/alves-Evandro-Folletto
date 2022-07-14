export const goToListTripsPage = (navigate) => {
  navigate("/listtrips");
}

export const goToAdminHomePage = (navigate) => {
  navigate("/adminhome");
}

export const goToAboutPage = (navigate) => {
  navigate("/about");
}

export const goBack = (navigate) => {
  navigate(-1);
}

export const goToApplicationFormPage = (navigate) => {
  navigate("/applicationform");
}

export const goToLoginPage = (navigate) => {
  navigate("/login");
}

export const goToIndex = (navigate) => {
  navigate("/");
}

export const goToTripDetailsPage = (navigate, id) => {
  console.log('Valor do ID que chegou no coordinator:', id);
  navigate(`/tripdetails/${id}`);
}