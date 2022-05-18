import Navbar from './Components/Navbar';
import { LOCALES } from './i18n';
import { I18Provider } from './i18n';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from 'Pages/Home';
import CvForm from 'Components/CvForm';
import UpperNavbar from 'Components/UpperNavbar';
import Enterprise from 'Components/Enterprise';
import Hosting from 'Components/Hosting';
import Encrypt from 'Pages/encryptTest';

function App() {
  const [locale, setLocale] = useState(sessionStorage.getItem('language') === 'es' ? LOCALES.SPANISH : LOCALES.ENGLISH);
  return (
    /** Provider to changes languages */
    <I18Provider locale={locale}>
      <Navbar setLocale={setLocale}/>
      {/* <UpperNavbar setLocale={setLocale}/>  */}

      {/* ROUTES */}
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/students" element={<CvForm />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/encrypt" element={<Encrypt />} />
        
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </I18Provider>
  );
}

export default App;
