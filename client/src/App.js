import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import {UseAuth} from './hooks/auth.hook'
import {useRoutes} from "./routes";
import {AuthContext} from "./context/AuthContext"
import {NavBar} from "./components/Navbar"
import {Loader} from "./components/Loader"
import  'materialize-css'

function App() {
   const {token, login, logout, userId, ready} = UseAuth()
   const isAuthenticated = !!token
   const routes = useRoutes(isAuthenticated)

   if(!ready){
       return<Loader/>
   }

  return (
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated
      }}>
      <Router>
          {isAuthenticated && <NavBar/>}
         <div className = "container">
          {routes}
         </div>
      </Router>
      </AuthContext.Provider>
  )
}

export default App
