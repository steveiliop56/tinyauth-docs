import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { RootProvider } from "fumadocs-ui/provider/base";
import { ReactRouterProvider } from "fumadocs-core/framework/react-router";
import type { Route } from "./+types/root";
import "./app.css";
import SearchDialog from "@/components/search";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://analytics.doesmycode.work/script.js"
          data-website-id="ed560a2b-b321-4745-b2f8-d7de846aeb7f"
        />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <ReactRouterProvider>
          <RootProvider search={{ SearchDialog }}>{children}</RootProvider>
        </ReactRouterProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="px-4 gap-6 flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-4xl font-black">{message}</h1>
        <p>{details}</p>
        <Link
          to="/"
          className="text-sm bg-fd-card text-fd-primary border border-fd-border rounded-md px-4 py-2.5 hover:opacity-80 hover:scale-105 transition-transform delay-100"
        >
          Go home
        </Link>
      </div>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
