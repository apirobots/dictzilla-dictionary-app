import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GitHubRibbon } from './components/GitHubRibbon'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GitHubRibbon />
  </StrictMode>
);
