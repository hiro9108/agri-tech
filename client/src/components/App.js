import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../Route/PrivateRoute";
import "../sass/main.scss";

import Landing from "./Landing/Landing";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Demo from "./Demo/Demo";
import { AuthProvider } from "../contexts/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <PrivateRoute exact path="/demo" component={Demo} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
