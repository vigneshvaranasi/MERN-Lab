import { Children } from 'react';
import Layout from './Layout';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home';
import Departments from './components/Departments';
import Placements from './components/Placements';
import Vision from './components/Vision';

function App(){

  const browserRouter = createBrowserRouter([
    {
      path:'',
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/departments",
          element:<Departments/>
        },
        {
          path:"/placements",
          element:<Placements/>
        },
        {
          path:"/visionmission",
          element:<Vision/>
        }
    ]
    },
  ]);
  return (
    <RouterProvider router={browserRouter}>
      {Children}
    </RouterProvider>
  )
}
export default App;