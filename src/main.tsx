import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import {Root} from "@routes/root";
import {Home} from "@routes/home";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
]
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
