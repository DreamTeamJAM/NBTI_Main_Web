import { Fragment } from "react";
import { IntlProvider } from "react-intl";

import { LOCALES } from "./locale";
import messages from "./messages";

/** This Provider print out text in each language */
const Provider = ({ children, locale = LOCALES.ENGLISH }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

export default Provider
