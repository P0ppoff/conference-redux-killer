import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { router } from "./router";

const queryClient = new QueryClient();

// TODO: Zenika recrute

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: "dark" }}
        >
          <RouterProvider router={router} />
        </MantineProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
