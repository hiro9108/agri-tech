import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../Route/PrivateRoute";
import "../sass/main.scss";

import Landing from "./Landing/Landing";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Dashboard from "./AppPages/Dashboard/Dashboard";
import Post from "./AppPages/Post/Post";
import Profile from "./AppPages/Profile/Profile";
import ProfileEdit from "./AppPages/Profile/ProfileEdit/ProfileEdit";
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
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/post" component={Post} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/profile/edit" component={ProfileEdit} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
