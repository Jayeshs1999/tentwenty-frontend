import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Login from "./pages/Login.jsx";
import PrivateRoute from "../components/PrivateRoute.jsx";
import WeekTimesheet from "./pages/WeekTimesheet.jsx";
import Timesheet from "./pages/Timesheet.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/week-timesheet/:id" element={<WeekTimesheet />} />
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
