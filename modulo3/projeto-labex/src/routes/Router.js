import Home from "./../pages/HomePage/HomePage";
import ListTripsPage from "./../pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "./../pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "./../pages/LoginPage/LoginPage";
import AdminHomePage from "./../pages/AdminHomePage/AdminHomePage";
import TripDetailsPage from "./../pages/TripDetailsPage/TripDetailsPage";
import CreateTripPage from "./../pages/CreateTripPage/CreateTripPage";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import AboutPage from "./../pages/AboutPage/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="listtrips" element={<ListTripsPage/>}/>
        <Route path="applicationform" element={<ApplicationFormPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="adminhome" element={<AdminHomePage/>}/>
        <Route path="tripdetails" element={<TripDetailsPage/>}/>
        <Route path="createtrip" element={<CreateTripPage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}