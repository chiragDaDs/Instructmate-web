import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LandingPageWrapper from "./home/LandingPageWrapper";
import { FaqSection } from "./home/FaqSection";
import { Error404 } from "./errorPages/Error404";
import { Error500 } from "./errorPages/Error500";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageWrapper/>,
  },
  {
    path: "/404",
    element: <Error404/>
  },
  {
    path: "/500",
    element: <Error500/>
  }  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);