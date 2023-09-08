import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key={"general"}
                pageSize={6}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key={"business"}
                pageSize={6}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key={"entertainment"}
                pageSize={6}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key={"health"}
                pageSize={6}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key={"science"}
                pageSize={6}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key={"sports"}
                pageSize={6}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key={"technology"}
                pageSize={6}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    );
  }
}
