import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "@actions/users";

import Login from "@containers/Login";
import Registration from "@containers/Registration";

import Header from "@components/Header";

function App() {
  const isAuth = useSelector((state) => state.users.isAuth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <div className="main">
            <div className="main__wrappper">
              {!isAuth && (
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/registration" component={Registration} />
                </Switch>
              )}
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
