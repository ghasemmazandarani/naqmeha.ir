import {RouterProvider,createBrowserRouter} from "react-router-dom";
import ImageSlider from "./components/ImageSlider.jsx";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {path: '/' , element : <App />},
  { path: '/gallery', element: <ImageSlider /> }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
