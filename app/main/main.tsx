import Header from "~/components/layout/header";
// import Footer from "~/components/layout/footer";
import Footer from "../components/layout/footer";
import Sidebar from "~/components/layout/sidebar";

import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
