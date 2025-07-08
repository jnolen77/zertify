import { Outlet } from "react-router-dom";
import Header from "~/components/layout/header";
import Sidebar from "~/components/layout/sidebar";
import Footer from "~/components/layout/footer";
import { Main } from "~/main/main";

export default function Home() {
  return (
    <div>
      <Main />
      {/* Or whatever Main.tsx content you want here */}
    </div>
  );
}
