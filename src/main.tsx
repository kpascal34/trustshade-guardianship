
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root once DOM is ready
const renderApp = () => {
  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(<App />);
  }
};

// Use requestIdleCallback to defer non-critical initialization
if (window.requestIdleCallback) {
  window.requestIdleCallback(renderApp);
} else {
  // Fallback for browsers that don't support requestIdleCallback
  window.setTimeout(renderApp, 1);
}
