import { createBrowserRouter, createMemoryRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import App from "./app";
import { NavigationManager } from "./NavigationManager";

export const routes = createRoutesFromElements(
  <Route path="/" element={(
    <NavigationManager>
      <Outlet />
    </NavigationManager>
  )}>
    <Route index element={<App />} />
  </Route>
)

export const createRouter = (basename: string) => {
  console.log('basename', basename)
  return createBrowserRouter(
    routes,
    { basename }
  );
};