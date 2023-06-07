import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LandingPageWrapper from "./home/LandingPageWrapper";
import { FaqSection } from "./home/FaqSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageWrapper/>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);