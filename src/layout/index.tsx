import { Outlet } from "react-router";
import { Header } from "../components/header";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
