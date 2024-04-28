import React from "react";
import { useRoutes } from "react-router";
import routers from "./routes";
import TopBar from "./components/TopBar";

export default function App() {
  const router = useRoutes(routers);
  return <>{router}</>;
}
