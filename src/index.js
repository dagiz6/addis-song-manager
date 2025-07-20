import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const emotionCache = createCache({ key: "css" });

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <CacheProvider value={emotionCache}>
      <App />
    </CacheProvider>
  </StrictMode>
);

