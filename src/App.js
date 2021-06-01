import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { NotFoundPage2 } from "./Pages/NotFoundPage2"
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
            <Route path="*" component={NotFoundPage2} />
            <Redirect to="/404" />
          </Switch>
    </Router>
  )
}

export default App
