import React from "react";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import "./config/Reactotronconfig";
import Routes from "./routes";
import history from "./services/history";
import { store, persistor } from "./store";
import Global from "./pages/styles/global";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <Global />
          <ToastContainer autoCloso={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
