import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import { NotFoundPage } from "./components/NotFoundPage"

function App() {
  return (
    <Router>
      <div className="App min-vh-100 d-flex flex-column">
        <GradientsHeader>
          <h1 className="display-1">Alyra Gradients</h1>
          <p className="tagline">Ultime collection de plus beaux dégradés</p>
        </GradientsHeader>
        <main className="container">
          <h1 className="text-center my-4">Alyra Gradients</h1>
          <Gradients />
        </main>
        <Footer />
      </div>


      <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/gradient/:id">
              <FullPage />
            </Route>
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
    </Router>
  )
}

export default App
