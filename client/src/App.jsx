import { RouterProvider } from "react-router-dom";

import router from "./routing/Routes";
import "./i18n/i18n"; // Import i18n setup

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
