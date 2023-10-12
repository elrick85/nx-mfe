// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Outlet } from 'react-router-dom';
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { NavigationManager } from './NavigationManager';

export function App() {
  console.log('BBBBBBB')
  return (
    <div>
      <NxWelcome title="app1" />
    </div>
  );
}

export default App;
