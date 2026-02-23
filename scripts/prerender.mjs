#!/usr/bin/env node

/**
 * SSG Prerender Script (No Browser Required)
 *
 * This script pre-renders all routes of the React app to static HTML files
 * using React's server-side rendering (renderToString) via Vite's SSR build.
 * No browser or Puppeteer required — works in any Node.js environment.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { build } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, "..");
const DIST_DIR = join(ROOT_DIR, "dist");
const SSR_DIST_DIR = join(ROOT_DIR, "dist-ssr");

/**
 * Build the SSR bundle
 */
async function buildSSR() {
  console.log("📦 Building SSR bundle...");

  await build({
    build: {
      ssr: true,
      outDir: "dist-ssr",
      rollupOptions: {
        input: "src/entry-server.tsx",
        output: {
          format: "es",
        },
      },
      minify: false,
    },
    ssr: {
      // Bundle these packages instead of treating them as external
      noExternal: ["react-helmet-async"],
    },
    logLevel: "warn",
  });

  console.log("✅ SSR bundle built");
}

/**
 * Generate HTML for a route by injecting SSR content + helmet tags into template
 */
function generateHtml(template, appHtml, helmet) {
  // Build the head content from helmet
  const headTags = [
    helmet.title?.toString() || "",
    helmet.meta?.toString() || "",
    helmet.link?.toString() || "",
    helmet.script?.toString() || "",
  ]
    .filter(Boolean)
    .join("\n    ");

  let html = template;

  // Replace the root div content with SSR-rendered markup
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  // Inject helmet tags before </head>
  if (headTags) {
    html = html.replace("</head>", `    ${headTags}\n  </head>`);
  }

  return html;
}

/**
 * Save HTML to the correct file path
 */
function saveHtml(route, html) {
  let filePath;

  if (route === "/") {
    filePath = join(DIST_DIR, "index.html");
  } else {
    // Create directory structure and save as index.html
    const routeDir = join(DIST_DIR, route.slice(1));
    if (!existsSync(routeDir)) {
      mkdirSync(routeDir, { recursive: true });
    }
    filePath = join(routeDir, "index.html");
  }

  writeFileSync(filePath, html);
  console.log(`  ✅ Saved: ${filePath.replace(DIST_DIR, "dist")}`);
}

/**
 * Main prerender function
 */
async function prerender() {
  console.log("\n🔨 SSG Prerender Script (No Browser Required)\n");
  console.log("━".repeat(50));

  try {
    // Build SSR bundle
    await buildSSR();

    // Read the template HTML (client build output)
    const templatePath = join(DIST_DIR, "index.html");
    if (!existsSync(templatePath)) {
      throw new Error(
        "dist/index.html not found. Run `npm run build:client` first.",
      );
    }
    const template = readFileSync(templatePath, "utf-8");

    // Import the SSR module
    console.log("\n🔄 Loading SSR module...");
    const ssrModulePath = join(SSR_DIST_DIR, "entry-server.js");
    const { render, routes } = await import(ssrModulePath);
    console.log("✅ SSR module loaded");

    const ROUTES = routes || ["/"];

    console.log(`\n📄 Prerendering ${ROUTES.length} route(s)...\n`);

    // Render each route
    for (const route of ROUTES) {
      try {
        console.log(`  📄 Rendering: ${route}`);
        const { html: appHtml, helmet } = render(route);
        const fullHtml = generateHtml(template, appHtml, helmet);
        saveHtml(route, fullHtml);
      } catch (error) {
        console.error(`  ❌ Error rendering ${route}:`, error.message);
      }
    }

    // Cleanup SSR build directory
    console.log("\n🧹 Cleaning up SSR build...");
    rmSync(SSR_DIST_DIR, { recursive: true, force: true });

    console.log("\n" + "━".repeat(50));
    console.log("✨ Prerendering complete!\n");
  } catch (error) {
    console.error("\n❌ Prerender failed:", error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the prerender
prerender();
