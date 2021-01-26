import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../sass/main.scss";

import Landing from "./Landing/Landing";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Demo from "./Demo/Demo";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/demo" component={Demo} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
