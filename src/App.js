import React from 'react'
// import Main from './Components/Main'
import NabBar from './Components/NabBar'
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Home"
import Login from "./Components/Login"
import PageNotFound from './Components/PageNotFound';
import New from "./Components/New"
function App() {
  return (
    <>
      <NabBar />

      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/new">
            <New />
        </Route>

        <Redirect from ="/" to = "/home" exact >

        </Redirect>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>

    </>
  )
}

export default App