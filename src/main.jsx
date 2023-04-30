import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/LayOut/Main.jsx';
import Home from './Component/Home/Home';
import Category from './Component/Category/Category';
import NewsLayout from './Component/NewsLayout/NewsLayout';
import NewsDetails from './Component/News/NewsDetails';
import AuthProvider from './Component/Providers/AuthProviders';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration';
import PrivateRoute from './Component/Route/PrivateRoute';
import Terms from './Component/Terms/Terms';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Category></Category>,
        loader:()=>fetch(`http://localhost:5000/news`)
      },
      {
        path:'/category/:id',
        element:<Category></Category>,
        loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
      },
      
    ]
   
  },
  {
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children:[
      {
        path:':id',
        element:<PrivateRoute>
          <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        

      }
    ]
  },
  {
    path:'login',
    element:<Login></Login>
  },
  {
    path:'registration',
    element:<Registration></Registration>
  },
  {
    path:'terms',
    element:<Terms></Terms>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
