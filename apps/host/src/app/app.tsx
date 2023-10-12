import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/app-1">App1</Link>
        </li>
        <li>
          <Link to="/app-2">App2</Link>
        </li>
      </ul>
      <Outlet />
      
    </React.Suspense>
  );
}

export default App;
