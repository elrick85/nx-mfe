import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router";

const mount = ({
  mountPoint,
  initialPathname,
}: {
  mountPoint: HTMLElement;
  initialPathname: string;
}) => {
  const router = createRouter(initialPathname);
  const root = createRoot(mountPoint);
  console.log('AAAAAAAAAA', mountPoint, initialPathname, root)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );

  return () => {
    console.log('Destroy')
    queueMicrotask(() => root.unmount())
  };
};

export { mount };

export default mount;