import './style.css'
import { createContainer } from './components/Container/container';

const appDiv = document.querySelector<HTMLDivElement>('#app');

appDiv?.appendChild(createContainer());
// appDiv?.appendChild(HeaderImageContainer());

