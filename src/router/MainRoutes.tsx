import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Route, createRoutesFromElements } from "react-router";
import Spinner from "../components/spinner/Spinner";

const HomeComponent = React.lazy(() => import("../pages/App"));
const LoginComponent = React.lazy(() => import("../pages/Login/Login"));
export const MainRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Spinner />}>
            <HomeComponent />
          </React.Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <React.Suspense fallback={<Spinner />}>
            <LoginComponent />
          </React.Suspense>
        }
      />
    </>
  )
);
