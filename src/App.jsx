import { RouterProvider, createRoutesFromElements, Route, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import User from "./pages/User"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={ <Layout />} >
          <Route index element={ < Home />} />
          <Route path="/Login" element={ <Login />} />
          <Route path="/User" element={ < User /> } />
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
