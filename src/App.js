import React, { Component } from "react";
import "./App.css";
import VideoDetails from "./VideoDetails/VideoDetails";
import VideoList from "./VideoList/VideoList";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  state = {
    activatedId: 1,
  };

  render() {
    return (
      <BrowserRouter>
        <div className="blue">
          <div className="MainContainer">
            <Route
              path={"/videoWatch/:id"}
              render={(props) => <VideoDetails {...props} />}
            />
            <Route
              path={"/videoWatch/:id"}
              // component={VideoList}
              render={(props) => <VideoList {...props} />}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
