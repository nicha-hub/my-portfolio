import './App.css';
import './assets/scss/common.scss';
import { useTranslation, withTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Layout from "./pages/Layout";

function App({ t, i18n }) {
  /* ตัวอย่างการแปลภาษา */
  // const { t,i18n } = useTranslation();
  // function changeLang(langCode){
  //   i18n.changeLanguage(langCode);
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default withTranslation()(App);
