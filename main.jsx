import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/about/about.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      }, {
        path: "about",
        element: <About />
      },
      {
        path: "Contact",
        element: <Contact />
      },

      {
        path: "User/:userid",
        element: <User />
      }
    ]
  }

])/*/

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Element={<Layout/>}>
    <Route path="" Element={<Home/>}/>
    <Route path='About' Element={<About/>}/>
    <Route path='Contact' Element={<Contact/>}/>
    </Route>
  )))/*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
