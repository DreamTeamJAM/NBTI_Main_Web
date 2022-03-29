import Navbar from './Components/Navbar';
import { LOCALES } from './i18n';
import { I18Provider } from './i18n';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from 'Pages/Home';

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <I18Provider locale={locale}>
      <Navbar setLocale={setLocale}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </I18Provider>
  );
}

export default App;
