import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import {Root} from "@routes/root";
import {Home} from "@routes/home";
import {Experience} from "@routes/experience";
import {NotFound} from "@routes/NotFound";
import {Projects} from "@routes/projects";
import {Contact} from "@routes/contact";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/experience",
                element: <Experience/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
]
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
