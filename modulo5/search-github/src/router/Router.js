import StartPage from "./../pages/StartPage/StartPage";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import AboutPage from "./../pages/AboutPage/AboutPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import HistoricPage from "../pages/HistoricPage/HistoricPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="historic" element={<HistoricPage />} />
        {/* <Route path="purchase" element={<PurchasePage />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}