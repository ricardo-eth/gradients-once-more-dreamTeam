import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { NotFoundPage } from "./Pages/NotFoundPage"
import { Home } from "./Pages/Home"
import { FullPage } from "./Pages/FullPage"

function App() {
  return (
    <Router>
      <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/gradient/:id" component={FullPage} />
            <Route path="*" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
    </Router>
  )
}

export default App
