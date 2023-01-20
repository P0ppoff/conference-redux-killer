import React from "react";
import ReactDOM from "react-dom/client";
import { PlanetsTanStack } from "./PlanetsTanStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./Layout";
import { PlanetsRedux } from "./PlanetsRedux";
import { Provider } from "react-redux";
import { store } from "./store";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/planets",
        element: <PlanetsTanStack />,
      },
      {
        index: true,
        path: "/planets-redux",
        element: <PlanetsRedux />,
      },
    ],
  },
  {
    path: "/planets/:planetId",
    element: <PlanetsTanStack />,
  },
  {
    path: "*",
    loader: () => redirect("/planets"),
  },
]);

// TODO: Zenika recrute

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <RouterProvider router={router} />
        </MantineProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
