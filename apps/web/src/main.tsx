import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { router } from "./router";
import { ModalsProvider } from "@mantine/modals";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// TODO: Zenika recrute
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchIntervalInBackground: false },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: "light" }}
        >
          <ModalsProvider>
            <RouterProvider router={router} />
          </ModalsProvider>
        </MantineProvider>
        <ReactQueryDevtools initialIsOpen={false} position={"top-right"} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
