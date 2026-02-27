import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { routes } from "./routes/routes.tsx";
import { RouterProvider } from "react-router";
// import ScrollToTop from "./components/Shared/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  </StrictMode>,
);
