import { RouterProvider, createRoutesFromElements, Route, createBrowserRouter } from "react-router-dom"
import store from './Redux/store'
import { Provider } from 'react-redux'
import Layout from "./Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import User from "./pages/User"
import AddNote from "./pages/AddNote"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={ <Layout />} >
          <Route index element={ < Home />} />
          <Route path="/Login" element={ <Login />} />
          <Route path="/User" element={ < User /> } />
          <Route path="/AddNote" element={ <AddNote /> } />
      </Route>
    </>

    )
  )

  return (
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
