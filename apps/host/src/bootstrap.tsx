import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from './app/router';
import { MyThemeProvider } from '@elrick85/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MyThemeProvider>
    <RouterProvider router={browserRouter} />
  </MyThemeProvider>
);
