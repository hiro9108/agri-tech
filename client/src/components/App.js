import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../sass/main.scss";

import Landing from "./Landing/Landing";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
