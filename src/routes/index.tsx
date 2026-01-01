import { lazy, Suspense, type ReactNode } from "react";
import { routes } from "../lib/routes";
import { Route } from "react-router-dom";
import Loader from "../components/loader";

interface RouteConfig {
  path: string;
  element: ReactNode;
}

const Home = lazy(() => import("../pages/home/index"));
const Menu = lazy(() => import("../pages/menu/index"));
const Reservation = lazy(() => import("../pages/reservation/index"));
const ContactUs = lazy(() => import("../pages/contact/index"));
const Starters = lazy(() => import("../pages/menu/starters/index"));
const MainDish = lazy(() => import("../pages/menu/main-dish/index"));

const jays: RouteConfig[] = [
  {
    path: routes.index,
    element: <Home />,
  },
  {
    path: routes.menu.index,
    element: <Menu />,
  },
  {
    path: routes.reservation.index,
    element: <Reservation />,
  },
  {
    path: routes.contact.index,
    element: <ContactUs />,
  },
  {
    path: routes.menu.starters,
    element: <Starters />,
  },
  {
    path: routes.menu.mainDish,
    element: <MainDish />,
  },
];

function jaysRoutes() {
  return (
    <>
      {jays.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<Suspense fallback={<Loader />}>{route.element}</Suspense>}
        />
      ))}
    </>
  );
}

export default jaysRoutes;
