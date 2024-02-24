import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import {Root} from "@routes/root";
import {Home} from "@routes/home";
import {Experience} from "@routes/experience";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/experience",
                element: <Experience/>
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
