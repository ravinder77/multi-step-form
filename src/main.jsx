import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'; // Add this import statement
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
