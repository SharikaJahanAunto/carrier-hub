import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/layout/Main';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Error404 from './components/ErrorPage/Error404';
import ViewDetails from './components/ViewDetails/ViewDetails';

const router = createBrowserRouter([
{
  path:'/',
  element:<Main></Main>,
  children:[
    {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('/FeaturedJobs.json')
      
    },
    {
    path:'Statistics',
    element:<Statistics></Statistics>
    },
    {
      path:'AppliedJobs',
      element:<AppliedJobs></AppliedJobs>
    },
    {
    path:'details/:detailsId',
    element:<ViewDetails></ViewDetails>,
    loader: ({ params }) =>
    fetch('/FeaturedJobs.json')
      .then(response => response.json())
      .then(data => {
        // Filter the data based on the clicked ID
        const filteredData = data.filter(detail => detail.id === Number(params.detailsId));
        return filteredData[0]; // Return the first matching detail
      })
    },
    {
      path:'blog',
      element:<Blog></Blog>
    },
    {
      path:'*',
      element:<Error404></Error404>
    }
  ]
  
}

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
