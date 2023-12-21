import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './routes';
import Download from './routes/download';
import Contratar from './routes/contratar';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Index
  },
  {
    path: "/download",
    Component: Download
  },
  {
    path: "/contratar",
    Component: Contratar
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
