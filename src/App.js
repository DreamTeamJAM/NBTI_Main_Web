import Navbar from './Components/Navbar';
import { LOCALES } from './i18n';
import { I18Provider } from './i18n';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from 'Pages/Home';
import CvPage from 'Pages/CvPage';
import Enterprise from 'Pages/Enterprise';
import Hosting from 'Pages/Hosting';
import Encrypt from 'Pages/encryptTest';
import Footer from './Components/Footer';

import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/register"

function App() {
  const [locale, setLocale] = useState(sessionStorage.getItem('language') === 'es' ? LOCALES.SPANISH : LOCALES.ENGLISH);
  return (
    /** Provider to changes languages */
    <I18Provider locale={locale}>
      <Navbar setLocale={setLocale}/>

      {/* ROUTES */}
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/students" element={<CvPage />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/encrypt" element={<Encrypt />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
      <Footer />
    </I18Provider>
  );
}

export default App;
