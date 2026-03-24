import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import ForInvestors from "./pages/ForInvestors";
import ForBorrowers from "./pages/ForBorrowers";
import Contact from "./pages/Contact";
import DavidKingBio from "./pages/DavidKingBio";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/for-investors",
    Component: ForInvestors,
  },
  {
    path: "/for-borrowers",
    Component: ForBorrowers,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/bio/david-king",
    Component: DavidKingBio,
  },
]);