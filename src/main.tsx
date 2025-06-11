import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

document.addEventListener('DOMContentLoaded', () => {
  const faAllLink = document.createElement('link');
  faAllLink.rel = 'stylesheet';
  faAllLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
  document.head.appendChild(faAllLink);

  // Explicitly add Font Awesome Regular style for fa-regular icons
  const faRegularLink = document.createElement('link');
  faRegularLink.rel = 'stylesheet';
  faRegularLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/regular.min.css';
  document.head.appendChild(faRegularLink);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
