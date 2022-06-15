import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Spin } from "antd";
import store from "./redux/store";
import { persistStore } from "redux-persist";
const persistedStore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<Spin style={{ margin: "50vh 50vw" }} size={"large"} />}
        persistor={persistedStore}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
