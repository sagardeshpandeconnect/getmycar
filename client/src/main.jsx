import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store, persistor } from "./app/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </QueryClientProvider>
  // </React.StrictMode>
);
