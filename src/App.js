import React, { Component, useState } from "react";
import "./App.css";
import MainPage from "./components/mainpage";
import TitleBar from "./components/titlebar";
import CategoriesSelection from "./components/categoriesselection";
import BannerContainer from "./components/bannercontainer";
import Footer from "./components/footer";

function App() {
  const [categories, setCategories] = useState("");

  function changeCategories(value) {
    setCategories(value);
  }

  return (
    <div>
      <TitleBar />
      <BannerContainer />
      <CategoriesSelection
        changeCategories={(value) => changeCategories(value)}
      />
      <MainPage categories={categories} />
      <Footer />
    </div>
  );
}

export default App;
