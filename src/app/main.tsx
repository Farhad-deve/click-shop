import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
