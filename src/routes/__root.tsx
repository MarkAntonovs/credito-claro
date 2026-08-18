import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { siteConfig } from "../config/site";
import { getRobotsContent } from "../lib/seo";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  const isEnglish = useRouterState({
    select: (state) =>
      state.location.pathname === "/en" || state.location.pathname.startsWith("/en/"),
  });

  return (
    <main
      id="contenido-principal"
      className="flex min-h-screen items-center justify-center bg-background px-4"
    >
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          {isEnglish ? "Page not found" : "Página no encontrada"}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {isEnglish
            ? "The page you are looking for does not exist or may have moved."
            : "La página que buscas no existe o cambió de dirección."}
        </p>
        <div className="mt-6">
          <a
            href={isEnglish ? "/en/" : "/"}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {isEnglish ? "Return to the English homepage" : "Volver al inicio"}
          </a>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main
      id="contenido-principal"
      className="flex min-h-screen items-center justify-center bg-background px-4"
    >
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página no cargó
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocurrió un error. Puedes volver a intentarlo o regresar al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteConfig.defaultTitle },
      {
        name: "description",
        content: siteConfig.defaultDescription,
      },
      { property: "og:site_name", content: siteConfig.siteName },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: getRobotsContent("index") },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const isEnglish = useRouterState({
    select: (state) =>
      state.location.pathname === "/en" || state.location.pathname.startsWith("/en/"),
  });

  return (
    <html lang={isEnglish ? "en" : siteConfig.defaultLocale}>
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#contenido-principal"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {isEnglish ? "Skip to main content" : "Saltar al contenido principal"}
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
