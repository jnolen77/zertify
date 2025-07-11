import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import Header from "~/components/layout/header";
import Sidebar from "~/components/layout/sidebar";
import Footer from "~/components/layout/footer";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Links />
      </head>
      <body className="bg-[#fef9c6]">
        <Header />

        {/* Flex layout for sidebar + main content */}
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>

        <Footer />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
