import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './router';
import { MyThemeProvider } from '@elrick85/theme';

const mount = ({
  mountPoint,
  initialPathname,
}: {
  mountPoint: HTMLElement;
  initialPathname: string;
}) => {
  const router = createRouter(initialPathname);
  const root = createRoot(mountPoint);
  
  root.render(
    <StrictMode>
      <MyThemeProvider>
        <RouterProvider router={router} />
      </MyThemeProvider>
    </StrictMode>
  );

  return () => {
    console.log('Destroy');
    queueMicrotask(() => root.unmount());
  };
};

export { mount };

export default mount;
