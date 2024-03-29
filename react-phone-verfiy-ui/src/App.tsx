import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import ValidatedForm from "./ValidatedFrom";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/validatedForm">
            <ValidatedForm />
          </Route>
          <Route path="/">
            <ValidatedForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
