import Navbar from './Components/Navbar';
import { LOCALES } from './i18n';
import { I18Provider } from './i18n';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from 'Pages/Home';
import CvForm from 'Components/CvForm';
import Enterprise from 'Components/Enterprise';

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    /** Provider to changes languages */
    <I18Provider locale={locale}>
      <Navbar setLocale={setLocale}/>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cvform" element={<CvForm />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </I18Provider>
  );
}

export default App;
