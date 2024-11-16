import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import Gadgets from './components/Gadgets/Gadgets.jsx';
import GadgetDetails from './components/GadgetDetails/GadgetDetails.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        children:[
          {
         path:'/',
         element:<Gadgets></Gadgets> ,
         loader:()=>fetch('../data.json')
        },
          {
         path:'/:category',
         element:<Gadgets></Gadgets> ,
         loader:()=>fetch('../data.json')
        }
        ]
      },
      {
        path:"/dashboard",
        element:<DashBoard></DashBoard>
      },
      {
        path:'/:category/:product_id',
        element:<GadgetDetails></GadgetDetails>,
        loader:()=>fetch('../data.json')
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
