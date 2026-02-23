import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root")!;

const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// If the root already has SSR-rendered content, hydrate; otherwise create fresh
if (rootElement.innerHTML.trim().length > 0) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
