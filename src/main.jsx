import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



const router = createBrowserRouter([
  {
    path: ``,
    element: <Layout />,
    children: [
      {
        path: ``,
        element: <Register />,
      },
      {
        path: `login`,
        element: <Login />,
      },
      {
        path: `home`,
        element: <Home />,
      },
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  <Register />
  </RouterProvider>
)