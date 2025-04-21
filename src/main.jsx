import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Error from "./Error.jsx"
import Body from './Body.jsx';
import Cart from "./Cart.jsx"
import RestaurantMenu from './RestaurantMenu.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"restaurant/:id",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={appRouter} />
  // </StrictMode>,
)
