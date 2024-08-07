import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:"contact",
        element: <Layout />,
      },
      {
        path:"choose",
        element: <Layout />,
      },
      {
        path:"services",
        element: <Layout />,
      },
      {
        path:"choose",
        element: <Layout />,
      },
      {
        path:"vacancy",
        element: <Layout />,
      },
      {
        path:"login",
        element: <Layout />,
      },
      {
        path:"logout",
        element: <Layout />,
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
