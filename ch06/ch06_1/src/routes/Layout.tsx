import { Outlet } from "react-router";
import NavitationBar from "./NavigationBar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <NavitationBar />
      <Outlet />
      <Footer />
    </>
  );
}
