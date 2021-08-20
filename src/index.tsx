import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import { App } from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n";
import { store, persistor } from "./store/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // <React.StrictMode>
  /* Links store to redux store */
  <Provider store={store}>
    {/* Persists redux store using imported persistor */}
    <PersistGate loading={null} persistor={persistor}>
      {/* Configures i18n */}
      <I18nextProvider i18n={i18n}>
        {/* App main entry, passes history for propper navigation */}
        <App />
      </I18nextProvider>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
