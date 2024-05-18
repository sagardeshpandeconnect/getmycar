import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store, persistor } from "./app/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";

const queryClient = new QueryClient();
const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </Auth0Provider>
  // </React.StrictMode>
);
