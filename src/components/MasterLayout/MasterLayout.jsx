import React from "react";
import Nav_L from "../Nav_L/Nav_L";
import { Outlet } from "react-router-dom";

export default function MasterLayout() {
  return (
    <div className="flex">
      <Nav_L />
      <Outlet />
    </div>
  );
}
