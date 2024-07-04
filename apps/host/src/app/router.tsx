import React, { Suspense } from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./app";
import SignIn from "./signIn";
import { App1Container } from "./pages/App1Container";

const App2 = React.lazy(() => import('app2/Module'));

export const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<SignIn />} />
      <Route path="/app-1/*" element={<App1Container />} />
      <Route path="/app-2" element={<App2 />} />
    </Route>
  )
);