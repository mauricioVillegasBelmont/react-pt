import {  RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router";

import { UserProvider } from "./utils/UserProvider";




function App() {


  // console.log(UserProvider);

  return (
    <>
    <UserProvider>
      <RouterProvider router={Router} />
    </UserProvider>
    </>
  );
}

export default App;
