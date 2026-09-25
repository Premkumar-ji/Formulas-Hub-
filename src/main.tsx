import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import 'katex/dist/katex.min.css';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Automatically register and update service worker for full offline support
registerSW({
  immediate: true,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
