import { createBrowserRouter, redirect } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PlanetsPage } from "./pages/PlanetsPage";
import { PlanetPage } from "./pages/PlanetPage";
import { PlanetAppearancePage } from "./pages/planet/PlanetAppearancePage";
import { PlanetEcosystemPage } from "./pages/planet/PlanetEcosystemPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/planets",
        element: <PlanetsPage />,
      },
      {
        path: "/planet/:planetId",
        element: <PlanetPage />,
        children: [
          {
            path: "/planet/:planetId/ecosystem",
            element: <PlanetEcosystemPage />,
          },
          {
            path: "/planet/:planetId/appearance",
            element: <PlanetAppearancePage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    loader: () => redirect("/planets"),
  },
]);
