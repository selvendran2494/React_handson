import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./src/components/Aboutus";
import Contactus from "./src/components/Contactus";
import Error from "./src/components/Error";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>
  },
  {
    path: "/about-us",
    element: <Aboutus />,
  },
  {
    path:"/contact-us",
    element:<Contactus/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
