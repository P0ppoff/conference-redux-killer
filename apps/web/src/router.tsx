import { createBrowserRouter, redirect } from "react-router-dom";
import { Layout } from "./components/Layout";
import { TanStackPlanetsRoute } from "./routes/TanStackPlanetsRoute";
import { ReduxPlanetsRoute } from "./routes/ReduxPlanetsRoute";
import { Paths, UnreachablePaths } from "./routes/paths";
import { TanStackPlanetRoute } from "./routes/TanStackPlanetRoute";
import { ReduxPlanetRoute } from "./routes/ReduxPlanetRoute";
import { MyselfProfileRoute } from "./routes/MyselfProfileRoute";
import { TanStackPlanetEcosystemRoute } from "./routes/planet/TanStackPlanetEcosystemRoute";
import { TanStackPlanetAppearanceRoute } from "./routes/planet/TanStackPlanetAppearanceRoute";
import { ReduxPlanetEcosystemRoute } from "./routes/planet/ReduxPlanetEcosystemRoute";
import { ReduxPlanetAppearanceRoute } from "./routes/planet/ReduxPlanetAppearanceRoute";
import { WhyReduxRoute } from "./routes/WhyReduxRoute";
import { OpenFeedBackZenikaRoute } from "./routes/OpenFeedBackZenikaRoute";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: Paths.MYSELF_PROFILE,
        element: <MyselfProfileRoute />,
      },
      {
        path: Paths.WHY_REDUX,
        element: <WhyReduxRoute />,
      },
      {
        path: Paths.OPENFEEDBACK_ZENIKA,
        element: <OpenFeedBackZenikaRoute />,
      },
      {
        path: Paths.TAN_STACK_PLANETS,
        element: <TanStackPlanetsRoute />,
      },
      {
        path: Paths.REDUX_PLANETS,
        element: <ReduxPlanetsRoute />,
      },
      {
        path: UnreachablePaths.TAN_STACK_PLANET,
        element: <TanStackPlanetRoute />,
        children: [
          {
            path: Paths.TAN_STACK_PLANET_ECOSYSTEM,
            element: <TanStackPlanetEcosystemRoute />,
          },
          {
            path: Paths.TAN_STACK_PLANET_APPEARANCE,
            element: <TanStackPlanetAppearanceRoute />,
          },
        ],
      },
      {
        path: UnreachablePaths.REDUX_PLANET,
        element: <ReduxPlanetRoute />,
        children: [
          {
            path: Paths.REDUX_PLANET_ECOSYSTEM,
            element: <ReduxPlanetEcosystemRoute />,
          },
          {
            path: Paths.REDUX_PLANET_APPEARANCE,
            element: <ReduxPlanetAppearanceRoute />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    loader: () => redirect(Paths.TAN_STACK_PLANETS),
  },
]);
