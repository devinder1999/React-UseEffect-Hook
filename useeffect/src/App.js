import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';

import {CreateBroswerRouter, RouterProvider, createBrowserRouter} from "react-router-dom"

import Simpleprogram from './Component/Simpleprogram';
import Dpendncyuseeffect from './Component/Dpendncyuseeffect';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar></Navbar><Simpleprogram/></>

  },
  {
    path:"/Dpendncyuseeffect",
    element:<><Navbar></Navbar><Dpendncyuseeffect/></>

  }])

  return (
    <>
    
    <RouterProvider router={router}></RouterProvider>
    
   </>
   
  );
}

export default App;
