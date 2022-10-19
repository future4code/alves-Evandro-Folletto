import StartPage from "./../pages/StartPage/StartPage";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import AboutPage from "./../pages/AboutPage/AboutPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import HistoricPage from "../pages/HistoricPage/HistoricPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="historic" element={<HistoricPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}