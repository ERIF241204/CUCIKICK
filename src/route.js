import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import Pricing from "./pages/pricing";
import About from "./pages/about";
import Contact from "./pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
