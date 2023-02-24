import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

import LayoutOne from "./Frontend/LayoutOne";
import LayoutTwo from "./Admin/LayoutTwo";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <LayoutOne>
                <HomePage />
              </LayoutOne>
            )}
          />
          <Route
            exact
            path="/about"
            component={() => (
              <LayoutOne>
                <AboutPage />
              </LayoutOne>
            )}
          />
          <Route
            exact
            path="/dashboard"
            component={() => (
              <LayoutTwo>
                <DashboardPage />
              </LayoutTwo>
            )}
          />
          <Route
            exact
            path="/login"
            component={() => (
              <LayoutTwo>
                <LogIn />
              </LayoutTwo>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
