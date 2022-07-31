import React from 'react';
import LoginPage from "./../pages/LoginPage/LoginPage"
import SignUpPage from "./../pages/SignUpPage/SignUpPage"
import PostPage from "./../pages/PostPage/PostPage"
import FeedPage from "./../pages/FeedPage/FeedPage"
import AboutPage from "./../pages/AboutPage/AboutPage"
import ErrorPage from "./../pages/ErrorPage/ErrorPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FeedPage/>}/>
        <Route path="signup" element={<SignUpPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="post/:id" element={<PostPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
} 