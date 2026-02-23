import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import App from "./App";

interface RenderResult {
  html: string;
  helmet: HelmetServerState;
}

export function render(): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>,
  );

  return {
    html,
    helmet: helmetContext.helmet!,
  };
}

// Single-page app — only the root route
export const routes = ["/"];
