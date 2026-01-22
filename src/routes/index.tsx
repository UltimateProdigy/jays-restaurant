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
const Fingers = lazy(() => import("../pages/menu/starters/fingers/index"));
const Soups = lazy(() => import("../pages/menu/starters/soups/index"));
const SpringRoll = lazy(
  () => import("../pages/menu/starters/spring-roll/index")
);
const Asian = lazy(() => import("../pages/menu/main-dish/asian/index"));
const Desserts = lazy(() => import("../pages/menu/main-dish/desserts/index"));
const Pasta = lazy(() => import("../pages/menu/main-dish/pasta/index"));
const Rice = lazy(() => import("../pages/menu/main-dish/rice/index"));
const Salads = lazy(() => import("../pages/menu/main-dish/salads/index"));
const SeaFoods = lazy(() => import("../pages/menu/main-dish/sea-foods/index"));
const Steaks = lazy(() => import("../pages/menu/main-dish/steaks/index"));

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
  {
    path: routes.menu.fingers,
    element: <Fingers />,
  },
  {
    path: routes.menu.soups,
    element: <Soups />,
  },
  {
    path: routes.menu.springRoll,
    element: <SpringRoll />,
  },
  {
    path: routes.menu.asian,
    element: <Asian />,
  },
  {
    path: routes.menu.desserts,
    element: <Desserts />,
  },
  {
    path: routes.menu.pasta,
    element: <Pasta />,
  },
  {
    path: routes.menu.rice,
    element: <Rice />,
  },
  {
    path: routes.menu.salads,
    element: <Salads />,
  },
  {
    path: routes.menu.seaFoods,
    element: <SeaFoods />,
  },
  {
    path: routes.menu.steaks,
    element: <Steaks />,
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
