
import { mount } from './app/mount';

const mountPoint = document.getElementById('root') as HTMLElement

mount({mountPoint, initialPathname: '/'});
