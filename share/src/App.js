import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/post/PostDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp"
import CreatePost from "./components/post/CreatePost"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/post/:id" component={PostDetails}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/create" component={CreatePost}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
