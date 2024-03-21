import { RouterProvider } from "react-router-dom";

import router from "./routing/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
