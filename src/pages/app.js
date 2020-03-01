import { Router } from "@reach/router"
import React from "react"
import Layout from "../components/layout"
import Login from "../components/login"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
